import { useRef, useState } from 'react';
import BtnSelectOption from './BtnSelectOption';
import OptionList from './OptionList';

const SelectOption = () => {
  const [selectedOption, setSelectedOption] = useState('중고거래');
  const btnSelectOptionRef = useRef(null);

  return (
    <div className="select-option">
      <BtnSelectOption
        selectedOption={selectedOption}
        btnSelectOptionRef={btnSelectOptionRef}
      />
      <OptionList
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        btnSelectOptionRef={btnSelectOptionRef}
      />
    </div>
  );
};

export default SelectOption;
