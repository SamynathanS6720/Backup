import React, { useEffect, useState } from 'react';
import Geocode from 'react-geocode';

const MyComponent = () => {
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.onemap.gov.sg/api/auth/post/getToken', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: 'samynathan.s@kaditinnovations.com',
            password: 'Kadit@123456',
          }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

        // Assuming the response has a token property
        const token = data.token;

        // Reverse Geocoding example using react-geocode
        Geocode.fromLatLng('48.858844', '2.294350')
          .then((response) => {
            const address = response.results[0].formatted_address;
            setAddress(address); // Set the address in the state
          })
          .catch((error) => {
            console.error('Error in reverse geocoding:', error);
            setError('Error in reverse geocoding');
          });
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data');
      }
    };

    fetchData();
  }, []); // Run this effect only once when the component mounts

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <p>Reverse Geocoding Result:</p>
      <p>{address}</p>
    </div>
  );
};

export default MyComponent;
