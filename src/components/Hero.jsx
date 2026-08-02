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
      padding: '4rem 1.5rem',
      background: 'linear-gradient(180deg, #0a0a0c 0%, #121216 100%)',
      borderBottom: '1px solid var(--border-subtle)',
      textAlign: 'center'
    }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto' }}>
        {/* Season Pill */}
        <div style={{
          display: 'inline-block',
          padding: '0.3rem 0.9rem',
          borderRadius: '4px',
          background: 'rgba(255, 255, 255, 0.06)',
          border: '1px solid var(--border-subtle)',
          marginBottom: '1.5rem'
        }}>
          <span style={{ fontSize: '0.72rem', letterSpacing: '2.5px', textTransform: 'uppercase', color: '#ffffff', fontWeight: 700 }}>
            SPRING / SUMMER '26
          </span>
        </div>

        {/* Main Headline */}
        <h1 style={{
          fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
          fontWeight: 800,
          lineHeight: 1.08,
          letterSpacing: '-1px',
          marginBottom: '1.2rem',
          color: '#ffffff',
          textTransform: 'uppercase',
          textAlign: 'center'
        }}>
          ATALYA CLOTHING
        </h1>

        <p style={{
          fontSize: '0.85rem',
          letterSpacing: '3px',
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
          maxWidth: '600px',
          margin: '0 auto 2.4rem auto',
          fontWeight: 400,
          lineHeight: 1.6,
          textAlign: 'center'
        }}>
          Contemporary outerwear, tailored blazers, evening wear, and everyday elevated staples.
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
          <button onClick={scrollToCatalog} className="btn-primary" style={{ padding: '0.95rem 2.4rem' }}>
            <span>SHOP COLLECTION</span>
            <ArrowRight size={15} />
          </button>

          <a href="#story-section" className="btn-secondary" style={{ padding: '0.95rem 2rem' }}>
            <span>OUR STORY</span>
          </a>
        </div>
      </div>
    </section>
  );
}
