import React from 'react';
import { Link } from 'react-router-dom';
import { NotLaptop } from '../common/layouts/Responsive';

const FavoriteKeyword = () => {
  return (
    <div className="favorite-keyword">
      <NotLaptop>
        <span>인기 검색어</span>
      </NotLaptop>
      <ul>
        {[
          '아이폰',
          '의자',
          '자전거',
          '컴퓨터',
          '책상',
          '소파',
          '원피스',
          '전기자전거',
          '식탁',
          '모니터',
        ].map((item) => (
          <li key={item}>
            <Link>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteKeyword;
