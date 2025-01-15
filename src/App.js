import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import BuySell from './pages/BuySell';
import { useCookies } from 'react-cookie';
import { useEffect } from 'react';
import BuySellDetail from './pages/BuySellDetail';

function App() {
  const [cookies, setCookie] = useCookies(['address']);
  useEffect(() => {
    if (!cookies.address)
      setCookie('address', '경기도 구리시 인창동', {
        maxAge: 7 * 24 * 60 * 60,
      });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/buy-sell" element={<BuySell />} />
        <Route path="/buy-sell/:item" element={<BuySellDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
