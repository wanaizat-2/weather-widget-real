import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, Radio, Select, Input } from 'antd';

// class CityForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { city: '' };
//     }

//     getCity = (event) => {
//         event.preventDefault();
//         const city = this.state.city;
//     };

//     changeHandler = (event) => {
//         this.setState({ city: event.target.value });
//     };

//     render() {
//         return (
//             <form onSubmit={this.getCity}>
//                 <input type="text" onChange={this.changeHandler} placeholder="Enter City" />
//                 <input type="submit" />
//             </form>
//         );
//     }
// }

const CityForm = (props) => {
    return (
        <form onSubmit={props.submitCity}>
            <input type="text" id="header-search" placeholder="Enter City" name="city" />
            <button>Search</button>
        </form>
    );
};

export default CityForm;
