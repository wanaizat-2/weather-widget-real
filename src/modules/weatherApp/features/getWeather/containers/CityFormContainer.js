import React, { Component } from 'react';
import CityForm from '../components/CityForm';
// import getCityService from '../hooks/getCityService';

import PropTypes from 'prop-types';

import axios from 'axios';
const API_KEY = '567fb009055f8d8fddf69948130c088f';
class CityFormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { city: '', items: [] };
    }

    // componentDidMount() {
    //     fetch(
    //         `https://api.openweathermap.org/data/2.5/weather?q=${'hanoi'}&units=metric&appid=${API_KEY}`
    //     )
    //         .then((res) => res.json())
    //         .then((json) => {
    //             this.setState({
    //                 items: json,
    //                 isLoaded: true,
    //             });
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }

    getCity = async (event) => {
        const city = event.target.city.value;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
        alert(url);
        axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        );
    };
    render() {
        const { city, items } = this.state;

        return <CityForm submitCity={this.getCity} />;
    }
}

export default CityFormContainer;
