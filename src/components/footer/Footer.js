import React from 'react';
import Inner from '../common/layouts/Inner';
import '../../styles/footer.scss';
import Fnb from './Fnb';
import SnsLink from './SnsLink';
import CorpInfo from './CorpInfo';
import CorpPolicy from './CorpPolicy';

const Footer = () => {
  return (
    <footer className="footer">
      <Inner>
        <div className="footer__content">
          <div className="footer__top">
            <div className="footer__sns">
              <img src="images/logo.svg" alt="" width="52px" />
              <SnsLink />
            </div>
            <div className="footer__fnb">
              <Fnb />
            </div>
          </div>
          <div className="footer__bottom">
            <CorpInfo />
            <CorpPolicy />
          </div>
        </div>
      </Inner>
    </footer>
  );
};

export default Footer;
