import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/common/PageHero';
import { GenerationBadge } from '../components/common/GenerationBadge';
import {
  Maximize2,
  X,
  Camera,
  Archive,
  ArrowUpRight,
  Clock,
  Layers,
  Activity,
} from 'lucide-react';

export function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [activeLightbox, setActiveLightbox] = useState(null);

  const categories = [
    'ALL',
    '4.0 BUILD LOGS',
    '4.0 FLIGHT TESTING',
    '3.0 HISTORICAL ARCHIVE',
  ];

  // Gallery items including 4.0 coming soon build placeholders and 3.0 historical records
  const galleryItems = [
    {
      id: 'gal-4-01',
      title: '4.0 AIRFRAME COMPOSITE FABRICATION',
      generation: '4.0',
      category: '4.0 BUILD LOGS',
      aspect: 'wide', // 16:9
      isPlaceholder: true,
      placeholderText: '4.0 BUILD // COMING SOON',
      location: 'Composites Workshop, Chennai',
      description: 'Waterjet CNC cutting and resin infusion of Toray 3K carbon fiber modular chassis plates.',
      telemetry: 'IK-04 // CARBON CHASSIS DECK // 2026',
    },
    {
      id: 'gal-4-02',
      title: '4.0 BENCH DYNAMICS & POWER HARNESSING',
      generation: '4.0',
      category: '4.0 BUILD LOGS',
      aspect: 'tall', // 3:4
      isPlaceholder: true,
      placeholderText: '4.0 WORKSHOP // COMING SOON',
      location: 'IK Avionics Bench',
      description: 'High-current 6S power bus integration, buck-boost filtration, and sensor isolation testing.',
      telemetry: 'VOLT: 24.0V // EMI SHIELDING ACTIVE',
    },
    {
      id: 'gal-4-03',
      title: '4.0 FLIGHT TEST RANGE DEPLOYMENT',
      generation: '4.0',
      category: '4.0 FLIGHT TESTING',
      aspect: 'wide',
      isPlaceholder: true,
      placeholderText: '4.0 FLIGHT TEST // COMING SOON',
      location: 'Flight Range, Chennai',
      description: 'Tethered attitude stabilization and autonomous waypoint hold verification runs.',
      telemetry: 'IK-04 // FLIGHT PROTOCOL STANDBY',
    },
    {
      id: 'gal-3-01',
      title: '3.0 COMPETITION QUADCOPTER IN FLIGHT',
      generation: '3.0',
      category: '3.0 HISTORICAL ARCHIVE',
      aspect: 'wide',
      isPlaceholder: false,
      image: '/assets/drone-hero.jpg',
      location: 'SAE ADDC National Arena',
      description: 'Autonomous waypoint traversal and target acquisition flight during the 2025 competition season.',
      telemetry: 'ARCHIVE 3.0 // SAE ADDC 2025 TOP 10',
    },
    {
      id: 'gal-3-02',
      title: '3.0 INAUGURAL HEAVY-LIFT HEXACOPTER',
      generation: '3.0',
      category: '3.0 HISTORICAL ARCHIVE',
      aspect: 'tall',
      isPlaceholder: false,
      image: '/team/drone-hero.jpg',
      location: 'SAE India 2024 Debut Arena',
      description: 'The founding heavy-lift 6-arm radial platform engineered by Ignite Knights 3.0 in 2024.',
      telemetry: 'ARCHIVE 3.0 // SAE INDIA 2024 DEBUT',
    },
    {
      id: 'gal-3-03',
      title: '3.0 AVIONICS & MAVLINK TELEMETRY BENCH',
      generation: '3.0',
      category: '3.0 HISTORICAL ARCHIVE',
      aspect: 'standard',
      isPlaceholder: false,
      image: '/team/Mithran.jpg',
      location: 'IK Avionics Lab (3.0)',
      description: 'Pre-flight avionics check and MAVLink telemetry stream synchronization by 3.0 lead.',
      telemetry: 'ARCHIVE 3.0 // 915MHz TELEMETRY',
    },
    {
      id: 'gal-3-04',
      title: '3.0 COMPOSITE AIRFRAME LOAD TESTING',
      generation: '3.0',
      category: '3.0 HISTORICAL ARCHIVE',
      aspect: 'tall',
      isPlaceholder: false,
      image: '/team/Sakthivel.jpg',
      location: 'Composites Workshop (3.0)',
      description: 'Toray carbon fiber arm torsional stiffness and resonance evaluation under simulated loads.',
      telemetry: 'ARCHIVE 3.0 // 35N LOAD DEFLECTION',
    },
    {
      id: 'gal-3-05',
      title: '3.0 EDGE AI PERCEPTION BENCH',
      generation: '3.0',
      category: '3.0 HISTORICAL ARCHIVE',
      aspect: 'standard',
      isPlaceholder: false,
      image: '/team/Balaharish.png',
      location: 'AI Development Bay (3.0)',
      description: 'TensorRT model quantization and bounding box latency optimization on NVIDIA Jetson.',
      telemetry: 'ARCHIVE 3.0 // LATENCY 13.8ms',
    },
  ];

  const filteredItems =
    selectedCategory === 'ALL'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="gallery-page">
      {/* Page Hero Header */}
      <PageHero
        badge="IGNITE KNIGHTS // VISUAL RECORD"
        title="FLIGHT & LAB"
        highlight="GALLERY"
        subtitle="Visual documentation of 4.0 development build logs, bench evaluations, and the verified historical photo record of Ignite Knights 3.0."
        telemetry="SYSTEM RECORD // VISUAL ARCHIVE"
      >
        <div className="flex items-center gap-3 mt-2">
          <GenerationBadge variant="current" size="sm" />
          <span className="text-gray-500 font-mono text-xs">+</span>
          <GenerationBadge variant="archive" size="sm" />
        </div>
      </PageHero>

      <div className="container py-8">
        {/* Category Navigation Bar */}
        <div className="gallery-filter-bar mb-10">
          <div className="flex items-center gap-2 mb-3 md:mb-0">
            <Camera size={14} className="text-red" />
            <span className="tech-label">GALLERY CURATION:</span>
          </div>

          <div className="gallery-filter-chips">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`filter-chip ${selectedCategory === cat ? 'active' : ''} ${
                  cat === '3.0 HISTORICAL ARCHIVE' ? 'chip-archive' : ''
                }`}
                onClick={() => setSelectedCategory(cat)}
              >
                <span className="chip-dot"></span>
                <span className="font-mono text-xs">{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Masonry Gallery Grid */}
        <div className="editorial-masonry-grid">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`masonry-item item-${item.aspect} ${
                item.generation === '3.0' ? 'item-archive' : 'item-current'
              }`}
              onClick={() => !item.isPlaceholder && setActiveLightbox(item)}
            >
              <div className="masonry-inner corner-bracket-box">
                {/* Top Badge Strip */}
                <div className="masonry-top-badge">
                  {item.generation === '4.0' ? (
                    <GenerationBadge variant="current" size="sm" />
                  ) : (
                    <GenerationBadge variant="archive" size="sm" />
                  )}
                  <span className="font-mono text-xs text-gray-400">{item.telemetry}</span>
                </div>

                {/* Media Container */}
                <div className="masonry-media-wrap">
                  {item.isPlaceholder ? (
                    <div className="placeholder-media-box">
                      <Clock size={28} className="text-red mb-2 animate-pulse" />
                      <span className="placeholder-big-tag font-mono text-white font-bold">
                        {item.placeholderText}
                      </span>
                      <span className="placeholder-sub font-mono text-xs text-gray-500 mt-1">
                        REAL 4.0 PHOTO LOGS WILL POST UPON FABRICATION COMPLETE
                      </span>
                    </div>
                  ) : (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="masonry-img"
                      loading="lazy"
                    />
                  )}

                  {!item.isPlaceholder && (
                    <div className="media-zoom-overlay">
                      <Maximize2 size={20} className="text-white" />
                    </div>
                  )}
                </div>

                {/* Caption Bar */}
                <div className="masonry-caption">
                  <h4 className="caption-title text-white font-semibold text-sm">{item.title}</h4>
                  <p className="caption-desc text-xs text-gray-400 mt-1">{item.description}</p>
                  <div className="caption-foot font-mono text-xs text-gray-500 mt-2">
                    LOC: {item.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal for Full View */}
        {activeLightbox && (
          <div className="lightbox-backdrop" onClick={() => setActiveLightbox(null)}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className="lightbox-close"
                onClick={() => setActiveLightbox(null)}
                aria-label="Close Lightbox"
              >
                <X size={20} />
              </button>

              <img
                src={activeLightbox.image}
                alt={activeLightbox.title}
                className="lightbox-full-img"
              />

              <div className="lightbox-meta">
                <div className="flex items-center gap-2 mb-1">
                  <GenerationBadge
                    variant={activeLightbox.generation === '4.0' ? 'current' : 'archive'}
                    size="sm"
                  />
                  <span className="font-mono text-xs text-gray-400">{activeLightbox.telemetry}</span>
                </div>
                <h3 className="lightbox-title text-white font-bold">{activeLightbox.title}</h3>
                <p className="lightbox-desc text-sm text-gray-300 mt-1">{activeLightbox.description}</p>
                <div className="font-mono text-xs text-gray-500 mt-2">LOC: {activeLightbox.location}</div>
              </div>
            </div>
          </div>
        )}

        {/* 3.0 Archive Portal Bridge */}
        <section className="gallery-archive-bridge mt-16">
          <div className="bridge-inner">
            <div className="bridge-left">
              <GenerationBadge variant="archive" size="sm" />
              <h3 className="bridge-title mt-2">
                ACCESS THE FULL IGNITE KNIGHTS 3.0 HISTORICAL RECORD
              </h3>
              <p className="bridge-desc">
                View all verified historical photographs, tournament awards, hexacopter flight trials, and founding team members in the 3.0 Historical Archive.
              </p>
            </div>
            <div className="bridge-right">
              <Link to="/archive" className="btn-aerospace btn-aerospace-archive-cta">
                <Archive size={15} />
                <span>INSPECT 3.0 ARCHIVE →</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
