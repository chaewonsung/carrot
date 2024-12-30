import styled from 'styled-components';
import { IconSearch } from '../Icons';
import palette from '../../../lib/styles/palette';

const BtnSearchBlock = styled.button`
  padding: 0.3em 0.4em;
  border-radius: 5px;
  &:hover {
    background-color: ${palette.gray[3]};
  }
`;

const BtnSearch = () => {
  return (
    <BtnSearchBlock aria-label="검색 버튼" className="btn-search">
      <IconSearch />
    </BtnSearchBlock>
  );
};

export default BtnSearch;
