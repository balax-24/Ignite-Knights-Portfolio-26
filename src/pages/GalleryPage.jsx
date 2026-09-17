import React, { useState } from 'react';
import { PageHero } from '../components/common/PageHero';
import { galleryCategories, galleryItems } from '../data/galleryData';
import { GalleryCard } from '../components/cards/GalleryCard';
import { X, MapPin, Calendar, Radio, Maximize2 } from 'lucide-react';

export function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems =
    activeCategory === 'ALL'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="gallery-page">
      {/* Hero */}
      <PageHero
        badge="DOCUMENTARY ARCHIVE // FLIGHT LINE"
        title="BEHIND"
        highlight="THE FLIGHT."
        subtitle="The people, progress and moments behind our journey. Unvarnished documentation of fabrication, flight trials, and competition operations."
        telemetry="ARCHIVE INVENTORY : 12 CURATED ENTRIES // 100% VERIFIED"
      />

      {/* Category Filter Bar */}
      <section className="gallery-filter-section">
        <div className="container">
          <div className="gallery-filter-bar corner-bracket-box">
            <div className="flex items-center gap-2">
              <span className="status-dot active"></span>
              <span className="tech-label">ARCHIVE CATEGORIES:</span>
            </div>

            <div className="filter-buttons-wrap">
              {galleryCategories.map((cat) => (
                <button
                  key={cat}
                  className={`team-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  <span>{cat}</span>
                </button>
              ))}
            </div>

            <span className="tech-label">LOGS: {filteredItems.length}</span>
          </div>
        </div>
      </section>

      {/* Cinematic Masonry Grid */}
      <section className="gallery-masonry-section">
        <div className="container">
          <div className="gallery-masonry-layout">
            {filteredItems.map((item) => (
              <GalleryCard key={item.id} item={item} onSelect={setSelectedItem} />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal for Inspection */}
      {selectedItem && (
        <div className="gallery-lightbox-modal" onClick={() => setSelectedItem(null)}>
          <div
            className="lightbox-content-box corner-bracket-box"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="lightbox-header">
              <div className="flex items-center gap-2">
                <Radio size={14} className="text-red animate-pulse" />
                <span className="tech-tag tech-tag-red">{selectedItem.category}</span>
                <span className="tech-label">{selectedItem.telemetry}</span>
              </div>
              <button
                className="lightbox-close-btn"
                onClick={() => setSelectedItem(null)}
                aria-label="Close Preview"
              >
                <X size={22} />
              </button>
            </div>

            <div className="lightbox-image-wrap">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="lightbox-img"
              />
            </div>

            <div className="lightbox-footer">
              <h3 className="lightbox-title">{selectedItem.title}</h3>
              <p className="lightbox-desc">{selectedItem.description}</p>
              <div className="lightbox-meta">
                <div className="flex items-center gap-1">
                  <MapPin size={13} className="text-red" />
                  <span>{selectedItem.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar size={13} className="text-red" />
                  <span>{selectedItem.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
