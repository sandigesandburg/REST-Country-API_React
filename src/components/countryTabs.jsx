'use strict';

import React from 'react';

import styles from '../styles/components/countryTabs.module.css';

export const CountryTabs = (props) => {
  const names = props.countries === undefined ? [''] : props.countries;
  const tabs = names.map((name) => {
    return (
      <div
        className={`${styles.tab} ${name.length > 12 ? styles.supertab : ''}`}
        key={name}
        onClick={() => props.onTab(name)}
        role='button'
        value={name}
      >
        {name}
      </div>
    );
  });

  return (
    <div className={styles.borderCountries}>
      <div className={styles.propertyName}>Border Countries:</div>
      <div className={styles.tabContainer}>{tabs}</div>
    </div>
  );
};
