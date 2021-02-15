import React from 'react';
import { Link } from 'react-router-dom';
import {
  AiOutlineHome,
  AiOutlineStar,
  AiOutlineProfile,
  AiOutlineLogout,
  AiOutlineSetting,
} from 'react-icons/ai';
import { Container } from './styles';

export default function Nav(props) {
  return (
    <Container {...props}>
      <ul>
        <li>
          <div>
            <Link to="/">
              <AiOutlineHome />
              <span>Home</span>
            </Link>
          </div>
        </li>{' '}
        <li>
          <div>
            <AiOutlineProfile />
            <span>Perfil</span>
          </div>
        </li>{' '}
        <li>
          <div>
            <AiOutlineSetting />
            <span>Configurações</span>
          </div>
        </li>{' '}
        <li>
          <div>
            <AiOutlineStar />
            <span>Favoritos</span>
          </div>
        </li>
        <li>
          <div>
            <AiOutlineLogout />
            <span>Sair</span>
          </div>
        </li>
      </ul>
    </Container>
  );
}
