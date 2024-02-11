'use strict';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import styles from '../styles/components/searchField.module.css';

export const SearchField = (props) => {
  return (
    <div className={styles.searchWrapper}>
      <button
        className={styles.searchButton}
        title='searchButton'
        type='submit'
        onClick={props.onClick}
      >
        <FontAwesomeIcon
          className={styles.searchSymbol}
          icon={faMagnifyingGlass}
        />
      </button>
      <input
        className={styles.searchInput}
        type='text'
        placeholder={props.placeholder}
        defaultValue={props.defaultValue}
        onKeyUp={props.onKeyUp}
      />
    </div>
  );
};
