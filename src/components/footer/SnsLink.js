import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SnsLinkBlock = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
  .bi {
    font-size: 1.4em;
  }
`;

const SnsLink = () => {
  return (
    <SnsLinkBlock>
      <li>
        <Link to="/">
          <i className="bi bi-facebook"></i>
        </Link>
      </li>
      <li>
        <Link to="/">
          <i className="bi bi-instagram"></i>
        </Link>
      </li>
      <li>
        <Link to="/">
          <i className="bi bi-youtube"></i>
        </Link>
      </li>
    </SnsLinkBlock>
  );
};

export default SnsLink;
