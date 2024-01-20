
// import React from 'react';

// const OneMapIframe = ({ coordinates }) => {
//   const markers = coordinates.map(({ latitude, longitude }) => `marker=latLng:${longitude},${latitude}!icon:fa-user!colour:blue`);
//   const oneMapUrl = `https://www.onemap.gov.sg/amm/amm.html?mapStyle=Default&zoomLevel=50&${markers.join('&')}&popupWidth=200`;
// //   const oneMap = 'https://www.onemap.gov.sg/amm/amm.html?mapStyle=Default&zoomLevel=15&marker=latLng:1.28003031225926,103.845065681354!icon:fa-user!colour:blue&popupWidth=200';

//   return (
//     <div>
//       <iframe
//         src={oneMapUrl}
//         height="600"
//         width="900"
//         scrolling="no"
//         frameBorder="0"
//         allowFullScreen
//         title="OneMap"
//       ></iframe>
//     </div>
//   );
// };

// export default OneMapIframe;

import React from 'react';

const OneMapIframe = ({ coordinates }) => {
  const markers = coordinates.map(({ latitude, longitude, id }) => `marker=latLng:${longitude},${latitude}!icon:fa-user!colour:blue!label:${id}`);
  const oneMapUrl = `https://www.onemap.gov.sg/amm/amm.html?mapStyle=Default&zoomLevel=50&${markers.join('&')}&popupWidth=200`;

  return (
    <div>
      <iframe
        src={oneMapUrl}
        height="600"
        width="900"
        scrolling="no"
        frameBorder="0"
        allowFullScreen
        title="OneMap"
      ></iframe>
    </div>
  );
};

export default OneMapIframe;


