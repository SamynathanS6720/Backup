import React from 'react';
import OneMapIframe from './oneMap';

const App = () => {
  // Example markers for multiple locations
  const markers = [
    'postalcode:569933!colour:darkblue',
    'postalcode:049910!colour:red',
    // Add more markers as needed
  ];

  const zoomLevel = 100;
  const popupWidth = 200;

  return (
    <div>
      <OneMapIframe markers={markers} zoomLevel={zoomLevel} popupWidth={popupWidth} />
    </div>
  );
};

export default App;
