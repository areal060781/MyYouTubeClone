import React from 'react';
import ReactDOM from 'react-dom';
const API_KEY = 'AIzaSyCkhOlSjZ1x3u5CjF5Gsz9u7PBH7nLLm7s';
import SearchBar from './components/search_bar'

const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('.container'));
