import React from 'react';
import SearchBar from '../containers/search_bar';
import ForecastList from '../containers/forecast_list';

const App = function () {
    return (
        <div>
            App
            <SearchBar />
            <ForecastList />
        </div>
    );
};

export default App;