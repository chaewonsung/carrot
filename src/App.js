import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import ContextProvider from './contexts';
import Home from './pages/Home';

function App() {
  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </ContextProvider>
  );
}

export default App;
