import React, { useRef } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { Outlet } from 'react-router-dom';
import GlobalSearch from '../components/global-search/GlobalSearch';
import DownloadAppSec from '../components/download-app-section/DownloadAppSec';

const Layout = () => {
  const globalSearchRef = useRef(null);
  return (
    <div className="container">
      <Header globalSearchRef={globalSearchRef} />
      <GlobalSearch globalSearchRef={globalSearchRef} />
      <main>
        <Outlet />
        <DownloadAppSec />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
