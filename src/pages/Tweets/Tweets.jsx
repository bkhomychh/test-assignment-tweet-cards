import Button from 'components/Button';
import CardList from 'components/CardList';
import { useEffect, useState } from 'react';
import { getUsers } from 'services/api';

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getUsers(currentPage)
      .then(res => {
        if (currentPage === 1) {
          setUsers(res);
          return;
        }
        setUsers(state => [...state, ...res]);
      })
      .catch(err => console.log(err));
  }, [currentPage]);

  const increasePage = () => setCurrentPage(state => state + 1);

  return (
    <div>
      <CardList users={users} />
      <Button onClick={increasePage}>Load more</Button>
    </div>
  );
};

export default Tweets;
