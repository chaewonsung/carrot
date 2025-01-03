import styled from 'styled-components';
import { IconSearch } from '../Icons';
import palette from '../../../lib/styles/palette';

const BtnSearchBlock = styled.button`
  padding: 0.3em 0.55em;
  border-radius: 5px;
  &:hover {
    background-color: ${palette.gray[3]};
  }
`;

const BtnSearch = (props) => {
  return (
    <BtnSearchBlock aria-label="검색 버튼" className="btn-search" {...props}>
      <IconSearch />
    </BtnSearchBlock>
  );
};

export default BtnSearch;
