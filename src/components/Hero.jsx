import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToCatalog = () => {
    const catalogElem = document.getElementById('catalog-section');
    if (catalogElem) catalogElem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section style={{
      position: 'relative',
      minHeight: '75vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '5rem 1.5rem 4rem 1.5rem',
      overflow: 'hidden',
      background: '#0a0a0c',
      textAlign: 'center'
    }}>
      {/* Background Image Layer — Fades to 100% Solid #0a0a0c at 82% */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `linear-gradient(180deg, rgba(10,10,12,0.55) 0%, rgba(10,10,12,0.85) 60%, #0a0a0c 82%, #0a0a0c 100%), url("https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&q=80")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        zIndex: 1,
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '850px', margin: '0 auto' }}>
        {/* Season Badge */}
        <div style={{
          display: 'inline-block',
          padding: '0.35rem 1rem',
          borderRadius: '4px',
          background: 'rgba(0, 0, 0, 0.65)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          marginBottom: '1.8rem'
        }}>
          <span style={{ fontSize: '0.75rem', letterSpacing: '3px', textTransform: 'uppercase', color: '#ffffff', fontWeight: 700 }}>
            SPRING / SUMMER '26
          </span>
        </div>

        {/* High Fashion Title */}
        <h1 style={{
          fontSize: 'clamp(3rem, 7vw, 5.2rem)',
          fontWeight: 900,
          lineHeight: 0.95,
          letterSpacing: '8px',
          marginBottom: '0.6rem',
          color: '#ffffff',
          textTransform: 'uppercase',
          textAlign: 'center'
        }}>
          ATALYA
        </h1>

        <div style={{
          fontSize: 'clamp(0.95rem, 2vw, 1.4rem)',
          fontWeight: 700,
          letterSpacing: '9px',
          textTransform: 'uppercase',
          color: '#ffffff',
          marginBottom: '1.6rem',
          textAlign: 'center',
          opacity: 0.9
        }}>
          C L O T H I N G
        </div>

        <p style={{
          fontSize: '0.82rem',
          letterSpacing: '3.5px',
          textTransform: 'uppercase',
          color: '#a1a1aa',
          marginBottom: '1.8rem',
          fontWeight: 600,
          textAlign: 'center'
        }}>
          where elegance begins
        </p>

        <p style={{
          fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)',
          color: 'var(--text-secondary)',
          maxWidth: '620px',
          margin: '0 auto 2.5rem auto',
          fontWeight: 400,
          lineHeight: 1.65,
          textAlign: 'center'
        }}>
          Contemporary outerwear, tailored blazers, evening wear, and modern elevated apparel designed in Sri Lanka.
        </p>

        {/* Centered CTAs */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
          margin: '0 auto'
        }}>
          <button onClick={scrollToCatalog} className="btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '0.85rem' }}>
            <span>SHOP COLLECTION</span>
            <ArrowRight size={15} />
          </button>

          <a href="#story-section" className="btn-secondary" style={{ padding: '1rem 2.2rem', fontSize: '0.85rem', background: 'rgba(0,0,0,0.5)' }}>
            <span>OUR STORY</span>
          </a>
        </div>
      </div>
    </section>
  );
}
