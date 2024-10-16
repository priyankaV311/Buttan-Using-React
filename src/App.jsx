import React, { useState } from 'react';

function App() {
  // State to keep track of whether the image is visible or not
  const [isVisible, setIsVisible] = useState(false);

  // Toggle the visibility state
  const toggleImage = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      {/* Button to toggle the image */}
      <button onClick={toggleImage}>
        {isVisible ? 'Hide Image' : 'Show Image'}
      </button>

      {/* Conditionally render the image based on the state */}
      {isVisible && (
      <img src="https://www.pngall.com/wp-content/uploads/5/Organic-Cotton-PNG-Image.png
      " alt="" />
      )}
    </div>
  );
}

export default App; 