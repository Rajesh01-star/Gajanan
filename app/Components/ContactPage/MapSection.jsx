'use client'

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { icon } from "leaflet"; // Import icon from Leaflet
import { FaMapMarkerAlt } from "react-icons/fa";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS

// Create a custom icon using Leaflet's icon method
const markerIcon = icon({
  iconUrl: FaMapMarkerAlt,
  iconSize: [30, 30], // Set the size of the icon
  iconAnchor: [15, 30], // Set the anchor point of the icon
});

const MapSection = () => {
  return (
    <div style={{ height: "400px", width: "100%", position: "relative" }}>
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
