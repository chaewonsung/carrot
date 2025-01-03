import React from 'react';
import styled from 'styled-components';

const CorpPolicyBlock = styled.ul`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  a {
    font-weight: 600;
  }
`;

const CorpPolicy = () => {
  return (
    <CorpPolicyBlock>
      <li>
        <a href="/">이용약관</a>
      </li>
      <li>
        <a href="/">개인정보처리방침</a>
      </li>
      <li>
        <a href="/">운영정책</a>
      </li>
      <li>
        <a href="/">위치기반서비스 이용약관</a>
      </li>
      <li>
        <a href="/">이용자보호 비전과 계획</a>
      </li>
      <li>
        <a href="/">청소년보호정책</a>
      </li>
    </CorpPolicyBlock>
  );
};

export default CorpPolicy;
