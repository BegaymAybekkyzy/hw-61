export interface ApiCountry  {
  name: {
    common: string;
    official: string;
    nativeName: {
      eng: {
        official: string;
        common: string;
      }
    }
  }
}

export interface ICountry {
  name: {
    common: string
  };
  capital: string[];
  continents: string[];
  population: number;
  flags: {
    alt: string;
    png: string;
    svg: string;
  }
  borders?: string[],
}