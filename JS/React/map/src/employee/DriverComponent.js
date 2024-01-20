import React, { useState, useEffect } from 'react';
import DriverService from '../employee/DriverService';
import Map from '../Coordinates/MapMarker';

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
    console.log(drivers);
    // Set up polling every 10 seconds (adjust the interval as needed)
    const intervalId = setInterval(() => {
      getDriversLocation();
    }, 10000);

    // Cleanup on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container">
        <Map coordinates={drivers} />
    </div>
  );
}

export default DriverComponent;
