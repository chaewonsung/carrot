import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import { useLocation, useParams } from 'react-router-dom';
import Inner from '../common/layouts/Inner';
import BuySellItemArticle from './BuySellItemArticle';
import BuySellUserItemListSec from './BuySellUserItemListSec';
import styled from 'styled-components';
import { NotLaptop } from '../common/layouts/Responsive';
import { media } from '../../lib/styles/variables';

const BuySellDetailSecBlock = styled.section`
  padding-top: 30px;
  ${media('laptop')} {
    padding-top: 0;
  }
`;

const BuySellDetailSec = () => {
  const { item } = useParams();

  return (
    <BuySellDetailSecBlock>
      <Inner>
        <NotLaptop>
          <Breadcrumb path={['중고거래', item]} />
        </NotLaptop>
        <BuySellItemArticle />
        <BuySellUserItemListSec />
      </Inner>
    </BuySellDetailSecBlock>
  );
};

export default BuySellDetailSec;
