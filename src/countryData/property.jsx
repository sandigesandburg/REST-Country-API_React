'strict';

import React from 'react';

export const Property = (props) => {
  return (
    <div className='property'>
      <span className='property-name'>{props.name}</span>
      <span className='property-value'>{props.value}</span>
    </div>
  );
};
