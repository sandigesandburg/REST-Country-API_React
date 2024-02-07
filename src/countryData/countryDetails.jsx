'use strict';

import { BoarderTabs } from './borderTabs';
import { Property } from './property';
import React from 'react';

export const CountryDetails = (props) => {
  return (
    <div className='country-details'>
      <div className='flag'>
        <img src={props.flagSrc} alt={props.flagAlt} />
      </div>
      <div className='detail-box'>
        <div className='country-name'>{props.commonName}</div>
        <div className='details-wrapper'>
          <div className='detail-container'>
            <Property name='Native Name:' value={props.nativeName} />
            <Property name='Population:' value={props.population} />
            <Property name='Region:' value={props.region} />
            <Property name='Sub Region:' value={props.subregion} />
            <Property name='Capital:' value={props.capital} />
          </div>
          <div className='detail-container'>
            <Property name='Top Level Domain:' value={props.tld} />
            <Property name='Currencies:' value={props.currencies} />
            <Property name='Languages:' value={props.languages} />
          </div>
        </div>
        <BoarderTabs
          borders={props.borders}
          onTab={(country) => props.onTab(country)}
        />
      </div>
    </div>
  );
};
