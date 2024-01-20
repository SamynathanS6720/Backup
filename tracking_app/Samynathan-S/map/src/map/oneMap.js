import React from 'react';

const OneMapIframe = ({ latitude, longitude, zoomLevel }) => {
  // Construct the OneMap URL with dynamic parameters
  const oneMapUrl = `https://www.onemap.gov.sg/minimap/minimap.html?mapStyle=Default&zoomLevel=${zoomLevel}&lat=${latitude}&lng=${longitude}`;

  return (
    <div>
      <iframe
      src={oneMapUrl}
      height="500"
      width="800"
      scrolling="no"
      frameBorder="0"
      allowFullScreen
      title="OneMap"
    ></iframe>
    </div>
  );
};

export default OneMapIframe;

