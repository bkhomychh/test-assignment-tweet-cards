import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';

import Loader from 'components/Loader';
import { Header, Main, Navigation } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <Navigation>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/tweets">Tweets</NavLink>
            </li>
          </ul>
        </Navigation>
      </Header>

      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};

export default Layout;
