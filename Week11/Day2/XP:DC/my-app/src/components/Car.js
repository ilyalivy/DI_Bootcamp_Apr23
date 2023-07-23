import React, { useState } from 'react';
import Garage from './Garage';

const Car = (props) => {
    const { model } = props;

    const [color, setColor] = useState('black');

    return (
        <div>
            This car is {color} {model}
            <Garage size="small" />
        </div>
    );
};

export default Car;
