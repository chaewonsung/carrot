import React from 'react';
import { BtnGrayHover, Button } from '../../buttons/Btn';
import styled from 'styled-components';
import palette from '../../../../lib/styles/palette';

const BtnViewMoreItem = ({ handleClick }) => {
  return (
    <BtnGrayHover fw="600" onClick={handleClick}>
      더보기
    </BtnGrayHover>
  );
};

export default BtnViewMoreItem;
