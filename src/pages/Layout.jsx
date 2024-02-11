'use strict';

import { DarkModeToggle } from '../components/darkmodeToggle';
import { Outlet } from 'react-router-dom';
import React from 'react';

import styles from '../styles/pages/Layout.module.css';

export const Layout = () => {
  return (
    <>
      <header className={styles.banner}>
        <h1 className={styles.title}>Where in the world?</h1>
        <DarkModeToggle />
      </header>
      <Outlet />
    </>
  );
};
