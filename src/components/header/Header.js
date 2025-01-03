import { useRef } from 'react';
import '../../styles/header.scss';
import FullHeader from './FullHeader';
import FixedHeader from './FixedHeader';
import { Laptop } from '../common/layouts/Responsive';

const Header = ({ globalSearchRef }) => {
  const headerRef = useRef(null);
  return (
    <>
      <header className="header" ref={headerRef}>
        <FixedHeader globalSearchRef={globalSearchRef} headerRef={headerRef} />
        <Laptop>
          <FullHeader />
        </Laptop>
      </header>
    </>
  );
};

export default Header;
