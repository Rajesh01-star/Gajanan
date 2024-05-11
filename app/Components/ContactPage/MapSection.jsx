'use client'
import React, { useEffect } from "react";

const MapSection = () => {
  useEffect(() => {
    // Load the Google Maps JavaScript API script dynamically
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`;
    script.defer = true;
    document.head.appendChild(script);

    script.onload = () => {
      // Initialize the map
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE }, // Update with your center coordinates
        zoom: 15, // Adjust zoom level as needed
      });

      // Add marker for your driving center
      const marker = new window.google.maps.Marker({
        position: { lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE }, // Update with your center coordinates
        map: map,
        title: "Your Driving Center",
      });
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return <div id="map" style={{ height: "400px", width: "100%" }}></div>;
};

export default MapSection;
