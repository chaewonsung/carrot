import styled from 'styled-components';
import BuySellItemDesc from './BuySellItemDesc';
import UserInfo from '../common/UserInfo';
import MarketItemSwiper from '../common/MarketItemSwiper';
import { media, mq } from '../../lib/styles/variables';
import palette from '../../lib/styles/palette';
import BuySellBtnDownloadApp from './BuySellBtnDownloadApp';

const BuySellItemArticleBlock = styled.article`
  display: flex;
  gap: 30px;
  padding-bottom: 40px;
  border-bottom: 1px solid ${palette.gray[3]};
  > * {
    flex: 1;
  }
  .__swiper {
    flex-basis: auto;
    width: 0px;
    .swiper {
      --swiper-theme-color: ${palette.gray[0]};
      --swiper-pagination-bullet-inactive-color: ${palette.gray[0]};
      --swiper-navigation-size: 32px;
      aspect-ratio: 1/1;
      img {
        width: 100%;
      }
    }
  }
  .__userInfo {
    padding: 20px 0;
  }
  ${media('laptop')} {
    flex-direction: column;
    gap: 40px;
    padding-bottom: 20px;
    .__swiper {
      width: auto;
      .swiper {
        margin: 0 calc(var(--inner-padding) * -1);
      }
      [class*='swiper-button'] {
        display: none;
      }
    }
    .__userInfo {
      border-bottom: 1px solid ${palette.gray[3]};
    }
  }
`;

const BuySellItemArticle = () => {
  return (
    <BuySellItemArticleBlock>
      <div className="__swiper">
        <MarketItemSwiper />
        <div className="__userInfo">
          <UserInfo />
        </div>
      </div>
      <div className="__desc">
        <BuySellItemDesc />
        <BuySellBtnDownloadApp />
      </div>
    </BuySellItemArticleBlock>
  );
};

export default BuySellItemArticle;
