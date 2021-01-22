import React from 'react';
import logo from './logo.png';
// import { Counter } from './features/counter/Counter';
import { Weather } from './modules/weatherApp/features/getWeather/models/weatherSlice';
import CityForm from './modules/weatherApp/features/getWeather/containers/CityFormContainer';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <CityForm />
            </header>
        </div>
    );
}

export default App;
