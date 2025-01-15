import styled from 'styled-components';
import { rem } from '../../../../lib/styles/variables';
import palette from '../../../../lib/styles/palette';
import { useSearchParams } from 'react-router-dom';
import FilterList from './FilterList';

const FilterBlock = styled.div`
  position: relative;
  h2 {
    font-size: ${rem(20)};
    font-weight: 600;
  }
  .btn-reset {
    position: absolute;
    top: 10px;
    right: 0;
    transform: translateY(-50%);
    text-decoration: underline;
    color: ${palette.gray[7]};
    font-size: ${rem(14)};
  }
  > div {
    padding: 20px 0;
    &:not(:last-of-type) {
      border-bottom: 1px solid ${palette.gray[3]};
    }
  }
`;

const Filter = ({ children }) => {
  const [, setSearchParams] = useSearchParams();
  return (
    <FilterBlock className="market-filter">
      <h2>필터</h2>
      {children}
      <button className="btn-reset" onClick={() => setSearchParams({})}>
        초기화
      </button>
    </FilterBlock>
  );
};

export default Filter;
