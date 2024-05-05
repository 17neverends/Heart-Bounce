import React from 'react';
import styles from './Range.module.css';

export const RangeListPeek = ({ value, onChange,
                                max, min, step
 }) => {
    const handleChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <div>
            <input
                type="range"
                className={styles.rangeInput}
                value={value}
                min={min}
                max={max}
                step={step}
                onChange={handleChange}
            />
        </div>
    );
};

