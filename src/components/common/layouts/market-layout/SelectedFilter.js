import React, { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { BtnGray, Button } from '../../buttons/Btn';
import palette from '../../../../lib/styles/palette';
import { rem } from '../../../../lib/styles/variables';
import { IconClose, IconFilter } from '../../Icons';
import { Laptop, NotLaptop } from '../Responsive';
import BtnSelectFilter from './BtnSelectFilter';

const SelectedFilterBlock = styled.div`
  display: flex;
  .__btnSelectFilter {
    flex-shrink: 0;
  }
  .__selectedFilterList {
    flex: 1 1 auto;
    width: 0px;
    overflow: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const SelectedFilter = ({ path, Filter }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedFilterItem, setSelectedFilterItem] = useState([]);
  const handleClick = useCallback((item) => {
    searchParams.delete(item.queryKey, item.queryValue);
    setSearchParams(searchParams);
  });
  useEffect(() => {
    setTimeout(() => {
      const selectedItems = Array.from(
        document.querySelectorAll('.market-filter [data-checked="true"]')
      ).map((el) => ({
        label: el.dataset.label,
        queryKey: el.dataset.querykey,
        queryValue: el.dataset.queryvalue,
      }));
      setSelectedFilterItem(selectedItems);
    }, 10);
  }, [searchParams]);

  return (
    <>
      <NotLaptop>
        <SelectedFilterList
          selectedFilterItem={selectedFilterItem}
          handleClick={handleClick}
        />
      </NotLaptop>
      <Laptop>
        <SelectedFilterBlock>
          <div className="__btnSelectFilter">
            <BtnSelectFilter path={path} Filter={Filter} />
          </div>
          <div className="__selectedFilterList">
            <SelectedFilterList
              selectedFilterItem={selectedFilterItem}
              handleClick={handleClick}
            />
          </div>
        </SelectedFilterBlock>
      </Laptop>
    </>
  );
};

const SelectedFilterListBlock = styled.div`
  display: flex;
  gap: 5px;
  white-space: nowrap;
`;

const SelectedFilterList = ({ selectedFilterItem, handleClick }) => {
  return (
    !!selectedFilterItem.length && (
      <SelectedFilterListBlock>
        {selectedFilterItem.map((item) => (
          <BtnSelectedFilter
            key={item.label}
            handleClick={() => handleClick(item)}
          >
            {item.label}
          </BtnSelectedFilter>
        ))}
      </SelectedFilterListBlock>
    )
  );
};

const ButtonSelectedFilter = styled(Button)`
  background-color: ${palette.gray[9]};
  color: ${palette.gray[0]};
  font-size: ${rem(14)};
  .icon-close {
    margin-left: 5px;
  }
`;

const BtnSelectedFilter = ({ children, handleClick }) => {
  return (
    <ButtonSelectedFilter round onClick={handleClick}>
      {children}
      <IconClose />
    </ButtonSelectedFilter>
  );
};

export default SelectedFilter;
