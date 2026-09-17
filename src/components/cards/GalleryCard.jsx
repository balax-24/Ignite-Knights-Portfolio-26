import React, { useState } from 'react';
import { Maximize2, MapPin, Calendar, Radio } from 'lucide-react';

export function GalleryCard({ item, onSelect }) {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div
      className={`gallery-masonry-card aspect-${item.aspect} corner-bracket-box`}
      onClick={() => onSelect && onSelect(item)}
    >
      <div className="gallery-img-container">
        <img
          src={item.image}
          alt={item.title}
          className={`gallery-img ${imgLoaded ? 'loaded' : ''}`}
          onLoad={() => setImgLoaded(true)}
        />
        <div className="gallery-card-gradient"></div>
      </div>

      {/* Persistent Badge */}
      <div className="gallery-card-top-tag">
        <span className="tech-tag tech-tag-red">{item.category}</span>
      </div>

      {/* Hover Overlay with Aerospace Telemetry */}
      <div className="gallery-card-overlay">
        <div className="gallery-overlay-meta">
          <div className="flex items-center gap-2">
            <Radio size={12} className="text-red animate-pulse" />
            <span className="tech-label">{item.telemetry}</span>
          </div>
          <button className="gallery-expand-icon" aria-label="Expand image">
            <Maximize2 size={16} />
          </button>
        </div>

        <div className="gallery-overlay-bottom">
          <h4 className="gallery-item-title">{item.title}</h4>
          <p className="gallery-item-desc">{item.description}</p>
          <div className="gallery-item-location">
            <MapPin size={12} className="text-red" />
            <span>{item.location}</span>
            <span className="mx-1">•</span>
            <Calendar size={12} className="text-red" />
            <span>{item.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
