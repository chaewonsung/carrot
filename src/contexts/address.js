import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

const AddressContext = createContext({
  state: {
    address: '경기도 구리시 인창동',
  },
  actions: {
    setAddress: () => {},
  },
});

const AddressProvider = ({ children }) => {
  const [address, setAddress] = useState('경기도 구리시 인창동');
  const value = {
    state: { address },
    actions: { setAddress },
  };

  return (
    <AddressContext.Provider value={value}>{children}</AddressContext.Provider>
  );
};

export { AddressProvider };
export default AddressContext;
