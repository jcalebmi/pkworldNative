import React, {useState} from 'react';
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from '@reach/combobox';
// import '@reach/combobox/styles.css';

const SearchSpots = (props) => {
  //returns suggested locations with data and functions to use
  const [value, setValue] = useState('');
  const [marker, setMarker] = useState(null)
  const [location, setLocation] = useState(null);

  return (
    <div className="search">
      <Combobox
        onSelect={() => setValue('')}>
          {/* Creates  Input Field */}
          <ComboboxInput
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search Spots"
          />
          {/* Creates Popup Box with Data */}
          <ComboboxPopover className="popOver">
            <ComboboxList>
            {props.markers.filter(marker => marker.name.toLowerCase().includes(value.toLowerCase())).map((marker, index) => <ComboboxOption key={index} value={`${marker.name} \n ${marker.address}`} onClick={() => props.panTo({lat: marker.lat, lng: marker.lng})}/>)}
            </ComboboxList>
          </ComboboxPopover>
      </Combobox>
    </div>
  )
}

export default SearchSpots;
