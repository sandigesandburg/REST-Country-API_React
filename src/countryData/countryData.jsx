'use strict';

import { CountryTile } from './countryTile';
import React from 'react';

class CountryData {
  constructor(data = []) {
    this.data = data;
  }

  isEmpty() {
    return this.data.length === 0;
  }

  filterByRegion(region) {
    if (region === '') return new CountryData(this.data);
    const new_data = this.data.filter((element) => region === element.region);
    return new CountryData(new_data);
  }

  filterByName(name) {
    const nameUpperCase = name.toUpperCase();
    const new_data = this.data.filter((element) => {
      const { common, official } = element.name;
      const commonMatch = common.toUpperCase().startsWith(nameUpperCase);
      const officialMatch = official.toUpperCase().startsWith(nameUpperCase);
      return commonMatch || officialMatch;
    });
    return new CountryData(new_data);
  }

  createTiles(onClick) {
    const countryTiles = this.data.map((country) => {
      const population = Intl.NumberFormat('en-US').format(country.population);
      return (
        <CountryTile
          key={country.name.common}
          capital={country.capital[0]}
          flagSrc={country.flags.png}
          flagAlt={country.flags.alt}
          name={country.name.common}
          population={population}
          region={country.region}
          onClick={() => onClick(country.name.common)}
        />
      );
    });
    return countryTiles;
  }

  getCountry(name) {
    const country = this.data.filter((data) => data.name.common === name)[0];
    const borders = this.data
      .filter((data) => country.borders.includes(data.cca3))
      .map((data) => data.name.common);

    return {
      borders: borders.sort(),
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
}

function getCurrencies(data) {
  const currencies = Object.values(data.currencies);
  if (currencies.length === 0) return '';
  return currencies[0].name;
}

function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}

function getLanguages(data) {
  return Object.values(data.languages).sort().join(', ');
}

function getNativeName(data) {
  const languages = Object.values(data.languages).sort();

  if (languages.length === 0) return '';

  const key = getKeyByValue(data.languages, languages[0]);
  if (!(key in data.name.nativeName))
    return Object.values(data.name.nativeName)[0].common;

  return data.name.nativeName[key].common;
}

function getPopulation(data) {
  return Intl.NumberFormat('en-US').format(data.population);
}

export { CountryData };
