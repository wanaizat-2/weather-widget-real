import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../models/weatherSlice';

const getCityService = () => {
    const dispatch = useDispatch();

    const fetchCurrentWeather = useCallback(
        ({ city }) => dispatch(actions.fetchCurrentWeather({ city })),
        [dispatch]
    );

    const fetchWeatherForecast = useCallback(() => dispatch(actions.fetchWeatherForecast()), [
        dispatch,
    ]);

    return {
        fetchCurrentWeather,
        fetchWeatherForecast,
    };
};

export default getCityService;
