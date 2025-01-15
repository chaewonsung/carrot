import React, { useContext, useState } from 'react';
import { BtnGray } from './Btn';
import AddressContext from '../../../contexts/address';
import { IconDropdown, IconLocation } from '../Icons';
import styled from 'styled-components';
import ModalChangeAddress from '../modal/ModalChangeAddress';
import ModalContainer from '../modal/ModalContainer';
import { useCookies } from 'react-cookie';

const BtnChangeAddressBlock = styled(BtnGray)`
  display: flex;
  gap: 3px;
  align-items: center;
`;

const BtnChangeAddress = () => {
  const [cookies] = useCookies(['address']);
  const [showModal, setShowModal] = useState(false);
  const address = cookies.address?.split(' ').at(-1);

  return (
    <>
      <BtnChangeAddressBlock
        className="btn-change-address"
        onClick={() => setShowModal(true)}
        round
        fw="600"
      >
        <IconLocation />
        {address}
        <IconDropdown $fz="0.8em" />
      </BtnChangeAddressBlock>
      {showModal && (
        <ModalContainer header="지역 변경" setShowModal={setShowModal}>
          <ModalChangeAddress setShowModal={setShowModal} />
        </ModalContainer>
      )}
    </>
  );
};

export default BtnChangeAddress;
