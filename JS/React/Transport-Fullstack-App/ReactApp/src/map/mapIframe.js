import React from 'react';

const OneMapIframe = ({ startLocation, endLocation, stops }) => {
  const generateMarkerParams = (location, icon, colour, rType, rDest) => {
    return `marker=${location}!icon:${icon}!colour:${colour}!rType:${rType}!rDest:${rDest}`;
  };

  const generateIframeUrl = () => {
    const startMarker = generateMarkerParams(startLocation, 'fa-user', 'blue', 'BUS', endLocation);

    const stopMarkers = stops.map((stop, index) => {
      return generateMarkerParams(
        `latLng:${stop.lat},${stop.lng}`,
        'fa-map-marker',
        'lightblue',
        'BUS',
        index < stops.length - 1 ? `${stops[index + 1].lat},${stops[index + 1].lng}` : endLocation
      );
    });

    const allMarkers = [startMarker, ...stopMarkers].join('&');

    return `https://www.onemap.gov.sg/amm/amm.html?mapStyle=Default&zoomLevel=50&${allMarkers}&popupWidth=200`;
  
  };

  return (
    <div>
      {/* <iframe src="https://www.onemap.gov.sg/amm/amm.html?mapStyle=Default&zoomLevel=15&
marker=postalcode:238162!icon:fa-user!colour:blue!rType:BUS!rDest:1.29446415491593,103.849494715465&
marker=latLng:1.2932330759348,103.853021562271!icon:fa-map-marker!colour:lightblue!rType:BUS!rDest:1.28537030528984,103.860871154701&
marker=latLng:1.29446415491593,103.849494715465!icon:fa-map-marker!colour:lightblue!rType:BUS!rDest:1.2932330759348,103.853021562271&
marker=latLng:1.28537030528984,103.860871154701!icon:fa-check!colour:red&popupWidth=200" 
height="600" 
width="800" 
scrolling="no" 
frameborder="0" 
allowfullscreen="allowfullscreen">
</iframe> */}
    <iframe
      src={generateIframeUrl()}
      height="600"
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
