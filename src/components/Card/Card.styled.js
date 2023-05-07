import styled from 'styled-components';

import cardBg from 'images/bg-card.png';
import circle from 'images/circle.svg';

export const Wrapper = styled.div`
  padding: 20px 0 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  height: 460px;

  color: #ebd8ff;
  background: url(${cardBg}) no-repeat center top 28px,
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const Logo = styled.img`
  margin-left: 20px;
  margin-bottom: 136px;
  align-self: flex-start;
  width: 76px;
  height: 22px;
`;

export const Box = styled.div`
  position: relative;
  z-index: 1;

  margin-bottom: 26px;
  display: flex;
  justify-content: center;
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    z-index: -1;

    display: block;
    width: 100%;
    height: 8px;

    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
    transform: translateY(-50%);
  }
`;

export const Thumb = styled.div`
  position: relative;

  padding: 8.8px;
  width: 80px;
  height: 80px;

  border-radius: 50%;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 3;

    display: block;
    width: 100%;
    height: 100%;

    background: url(${circle}) no-repeat top;
    transform: translate(-50%, -50%);
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: -1;

    display: block;
    width: 90%;
    height: 90%;

    background-color: #5736a3;
    transform: translate(-50%, -50%);
  }
`;

export const Avatar = styled.img`
  object-fit: contain;
`;

export const Info = styled.div`
  margin-bottom: 26px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 16px;

  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
`;
