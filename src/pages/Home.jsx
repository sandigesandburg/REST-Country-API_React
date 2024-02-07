'use strict';

import { CountryData } from '../countryData/countryData';
import { SearchField } from '../components/search';
import { Select } from '../components/select';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './Home.css';

export const Home = (props) => {
  const navigate = useNavigate();
  const countryData = props.countryData;

  if (!('searchedValue' in sessionStorage)) {
    sessionStorage.setItem('searchedValue', '');
  }

  if (!('selectedRegion' in sessionStorage)) {
    sessionStorage.setItem('selectedRegion', '');
  }

  const defaultSearch = sessionStorage.getItem('searchedValue');
  const defaultSelection = sessionStorage.getItem('selectedRegion');
  const [name, setName] = useState(defaultSearch);
  const [region, setRegion] = useState(defaultSelection);
  const [data, setData] = useState(new CountryData([]));

  useEffect(() => {
    const key = 'scrollPosition';
    window.scrollTo(0, sessionStorage.getItem(key));

    const setScroll = () =>
      sessionStorage.setItem(key, window.scrollY.toString());

    window.addEventListener('scroll', setScroll);
    return () => window.removeEventListener('scroll', setScroll);
  });

  useEffect(() => {
    setData(countryData.filterByName(name).filterByRegion(region));
  }, [countryData, region]);

  function onClick() {
    setData(countryData.filterByName(name).filterByRegion(region));
    sessionStorage.setItem('searchedValue', name);
  }

  function onKeyUp(event) {
    if (event.key === 'Enter' || event.keyCode === 13) {
      setData(countryData.filterByName(name).filterByRegion(region));
      sessionStorage.setItem('searchedValue', event.target.value);
    }
    setName(event.target.value);
  }

  function onSelect(selection) {
    setRegion(selection);
    sessionStorage.setItem('selectedRegion', selection);
  }

  function goToDetails(country) {
    const urlParams = new URLSearchParams();
    urlParams.set('country', country);
    navigate('/details' + '?' + urlParams.toString());
  }

  return (
    <main>
      <div className='filter'>
        <SearchField
          defaultValue={sessionStorage.getItem('searchedValue')}
          onClick={onClick}
          onKeyUp={(event) => onKeyUp(event)}
          placeholder='Search for a country...'
        />
        <Select
          defaultValue={region}
          displayName='Filter by Region'
          onSelect={(selection) => onSelect(selection)}
          options={['Africa', 'America', 'Asia', 'Europe', 'Oceania']}
        />
      </div>
      <main className='country-container'>
        {data.createTiles((data) => goToDetails(data))}
      </main>
    </main>
  );
};
