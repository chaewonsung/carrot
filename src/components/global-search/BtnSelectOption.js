import React, { useRef } from 'react';
import { IconDropdownFill } from '../common/Icons';
import styled from 'styled-components';
import { verticalLine } from '../../lib/styles/variables';

const BtnSelectOptionBlock = styled.button`
  ${verticalLine()}
  padding: 0 7px;
  .icon-dropdown-fill {
    margin-left: 3px;
  }
`;

const BtnSelectOption = ({ selectedOption, btnSelectOptionRef }) => {
  return (
    <BtnSelectOptionBlock
      type="button"
      onClick={() => btnSelectOptionRef?.current.classList.toggle('show-list')}
      ref={btnSelectOptionRef}
    >
      {selectedOption}
      <IconDropdownFill $fz="0.7em" />
    </BtnSelectOptionBlock>
  );
};

export default BtnSelectOption;
