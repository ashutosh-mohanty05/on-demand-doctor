import { useState, useEffect } from "react";

const useTypeAnimation = (text, speed = 100, delay = 0) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayedText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
       
        setDisplayedText("");
        setCurrentIndex(0);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [currentIndex, speed, text]);

  return displayedText;
};

export default useTypeAnimation;