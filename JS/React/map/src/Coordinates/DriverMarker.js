// import React from "react";


// const DriverMarker = ({ data }) => {
//     // Assuming that the first element in the data array is used to extract lang and latitude
//     const lang = data[0].longitude;
//     const latitude = data[0].latitude;
  
//     // Construct the map URL dynamically
    // const mapUrl = `https://www.onemap.gov.sg/amm/amm.html?mapStyle=Default&zoomLevel=15&marker=postalcode:069183!icon:fa-user!colour:blue&marker=latLng:${latitude},${lang}!icon:fa-user!colour:blue&popupWidth=200`;
  
    // return (
    //   <div>
    //     <iframe
    //       src={mapUrl}
    //       height="600"
    //       width="800"
    //       scrolling="no"
    //       frameBorder="0"
    //       allowFullScreen
    //       title="OneMap"
    //     ></iframe>
    //   </div>
    // );
//   };
  

// export default DriverMarker;
import React from "react";

const DriverLocation = ({ data }) => {
  // Assuming that the first element in the data array is used to extract lang and latitude
  const lang = data[0].longitude;
  const latitude = data[0].latitude;

  // Construct the map URL dynamically
  const mapUrl = `https://www.onemap.gov.sg/amm/amm.html?mapStyle=Default&zoomLevel=15&marker=postalcode:069183!icon:fa-user!colour:blue&marker=latLng:${latitude},${lang}!icon:fa-user!colour:blue&popupWidth=200`;

  return (
    <div>
      <iframe
        src={mapUrl}
        height="600"
        width="800"
        scrolling="no"
        frameBorder="0" // Use camelCase: frameBorder instead of frameborder
        allowFullScreen // Use camelCase: allowFullScreen instead of allowfullscreen
        title="OneMap"
      ></iframe>
    </div>
  );
};

export default DriverLocation;

