import React from 'react';
import PopupIframe from './popupIframe'; // Adjust the import path

const App = () => {
  const latitude = 1.28781796773739;
  const longitude = 103.847292206718;
  const popupText = 'Dynamic Popup Text';

  return (
    <div>
      <PopupIframe latitude={latitude} longitude={longitude} popupText={popupText} />
    </div>
  );
};

export default App;
