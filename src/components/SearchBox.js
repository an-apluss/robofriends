import React from 'react';

const SearchBox = ({searchField, searchChange}) => {
  return (
    <div className="pa2">
      <input 
        aria-label="Search Robots"
        className="pa3 ba b--green bg-lightest-blue shadow-5 br2"
        type="text"
        placeholder='Search Robots'
        onChange={searchChange} 
      />
    </div>
    
  );
}

export default SearchBox;