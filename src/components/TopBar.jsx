import React from 'react';
import { Phone, Truck, Facebook } from 'lucide-react';

export default function TopBar() {
  return (
    <div style={{
      background: 'linear-gradient(90deg, #0b0b0e 0%, #161622 50%, #0b0b0e 100%)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      color: '#a1a1aa',
      fontSize: '0.78rem',
      padding: '0.45rem 1.5rem',
      position: 'relative',
      zIndex: 60
    }}>
      <div className="container" style={{
        display: 'flex',
        justify: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '0.5rem'
      }}>
        {/* Delivery Ticker */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Truck size={14} style={{ color: 'var(--gold-primary)' }} />
          <span>Complimentary Islandwide Express Delivery on Orders Over <strong style={{ color: '#fff' }}>Rs. 15,000</strong></span>
        </div>

        {/* Contact Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
          <a
            href="tel:0774311313"
            style={{ color: '#d4af37', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.35rem', fontWeight: 600 }}
          >
            <Phone size={13} />
            <span>077 431 1313</span>
          </a>
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
          <a
            href="https://www.facebook.com/profile.php?id=61592837846677"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#a1a1aa', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.35rem', transition: 'color 0.2s' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#a1a1aa'}
          >
            <Facebook size={13} />
            <span>Facebook Page</span>
          </a>
        </div>
      </div>
    </div>
  );
}
