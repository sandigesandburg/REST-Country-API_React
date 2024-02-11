'use strict';

import { fetchApi } from './fetchApi';
import { createDataCollection } from './createCountryCollection';

const DOMAIN_NAME = 'https://restcountries.com/v3.1';

export async function getCountries() {
  const endpoint = '/all/';
  const dataFields =
    '?fields=name,population,region,capital,flags,' +
    'subregion,tld,currencies,languages,borders,cca3';
  const url = DOMAIN_NAME + endpoint + dataFields;
  const data = await fetchApi(url);

  data.forEach((element) => {
    if (element.region === 'Americas') element.region = 'America';
  });

  data.sort((a, b) => a.name.common > b.name.common);
  return createDataCollection(data);
}
