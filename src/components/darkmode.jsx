'use strict';

import React from 'react';

export const DarkModeButton = () => {
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
    <button onClick={toggleDarkMode} className='dark-mode-toggle'>
      <i className='fa-regular fa-moon'></i>Dark Mode
    </button>
  );
};
