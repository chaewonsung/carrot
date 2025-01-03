import React, { useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import FormSearch from '../forms/FormSearch';
import { BtnSymbol } from '../buttons/Btn';
import { rem } from '../../../lib/styles/variables';
import palette from '../../../lib/styles/palette';
import { IconCrosshair } from '../Icons';
import AddressContext from '../../../contexts/address';

const ModalChangeAddressBlock = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 15px;
  .__btnSymbol {
    font-size: ${rem(14)};
    .icon-crosshair {
      margin-right: 5px;
    }
  }
  .__failureMsg {
    padding: 20px 0 30px;
    p:first-child {
      font-weight: 700;
      font-size: ${rem(20)};
      margin-bottom: 15px;
    }
    p:last-child {
      font-size: ${rem(14)};
      line-height: 1.4;
    }
  }
  .__addressList {
    flex: 1 1 auto;
    height: 0px;
    overflow: auto;
  }
`;

const ModalChangeAddress = ({ setShowModal }) => {
  return (
    <ModalChangeAddressBlock>
      <div className="__form">
        <FormSearch placeholder="지역이나 동네로 검색하기" />
      </div>
      <div className="__btnSymbol">
        <BtnSymbol fullWidth fw="700">
          <IconCrosshair />
          현재 내 위치 사용하기
        </BtnSymbol>
      </div>
      <div className="__failureMsg">
        <FailureMsg />
      </div>
      <div className="__addressList">
        <AddressList setShowModal={setShowModal} />
      </div>
    </ModalChangeAddressBlock>
  );
};

/* 검색 실패 메세지 */
const FailureMsg = () => {
  return (
    <>
      <p>""에 대한 검색 결과가 없어요.</p>
      <p>
        검색어나 페이지의 주소를 다시 확인하시거나, 범용적인 검색어를
        입력해주세요.
      </p>
    </>
  );
};

/* 주소 리스트 */
const AddressListBlock = styled.div`
  span {
    color: #006199;
    font-size: ${rem(13)};
    font-weight: 500;
  }
  button {
    padding: 15px 0;
    border-bottom: 1px solid ${palette.gray[3]};
    width: 100%;
  }
`;

const AddressList = ({ setShowModal }) => {
  const {
    actions: { setAddress },
  } = useContext(AddressContext);
  return (
    <AddressListBlock>
      <span>추천</span>
      <ul>
        {[
          '서울특별시 강남구',
          '서울특별시 송파구',
          '경기도 부천시',
          '경기도 화성시',
          '서울특별시 강서구',
          '인천광역시 서구',
          '경기도 남양주시',
        ].map((item) => (
          <li key={item}>
            <button
              onClick={() => {
                setAddress(item);
                setShowModal(false);
              }}
            >
              {item.replace(' ', ', ')}
            </button>
          </li>
        ))}
      </ul>
    </AddressListBlock>
  );
};

export default ModalChangeAddress;
