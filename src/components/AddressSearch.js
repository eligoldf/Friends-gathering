import React from 'react';
import _ from 'lodash';
import {
  Combobox, ComboboxInput, ComboboxPopover, ComboboxOption, ComboboxList,
} from '@reach/combobox';
import '@reach/combobox/styles.css';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';

const AddressSearch = ({ panTo }) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: {
        lat: () => 32.109333,
        lng: () => 34.855499,
      },
      radius: 2000 * 1000,
    },
  });
  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      panTo({ lat, lng, address });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="search mb-3 mt-3">
      <Combobox onSelect={handleSelect}>
        <ComboboxInput
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Search your location"
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === 'OK'
                && data.map(({ description }) => (
                  <ComboboxOption key={_.uniqueId()} value={description} style={{ color: 'black' }} />
                ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
};

export default AddressSearch;
