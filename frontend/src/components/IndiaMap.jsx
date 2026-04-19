import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

const IndiaMap = ({ onStateSelect }) => {
  const [tooltipContent, setTooltipContent] = useState('');
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const handleHover = (geo, event) => {
    const stateName = geo.properties.ST_NM_EN || geo.properties.NAME_1 || 'Unknown';
    setTooltipContent(stateName);
    setTooltipPos({ x: event.clientX + 10, y: event.clientY - 30 });
  };

  return (
    <div className="position-relative w-full h-[450px]">
      {/* Tooltip follows cursor */}
      {tooltipContent && (
        <div
          className="position-absolute bg-dark text-white px-3 py-2 rounded fw-bold fs-6 shadow-lg border border-warning"
          style={{
            left: tooltipPos.x,
            top: tooltipPos.y,
            zIndex: 9999,
            pointerEvents: 'none',
            whiteSpace: 'nowrap',
            transform: 'translateZ(0)'
          }}
        >
          {tooltipContent}
        </div>
      )}
      
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 1200, center: [78.96, 20.59] }}
        style={{ width: '100%', height: '100%' }}
      >
        <Geographies geography="/maps/india_states.geojson">
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={(e) => handleHover(geo, e)}
                onMouseLeave={() => setTooltipContent('')}
                onClick={() => onStateSelect(geo.properties.ST_NM_EN || geo.properties.NAME_1)}
                style={{
                  default: { fill: '#facc15', stroke: '#d97706', strokeWidth: 1, cursor: 'pointer' },
                  hover: { fill: '#f59e0b', stroke: '#ffffff', strokeWidth: 2 },
                  pressed: { fill: '#1f2937', stroke: '#ffffff', strokeWidth: 2 }
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default IndiaMap;
