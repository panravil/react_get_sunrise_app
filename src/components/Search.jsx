import React from 'react';

function Search({ value, change, submit }) {
  return (
    <form className="search__container" onSubmit={submit}>
      <input type="text" value={value} onChange={change} placeholder="e.g. London,England" className="search__input" />
    </form>
  );
}

export default Search;
