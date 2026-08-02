import React from 'react';
import { ShieldCheck, Truck, RefreshCw } from 'lucide-react';

export default function BrandStory() {
  return (
    <section id="story-section" style={{
      padding: '5rem 0',
      background: '#0a0a0c',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)'
    }}>
      <div className="container">
        {/* Centered Heading & Philosophy */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
          <div style={{ fontSize: '0.75rem', letterSpacing: '2.5px', textTransform: 'uppercase', color: '#a1a1aa', fontWeight: 700, marginBottom: '0.8rem' }}>
            OUR PHILOSOPHY
          </div>

          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#fff', marginBottom: '1.2rem', lineHeight: 1.25, textTransform: 'uppercase' }}>
            DESIGNED FOR DISTINCT PRESENCE
          </h2>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '1rem' }}>
            Atalya Clothing was founded to create modern wardrobe staples where structural craftsmanship meets effortless daily comfort. Every silhouette is tailored for clean lines and contemporary fits.
          </p>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.7 }}>
            From heavy silk trench coats to tailored blazers and lounge sets, our collections are designed to empower your personal style across Sri Lanka and beyond.
          </p>
        </div>

        {/* Centered Feature Highlights Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.5rem',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <div style={{ padding: '1.8rem 1.4rem', background: '#121216', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', textAlign: 'center' }}>
            <ShieldCheck size={24} style={{ color: '#fff', margin: '0 auto 0.8rem auto' }} />
            <h4 style={{ color: '#fff', fontSize: '0.88rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.3rem' }}>100% Quality</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>Premium textiles & stitching.</p>
          </div>

          <div style={{ padding: '1.8rem 1.4rem', background: '#121216', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', textAlign: 'center' }}>
            <Truck size={24} style={{ color: '#fff', margin: '0 auto 0.8rem auto' }} />
            <h4 style={{ color: '#fff', fontSize: '0.88rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.3rem' }}>Express Delivery</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>Islandwide shipping in 1-3 days.</p>
          </div>

          <div style={{ padding: '1.8rem 1.4rem', background: '#121216', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', textAlign: 'center' }}>
            <RefreshCw size={24} style={{ color: '#fff', margin: '0 auto 0.8rem auto' }} />
            <h4 style={{ color: '#fff', fontSize: '0.88rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.3rem' }}>Easy Exchange</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>Hassle-free size exchange.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
