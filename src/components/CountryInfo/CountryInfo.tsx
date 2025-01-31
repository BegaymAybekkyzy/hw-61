import React from 'react';
import { ICountry } from '../../types';

interface Props {
  country: ICountry;
}

const CountryInfo: React.FC<Props> = ({country}) => {
  return (
    <>
      <div className="p-4" key={country.name.common}>
        <div className="row mb-3">
          <div className="col-5">
            <h1 className="mb-4">{country.name.common}</h1>
            <p><b>Capital:</b> {country.capital ? country.capital : "no capital"}</p>
            <p><b>Population:</b> {country.population}</p>
            <p><b>Continents:</b> {country.continents}</p>
          </div>

          <div className="col-7">
            <img src={country.flags.png} alt={country.flags.alt}/>
          </div>
        </div>

        <h5>Bordering</h5>
        {country.borders ?
          <ul>
            {country.borders.map((border) => (
              <li key={border}>{border}</li>
            ))}
          </ul>
          : <p>Doesn't border any country</p>
        }

      </div>

    </>
  );
};

export default CountryInfo;