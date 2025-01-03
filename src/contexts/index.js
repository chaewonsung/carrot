import React from 'react';
import { AddressProvider } from './address';

const ContextProvider = ({ children }) => {
  return <AddressProvider>{children}</AddressProvider>;
};

export default ContextProvider;
