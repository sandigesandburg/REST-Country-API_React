'use strict';

import { Dropdown } from './dropdown';
import React, { useState } from 'react';

import styles from '../styles/components/select.module.css';

export const Select = (props) => {
  const [selection, setSelection] = useState(props.defaultValue);

  function changeSelection(event) {
    const option = event.currentTarget.innerHTML;
    const newSelection = option === selection ? '' : option;
    setSelection(newSelection);
    props.onSelect(newSelection);
  }

  const options = props.options.map((option) => {
    return (
      <li
        className={styles.option}
        key={option}
        onClick={(event) => changeSelection(event)}
        style={{ fontWeight: option === selection ? 800 : 1 }}
      >
        {option}
      </li>
    );
  });

  return <Dropdown displayName={props.displayName}>{options}</Dropdown>;
};
