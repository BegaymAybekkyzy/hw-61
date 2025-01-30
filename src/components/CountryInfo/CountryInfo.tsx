import React from 'react';
import { ICountry } from '../../types';

interface Props {
  country: ICountry;
}

const CountryInfo: React.FC<Props> = ({country}) => {
  return (
    <div>

        <div key={country.name.common}>
          <img src={country.flags.png} alt={country.flags.alt}/>
          <p>Name: {country.name.common}</p>
          <p>Capital: {country.capital}</p>
          <p>Population: {country.population}</p>
          <p>Continents: {country.continents}</p>

          <div>
            <h5>Bordering</h5>
            {country.borders ?
              <ul className="list-inline">
                {country.borders.map((border) => (
                  <li key={border}>{border}</li>
                ))}
              </ul>
              : <p>Doesn't border any country</p>
            }
          </div>

        </div>

    </div>
  );
};

export default CountryInfo;