'use strict';

import React, { useState } from 'react';

export const Dropdown = (props) => {
  const [display, setDisplay] = useState('none');
  const [angle, setAngle] = useState(0);

  const displayName = props.displayName;

  function toggleMenu() {
    if (display == 'none') {
      setDisplay('block');
    } else {
      setDisplay('none');
    }
  }

  function toggleCaret() {
    if (angle == 0) {
      setAngle(180);
    } else {
      setAngle(0);
    }
  }

  return (
    <div
      className='dropdown'
      onClick={() => {
        toggleMenu();
        toggleCaret();
      }}
    >
      <span className='selected'>{displayName}</span>
      <div
        className='caret'
        style={{ transform: `rotate(${angle + 45}deg)` }}
      ></div>
      <ul className='menu' style={{ display: display }}>
        {props.children}
      </ul>
    </div>
  );
};
