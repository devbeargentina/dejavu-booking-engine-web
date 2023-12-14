import { Rate } from 'antd';
import React, { useState } from 'react';

const useAntStarRating = ({
    allowClear,
    allowHalf,
    autoFocus,
    character,
    className,
    count,
    defaultValue,
    disabled,
    style,
    tooltips,
    value,
    onBlur,
    onChange,
    onFocus,
    onHoverChange,
    onKeyDown,
}) => {
    const [ratingValue, setRatingValue] = useState(defaultValue || 0);

    const handleRatingChange = (newValue) => {
        setRatingValue(newValue);
        if (onChange) {
            onChange(newValue);
        }
    };

    const ratingProps = {
        allowClear,
        allowHalf,
        autoFocus,
        character,
        className,
        count,
        disabled,
        style,
        tooltips,
        value: ratingValue,
        onBlur,
        onFocus,
        onHoverChange,
        onKeyDown,
        onChange: handleRatingChange,
    };

    return () => <Rate {...ratingProps} />;
};

export default useAntStarRating;
