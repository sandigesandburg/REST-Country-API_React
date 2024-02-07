'use strict';

import React from 'react';

export const SearchField = (props) => {
  return (
    <div className='search-wrapper'>
      <button
        className='search-button'
        title='searchButton'
        type='submit'
        onClick={props.onClick}
      >
        <i className='fa fa-search'></i>
      </button>
      <input
        className='search-input'
        type='text'
        placeholder={props.placeholder}
        defaultValue={props.defaultValue}
        onKeyUp={props.onKeyUp}
      />
    </div>
  );
};
