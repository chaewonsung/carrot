import React, { useCallback, useState } from 'react';
import { BtnSymbol, BtnSymbolDark } from './Btn';
import ModalContainer from '../modal/ModalContainer';
import ModalDownloadApp from '../modal/ModalDownloadApp';

const BtnDownloadApp = ({ type = 'button' }) => {
  const [showModal, setShowModal] = useState(false);
  const handleClick = useCallback(() => setShowModal(true));
  return (
    <>
      {type === 'button' && (
        <BtnSymbol fw="600" onClick={handleClick}>
          앱 다운로드
        </BtnSymbol>
      )}
      {type === 'buttonDark' && (
        <BtnSymbolDark fullWidth={true} fw="600" onClick={handleClick}>
          당근 앱에서 보기
        </BtnSymbolDark>
      )}
      {type === 'image' && (
        <div onClick={handleClick}>
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
