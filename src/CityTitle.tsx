import React from 'react';
import './styles/CityTitle.css';
import { ICondition } from './types';

interface Props {
    name: string;
    condition: ICondition;
}

const CityTitle = ({ name, condition }: Props) => {
    return (
        <>
            <div className='city-title'>{name}</div>
            <div className='current-condition'>
                <img className='current-icon' src={condition.icon} />
                <div className='city-title'>{condition.text}</div>
            </div>

        </>
    );
}

export default CityTitle;