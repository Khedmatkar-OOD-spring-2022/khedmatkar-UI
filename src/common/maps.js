import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

// react-bootstrap components
import DraggableMarker from "./../components/draggableMarker";

function Maps() {
  const center = { lat: 35.68658125560941, lng: 51.38819652084644 };

  return (
    <MapContainer
      center={center}
      zoom={12}
      scrollWheelZoom={true}
      style={{ height: "400px",width:'40%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <DraggableMarker center={center} />
    </MapContainer>
  );
}

export default Maps;
