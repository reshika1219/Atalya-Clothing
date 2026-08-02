import React from 'react';
import { Sparkles, Gem, Shield, Feather } from 'lucide-react';

export default function BrandStory() {
  return (
    <section id="story-section" style={{
      padding: '6rem 0',
      background: 'linear-gradient(180deg, #0b0b0e 0%, #121218 50%, #0b0b0e 100%)',
      borderTop: '1px solid var(--border-light)',
      borderBottom: '1px solid var(--border-light)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '4rem',
          alignItems: 'center'
        }}>
          {/* Left Column: Editorial Graphic / Logo Showcase */}
          <div style={{ position: 'relative' }}>
            <div className="glass-card" style={{
              padding: '3rem 2rem',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid var(--border-gold)'
            }}>
              <img
                src="/logo.jpg"
                alt="Atalya Monogram Logo"
                style={{
                  width: '140px',
                  height: '140px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  margin: '0 auto 1.5rem auto',
                  border: '2px solid var(--gold-primary)',
                  boxShadow: 'var(--shadow-gold)'
                }}
              />

              <h3 className="font-serif" style={{ fontSize: '2rem', color: '#fff', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                ATALYA
              </h3>
              <p className="font-cursive" style={{ fontSize: '1.6rem', color: 'var(--gold-primary)', marginBottom: '1.5rem' }}>
                where elegance begins
              </p>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
                <span className="badge-gold">Contemporary Unisex</span>
                <span className="badge-gold">Bespoke Fitting</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Text */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--gold-primary)', fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}>
              <Sparkles size={14} />
              <span>THE BRAND PHILOSOPHY</span>
            </div>

            <h2 className="font-serif" style={{ fontSize: '2.6rem', lineHeight: 1.2, fontWeight: 400, color: '#fff', marginBottom: '1.5rem' }}>
              Crafted for Those Who Command Attention Softly
            </h2>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.8, marginBottom: '1.2rem' }}>
              Atalya Clothing was founded on a singular vision: to create timeless wardrobe pieces where impeccable structural craftsmanship meets effortless modern allure. Every silhouette is designed to celebrate individuality without compromising comfort.
            </p>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.8, marginBottom: '2rem' }}>
              From heavy Italian silk trench coats to delicate charmeuse evening gowns and versatile organic cotton loungewear, our collections transcend seasonal trends—offering refined, enduring luxury.
            </p>

            {/* Feature Highlights Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
                <Gem size={20} style={{ color: 'var(--gold-primary)', flexShrink: 0, marginTop: '0.2rem' }} />
                <div>
                  <h4 style={{ color: '#fff', fontSize: '0.92rem', marginBottom: '0.2rem' }}>Pure Silk & Wool</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>Only natural, luxury grade textiles used.</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
                <Shield size={20} style={{ color: 'var(--gold-primary)', flexShrink: 0, marginTop: '0.2rem' }} />
                <div>
                  <h4 style={{ color: '#fff', fontSize: '0.92rem', marginBottom: '0.2rem' }}>Precision Fit</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>Tailored proportions for every silhouette.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
