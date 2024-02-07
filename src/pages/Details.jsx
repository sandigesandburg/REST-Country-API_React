'use strict';

import { CountryDetails } from '../countryData/countryDetails';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './Details.css';

export const Details = (props) => {
  const countryData = props.countryData;
  const navigate = useNavigate();
  const [data, setData] = useState({});

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const country = urlParams.get('country');
    setData(countryData.getCountry(country));
  }, [props]);

  function onTab(country) {
    const urlParams = new URLSearchParams();
    urlParams.set('country', country);
    navigate('/details' + '?' + urlParams.toString());
    setData(countryData.getCountry(country));
  }

  return (
    <main>
      <a className='return-button' onClick={() => navigate('/')}>
        <i className='fa-solid fa-arrow-left'></i>
        <span>Back</span>
      </a>
      <CountryDetails {...data} onTab={(country) => onTab(country)} />
    </main>
  );
};
