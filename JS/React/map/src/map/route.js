import OneMapIframe from './mapIframe';

function App() {
    const startLocation = 'postalcode:238162';
    const endLocation = '1.28537030528984,103.860871154701';
    const stops = [
        { lat: 1.2932330759348, lng: 103.853021562271 },
        { lat: 1.29446415491593, lng: 103.849494715465 },
        { lat: 1.29446415498621, lng: 103.849494715874 },
        { lat: 1.29446415497828, lng: 103.849494715028 },
        { lat: 1.29446415490324, lng: 103.849494718925 },
    ];

    return (
        <div className="App">
            <OneMapIframe startLocation={startLocation} endLocation={endLocation} stops={stops} />
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
        </div>
    );
}

export default App;


