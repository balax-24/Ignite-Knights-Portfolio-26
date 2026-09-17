import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GenerationBadge } from '../components/common/GenerationBadge';
import { ArrowUpRight } from 'lucide-react';

export function GalleryPage() {
  const [filter, setFilter] = useState('ALL');

  const galleryItems = [
    {
      id: 'gal-01',
      title: 'IK-04 In-House Composite Airframe',
      category: '4.0 DEVELOPMENT',
      year: '2026',
      image: '/assets/drone-hero.jpg',
      aspect: 'featured', // large
      description: 'Chassis deck assembly with dual carbon plates and anodized aluminum motor clamps.',
    },
    {
      id: 'gal-02',
      title: 'Workshop Composite Layup & CNC Milling',
      category: '4.0 DEVELOPMENT',
      year: '2026',
      isPlaceholder: true,
      placeholderTitle: '4.0 WORKSHOP BUILD LOG',
      placeholderSub: 'Documenting composite autoclave prep, CNC milling tolerances, and avionics wiring harnesses.',
      aspect: 'card',
    },
    {
      id: 'gal-03',
      title: 'Maiden Tethered Flight Trials',
      category: '4.0 DEVELOPMENT',
      year: '2026',
      isPlaceholder: true,
      placeholderTitle: '4.0 FLIGHT TEST RANGE',
      placeholderSub: 'Outdoor flight envelope telemetry and optical tracking logs will be published following maiden tether tests.',
      aspect: 'card',
    },
    {
      id: 'gal-04',
      title: '3.0 Inaugural Heavy-Lift Hexacopter Debut',
      category: '3.0 ARCHIVE',
      year: '2024',
      image: '/assets/drone-hero.jpg',
      aspect: 'wide',
      description: 'The founding hexacopter platform that marked our national arena debut at SAE India 2024.',
    },
  ];

  const filteredItems =
    filter === 'ALL'
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  return (
    <div className="gallery-editorial-page">
      {/* Editorial Page Header */}
      <section className="editorial-page-header">
        <div className="container">
          <div className="editorial-header-category">
            <GenerationBadge variant="current" />
          </div>
          <h1 className="editorial-page-title">
            PHOTO JOURNAL<br />
            <span className="text-red">DOCUMENTARY RECORD</span>
          </h1>
          <p className="editorial-page-lead">
            Visual documentation of our airframes, composite manufacturing, bench testing, and flight campaigns.
          </p>
        </div>
      </section>

      <section className="container">
        {/* Editorial Filter */}
        <div className="team-filter-bar">
          {['ALL', '4.0 DEVELOPMENT', '3.0 ARCHIVE'].map((cat) => (
            <button
              key={cat}
              className={`team-filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Asymmetric Editorial Spread */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: '2rem', marginBottom: '6rem' }}>
          {/* Main Large Visual */}
          {filteredItems.find((i) => i.id === 'gal-01') && (
            <div className="journal-photo-item photo-large">
              <img
                src="/assets/drone-hero.jpg"
                alt="IK-04 In-House Composite Airframe"
                className="journal-img"
              />
              <div className="journal-caption">
                <span className="caption-tag">4.0 DEVELOPMENT // 2026</span>
                <span className="caption-title">IK-04 In-House Composite Airframe Assembly</span>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginTop: '0.3rem' }}>
                  Chassis deck assembly with dual carbon plates and anodized aluminum motor clamps.
                </p>
              </div>
            </div>
          )}

          {/* Stacked Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {filteredItems.filter((i) => i.isPlaceholder).map((item) => (
              <div key={item.id} className="journal-placeholder-card">
                <span className="editorial-tag red-dot">{item.year} // {item.category}</span>
                <h3 className="placeholder-card-title">{item.placeholderTitle}</h3>
                <p className="placeholder-card-sub">{item.placeholderSub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3.0 Archive Callout */}
        <div className="archive-hero-banner">
          <span className="archive-watermark-tag">HISTORICAL PHOTOGRAPHIC ARCHIVE</span>
          <h3 className="archive-banner-title">LOOKING FOR 3.0 MEDIA?</h3>
          <p className="archive-banner-desc">
            Archived photography of our 2024 SAE debut hexacopter and 2025 competition quadcopter are preserved in the 3.0 historical archive.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <Link to="/archive" className="editorial-text-link" style={{ fontSize: '1.05rem' }}>
              <span>ACCESS 3.0 ARCHIVE</span>
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
