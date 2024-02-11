'use strict';

import React, { useState } from 'react';

import styles from '../styles/components/dropdown.module.css';

export const Dropdown = (props) => {
  const [display, setDisplay] = useState('none');
  const [angle, setAngle] = useState(0);

  function toggleMenu() {
    const state = display === 'none' ? 'block' : 'none';
    setDisplay(state);
  }

  function toggleCaret() {
    const state = angle === 0 ? 180 : 0;
    setAngle(state);
  }

  return (
    <div
      className={styles.dropdown}
      onClick={() => {
        toggleMenu();
        toggleCaret();
      }}
    >
      <span className={styles.selected}>{props.displayName}</span>
      <div
        className={styles.caret}
        style={{ transform: `rotate(${angle + 45}deg)` }}
      ></div>
      <ul className={styles.menu} style={{ display: display }}>
        {props.children}
      </ul>
    </div>
  );
};
