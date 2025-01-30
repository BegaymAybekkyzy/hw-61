import React from 'react';
import { ListGroup } from 'react-bootstrap';

interface Props {
  listCountries: string[];
  countryRequest: (countryName: string) => void;
}

const CountryList: React.FC<Props> = ({listCountries, countryRequest}) => {
  return (
    <ListGroup>
      {listCountries.map((countryName) => (
        <ListGroup.Item key={countryName}>
          <a href="#"
             onClick={() => countryRequest(countryName)}
             className='focus-ring link-primary'>
            {countryName}
          </a>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default CountryList;