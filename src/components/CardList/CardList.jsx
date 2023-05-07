import PropTypes from 'prop-types';

import Card from 'components/Card/Card';

import { List } from './CardList.styled';

const CardList = ({ users }) => {
  return (
    <List>
      {users.map(user => (
        <li key={user.id}>
          <Card item={user} />
        </li>
      ))}
    </List>
  );
};

CardList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
};

export default CardList;
