import React from 'react';

const OptionList = ({
  selectedOption,
  setSelectedOption,
  btnSelectOptionRef,
}) => {
  return (
    <ul>
      {['중고거래', '동네업체', '알바', '중고차', '부동산'].map((item) => (
        <li key={item}>
          <button
            type="button"
            onClick={(e) => {
              setSelectedOption(e.target.innerText);
              btnSelectOptionRef?.current.classList.remove('show-list');
            }}
            className={item === selectedOption ? 'selected' : null}
          >
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default OptionList;
