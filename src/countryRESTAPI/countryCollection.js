'use strict';

export class CountryCollection {
  constructor(data = []) {
    this.data = data;
  }

  isEmpty() {
    return this.data.length === 0;
  }

  filterByRegion(region) {
    if (region === '') return new CountryCollection(this.data);
    const filteredData = this.data.filter(
      (country) => region === country.region
    );
    return new CountryCollection(filteredData);
  }

  filterByName(name) {
    const nameUpperCase = name.toUpperCase();
    const filteredData = this.data.filter((element) => {
      return (
        element.commonName.toUpperCase().startsWith(nameUpperCase) ||
        element.officialName.toUpperCase().startsWith(nameUpperCase)
      );
    });
    return new CountryCollection(filteredData);
  }

  map(func) {
    return this.data.map((country) => func(country));
  }

  getCountry(name) {
    for (const country of this.data) {
      if (country.commonName === name || country.officialName === name)
        return country;
    }
    return {};
  }
}
