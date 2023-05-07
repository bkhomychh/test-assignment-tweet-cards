import { useState } from 'react';
import PropTypes from 'prop-types';

import Button from 'components/Button';
import { Wrapper, Avatar, Logo, Info, Box } from './Card.styled';
import LogoImg from 'images/logo.svg';

const Card = ({ item }) => {
  const { user, tweets, followers, avatar } = item;
  const [isFollowed, setIsFollowed] = useState(false);

  const toggleFollowing = () => {
    setIsFollowed(state => !state);
  };

  return (
    <Wrapper>
      <Logo src={LogoImg} alt="Logo" width={76} height={22} />
      <Box>
        <Avatar src={avatar} alt={user} width={80} height={80} />
      </Box>
      <Info>
        <p>{tweets} tweets</p>
        <p>{isFollowed ? followers + 1 : followers} followers</p>
      </Info>
      <Button onClick={toggleFollowing} active={isFollowed}>
        {isFollowed ? 'Following' : 'Follow'}
      </Button>
    </Wrapper>
  );
};

Card.propTypes = {
  item: PropTypes.object.isRequired,
  savedItems: PropTypes.arrayOf(PropTypes.object),
};

export default Card;
