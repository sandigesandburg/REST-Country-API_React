'strict';

import React from 'react';

import styles from '../styles/components/property.module.css';

export const Property = (props) => {
  return (
    <div className={`${styles.property} ${props.className}`}>
      <span className={`${styles.propertyName} ${props.nameClassName}`}>
        {props.name}
      </span>
      <span className={`${styles.propertyValue} ${props.valueClassName} `}>
        {props.value}
      </span>
    </div>
  );
};
