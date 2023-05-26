import React, { useState } from 'react';
import MyComponent from './component/Mycomponent';
import Box from './component/Box';
import WaterCounter from './component/Water';


function App() {
  const [isBlack, setIsBlack] = useState(false);

  const handleToggleBackground = () => {
    setIsBlack(!isBlack);
  };

  return (
    <>
      <MyComponent isBlack={isBlack} onToggleBackground={handleToggleBackground} />
      <Box />
      <WaterCounter />
    </>
  );
}

export default App;
