import React from 'react';
import styled from 'styled-components';
import { rem } from '../../lib/styles/variables';
import palette from '../../lib/styles/palette';

const MannerTempBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  width: fit-content;
  text-align: right;
  > span {
    color: gray;
    font-size: ${rem(14)};
  }
  .__UI {
    display: flex;
    gap: 5px;
  }
  .__temp {
    --color: ${palette.carrot[5]};
    display: flex;
    flex-direction: column;
    width: min-content;
    gap: 0.3em;
    span {
      width: fit-content;
      font-weight: 600;
      font-size: ${rem(20)};
      color: var(--color);
    }
    progress {
      appearance: none;
      block-size: ${rem(5)};
      inline-size: auto;
      &::-webkit-progress-bar {
        background-color: ${palette.gray[3]};
        border-radius: 99px;
      }
      &::-webkit-progress-value {
        background-color: var(--color);
        border-radius: 99px;
      }
    }
  }
`;

const MannerTemp = () => {
  return (
    <MannerTempBlock>
      <div className="__UI">
        <div className="__temp">
          <span>47.4°C</span>
          <progress max="100" value="47.4"></progress>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
        >
          <g clip-path="url(#a)">
            <path
              fill="#FADD65"
              d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"
            ></path>
            <path
              fill="#895F00"
              d="m9.332 15.918-.001-.002h-.002a.578.578 0 0 0-.797.074.558.558 0 0 0 .073.792l.002.002.002.002.006.005a1.787 1.787 0 0 0 .236.159c.146.086.355.194.633.3.559.212 1.386.413 2.516.413 1.13 0 1.958-.2 2.516-.413a4.09 4.09 0 0 0 .633-.3 2.56 2.56 0 0 0 .242-.164l.002-.002.002-.002a.559.559 0 0 0 .073-.792c-.214-.255-.555-.246-.81-.066a1.421 1.421 0 0 1-.094.06 2.96 2.96 0 0 1-.456.216c-.428.163-1.116.338-2.108.338s-1.68-.175-2.107-.338a2.965 2.965 0 0 1-.457-.215l-.104-.067ZM7.8 13.35c.746 0 1.35-.94 1.35-2.1 0-1.16-.604-2.1-1.35-2.1-.746 0-1.35.94-1.35 2.1 0 1.16.604 2.1 1.35 2.1Zm8.4 0c.746 0 1.35-.94 1.35-2.1 0-1.16-.604-2.1-1.35-2.1-.746 0-1.35.94-1.35 2.1 0 1.16.604 2.1 1.35 2.1Z"
            ></path>
            <path
              fill="#D49D3A"
              fill-rule="evenodd"
              d="m5.885 6.618-.001.003a.975.975 0 0 1 .26-.279c.176-.126.477-.25.965-.128a.375.375 0 0 0 .182-.728c-.712-.178-1.236-.002-1.584.246a1.725 1.725 0 0 0-.455.485l-.037.065a.375.375 0 0 0 .669.34m12.584.163a.375.375 0 0 1-.51-.178.977.977 0 0 0-.251-.264c-.178-.127-.478-.251-.966-.13a.375.375 0 1 1-.182-.727c.712-.178 1.236-.002 1.584.246a1.725 1.725 0 0 1 .48.527l.012.022a.379.379 0 0 1-.167.504Z"
              clip-rule="evenodd"
              opacity=".85"
            ></path>
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M0 0h24v24H0z"></path>
            </clipPath>
          </defs>
        </svg>
      </div>
      <span>매너온도</span>
    </MannerTempBlock>
  );
};

export default MannerTemp;
