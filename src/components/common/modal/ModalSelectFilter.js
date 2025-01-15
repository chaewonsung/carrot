import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import palette from '../../../lib/styles/palette';
import { BtnGrayHover, BtnSymbolDark } from '../buttons/Btn';
import { useSearchParams } from 'react-router-dom';

const ModalSelectFilterBlock = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  .__filter {
    flex: 1 1 auto;
    height: 0px;
    overflow: auto;
    margin: calc(var(--padding) * -1);
    margin-bottom: 0;
    padding: var(--padding);
    padding-bottom: 0;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .__buttons {
    padding: var(--padding);
    display: flex;
    gap: 10px;
    margin: calc(var(--padding) * -1);
    margin-top: 0;
    border-top: 1px solid ${palette.gray[2]};
    button {
      &:first-child {
        flex: 1;
      }
      &:last-child {
        flex: 2;
      }
    }
  }
`;

const ButtonSymbolDark = styled(BtnSymbolDark)`
  ${({ block }) =>
    block &&
    css`
      pointer-events: none !important;
      background-color: ${palette.gray[3]} !important;
      color: ${palette.gray[6]} !important;
    `}
`;

const ModalSelectFilter = ({ children, setShowModal }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [hasSearchParams, setHasSearchParams] = useState(!!searchParams.size);
  useEffect(() => setHasSearchParams(!!searchParams.size), [searchParams]);
  return (
    <ModalSelectFilterBlock>
      <div className="__filter">{children}</div>
      <div className="__buttons">
        <BtnGrayHover fw="500" onClick={() => setSearchParams({})}>
          전체 해제
        </BtnGrayHover>
        <ButtonSymbolDark
          fw="500"
          block={!hasSearchParams}
          onClick={() => setShowModal(false)}
        >
          적용하기
        </ButtonSymbolDark>
      </div>
    </ModalSelectFilterBlock>
  );
};

export default ModalSelectFilter;
