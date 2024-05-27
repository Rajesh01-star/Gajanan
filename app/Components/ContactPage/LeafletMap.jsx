'use client';

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS

// Create a custom icon using Leaflet's icon method
const markerIcon = L.icon({
  iconUrl: "/marker.png",
  iconSize: [30, 30], // Size of the icon
  iconAnchor: [15, 42], // Anchor point of the icon (bottom center)
});

const LeafletMap = () => {
  return (
    <div style={{ height: "400px", width: "100%", position: "relative" }} className="mt-40">
      <MapContainer
        center={[20.2961, 85.8245]} // Latitude and longitude for Bhubaneswar
        zoom={12}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[20.2961, 85.8245]} icon={markerIcon}>
          <Popup>Gajanan Driving School</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LeafletMap;
