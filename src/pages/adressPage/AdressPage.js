import React, { useCallback, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  GoogleMap, useLoadScript, Marker, InfoWindow,
} from '@react-google-maps/api';
import { Container } from 'react-bootstrap';
import AddressSearch from '../../components/AddressSearch';
import { setMarkersSucces, setSelectedSuccess, setChosenAddresSuccess } from '../../store/address';
import './addressStyle.css';

const apiKey = 'AIzaSyANhCPiwPcSdCY3wvfBhXMZc-b5Wzu98fY';
const mapContainerStyle = {
  width: '80vw',
  height: '60vh',
};

const center = {
  lat: 32.109333,
  lng: 34.855499,
};
const libraries = ['places'];

const AddressPage = () => {
  const markers = useSelector((state) => state.address.markers);
  const selected = useSelector((state) => state.address.selected);
  const chosenAddress = useSelector((state) => state.address.chosenAddress);
  const dispatch = useDispatch();

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries,
  });

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = useCallback(({ lat, lng, address }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(16);
    dispatch(setChosenAddresSuccess(address));
  }, []);

  const onMapClick = useCallback((event) => {
    dispatch(setMarkersSucces({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    }));
  }, []);

  if (loadError) {
    return 'Error loading maps';
  }

  if (!isLoaded) {
    return 'Loading Maps';
  }

  return (
    <Container className="text-center">
      <h1>Event Address</h1>

      <AddressSearch panTo={panTo} />
      <Container className="map-container">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={11}
          center={center}
          onClick={onMapClick}
          onLoad={onMapLoad}
        >
          {markers.map((marker) => (
            <Marker
              key={`${marker.lat}-${marker.lng}`}
              position={{ lat: marker.lat, lng: marker.lng }}
              onClick={() => dispatch(setSelectedSuccess(marker))}
            />
          ))}
          {selected ? (
            <InfoWindow
              position={{ lat: selected.lat, lng: selected.lng }}
              onCloseClick={() => dispatch(setSelectedSuccess(null))}
            >
              <div style={{ color: 'black' }}>
                <h2>Event is here</h2>
                <p>{chosenAddress}</p>
              </div>
            </InfoWindow>
          ) : null}
        </GoogleMap>
      </Container>
    </Container>
  );
};

export default AddressPage;
