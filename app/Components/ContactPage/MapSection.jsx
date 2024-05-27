// components/MapSection.js
'use client';

import dynamic from "next/dynamic";

// Dynamically import the LeafletMap component with SSR disabled
const LeafletMap = dynamic(() => import('./LeafletMap'), {
  ssr: false,
});

const MapSection = () => {
  return (
    <div>
      <LeafletMap />
    </div>
  );
};

export default MapSection;
