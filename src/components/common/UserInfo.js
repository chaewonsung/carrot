import React from 'react';
import styled from 'styled-components';
import { rem } from '../../lib/styles/variables';
import palette from '../../lib/styles/palette';
import MannerTemp from './MannerTemp';

const UserInfoBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserName = styled.div`
  font-size: ${rem(20)};
  font-weight: 600;
`;
const UserAddress = styled.div`
  font-size: ${rem(14)};
  margin-top: 7px;
  color: ${palette.gray[7]};
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  img {
    border-radius: 50%;
  }
`;

const UserInfo = () => {
  return (
    <UserInfoBlock>
      <UserProfile>
        <img width="64" height="64" src="https://picsum.photos/100" alt="" />
        <div>
          <UserName>황채원</UserName>
          <UserAddress>인창동</UserAddress>
        </div>
      </UserProfile>
      <MannerTemp />
    </UserInfoBlock>
  );
};

export default UserInfo;
