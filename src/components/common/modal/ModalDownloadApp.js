import React from 'react';
import styled from 'styled-components';
import { rem } from '../../../lib/styles/variables';
import palette from '../../../lib/styles/palette';

const ModalDownloadAppBlock = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  text-align: center;
  h3 {
    font-size: ${rem(28)};
    font-weight: 600;
  }
  .img-box {
    width: 210px;
    aspect-ratio: 1/1;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  p {
    line-height: 1.5;
    color: ${palette.gray[8]};
  }
`;

const ModalDownloadApp = () => {
  return (
    <ModalDownloadAppBlock>
      <h3>당근 앱으로 열기</h3>
      <div className="img-box">
        <img src="images/download_app_qr.svg" alt="" />
      </div>
      <p>
        모바일에서만 이용할 수 있어요.
        <br />
        휴대전화의 카메라 또는 당근 앱으로 QR코드를 촬영해주세요.
      </p>
    </ModalDownloadAppBlock>
  );
};

export default ModalDownloadApp;
