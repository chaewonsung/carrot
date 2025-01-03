import React, { useState } from 'react';
import { BtnSymbol } from './Btn';
import ModalContainer from '../modal/ModalContainer';
import ModalDownloadApp from '../modal/ModalDownloadApp';

const BtnDownloadApp = ({ type = 'button' }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {type === 'button' && (
        <BtnSymbol fw="600" onClick={() => setShowModal(true)}>
          앱 다운로드
        </BtnSymbol>
      )}
      {type === 'image' && (
        <div onClick={() => setShowModal(true)}>
          <img src="images/download_app_ios.svg" alt="" />
          <img src="images/download_app_android.svg" alt="" />
        </div>
      )}
      {showModal && (
        <ModalContainer header="QR 코드 스캔" setShowModal={setShowModal}>
          <ModalDownloadApp />
        </ModalContainer>
      )}
    </>
  );
};

export default BtnDownloadApp;
