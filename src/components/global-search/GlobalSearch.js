import React, { useEffect, useRef } from 'react';
import BtnChangeAddress from '../common/buttons/BtnChangeAddress';
import '../../styles/global-search.scss';
import Inner from '../common/layouts/Inner';
import { NotLaptop } from '../common/layouts/Responsive';
import FavoriteKeyword from './FavoriteKeyword';
import FormSearch from '../common/forms/FormSearch';
import SelectOption from './SelectOption';

const GlobalSearch = ({ globalSearchRef }) => {
  return (
    <div className="globalSearch" ref={globalSearchRef}>
      <Inner>
        <div className="globalSearch__content">
          <NotLaptop>
            <div className="globalSearch__address">
              <BtnChangeAddress />
            </div>
          </NotLaptop>
          <div className="globalSearch__search">
            <div className="globalSearch__form">
              <FormSearch>
                <SelectOption />
              </FormSearch>
            </div>
            <div className="globalSearch__favoriteKeyword">
              <FavoriteKeyword />
            </div>
          </div>
        </div>
      </Inner>
    </div>
  );
};

export default GlobalSearch;
