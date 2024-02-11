'use strict';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';

import styles from '../styles/components/darkmodeToggle.module.css';

export const DarkModeToggle = () => {
  const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkMode', 'enabled');
  };

  const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkMode', 'disabled');
  };

  if (localStorage.getItem('darkMode') === 'enabled') {
    enableDarkMode();
  }

  const toggleDarkMode = () => {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled') {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  };

  return (
    <button className={styles.darkmodeToggle} onClick={toggleDarkMode}>
      <FontAwesomeIcon className={styles.icon} icon={faMoon} />
      Dark Mode
    </button>
  );
};
