import React from 'react';
import { Laptop, NotLaptop } from '../common/layouts/Responsive';
import FixedPortal from '../common/FixedPortal';
import BtnDownloadApp from '../common/buttons/BtnDownloadApp';
import { rem } from '../../lib/styles/variables';

const BuySellBtnDownloadApp = () => {
  return (
    <>
      <NotLaptop>
        <BtnDownloadApp type="buttonDark" />
      </NotLaptop>
      <Laptop>
        <FixedPortal $inset={{ bottom: 0, left: 0 }} fullWidth={true}>
          <div
            style={{
              padding: '10px',
              backgroundColor: 'white',
              fontSize: rem(18),
            }}
          >
            <BtnDownloadApp type="buttonDark" />
          </div>
        </FixedPortal>
      </Laptop>
    </>
  );
};

export default BuySellBtnDownloadApp;
