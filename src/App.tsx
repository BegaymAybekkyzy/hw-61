import axios from 'axios';
import { BASE_URL, COUNTRIES_LIST_URL, COUNTRY_NAME_URL } from './globalConstants.ts';
import { useCallback, useEffect, useState } from 'react';
import { ApiCountry } from './types';
import CountryList from './components/CountryList/CountryList.tsx';

const App = () => {
  const [listCountries, setListCountries] = useState<string[]>([]);

  const countryListRequest = useCallback( async () => {
    const response = await axios.get<ApiCountry[]>(BASE_URL + COUNTRIES_LIST_URL);
    console.log(response);

    const countries = response.data.map((country) => (
      country.name.common
    ));
    setListCountries(countries);
  }, []);

  useEffect(() => {
    countryListRequest().catch(e => console.error(e));
  }, [countryListRequest]);

  const countryRequest = async (countryName: string) => {
    console.log(countryName);
    const response = await axios.get<ApiCountry>(BASE_URL+ COUNTRY_NAME_URL + countryName);
    console.log(response);
  };



  return (
    <>
      <div className="container py-3">
        <div className="row row-cols-2">
          <div className="overflow-auto" style={{ height: '90vh' }}>
            <CountryList listCountries={listCountries} countryRequest={countryRequest}/>
          </div>


        </div>

      </div>
    </>
  );
};

export default App;
