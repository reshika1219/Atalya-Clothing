import React from 'react';
import { ArrowRight, Sparkles, MessageCircle, Phone } from 'lucide-react';

export default function Hero() {
  const scrollToCatalog = () => {
    const catalogElem = document.getElementById('catalog-section');
    if (catalogElem) catalogElem.scrollIntoView({ behavior: 'smooth' });
  };

  // WhatsApp link targeting hidden 0717995000 behind wa.me
  const whatsappUrl = `https://wa.me/94717995000?text=${encodeURIComponent('Hello Atalya Clothing! I would like to inquire about your luxury collection.')}`;

  return (
    <section style={{
      position: 'relative',
      minHeight: '85vh',
      display: 'flex',
      alignItems: 'center',
      justify: 'center',
      overflow: 'hidden',
      padding: '4rem 1.5rem',
      background: 'radial-gradient(circle at 50% 30%, #1c1c28 0%, #0b0b0e 70%)'
    }}>
      {/* Background Ambient Glow Elements */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(212,175,55,0.12) 0%, rgba(0,0,0,0) 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '900px' }}>
        {/* Brand Tag Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.6rem',
          padding: '0.4rem 1.2rem',
          borderRadius: '30px',
          background: 'rgba(212, 175, 55, 0.1)',
          border: '1px solid var(--border-gold)',
          marginBottom: '2rem',
          boxShadow: '0 4px 20px rgba(212, 175, 55, 0.15)'
        }}>
          <Sparkles size={14} style={{ color: 'var(--gold-primary)' }} />
          <span style={{ fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--gold-light)', fontWeight: 600 }}>
            New Unisex & Contemporary Collection
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif" style={{
          fontSize: 'clamp(2.8rem, 6vw, 4.8rem)',
          fontWeight: 400,
          lineHeight: 1.1,
          letterSpacing: '1px',
          marginBottom: '1.2rem',
          color: '#ffffff'
        }}>
          Redefining Contemporary Luxury & Couture
        </h1>

        {/* Sub-Headline & Tagline */}
        <p className="font-cursive" style={{
          fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
          color: 'var(--gold-primary)',
          marginBottom: '1.8rem',
          textShadow: '0 2px 10px rgba(212,175,55,0.3)'
        }}>
          where elegance begins
        </p>

        <p style={{
          fontSize: 'clamp(0.95rem, 1.5vw, 1.15rem)',
          color: 'var(--text-secondary)',
          maxWidth: '680px',
          margin: '0 auto 2.5rem auto',
          fontWeight: 300,
          lineHeight: 1.7
        }}>
          Explore meticulously tailored outerwear, evening gowns, silk blouses, and refined luxury staples designed to transcend seasons and embrace timeless elegance.
        </p>

        {/* CTA Buttons */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justify: 'center',
          gap: '1.2rem',
          flexWrap: 'wrap'
        }}>
          <button onClick={scrollToCatalog} className="btn-gold" style={{ padding: '1rem 2.2rem', fontSize: '0.9rem' }}>
            <span>Explore Collection</span>
            <ArrowRight size={18} />
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold"
            style={{ padding: '0.95rem 2rem', fontSize: '0.9rem' }}
          >
            <MessageCircle size={18} style={{ color: '#25d366' }} />
            <span>Order via WhatsApp</span>
          </a>
        </div>

        {/* Direct Phone Call Indicator */}
        <div style={{ marginTop: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
          <Phone size={14} style={{ color: 'var(--gold-primary)' }} />
          <span>Call Support & Inquiries: <strong style={{ color: '#fff' }}>077 431 1313</strong></span>
        </div>
      </div>
    </section>
  );
}
