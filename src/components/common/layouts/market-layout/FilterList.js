import React, {
  memo,
  use,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import styled, { css } from 'styled-components';
import { rem } from '../../../../lib/styles/variables';
import palette from '../../../../lib/styles/palette';
import { useSearchParams } from 'react-router-dom';
import classNames from 'classnames';

const FilterHeadingBlock = styled.h3`
  font-weight: 600;
  margin-bottom: 15px;
`;

const FilterItemBlock = styled.button`
  display: block;
  /* type: button */
  &.button {
    border: 1px solid ${palette.gray[3]};
    padding: 0.7em 1em;
    border-radius: 99px;
    font-size: ${rem(14)};
    & + & {
      margin-top: 10px;
    }
    &.checked {
      color: ${palette.gray[0]};
      background-color: ${palette.gray[9]};
    }
  }
`;

const FilterList = ({ heading, list, type, queryKey }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleClick = useCallback(
    (item) => {
      searchParams.set(queryKey, item.queryValue);
      setSearchParams(searchParams);
    },
    [queryKey, searchParams, setSearchParams]
  );

  return (
    <div>
      <FilterHeading>{heading}</FilterHeading>
      <div>
        {type === 'radio' &&
          list.map((item) => (
            <FilterRadioItem
              key={item.name}
              item={item}
              handleClick={handleClick}
              checked={searchParams.get(queryKey) === item.queryValue}
              queryKey={queryKey}
            >
              {item.name}
            </FilterRadioItem>
          ))}
        {type === 'buttonWithInput' && (
          <FilterButtonWithInputList queryKey={queryKey}>
            {list.map((item) => (
              <FilterButtonItem
                key={item.name}
                item={item}
                handleClick={handleClick}
                checked={searchParams.get(queryKey) === item.queryValue}
                custom={true}
              >
                {item.name}
              </FilterButtonItem>
            ))}
          </FilterButtonWithInputList>
        )}
      </div>
    </div>
  );
};

const FilterButtonWithInputListBlock = styled.div`
  font-size: ${rem(14)};
  .input-wrap {
    display: flex;
    margin: 20px 0 10px;
    align-items: center;
    input {
      width: 0;
      flex: 1;
      border: 1px solid ${palette.gray[4]};
      border-radius: 5px;
      padding: 0.3em 0.5em;
      &::placeholder {
        color: ${palette.gray[8]};
      }
      &:focus {
        outline: 2px solid ${palette.gray[9]};
      }
    }
    span {
      margin: 0 5px;
      transform: translateY(-0.1em);
      font-size: 1.2em;
    }
  }
  .btn-input {
    text-decoration: underline;
    color: ${palette.gray[8]};
  }
`;
const FilterButtonWithInputList = ({ children, queryKey }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const minRef = useRef(null);
  const maxRef = useRef(null);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  useEffect(() => {
    if (searchParams.has(queryKey)) {
      const [min, max] = searchParams.get(queryKey).split('__');
      setMin(min);
      setMax(max);
    } else {
      setMin(0);
      setMax(0);
    }
  }, [queryKey, searchParams]);

  return (
    <FilterButtonWithInputListBlock>
      {children}
      <div>
        <div className="input-wrap">
          <input
            type="number"
            value={min}
            min={0}
            ref={minRef}
            onChange={(e) => setMin(e.target.value)}
          />
          <span>-</span>
          <input
            type="number"
            value={max}
            min={0}
            ref={maxRef}
            onChange={(e) => setMax(e.target.value)}
          />
        </div>
        <button
          className="btn-input"
          onClick={() => {
            searchParams.set(
              queryKey,
              `${minRef.current.value}__${maxRef.current.value}`
            );
            setSearchParams(searchParams);
          }}
          data-querykey={queryKey}
          data-queryvalue={`${min}__${max}`}
          data-checked={searchParams.get(queryKey) === `${min}__${max}`}
          data-label={min == 0 ? `${max}원 이하` : `${min}원 - ${max}원`}
        >
          적용하기
        </button>
      </div>
    </FilterButtonWithInputListBlock>
  );
};

export const FilterHeading = ({ children }) => (
  <FilterHeadingBlock>{children}</FilterHeadingBlock>
);

export const FilterRadioItemBlock = styled.button`
  width: 100%;
  line-height: 2;
  &::before {
    content: '';
    display: inline-block;
    width: 1em;
    aspect-ratio: 1/1;
    border: 1px solid ${palette.gray[3]};
    margin-right: 5px;
    border-radius: 50%;
    transform: translateY(2px);
  }
  &:hover {
    &::before {
      background-color: ${palette.gray[2]};
    }
  }
  ${({ checked }) =>
    checked &&
    css`
      &::before {
        background: radial-gradient(
          ${palette.gray[0]} 0%,
          ${palette.gray[0]} 30%,
          ${palette.carrot[5]} 30%,
          ${palette.carrot[5]} 100%
        );
      }
    `}
`;
export const FilterRadioItem = ({
  children,
  item,
  handleClick,
  checked,
  queryKey,
  custom = false,
}) => (
  <FilterRadioItemBlock
    onClick={() => handleClick(item)}
    checked={checked}
    {...(!custom && {
      'data-checked': checked,
      'data-label': item.label || item.name,
      'data-querykey': queryKey,
      'data-queryvalue': item.queryValue,
    })}
  >
    {children}
  </FilterRadioItemBlock>
);

FilterRadioItem.styled = FilterRadioItemBlock;

export const FilterButtonItemBlock = styled.button`
  border: 1px solid ${palette.gray[3]};
  padding: 0.7em 1em;
  border-radius: 99px;
  font-size: ${rem(14)};
  & + & {
    display: block;
    margin-top: 10px;
  }
  ${({ checked }) =>
    checked &&
    css`
      color: ${palette.gray[0]};
      background-color: ${palette.gray[9]};
    `}
`;

export const FilterButtonItem = ({
  children,
  item,
  handleClick,
  checked,
  queryKey,
  custom = false,
}) => (
  <FilterButtonItemBlock
    onClick={() => handleClick(item)}
    checked={checked}
    {...(!custom && {
      'data-checked': { checked },
      'data-label': item.label || item.name,
      'data-querykey': queryKey,
      'data-queryvalue': item.queryValue,
    })}
  >
    {children}
  </FilterButtonItemBlock>
);

export default FilterList;
