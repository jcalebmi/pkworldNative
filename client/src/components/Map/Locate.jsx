import React from 'react';

const Locate = (props) => {
  return (
    <button
      className="location"
      onClick={() => {
        //returns data about location
        //takes success, error, options callback
        if (props.location) {
          props.panTo(props.location)
        } else {
          navigator.geolocation.getCurrentPosition((position) => {
            props.panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude
            })
          }, () => null);
        }
      }}>Locate Me</button>
  )
}

export default Locate;