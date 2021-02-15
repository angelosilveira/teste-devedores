import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Nav from '~/components/Nav';
import Header from '~/components/Header';

import { Content } from './styles';

export default function DefaultLayout({ children }) {
  const [activeMenu, setActiveMenu] = useState(false);

  function handleToggleMenu() {
    setActiveMenu(!activeMenu);
  }

  return (
    <>
      <Header toggleMenu={handleToggleMenu} />
      <Nav active={activeMenu} />
      <Content>{children}</Content>
    </>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
