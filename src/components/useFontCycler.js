import { useState, useEffect } from 'react';

const useFontCycler = (defaultFont, fonts, intervalDuration = 120) => {
  const [hovered, setHovered] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(0);

  useEffect(() => {
    let intervalId;

    const startCycling = () => {
      intervalId = setInterval(() => {
        setHoverIndex((prevIndex) => (prevIndex + 1) % fonts.length);
      }, intervalDuration);
    };

    const stopCycling = () => {
      clearInterval(intervalId);
    };

    if (hovered) {
      startCycling();
    } else {
      setHoverIndex(0);
      stopCycling();
    }

    return () => stopCycling();
  }, [hovered, fonts, intervalDuration]);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const fontClass = hovered ? `hover-${hoverIndex}` : '';

  return { fontClass, handleMouseEnter, handleMouseLeave };
};

export default useFontCycler;
