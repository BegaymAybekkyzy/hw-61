export interface ApiCountry  {
  name: {
    common: string,
    official: string,
    nativeName: {
      eng: {
        official: string,
        common: string
      }
    }
  }
}