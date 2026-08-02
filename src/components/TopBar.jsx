import React from 'react';
import { Phone } from 'lucide-react';

export default function TopBar() {
  return (
    <div style={{
      background: '#000000',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      color: '#ffffff',
      fontSize: '0.75rem',
      fontWeight: 600,
      letterSpacing: '1px',
      textTransform: 'uppercase',
      padding: '0.6rem 1.5rem',
      position: 'relative',
      zIndex: 60,
      textAlign: 'center'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '0.8rem',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <span>
          Free Islandwide Express Shipping on orders over <strong style={{ color: '#fff', borderBottom: '1px solid #fff', marginLeft: '4px' }}>LKR 15,000</strong>
        </span>
        <span style={{ color: 'rgba(255,255,255,0.3)', margin: '0 0.2rem' }}>|</span>
        <a
          href="tel:0774311313"
          style={{ color: '#a1a1aa', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.35rem', transition: 'color 0.2s' }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#a1a1aa'}
        >
          <Phone size={12} />
          <span>Support: 077 431 1313</span>
        </a>
        <span style={{ color: 'rgba(255,255,255,0.3)', margin: '0 0.2rem' }}>|</span>
        <a
          href="https://www.facebook.com/profile.php?id=61592837846677"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#a1a1aa', textDecoration: 'none', transition: 'color 0.2s' }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#a1a1aa'}
        >
          Facebook
        </a>
      </div>
    </div>
  );
}
