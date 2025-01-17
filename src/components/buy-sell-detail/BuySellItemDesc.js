import { Link } from 'react-router-dom';
import { BtnSymbolDark } from '../common/buttons/Btn';
import styled from 'styled-components';
import { media, rem } from '../../lib/styles/variables';
import palette from '../../lib/styles/palette';
import BtnDownloadApp from '../common/buttons/BtnDownloadApp';

const H1 = styled.h1`
  font-size: ${rem(26)};
  font-weight: 700;
  margin-bottom: 20px;
  ${media('laptop')} {
    font-size: ${rem(24)};
  }
  ${media('tablet')} {
    font-size: ${rem(20)};
  }
`;
const Category = styled.div`
  color: ${palette.gray[7]};
  margin-bottom: 40px;
  a {
    text-decoration: underline;
  }
  ${media('laptop')} {
    font-size: ${rem(15)};
  }
  ${media('tablet')} {
    font-size: ${rem(13)};
  }
`;
const Price = styled.div`
  font-weight: 700;
  font-size: ${rem(24)};
  ${media('laptop')} {
    font-size: ${rem(20)};
  }
  ${media('tablet')} {
    font-size: ${rem(18)};
  }
`;
const P = styled.p`
  line-height: 1.5;
  margin: 20px 0;
  font-size: ${rem(18)};
  ${media('tablet')} {
    font-size: ${rem(16)};
  }
`;
const ReactionStats = styled.div`
  font-size: ${rem(13)};
  color: ${palette.gray[7]};
  margin-bottom: 20px;
`;

const BuySellItemDesc = () => {
  return (
    <div>
      <H1>타원형 좌식 테이블</H1>
      <Category>
        <Link>가구/인테리어</Link> · 2시간 전
      </Category>
      <Price>33,000원</Price>
      <P>
        상품 상세 설명입니다.
        <br />
        상품 상세 설명입니다.
        <br />
        상품 상세 설명입니다.
        <br />
        상품 상세 설명입니다.
        <br />
        상품 상세 설명입니다.
      </P>
      <ReactionStats>채팅 0 · 관심 0 · 조회 1</ReactionStats>
    </div>
  );
};

export default BuySellItemDesc;
