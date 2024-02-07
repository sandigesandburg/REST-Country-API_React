'use strict';

import React from 'react';

export const BoarderTabs = (props) => {
  const borders = props.borders === undefined ? [''] : props.borders;
  const tabs = borders.map((border) => {
    return (
      <div
        className={`tab ${border.length > 12 ? 'supertab' : ''}`}
        key={border}
        onClick={() => props.onTab(border)}
        role='button'
        value={border}
      >
        {border}
      </div>
    );
  });

  return (
    <div className='border-countries'>
      <div className='property-name'>Border Countries:</div>
      <div className='tab-container'>{tabs}</div>
    </div>
  );
};
