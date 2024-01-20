import React from 'react';

const OneMapIframe = ({ latitude, longitude, popupText }) => {
  const oneMapUrl = `https://www.onemap.gov.sg/minimap/minimap.html?mapStyle=Default&zoomLevel=15&latLng=${latitude},${longitude}&ewt=JTNDcCUzRSUzQ3N0cm9uZyUzRVBsZWFzZSUyMGVudGVyJTIweW91ciUyMHRleHQlMjBpbiUyMHRoZSUyMGluJTIwdGhlJTIwUG9wdXAlMjBDcmVhdG9yLiUzQyUyRnN0cm9uZyUzRSUzQyUyRnAlM0U=&popupWidth=200&showPopup=true&popupText=${encodeURIComponent(popupText)}`;

  return (
    <div>
      <iframe
        src={oneMapUrl}
        height="480"
        width="480"
        scrolling="no"
        frameBorder="0"
        allowFullScreen
        title="OneMap"
      ></iframe>
    </div>
  );
};

export default OneMapIframe;
