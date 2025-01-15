import React, { useEffect, useState } from 'react';
import { BtnGray } from '../../buttons/Btn';
import styled from 'styled-components';
import { rem, verticalLine } from '../../../../lib/styles/variables';
import { IconFilter } from '../../Icons';
import ModalContainer from '../../modal/ModalContainer';
import ModalSelectFilter from '../../modal/ModalSelectFilter';
import { useSearchParams } from 'react-router-dom';

const BtnSelectFilterWrap = styled.div`
  ${({ hasSearchParams }) =>
    hasSearchParams && verticalLine({ height: '80%', space: '1em' })}
`;

const ButtonSelectFilter = styled(BtnGray)`
  font-size: ${rem(14)};
`;

const BtnSelectFilter = ({ path, Filter }) => {
  const [showModal, setShowModal] = useState(false);
  const [searchParams] = useSearchParams();
  const [hasSearchParams, setHasSearchParmas] = useState(!!searchParams.size);
  useEffect(() => setHasSearchParmas(!!searchParams.size), [searchParams]);
  return (
    <BtnSelectFilterWrap hasSearchParams={hasSearchParams}>
      <ButtonSelectFilter round={true} onClick={() => setShowModal(true)}>
        <IconFilter $scale="1.3" />
        &nbsp;필터&nbsp;
        {hasSearchParams && `(${searchParams.size})`}
      </ButtonSelectFilter>
      <ModalContainer
        header={`${path} 검색 필터`}
        setShowModal={setShowModal}
        showModal={showModal}
      >
        <ModalSelectFilter setShowModal={setShowModal}>
          <Filter />
        </ModalSelectFilter>
      </ModalContainer>
    </BtnSelectFilterWrap>
  );
};

export default BtnSelectFilter;
