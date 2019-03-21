import React from 'react';

import Titles from './components/Titles';
import Weather from './components/Weather'
import Form from './components/Form';
import {getWeather} from './components/Api';



class App extends React.Component {
    state = {
        temperature: undefined,
        city: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    }

    render() {
        return (
            <div>
                <Titles/>
                <Form getWeather={this.getWeather}/>

                <Weather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                />

            </div>
        )
    }

}

export default App;