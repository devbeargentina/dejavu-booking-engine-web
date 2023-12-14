import React from 'react';
import { Slider } from 'antd';

const useAntSlider = ({ marks, step, defaultValue, maxValue }) => {
    return () => (
        <Slider marks={marks} step={step} max={maxValue} defaultValue={defaultValue} />
    );
};

export default useAntSlider;
