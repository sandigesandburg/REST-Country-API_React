'use strict';

import { Property } from './property';
import React from 'react';

import styles from '../styles/components/countryTile.module.css';

export const CountryTile = (props) => {
  return (
    <div
      className={styles.countryTile}
      role='button'
      aria-label={props.name}
      value={props.name}
      onClick={props.onClick}
    >
      <img
        className={styles.countryFlag}
        src={props.flagSrc}
        alt={props.flagAlt}
      />
      <div className={styles.details}>
        <div className={styles.countryName}>{props.name}</div>
        <Property name='Population:' value={props.population} />
        <Property name='Region:' value={props.region} />
        <Property name='Capital:' value={props.capital} />
      </div>
    </div>
  );
};
