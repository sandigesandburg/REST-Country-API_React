'use strict';

import { DarkModeButton } from '../components/darkMode';
import { Outlet } from 'react-router-dom';
import React from 'react';

import './Layout.css';

export const Layout = () => {
  return (
    <>
      <header className='banner'>
        <h1 className='title'>Where in the world?</h1>
        <DarkModeButton />
      </header>
      <Outlet />
    </>
  );
};
