import { useState } from 'react';
import GridBox from '../common/layouts/market-layout/GridBox';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { mq, rem } from '../../lib/styles/variables';
import BtnViewMoreItem from '../common/layouts/market-layout/BtnViewMoreItem';

const BuySellMarketItemListBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const BuySellMarketItemBlock = styled(Link)`
  img {
    scale: 1;
    transition: scale 0.2s;
  }
  &:hover {
    img {
      scale: 1.05;
    }
  }
  .img-box {
    overflow: hidden;
    aspect-ratio: 1/1;
    border-radius: 5px;
    background-color: ${palette.gray[2]};
    margin-bottom: 10px;
    border: 1px solid ${palette.gray[2]};
    img {
      width: 100%;
      height: 100%;
    }
  }
  h2 {
    margin-bottom: 10px;
  }
  .price {
    font-weight: 600;
    margin-bottom: 20px;
  }
  .address {
    color: ${palette.gray[8]};
    font-size: ${rem(13)};
  }
`;

const ResponsiveGridBox = styled(GridBox)`
  @media screen and (max-width: ${mq.tablet}px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const BuySellMarketItemList = () => {
  const [itemlist] = useState([...Array(60)]);

  return (
    <BuySellMarketItemListBlock>
      <ResponsiveGridBox gap="50px 15px" min="170px">
        {itemlist &&
          itemlist.map((item, i) => <BuySellMarketItem key={i} item={item} />)}
      </ResponsiveGridBox>
      <BtnViewMoreItem handleClick={() => {}} />
    </BuySellMarketItemListBlock>
  );
};

const BuySellMarketItem = ({ item }) => {
  return (
    <BuySellMarketItemBlock to='타원형 좌식 테이블'>
      <div className="img-box">
        <img
          src={`https://picsum.photos/300?random=${Math.random()}`}
          loading="lazy"
          alt=""
        />
      </div>
      <h2>타원형 좌식 테이블</h2>
      <div className="price">33,000원</div>
      <div className="address">인창동</div>
    </BuySellMarketItemBlock>
  );
};

export default BuySellMarketItemList;
