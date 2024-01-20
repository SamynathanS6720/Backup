import React from "react";

const DriverLocation = () => {
    return(
        <iframe src="https://www.onemap.gov.sg/amm/amm.html?map
        Style=Default
        &zoomLevel=19
        &marker=postalcode:519599!iwt:JTNDcCUzRVNhbXklQzIlQTAlM0MlMkZwJTNF!icon:fa-user!colour:lightred
        &marker=postalcode:029996!iwt:JTNDcCUzRVVtYXIlM0MlMkZwJTNF!icon:fa-user!colour:lightred
        &marker=postalcode:248648!iwt:JTNDcCUzRVN1c2FuJTNDJTJGcCUzRQ==!icon:fa-user!colour:lightred&popupWidth=200"
        height="600" 
        width="900" 
        scrolling="no" 
        frameborder="0" 
        allowfullscreen="allowfullscreen">
        </iframe>
    );
};

export default DriverLocation;


