import React from 'react';
import styles from './Range.module.css';

export const RangePeek = ({ value, onChange,
                            min, max
 }) => {
    const handleChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <input
            type="range"
            className={styles.rangeInput}
            value={value}
            min={min}
            max={max}
            onChange={handleChange}
        />
    );
};