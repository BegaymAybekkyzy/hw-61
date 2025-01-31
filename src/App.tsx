import axios from 'axios';
import { BASE_URL, COUNTRIES_LIST_URL, COUNTRY_CODE_URL, COUNTRY_NAME_URL } from './globalConstants.ts';
import { useCallback, useEffect, useState } from 'react';
import { ApiCountry, ICountry } from './types';
import CountryList from './components/CountryList/CountryList.tsx';
import CountryInfo from './components/CountryInfo/CountryInfo.tsx';

const App = () => {
  const [listCountries, setListCountries] = useState<string[]>([]);
  const [country, setCountry] = useState<ICountry | null>(null);

  const countryListRequest = useCallback(async () => {
    const response = await axios.get<ApiCountry[]>(BASE_URL + COUNTRIES_LIST_URL);

    const countries = response.data.map((country) => (
      country.name.common
    ));
    setListCountries(countries);
  }, []);

  useEffect(() => {
    countryListRequest().catch(e => console.error(e));
  }, [countryListRequest]);

  const countryRequest = async (countryName: string) => {
    const response = await axios.get<ICountry[]>(BASE_URL + COUNTRY_NAME_URL + countryName);
    let countryData: ICountry | undefined = undefined;

    for(const country of response.data) {
      if (country.name.common === countryName) {
        countryData = country;
      }
    }

    let borders: string[] | undefined = undefined;

    if(countryData) {
      if (countryData.borders) {
        borders = await Promise.all(countryData.borders.map(async (border) => {
          const resBorders = await axios.get(BASE_URL + COUNTRY_CODE_URL + border);


          return resBorders.data[0].name.common;
        }));
      }

      const country = {
        name: {common: countryData.name.common},
        capital: countryData.capital,
        continents: countryData.continents,
        population: countryData.population,
        flags: countryData.flags,
        borders: borders,
      };

      setCountry(country);
    }

  };

  return (
    <>
      <div className="container py-3">
        <div className="row row-cols-2">
          <div className="overflow-auto" style={{height: '90vh'}}>
            <CountryList listCountries={listCountries} countryRequest={countryRequest}/>
          </div>

          <div>
            {country ?
              <CountryInfo country={country}/>
              : <p className="text-center py-5">Select a country</p>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
