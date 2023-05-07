import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Navigation } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <header>
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
      </header>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>

      <footer></footer>
    </>
  );
};

export default Layout;
