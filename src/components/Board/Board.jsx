import React, { useState, useRef } from 'react';
import styles from './Board.module.css';

export const Board = ({ color, mode, size, delay, inc }) => {
  const [hearts, setHearts] = useState([]);
  const [lastSpawnTime, setLastSpawnTime] = useState(0);
  const sizeRefs = useRef({});
  const mouseDownTime = useRef(null);

  const handleMouseMove = (event) => {
    const currentTime = Date.now();
    if (currentTime - lastSpawnTime > delay) {
      const { clientX, clientY } = event;
      const heart = { id: Date.now(), x: clientX, y: clientY, size: 0 };
      setHearts((prevHearts) => [...prevHearts, heart]);
      setTimeout(() => {
        setHearts((prevHearts) => prevHearts.filter((h) => h.id !== heart.id));
      }, 1500);
      setLastSpawnTime(currentTime);
    }
  };

  const handleMouseDown = (event) => {
    if (event.button === 0) {
      mouseDownTime.current = Date.now();
    }
  };

  const handleMouseUp = (event) => {
    if (event.button === 0 && mouseDownTime.current !== null) {
      const size = (Date.now() - mouseDownTime.current) / 10;
      const { clientX, clientY } = event;
      const heart = { id: Date.now(), x: clientX, y: clientY, size: size };
      setHearts((prevHearts) => [...prevHearts, heart]);
      sizeRefs.current[heart.id] = size;
      const interval = setInterval(() => {
        console.log(sizeRefs.current[heart.id] += inc)
        sizeRefs.current[heart.id] += inc
      }, 1000);
      setTimeout(() => {
        setHearts((prevHearts) => prevHearts.filter((h) => h.id !== heart.id));
        delete sizeRefs.current[heart.id];
        clearInterval(interval);
      }, 1500);
      mouseDownTime.current = null;
    }
  };

  return (
    <div
      className={styles.board}
      style={{ borderColor: color }}
      onMouseMove={mode ? handleMouseMove : null}
      onMouseDown={!mode ? handleMouseDown : null}
      onMouseUp={!mode ? handleMouseUp : null}
    >
      {hearts.map((heart) => (
        <img
        key={heart.id}
        src={`/${color}.png`}
        className={styles.heart}
        style={{
          left: heart.x,
          top: heart.y,
          width: !mode ? `${heart.size + sizeRefs.current[heart.id]}px` : `${size}px`,
          height: !mode ? `${heart.size + sizeRefs.current[heart.id]}px` : `${size}px`
        }}
      />
      
      ))}
    </div>
  );
};
