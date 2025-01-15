import { useCookies } from 'react-cookie';
import { FilterHeading, FilterRadioItem } from '../FilterList';
import styled from 'styled-components';

const FilterRadioItemBlock = styled(FilterRadioItem.styled)`
  &:first-of-type {
    pointer-events: none;
    &::before {
      display: none;
    }
  }
  &:nth-of-type(n + 3) {
    margin-left: 1em;
  }
`;

const LocationFilter = () => {
  const [cookies, setCookie] = useCookies(['address']);
  const address = cookies.address.split(' ');
  const addressData = address.map((item) => ({ name: item, queryValue: item }));

  return (
    <div>
      <FilterHeading>위치</FilterHeading>
      {addressData.map((item) => (
        <FilterRadioItemBlock
          key={item.name}
          custom={true}
          handleClick={() => {}}
          checked={address.at(-1) === item.name}
        >
          {item.name}
        </FilterRadioItemBlock>
      ))}
    </div>
  );
};

export default LocationFilter;
