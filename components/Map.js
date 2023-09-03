import { useState } from "react";
import ReactMapGL from "react-map-gl";
import { MAP_API } from "@/config/index";

export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: 37.19177,
    longitude: -82.71327,
    zoom: 11,
  });

  return (
    <ReactMapGL
      latitude={37.1172}
      longitude={-82.8241}
      zoom={16.2}
      width='100%'
      height='40vh'
      onViewportChange={(viewport) => setViewport({ viewport })}
      className='map'
      mapStyle='mapbox://styles/mapbox/streets-v11'
      mapboxApiAccessToken={MAP_API}
    />
  );
}
