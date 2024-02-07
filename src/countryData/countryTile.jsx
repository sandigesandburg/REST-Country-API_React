'use strict';

import { Property } from './property';
import React from 'react';

export const CountryTile = (props) => {
  return (
    <div
      className='country-tile'
      role='button'
      aria-label={props.name}
      value={props.name}
      onClick={props.onClick}
    >
      <img className='country-flag' src={props.flagSrc} alt={props.flagAlt} />
      <div className='details'>
        <div className='country-name'>{props.name}</div>
        <Property name='Population:' value={props.population} />
        <Property name='Region:' value={props.region} />
        <Property name='Capital:' value={props.capital} />
      </div>
    </div>
  );
};
