import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layout/Navbar';
// import Home from './pages/Home';
// import Map from './map/map';
// import OneMap from './map/oneMap';
// import RouteMap from './map/routeMap';
// import Route from './map/route';
// import Sidebar from './layout/sidebar';
// import DriverComponent from './employee/DriverComponent';
// import DriverLocation from './map/driverLocation';
import Popup from './PopupText/popup';
import MapTracking from './Coordinates/TrackingMap';



function App() {

  return (
    <div className="App">
    
      <Navbar />
      {/* <Popup /> */}
      {/* <Sidebar /> */}
      {/* <Map /> */}
      {/* <OneMap /> */}
      {/* <Route /> */}
      {/* <RouteMap /> */}
      {/* <DriverLocation /> */}
      {/* <DriverComponent /> */}
      <MapTracking />
    </div>
  );
}

export default App;
