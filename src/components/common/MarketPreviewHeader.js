import React from 'react';
import { Link } from 'react-router-dom';
import { IconSwiperNext } from './Icons';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { media, rem } from '../../lib/styles/variables';

const MarketPreviewHeaderBlock = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
  h2 {
    font-size: ${rem(24)};
    font-weight: 600;
  }
  a {
    color: ${palette.carrot[5]};
    &:hover {
      text-decoration: underline;
    }
    .icon-swiper-next {
      margin-left: 3px;
    }
  }
  ${media('laptop')} {
    h2 {
      font-size: ${rem(20)};
    }
    a {
      font-size: ${rem(14)};
    }
  }
`;

const MarketPreviewHeader = ({ heading }) => {
  return (
    <MarketPreviewHeaderBlock>
      <h2>{heading}</h2>
      <Link>
        더 구경하기
        <IconSwiperNext />
      </Link>
    </MarketPreviewHeaderBlock>
  );
};

export default MarketPreviewHeader;
