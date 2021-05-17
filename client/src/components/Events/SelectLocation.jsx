import React from 'react';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';

const SelectLocation = (props) => {

  const {
    ready,
    value,
    suggestions: {status, data},
    setValue,
    clearSuggestions
  } = usePlacesAutocomplete({
    requestOptions: {
      //where to search for nearby locations
      location: {
        lat: () => props.location.lat ? props.location.lat : 28.5383,
        lng: () => props.location.lng ? props.location.lng : -81.3792,
      },
      //radius of places by meters
      radius: 200
    }
  });

  if (status === 'OK') {
    let isValid = true;
    if (props.city === '' || props.state === '' || props.country === '') {
      isValid = false;
    }
    const address = `${data[0].structured_formatting.main_text}, ${props.city}, ${props.state}, ${props.country}`;
    if (props.modal) {
      if (value.length > 3 && isValid) {
        try {
          setTimeout(function() {
            let geo = async () => await getGeocode({address});
            geo().then((results) => getLatLng(results[0])).then((results) => props.handleLocation({results}, address)).then(clearSuggestions());
          }, 2000);
        } catch (error) {
          console.log(error);
        }
      }
    }
  }
  return (
    <div className="locationSelection">
        <input
          minLength={5}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={!ready}
          placeholder="Address"
          required
        />
    </div>
  )
}

export default SelectLocation;