import React from 'react';
import SearchResults from './SearchResults';

const Main = (props) => {
    console.log("process ", process.env)

    return (
        <div className="Main">
        <SearchResultContainer />
        </div>
);
}

export default Main;