import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Fetch = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(response => {
        console.log(response.data);
        setPhotos(response.data);
      })
      .catch(error => {
        console.error('Error fetching photos:', error);
      });
  }, []);

  return (
    <div>
      {photos.map((photo) => (
        <img key={photo.id} src={photo.url} alt={photo.title} width={100} />
      ))}
    </div>
  );
};

export default Fetch;
