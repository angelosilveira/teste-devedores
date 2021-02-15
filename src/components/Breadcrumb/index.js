import React from 'react';

import { Container } from './styles';

function Breadcrumb({ children }) {
  return (
    <Container>
      <h1 className="title">{children}</h1>
    </Container>
  );
}

export default Breadcrumb;
