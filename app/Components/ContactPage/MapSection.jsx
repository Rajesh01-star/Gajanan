'use client'

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS

// Create a custom divIcon using Leaflet's divIcon method
const markerIcon = L.divIcon({
  html: `
    <div style="position: relative; display: flex; flex-direction: column;width:100px; align-items: center;">
      <span style="background-color: white; padding: 2px 5px; border-radius: 3px; margin-bottom: 5px;">Gajanan Driving School</span>
      <img src="/marker.png" style="width: 30px; height: 30px;" />
    </div>
  `,
  className: "", // Remove default class to prevent any Leaflet styles
  iconSize: [30, 42], // Adjust size to include text
  iconAnchor: [15, 42] // Anchor point of the icon (bottom center)
});

const MapSection = () => {
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
          <Popup>Our Location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapSection;
