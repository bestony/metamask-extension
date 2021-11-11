import React from 'react';
import CircleIcon from './circle-icon.component';

export default {
  title: 'CircleIcon',
  id: __filename,
};

export const basicCircleIcon = () => (
  <CircleIcon
    border="1px solid"
    borderColor="black"
    background="white"
    iconSize="20px"
    size="46px"
    iconSource="images/eth_logo.svg"
  />
);
