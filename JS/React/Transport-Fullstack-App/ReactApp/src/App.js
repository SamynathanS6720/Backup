import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layout/Navbar';
// import Home from './pages/Home';
// import Map from './map/map';
import OneMap from './map/oneMap';
import RouteMap from './map/routeMap';
// import Route from './map/route';

// import Sidebar from './layout/sidebar';
import EmployeeComponent from './employee/EmployeeComponent';



function App() {

  return (
    <div className="App">
    
      {/* <Sidebar /> */}
      <Navbar />
      {/* <Map /> */}
      {/* <OneMap /> */}
      {/* <Route /> */}
      <RouteMap />
      <EmployeeComponent />
    </div>
  );
}

export default App;
