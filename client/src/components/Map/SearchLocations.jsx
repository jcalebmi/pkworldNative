import React from 'react';
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from '@reach/combobox';
// import '@reach/combobox/styles.css';

const SearchLocations = (props) => {
  //returns suggested locations with data and functions to use
  const {
    ready,
    value,
    suggestions: {status, data},
    setValue,
    clearSuggestions
  } = props.usePlaces({
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

  return (
    <div className="search">
      <Combobox
        onSelect={async (address) => {
          try {
            //sets value to selected address
            //should fetch data argument set to false
            //no need to continue searching api
            setValue(address, false);
            //clears the rest of the suggestions
            clearSuggestions()
            //gets info object about a location
            const results = await props.getGeocode({ address });
            // console.log(results);
            //gets lat and long of location
            const { lat, lng} = await props.getLatLng(results[0]);
            props.panTo({lat, lng})
          } catch (error) {
            console.log(error);
          }
        }}>
          {/* Creates  Input Field */}
          <ComboboxInput
            value={value}
            onChange={(e) => setValue(e.target.value)}
            disabled={!ready}
            placeholder="Search Location"
          />
          {/* Creates Popup Box with Data */}
          <ComboboxPopover className="popOver">
            <ComboboxList>
            {status === 'OK'
            ? data.map((suggestion, index) => <ComboboxOption key={index} value={suggestion.description}/>)
            : null}
            </ComboboxList>
          </ComboboxPopover>
      </Combobox>
    </div>
  )
}

export default SearchLocations;