import React from 'react';
import BtnSearch from '../buttons/BtnSearch';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';

const FormSearchBlock = styled.form`
  height: 43px;
  display: flex;
  align-items: center;
  padding: 0.4em;
  border: 1px solid ${palette.gray[4]};
  border-radius: 5px;
  input {
    flex: 1;
  }
`;

const FormSearch = ({
  children: selectOption,
  placeholder = '검색어를 입력해주세요',
}) => {
  return (
    <FormSearchBlock>
      {selectOption}
      <input type="search" placeholder={placeholder} />
      <BtnSearch />
    </FormSearchBlock>
  );
};

export default FormSearch;
