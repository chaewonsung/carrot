import React from 'react';
import styled from 'styled-components';
import Gnb from './Gnb';
import BtnDownloadApp from '../common/buttons/BtnDownloadApp';
import Inner from '../common/layouts/Inner';

const FullHeader = () => {
  return (
    <div className="fullHeader">
      <Inner>
        <div className="fullHeader__content">
          <div className="fullHeader__gnb">
            <Gnb />
          </div>
          <div className="fullHeader__downloadApp">
            <p>당근 앱 설치 후 사용해보세요!</p>
            <BtnDownloadApp />
          </div>
        </div>
      </Inner>
    </div>
  );
};

export default FullHeader;
