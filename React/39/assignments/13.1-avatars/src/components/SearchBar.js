import React from 'react';

const SearchBar = props => {
 
 
   
    return (
      <div className="ui segment">
        <form  className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={props.value}
              onChange={props.onChange}
            />
          </div>

        {/* <input type="submit" value="Search"/> */}
        </form>
      </div>
    );
  
}

export default SearchBar;
