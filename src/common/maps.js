import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

// react-bootstrap components
import DraggableMarker from "./../components/draggableMarker";

function Maps({ position, setPosition, isDraggable = true }) {
  const center = isDraggable
    ? { lat: 35.68658125560941, lng: 51.38819652084644 }
    : position
    ? {
        lat: parseFloat(position.latitude),
        lng: parseFloat(position.longitude),
      }
    : { lat: 35.68658125560941, lng: 51.38819652084644 };

  return (
    <MapContainer
      center={center}
      zoom={12}
      scrollWheelZoom={true}
      style={
        isDraggable
          ? {
              height: "300px",
              width: "100%",
            }
          : {
              height: "200px",
              width: "30%",
              position: "absolute",
              left: "20%",
              top: "10%",
            }
      }
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {isDraggable ? (
        <DraggableMarker position={position} setPosition={setPosition} />
      ) : (
        <Marker draggable={isDraggable} position={center}></Marker>
      )}
    </MapContainer>
  );
}

export default Maps;
