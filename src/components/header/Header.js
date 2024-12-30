import { useRef } from 'react';
import '../../styles/header.scss';
import FullHeader from './FullHeader';
import FixedHeader from './FixedHeader';

const Header = () => {
  const headerRef = useRef(null);
  return (
    <>
      <header className="header" ref={headerRef}>
        <FixedHeader headerRef={headerRef} />
        <FullHeader />
      </header>
    </>
  );
};

export default Header;
