import React, { useState } from 'react';
import { AiOutlineBell, AiOutlineUser, AiOutlineMenu } from 'react-icons/ai';
import Avatar from 'react-avatar';

import { Container } from './styles';

export default function Header({ toggleMenu }) {
  const [active, setActive] = useState(false);

  function handleToggleMenu() {
    toggleMenu(!active);
  }

  return (
    <Container>
      <div className="logo">code7</div>
      <div className="menu-toggle">
        <button type="button" onClick={handleToggleMenu}>
          <AiOutlineMenu />
        </button>
      </div>
      <div style={{ margin: 'auto' }} />
      <div className="header-part-right">
        <div className="notifications">
          <AiOutlineBell />
          <span>4</span>
        </div>

        <div className="notifications">
          <AiOutlineUser />
          <span>3</span>
        </div>

        <Avatar
          className="avatar"
          name="code7"
          initials="CO"
          value="co"
          size="38"
          round
          maxInitials={2}
          color="white"
        />
      </div>
    </Container>
  );
}
