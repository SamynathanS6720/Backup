import React, { useState, useEffect } from 'react';
import DriverService from '../employee/DriverService';
import Map from './MapMarker';
import GeoCode from './GeoCode';

function DriverComponent() {
    const [drivers, setDrivers] = useState([]);
  
    const getDriversLocation = () => {
      DriverService.getDriversLocation().then((response) => {
          setDrivers(response.data);
      });
    };
  
    useEffect(() => {
      // Fetch data initially
      getDriversLocation();
  
      // Set up polling every 10 seconds (adjust the interval as needed)
      const intervalId = setInterval(() => {
        getDriversLocation();
      }, 10000);
  
      // Cleanup on component unmount
      return () => clearInterval(intervalId);
    }, []);

    return(
        <div className="container">
            <div className="container">
                <Map coordinates={drivers} />
            </div>

        <h2>
            <GeoCode />
        </h2>
        <h1 className="text-center">Driver List</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Driver Id</th>
              <th>Driver longitude</th>
              <th>Driver latitude</th>
            </tr>
          </thead>
          <tbody>
            {drivers.map((driver) => (
              <tr key={driver.id}>
                <td>{driver.id}</td>
                <td>{driver.longitude}</td>
                <td>{driver.latitude}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default DriverComponent;