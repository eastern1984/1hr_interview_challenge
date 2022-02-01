import React from 'react';
import './styles/WeatherByHour.css';
import { IHour } from './types';

interface Props {
    hours: IHour[];
}

const WeatherByHours = ({ hours }: Props) => {
    const hoursForRender = hours.filter((hour, index) => (index % 3 === 0));

    return (
        <div>
            {hoursForRender.map(hour =>
                <div className='weather-by-hour'>
                    <div>{hour.time.split(' ')[1]}</div>
                    <div><img src={hour.condition.icon} alt='weather condition' /></div>
                    <div>{hour.temp_f}</div>
                </div>
            )}
        </div>
    );
}

export default WeatherByHours;