import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Container, Row, Col, Table, Modal, Form } from 'react-bootstrap';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { AiOutlineUserAdd, AiOutlineEdit } from 'react-icons/ai';

import Button from '~/components/Button';
import Breadcrumb from '~/components/Breadcrumb';
import Card from '~/components/Card';
import ErrorMessage from '~/components/ErrorMessage';

import { ContactList } from './styles';

import { api, apiDev } from '~/services/api';

const validationSchema = yup.object().shape({
  idUsuario: yup.string().required('Cliente é obrigatório!'),
  motivo: yup.string().required('Motivo é obrigatório!'),
  valor: yup.string().required('Valor é obrigatório!'),
});

export default function Home() {
  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [users, setUsers] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    enableReinitialize: true,
    initialValues: {
      idUsuario: '',
      motivo: '',
      valor: '',
    },
    validationSchema,
    async onSubmit(data, { resetForm }) {
      try {
        await apiDev.post(
          '/divida?uuid=c94ea9ce-0885-44d9-9758-e7bba28c81c1',
          data
        );
        toast.success(
          `A dívida do cliente ${
            users[data.idUsuario - 1].name
          } foi cadastrada com sucesso.`
        );

        resetForm({});
      } catch (err) {
        toast.error(
          'Erro ao tentar cadastrar uma divída, por favor tente novamente mais tarde'
        );
      }
    },
  });

  const loadData = useCallback(async () => {
    const response = await Promise.all([api.get('/users')]);

    setUsers(response[0].data);
  }, []);

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <Breadcrumb>Home</Breadcrumb>

      <Container fluid>
        <Row>
          <Col>
            <Card>
              <div className="card-title d-flex align-items-center justify-content-between">
                Lista de devedores
                <Button type="button" onClick={handleShow}>
                  <AiOutlineUserAdd />
                  Add Dívida
                </Button>
              </div>
              <div className="card-body">
                <ContactList className="contact-list">
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Username</th>
                        <th>E-mail</th>
                        <th>Endereço</th>
                        <th>Telefone</th>
                        <th>Website</th>
                        <th>Ação</th>
                      </tr>
                    </thead>
                    <tbody>
                      {!users.length ? (
                        <tr>
                          <td colSpan="8" className="text-center">
                            Nenhum usuário cadastrado no momento!
                          </td>
                        </tr>
                      ) : (
                        <>
                          {users.map(
                            (
                              {
                                id,
                                name,
                                username,
                                email,
                                address,
                                phone,
                                website,
                              },
                              index
                            ) => (
                              <tr key={id}>
                                <td>{index + 1}</td>

                                <td>{name}</td>
                                <td>{username}</td>
                                <td>{email}</td>
                                <td>{`${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`}</td>
                                <td>{phone}</td>
                                <td>{website}</td>
                                <td className="text-center">
                                  <Link
                                    to={`/cliente/${id}`}
                                    className="btn-edit"
                                  >
                                    <AiOutlineEdit />
                                  </Link>
                                  {/* <button type="button" className="btn-delete">
                                    <AiOutlineCloseCircle />
                                  </button> */}
                                </td>
                              </tr>
                            )
                          )}
                        </>
                      )}
                    </tbody>
                  </Table>
                </ContactList>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>

      <Modal
        show={show}
        onHide={handleClose}
        onExit={() => setShowAlert(false)}
      >
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Cadastrar Dívida</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label>Cliente</Form.Label>
              <Form.Control
                as="select"
                custom
                onChange={handleChange}
                value={values.idUsuario || ''}
                name="idUsuario"
              >
                {!users.length ? (
                  <option selected disabled>
                    Nenhum cliente cadastrado no momento
                  </option>
                ) : (
                  <>
                    <option value="">Selecione um cliente</option>
                    {users.map(({ id, name }) => (
                      <option key={id} value={id}>
                        {name}
                      </option>
                    ))}
                  </>
                )}
              </Form.Control>
              <Form.Text className="text-muted">
                Selecione um cliente para cadastrar a dívida.
              </Form.Text>
              {errors.idUsuario && touched.idUsuario && (
                <ErrorMessage>{errors.idUsuario}</ErrorMessage>
              )}
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Motivo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Motivo"
                onChange={handleChange}
                value={values.motivo || ''}
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
                value={values.valor || ''}
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
              Salvar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
