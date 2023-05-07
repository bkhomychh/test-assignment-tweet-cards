import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from 'components/Layout';

const Home = lazy(() => import('pages/Home'));
const Tweets = lazy(() => import('pages/Tweets'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tweets" element={<Tweets />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;
