import React from 'react';
import compas from './assets/urwald-wind-rose-compass-rose-tiny.svg';

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
      }}><img src={compas}/></button>
  )
}

export default Locate;