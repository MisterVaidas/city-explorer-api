import React from 'react';
import Weather from './Weather';

class CitySearch extends React.Component {
    state = {
        forecastData: null,
        city: '',
        error: null,
    };

    handleSearch = async (event) => {
        event.preventDefault();

        const { city } = this.state;

        const serverUrl = 'http://localhost:8081';
        const endpoint = '/weather';
    
        const params = new URLSearchParams({
            lat: 48.8566, 
            lon: 2.3522, 
            searchQuery: city,
        });

        try {
    
        const response = await fetch(`${serverUrl}${endpoint}?${params}`);
    
        if (!response.ok) {
           throw new Error('City not found');
        }
    
        const data = await response.json();
    
        this.setState({ forecastData: data, erro: null });
    } catch (error) {
        this.setState({error: error.message, forecastData: null})
    }
}

    handleInputChange = (event) => {
        this.setState({ city: event.target.value});
    };

    render() {
        const { forecastData, city, error } = this.state;

        return (
            <div>
            <form onSubmit={this.handleSearch}>
                <input
                    type="text"
                    value={city}
                    onChange={this.handleInputChange}
                />
                <button type="submit">Search</button>
            </form>
            {error && <p> {error} </p>}
            {forecastData && <Weather forecastData={forecastData} />}
        </div>
        );
    }
}

export default CitySearch;
