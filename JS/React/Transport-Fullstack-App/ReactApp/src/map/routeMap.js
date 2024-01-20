
import React from 'react';

const OneMapIframe = () => {
  const mapUrl = 'https://www.onemap.gov.sg/amm/amm.html?mapStyle=Default&zoomLevel=15&marker=postalcode:069183!icon:fa-user!colour:blue&marker=latLng:1.30238554650367,103.825020082613!icon:fa-user!colour:blue&popupWidth=200';

  return (
    <div>
      <iframe
      src={mapUrl}
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
