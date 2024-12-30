import Logo from './Logo';
import { Laptop, NotLaptop } from '../common/layouts/Responsive';
import Gnb from './Gnb';
import BtnSearch from '../common/buttons/BtnSearch';
import BtnDownloadApp from '../common/buttons/BtnDownloadApp';
import { IconClose, IconMenu } from '../common/Icons';
import Inner from '../common/layouts/Inner';

const FixedHeader = ({ headerRef }) => {
  return (
    <div className="fixedHeader">
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
            <BtnSearch />
            <NotLaptop>
              <BtnDownloadApp />
            </NotLaptop>
            <Laptop>
              <button
                className="btn-menu"
                onClick={() => headerRef.current.classList.toggle('full')}
              >
                <IconClose $size="1.8em" />
                <IconMenu $size="2.2em" />
              </button>
            </Laptop>
          </div>
        </div>
      </Inner>
    </div>
  );
};

export default FixedHeader;
