import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import { useParams } from 'react-router-dom';
import Inner from '../common/layouts/Inner';

const BuySellDetailSec = () => {
  const { item } = useParams();

  return (
    <section>
      <Inner>
        <Breadcrumb path={['중고거래', item]} />
      </Inner>
    </section>
  );
};

export default BuySellDetailSec;
