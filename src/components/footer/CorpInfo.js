import React from 'react';
import styled from 'styled-components';
import { verticalLine } from '../../lib/styles/variables';

const CorpInfoBlock = styled.div`
  line-height: 1.5;
  dt,
  dd {
    display: inline-block;
    margin-right: 5px;
  }
  b,
  dt {
    font-weight: 600;
  }
  .inline {
    display: inline;
    &:nth-child(1),
    &:nth-child(7) {
      ${verticalLine({ height: '50%' })}
    }
  }
`;

const CorpInfo = () => {
  return (
    <CorpInfoBlock>
      <b>(주) 당근마켓</b>
      <dl>
        <div className="inline">
          <dt>대표</dt>
          <dd>김용현, 황도연</dd>
        </div>
        <div className="inline">
          <dt>사업자번호</dt>
          <dd>375-87-00088</dd>
        </div>
        <div>
          <dt>직업정보제공사업 신고번호</dt>
          <dd>J1200020200016</dd>
        </div>
        <div>
          <dt>통신판매업 신고번호</dt>
          <dd>2021-서울서초-2875</dd>
        </div>
        <div>
          <dt>호스팅 사업자</dt>
          <dd>Amazon Web Service(AWS)</dd>
        </div>
        <div>
          <dt>주소</dt>
          <dd>서울특별시 구로구 디지털로 300, 10층 (당근서비스)</dd>
        </div>
        <div className="inline">
          <dt>전화</dt>
          <dd>1544-9796</dd>
        </div>
        <div className="inline">
          <dt>고객문의</dt>
          <dd>cs@daangnservice.com</dd>
        </div>
      </dl>
    </CorpInfoBlock>
  );
};

export default CorpInfo;
