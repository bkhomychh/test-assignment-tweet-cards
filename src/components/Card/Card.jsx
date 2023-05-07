import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Button from 'components/Button';
import { Wrapper, Avatar, Logo, Info, Box, Thumb } from './Card.styled';

import { getDataFromLocalStorage, saveDataToLocalStorage } from 'services';
import { formatNumber } from 'utils';

import LogoImg from 'images/logo.svg';

const Card = ({ item }) => {
  const { id, user, tweets, followers, avatar } = item;
  const [isFollowed, setIsFollowed] = useState(() => {
    const savedIds = getDataFromLocalStorage('userIds') || [];
    return savedIds.some(el => +el === +id);
  });

  useEffect(() => {
    const savedIds = getDataFromLocalStorage('userIds') || [];

    if (!isFollowed) {
      const newIds = savedIds.filter(el => +el !== +id);
      saveDataToLocalStorage('userIds', newIds);
      return;
    }

    const isNewUser = savedIds.every(el => +el !== +id);

    if (isNewUser) {
      saveDataToLocalStorage('userIds', [...savedIds, id]);
    }
  }, [isFollowed, id]);

  const toggleFollowing = () => {
    setIsFollowed(state => !state);
  };

  return (
    <Wrapper>
      <Logo src={LogoImg} alt="Logo" />
      <Box>
        <Thumb>
          <Avatar src={avatar} alt={user} />
        </Thumb>
      </Box>
      <Info>
        <p>{tweets} tweets</p>
        <p>{formatNumber(isFollowed ? followers + 1 : followers)} followers</p>
      </Info>
      <Button onClick={toggleFollowing} active={isFollowed}>
        {isFollowed ? 'Following' : 'Follow'}
      </Button>
    </Wrapper>
  );
};

Card.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Card;
