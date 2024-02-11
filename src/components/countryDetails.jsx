'use strict';

import { CountryTabs } from './countryTabs';
import { Property } from './property';
import React from 'react';

import styles from '../styles/components/countryDetails.module.css';

export const CountryDetails = (props) => {
  return (
    <div className={styles.countryDetails}>
      <div className={styles.flag}>
        <img src={props.flagSrc} alt={props.flagAlt} />
      </div>
      <div>
        <div className={styles.countryName}>{props.commonName}</div>
        <div className={styles.detailsWrapper}>
          <div className={styles.detailsContainer}>
            <Property
              className='property'
              name='Native Name:'
              nameClassName={styles.propertyName}
              value={props.nativeName}
            />
            <Property
              className='property'
              name='Population:'
              nameClassName={styles.propertyName}
              value={props.population}
            />
            <Property
              className='property'
              name='Region:'
              nameClassName='propertyName'
              value={props.region}
            />
            <Property
              className='property'
              name='Sub Region:'
              nameClassName='propertyName'
              value={props.subregion}
            />
            <Property
              className='property'
              name='Capital:'
              nameClassName='propertyName'
              value={props.capital}
            />
          </div>
          <div className={styles.detailsContainer}>
            <Property
              className='property'
              name='Top Level Domain:'
              nameClassName='propertyName'
              value={props.tld}
            />
            <Property
              className='property'
              name='Currencies:'
              nameClassName='propertyName'
              value={props.currencies}
            />
            <Property
              className='property'
              name='Languages:'
              nameClassName='propertyName'
              value={props.languages}
            />
          </div>
        </div>
        <CountryTabs
          countries={props.borders}
          onTab={(country) => props.onTab(country)}
        />
      </div>
    </div>
  );
};
