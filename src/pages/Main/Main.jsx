import styles from './Main.module.css';
import { Label } from '../../components/Label/Label';
import { Board } from '../../components/Board/Board';
import { useState } from 'react';
import { Settings } from '../../views/Settings/Settings';

export const Main = () => {
    const [isHover, setIsHover] = useState(true);
    const [rangeValue, setRangeValue] = useState(15);
    const [listRangeValue, setListRangeValue] = useState(500);
    const [initSize, setInitSize] = useState(20)
    const [inc, setInc] = useState(10)


    const handleHoverMode = () => {
        setIsHover(true);
    };

    const handleClickMode = () => {
        setIsHover(false);
    };

    const handleRangeChange = (value) => {
        setRangeValue(value);
    };

    const handleListRangeChange = (value) => {
        setListRangeValue(value);
    };

    const handleInitChange = (value) => {
        setInitSize(value);
    };

    const handleIncChange = (value) => {
        setInc(value);
    };

    return (  
        <div className={styles.main}>
            <div className={styles.header}>
                <p className={styles.title}>Choose a mode and enjoy </p> 
                <div className={styles.labels}>
                    <Label 
                        name="Hover"
                        selected={isHover}
                        onClick={handleHoverMode}
                    />
                    <Label
                        name="Click"
                        selected={!isHover}
                        onClick={handleClickMode}
                    />
                </div>
                <p className={styles.desc}>{isHover ? "Move cursor inside a board" : "Click & hold inside a board"}</p> 
                {isHover ? <Settings 
                                listRangeValue={listRangeValue}
                                rangeValue={rangeValue}
                                onListRangeChange={handleListRangeChange}
                                onRangeChange={handleRangeChange}
                                text="Size"
                                rangeText="Interval"
                                hover={isHover}
                            /> 
                            :
                            <Settings 
                                listRangeValue={inc}
                                rangeValue={initSize}
                                onListRangeChange={handleIncChange}
                                onRangeChange={handleInitChange}
                                text="Size"
                                rangeText="Increment"
                                hover={isHover}
                            /> }
                
            </div>
            <div className={styles.boardContainer}>
                <Board
                    color="red"
                    size={isHover ? rangeValue : initSize}
                    delay={listRangeValue}
                    mode={isHover}
                    inc={inc}
                />
                <Board
                    color="black"
                    size={isHover ? rangeValue : initSize}
                    delay={listRangeValue}
                    mode={isHover}
                    inc={inc}
                />
                <Board
                    color="white"
                    size={isHover ? rangeValue : initSize}
                    delay={listRangeValue}
                    mode={isHover}
                    inc={inc}
                />

            </div>
        </div>
    );
}
