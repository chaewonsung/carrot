import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoImage } from '../../images/logo.svg';

const Logo = () => {
  return (
    <Link to="/">
      <LogoImage />
    </Link>
  );
};

export default Logo;
