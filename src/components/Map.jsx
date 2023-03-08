import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -25.0, 0],
        center: [-5, -2],
        scale: 900
      }}
      style={{ width: "100%", height: "100%",
     }}
    >
      <Geographies
        geography="/features.json"
            fill="#2A1D36"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[-15, 20]}    
        dx={120}
        dy={-80}
        
        connectorProps={{
          stroke: "#FF5533",
          strokeWidth: 3,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#F53">
          {"San Jose, CA"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
