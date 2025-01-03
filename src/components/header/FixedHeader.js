import Logo from './Logo';
import { Laptop, NotLaptop } from '../common/layouts/Responsive';
import Gnb from './Gnb';
import BtnSearch from '../common/buttons/BtnSearch';
import BtnDownloadApp from '../common/buttons/BtnDownloadApp';
import { IconClose, IconMenu } from '../common/Icons';
import Inner from '../common/layouts/Inner';
import BtnChangeAddress from '../common/buttons/BtnChangeAddress';
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

const FixedHeader = ({ globalSearchRef, headerRef }) => {
  const [scroll, setScroll] = useState(false);
  const fixedHeaderRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (!scroll && window.scrollY >= fixedHeaderRef.current.offsetHeight)
        setScroll(true);
      if (scroll && window.scrollY < fixedHeaderRef.current.offsetHeight)
        setScroll(false);
      if (globalSearchRef.current.classList.contains('open'))
        globalSearchRef.current.classList.remove('open');
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scroll, globalSearchRef]);
  return (
    <div className={classNames('fixedHeader', { scroll })} ref={fixedHeaderRef}>
      <Inner>
        <div className="fixedHeader__content">
          <div className="fixedHeader__logo">
            <Logo />
          </div>
          <NotLaptop>
            <div className="fixedHeader__gnb">
              <Gnb />
            </div>
          </NotLaptop>
          <div className="fixedHeader__buttons">
            <Laptop>
              <BtnChangeAddress />
            </Laptop>
            <BtnSearch
              onClick={() => {
                globalSearchRef.current.classList.toggle('open');
              }}
            />
            <NotLaptop>
              <BtnDownloadApp />
            </NotLaptop>
            <Laptop>
              <button
                className="btn-menu"
                onClick={() => headerRef.current.classList.toggle('full')}
              >
                <IconClose $fz="1.8em" />
                <IconMenu $fz="2.2em" />
              </button>
            </Laptop>
          </div>
        </div>
      </Inner>
    </div>
  );
};

export default FixedHeader;
