import React from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { rem } from '../../lib/styles/variables';

const BreadcrumbBlock = styled.nav`
  display: flex;
  ol {
    color: ${palette.gray[8]};
    font-size: ${rem(14)};
    &:not(:first-child) {
      ::before {
        content: '\uF285';
        font-family: bootstrap-icons;
        margin: 0 3px;
        font-size: 0.8em;
      }
    }
    &:last-child {
      font-weight: 500;
      pointer-events: none;
    }
  }
`;

const Breadcrumb = ({ path }) => {
  return (
    <BreadcrumbBlock>
      <ol>
        <Link to="/">홈</Link>
      </ol>
      {path.map((path) => (
        <ol>
          <Link>{path}</Link>
        </ol>
      ))}
    </BreadcrumbBlock>
  );
};

export default Breadcrumb;
