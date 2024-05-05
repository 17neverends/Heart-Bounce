import React from 'react';
import styles from './Settings.module.css';
import { RangeListPeek } from '../../components/Range/RangeListPeek';
import { RangePeek } from '../../components/Range/RangePeek';

export const Settings = ({ listRangeValue, rangeValue,
                           onListRangeChange, onRangeChange,
                           text, rangeText,
                           hover}) => {
    return (
        <div className={styles.settings}>
            <div className={styles.labelWrapper}>
                <p className={styles.label}>{rangeText}</p>
                <RangeListPeek
                            value={listRangeValue}
                            onChange={onListRangeChange}
                            min={hover ? 100 : 5}
                            max={hover ? 1000 : 30}
                            step={hover ? 100 : 5}

                />
                <p className={styles.label}>{listRangeValue}{hover ? "ms" : "px"}</p>
            </div>
            <div className={styles.labelWrapper}>
                <p className={styles.label}>{text}</p>
                <RangePeek
                        value={rangeValue}
                        onChange={onRangeChange}
                        min={hover ? 15 : 20}
                        max={hover ? 50 : 40}
                />
                <p className={styles.label}>{rangeValue}px</p>
            </div>
        </div>
    );
};