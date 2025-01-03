import React from 'react';
import Inner from '../common/layouts/Inner';
import '../../styles/download-app-section.scss';
import BtnDownloadApp from '../common/buttons/BtnDownloadApp';

const DownloadAppSec = () => {
  return (
    <section className="downloadAppSec">
      <Inner>
        <div className="downloadAppSec__content">
          <div className="downloadAppSec__text">
            <p>당근에서 가까운 이웃과 함께해요.</p>
            <p>지금 바로 다운로드하기</p>
            <BtnDownloadApp type="image" />
          </div>
          <div className="downloadAppSec__img">
            <img src="images/download_app_screen.webp" alt="" />
          </div>
        </div>
      </Inner>
    </section>
  );
};

export default DownloadAppSec;
