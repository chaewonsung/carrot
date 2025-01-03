import React from 'react';
import ModalLayout from './ModalLayout';
import ReactDOM from 'react-dom';

const ModalContainer = ({ header, setShowModal, children }) => {
  return (
    <ModalPortal>
      <ModalLayout header={header} setShowModal={setShowModal}>
        {children}
      </ModalLayout>
    </ModalPortal>
  );
};

const ModalPortal = ({ children }) => {
  return ReactDOM.createPortal(children, document.getElementById('modal-root'));
};

export default ModalContainer;
