import { useCookies } from 'react-cookie';
import styled from 'styled-components';
import Inner from '../Inner';
import { mq, rem } from '../../../../lib/styles/variables';
import Breadcrumb from '../../Breadcrumb';
import SelectedFilter from './SelectedFilter';
import { NotLaptop } from '../Responsive';

const MarketLayoutBlock = styled.div`
  --gap: 30px;
  margin-bottom: 130px;
  @media screen and (max-width: ${mq.tablet}px) {
    margin-bottom: 80px;
  }
  .__header {
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .__h1 {
    font-size: ${rem(28)};
    font-weight: 600;
    @media screen and (max-width: ${mq.laptop}px) {
      font-size: ${rem(24)};
    }
  }
  .__content {
    display: flex;
    gap: var(--gap);
  }
  .__filter {
    flex: 0 0 242px;
    height: fit-content;
  }
  .__marketItemList {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: var(--gap);
  }
`;

const MarketLayout = ({ path, Filter, MarketItemList }) => {
  return (
    <MarketLayoutBlock>
      <Inner>
        <div className="__header">
          <Breadcrumb path={[path]} />
          <Title path={path} />
        </div>
        <div className="__content">
          <NotLaptop>
            <div className="__filter">
              <Filter />
            </div>
          </NotLaptop>
          <div className="__marketItemList">
            <SelectedFilter path={path} Filter={Filter} />
            <MarketItemList />
          </div>
        </div>
      </Inner>
    </MarketLayoutBlock>
  );
};

const Title = ({ path }) => {
  const [cookies] = useCookies(['address']);

  return (
    <h1 className="__h1">
      {cookies.address} {path}
    </h1>
  );
};

export default MarketLayout;
