import { useEffect, useState } from 'react';

import Card from 'components/Card/Card';
import Button from 'components/Button';
import Loader from 'components/Loader';
import { List, Wrapper } from './CardList.styled';

import { getUsers } from 'services/api';
import { USER_COUNT } from 'utils';

const CardList = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(true);
    getUsers(currentPage)
      .then(res => {
        if (currentPage === 1) {
          setUsers(res);
          return;
        }
        setUsers(state => [...state, ...res]);
      })
      .catch(err => console.log(err))
      .finally(() => setIsFetching(false));
  }, [currentPage]);

  const increasePage = () => setCurrentPage(state => state + 1);

  return (
    <Wrapper>
      <List>
        {users.map(user => (
          <li key={user.id}>
            <Card item={user} />
          </li>
        ))}
      </List>
      {isFetching ? (
        <Loader />
      ) : (
        users.length > 0 &&
        users.length < USER_COUNT && <Button onClick={increasePage}>Load more</Button>
      )}
    </Wrapper>
  );
};

export default CardList;
