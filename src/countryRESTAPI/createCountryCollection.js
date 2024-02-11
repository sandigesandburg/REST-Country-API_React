'strict';

import { CountryCollection } from './countryCollection';

export function createDataCollection(data) {
  function getBorders(country) {
    return data
      .filter((data) => country.borders.includes(data.cca3))
      .map((data) => data.name.common)
      .sort();
  }

  function getCurrencies(country) {
    const currencies = Object.values(country.currencies);
    if (currencies.length === 0) return '';
    return currencies[0].name;
  }

  function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  }

  function getLanguages(country) {
    return Object.values(country.languages).sort().join(', ');
  }

  function getNativeName(country) {
    const languages = Object.values(country.languages).sort();

    if (languages.length === 0) return '';

    const key = getKeyByValue(country.languages, languages[0]);
    if (!(key in country.name.nativeName))
      return Object.values(country.name.nativeName)[0].common;

    return country.name.nativeName[key].common;
  }

  function getPopulation(country) {
    return Intl.NumberFormat('en-US').format(country.population);
  }

  function transformDetails(country) {
    return {
      borders: getBorders(country),
      capital: country.capital,
      commonName: country.name.common,
      currencies: getCurrencies(country),
      flagAlt: country.flags.alt,
      flagSrc: country.flags.png,
      languages: getLanguages(country),
      nativeName: getNativeName(country),
      population: getPopulation(country),
      region: country.region,
      subregion: country.subregion,
      tld: country.tld[0],
    };
  }
  const countries = data.map((country) => transformDetails(country));
  return new CountryCollection(countries);
}
