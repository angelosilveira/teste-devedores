import React, { useEffect, useState, useCallback } from 'react';

import { useParams } from 'react-router-dom';
import Avatar from 'react-avatar';
import {
  Container,
  Row,
  Col,
  Table,
  Modal,
  Spinner,
  Form,
} from 'react-bootstrap';
import { AiOutlineEdit, AiOutlineCloseCircle } from 'react-icons/ai';
import swal from 'sweetalert';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { useFormik } from 'formik';

import { api, apiDev } from '~/services/api';

import Button from '~/components/Button';
import Breadcrumb from '~/components/Breadcrumb';
import Card from '~/components/Card';
import ErrorMessage from '~/components/ErrorMessage';
import Loading from '~/components/Loading';

import { DividatList, Profile } from './styles';

const validationSchema = yup.object().shape({
  idUsuario: yup.string().required('Cliente é obrigatório!'),
  motivo: yup.string().required('Motivo é obrigatório!'),
  valor: yup.string().required('Valor é obrigatório!'),
});

export default function ClienteDetails() {
  const { id } = useParams();

  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [dividaUpdate, setDividaUpdate] = useState('');
  const [user, setUser] = useState('');
  const [dividas, setDividas] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    enableReinitialize: true,
    initialValues: {
      idUsuario: dividaUpdate.idUsuario,
      motivo: dividaUpdate.motivo,
      valor: dividaUpdate.valor,
    },
    validationSchema,
    async onSubmit(data) {
      try {
        await apiDev.put(
          `/divida/${dividaUpdate._id}?uuid=${process.env.REACT_APP_UUID}`,
          data
        );
        toast.success('Divída atualizada com sucesso.');
        setShow(false);
        setDividas(
          dividas.map((item) =>
            dividaUpdate._id === item._id
              ? { ...item, motivo: data.motivo, valor: data.valor }
              : item
          )
        );
      } catch (err) {
        toast.error(
          'Erro ao tentar atualizar uma divída, por favor tente novamente mais tarde'
        );
      }
    },
  });

  const loadUserById = useCallback(async () => {
    const response = await Promise.all([
      api.get(`https://jsonplaceholder.typicode.com/users/${id}`),
      apiDev.get('/divida?uuid=c94ea9ce-0885-44d9-9758-e7bba28c81c1'),
    ]);

    setUser(response[0].data);
    setDividas(
      response[1].data.result.filter(
        ({ idUsuario }) => idUsuario === parseInt(id, 10)
      )
    );
    setIsLoading(true);
  }, []);

  useEffect(() => {
    loadUserById();
  }, []);

  function handleDeleteDivida(dividaId) {
    swal({
      title: 'Deletar divída',
      text: 'Tem certeza que deseja deletar essa divída?',
      icon: 'warning',
      buttons: {
        cancel: {
          text: 'Cancelar',
          visible: true,
        },
        confirm: {
          text: 'Deletar',
        },
      },
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        try {
          apiDev.delete(
            `divida/${dividaId}?uuid=${process.env.REACT_APP_UUID}`
          );
          setDividas(
            dividas.filter(({ _id: idDivida }) => idDivida !== dividaId)
          );
          toast.success('Divída deletada com sucesso.');
        } catch (err) {
          toast.error(
            'Erro ao tentar deletar uma divída, por favor tente novamente mais tarde'
          );
        }
      }
    });
  }

  return (
    <>
      <Breadcrumb>Cliente - {user.name}</Breadcrumb>

      {!isLoading ? (
        <Loading>
          <Spinner animation="border" variant="primary" />
        </Loading>
      ) : (
        <>
          <Container fluid>
            <Row>
              <Col lg="3">
                <Card>
                  <div className="card-title mb-0">Meu perfil</div>
                  <div className="card-body">
                    <Profile>
                      <div className="avatar">
                        <Avatar
                          name={user.name}
                          round
                          textSizeRatio={1}
                          maxInitials={2}
                          color="white"
                        />
                        <h4>{user.name}</h4>
                      </div>
                      <ul>
                        <li>
                          <span className="label">E-mail:</span> {user.email}
                        </li>
                        <li>
                          <span className="label">Username:</span>{' '}
                          {user.username}
                        </li>
                        <li>
                          <span className="label">Cidade:</span>{' '}
                          {user.address.city}
                        </li>
                        <li>
                          <span className="label">Cep:</span>{' '}
                          {user.address.zipcode}
                        </li>
                        <li>
                          <span className="label">Rua:</span>{' '}
                          {user.address.street}
                        </li>
                        <li>
                          <span className="label">Complemento:</span>{' '}
                          {user.suite}
                        </li>
                        <li>
                          <span className="label">Telefone:</span> {user.phone}
                        </li>
                        <li>
                          <span className="label">Website:</span> {user.website}
                        </li>
                        <li>
                          <span className="label">Companhia:</span>{' '}
                          {user.company.name}
                        </li>
                      </ul>
                    </Profile>
                  </div>
                </Card>
              </Col>
              <Col lg="9" className="mt-4 mt-lg-0">
                <Card>
                  <div className="card-title">Dividas</div>
                  <div className="card-body">
                    <DividatList>
                      <Table responsive>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Motivo</th>
                            <th>Valor</th>
                            <th>Criada em</th>
                            <th className="text-center">Ação</th>
                          </tr>
                        </thead>
                        <tbody>
                          {!dividas.length ? (
                            <tr>
                              <td colSpan="5" className="text-center">
                                Nenhuma divída cadastrada no momento.
                              </td>
                            </tr>
                          ) : (
                            <>
                              {dividas.map((divida, index) => (
                                <tr key={divida._id}>
                                  <td>{index + 1}</td>
                                  <td>{divida.motivo}</td>
                                  <td>{divida.valor}</td>
                                  <td>{divida.criado}</td>
                                  <td className="text-center">
                                    <button
                                      type="button"
                                      className="btn-edit"
                                      onClick={() => {
                                        setShow(true);
                                        setDividaUpdate(divida);
                                      }}
                                    >
                                      <AiOutlineEdit />
                                    </button>
                                    <button
                                      type="button"
                                      className="btn-delete"
                                      onClick={() =>
                                        handleDeleteDivida(divida._id)
                                      }
                                    >
                                      <AiOutlineCloseCircle />
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </>
                          )}
                        </tbody>
                      </Table>
                    </DividatList>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>

          {show && (
            <Modal
              show={show}
              onHide={handleClose}
              onExit={() => setShowAlert(false)}
            >
              <Form onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                  <Modal.Title>Alterar Dívida</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Motivo</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Motivo"
                      onChange={handleChange}
                      value={values?.motivo || ''}
                      name="motivo"
                    />
                    <Form.Text className="text-muted">
                      Motivo da dívida do cliente.
                    </Form.Text>
                    {errors.motivo && touched.motivo && (
                      <ErrorMessage>{errors.motivo}</ErrorMessage>
                    )}
                  </Form.Group>

                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Valor</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Valor"
                      onChange={handleChange}
                      value={values?.valor || ''}
                      name="valor"
                    />
                    <Form.Text className="text-muted">
                      Valor da dívida do cliente.
                    </Form.Text>
                    {errors.valor && touched.valor && (
                      <ErrorMessage>{errors.valor}</ErrorMessage>
                    )}
                  </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    variant="secondary"
                    className="danger"
                    onClick={handleClose}
                  >
                    Cancelar
                  </Button>
                  <Button type="submit" variant="primary">
                    Alterar
                  </Button>
                </Modal.Footer>
              </Form>
            </Modal>
          )}
        </>
      )}
    </>
  );
}
