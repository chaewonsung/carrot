import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { IconArrowUpRight, IconDropdown } from '../common/Icons';

const Gnb = () => {
  const albaRef = useRef(null);
  return (
    <nav>
      <ul>
        <li>
          <Link to="/buy-sell">중고거래</Link>
        </li>
        <li>
          <Link to="/">부동산</Link>
        </li>
        <li>
          <Link to="/">중고차</Link>
        </li>
        <li className="alba" ref={albaRef}>
          <Link to="/" onClick={() => albaRef.current.classList.toggle('open')}>
            알바
            <button className="btn-dropdown">
              <IconDropdown $fz="0.75em" />
            </button>
          </Link>
          <ul>
            <li>
              <Link>알바 검색</Link>
            </li>
            <li>
              <Link>당근알바 소개</Link>
            </li>
            <li>
              <Link>
                기업형 서비스 <IconArrowUpRight />
              </Link>
            </li>
            <li>
              <Link>
                신뢰와 안전 <IconArrowUpRight />
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/">동네업체</Link>
        </li>
        <li>
          <Link to="/">동네생활</Link>
        </li>
        <li>
          <Link to="/">모임</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Gnb;
