import React, { useState } from 'react';
import { Phone, Mail, Facebook, Send, Check } from 'lucide-react';

export default function Footer({ onSelectCategory }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer style={{
      background: '#07070a',
      borderTop: '1px solid var(--border-subtle)',
      color: 'var(--text-secondary)',
      padding: '4rem 0 2rem 0',
      fontSize: '0.85rem'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
          gap: '3rem',
          marginBottom: '3.5rem'
        }}>
          {/* Col 1: Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <img src="/logo.jpg" alt="Atalya" style={{ height: '38px', borderRadius: '2px' }} />
              <div>
                <h3 style={{ color: '#fff', fontSize: '1.1rem', letterSpacing: '3px', fontWeight: 800 }}>ATALYA</h3>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.62rem', letterSpacing: '1.8px', textTransform: 'uppercase' }}>where elegance begins</span>
              </div>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: 1.6, marginBottom: '1.2rem' }}>
              Contemporary apparel & tailored essentials in Sri Lanka. Designed for clean lines and modern fits.
            </p>
            <div style={{ display: 'flex', gap: '0.6rem' }}>
              <a
                href="https://www.facebook.com/profile.php?id=61592837846677"
                target="_blank"
                rel="noopener noreferrer"
                style={{ width: '34px', height: '34px', borderRadius: '50%', background: '#121216', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-subtle)' }}
              >
                <Facebook size={15} />
              </a>
              <a
                href="tel:0774311313"
                style={{ width: '34px', height: '34px', borderRadius: '50%', background: '#121216', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-subtle)' }}
              >
                <Phone size={15} />
              </a>
              <a
                href="mailto:atalyaclothing@gmail.com"
                style={{ width: '34px', height: '34px', borderRadius: '50%', background: '#121216', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-subtle)' }}
              >
                <Mail size={15} />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1.2rem', fontWeight: 700 }}>
              NAVIGATION
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              <li><a href="#catalog-section" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.8rem' }}>ALL COLLECTIONS</a></li>
              <li><a href="#catalog-section" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.8rem' }}>WOMEN'S FASHION</a></li>
              <li><a href="#catalog-section" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.8rem' }}>MEN'S FASHION</a></li>
              <li><a href="#catalog-section" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.8rem' }}>UNISEX ESSENTIALS</a></li>
              <li><a href="#story-section" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.8rem' }}>OUR STORY</a></li>
            </ul>
          </div>

          {/* Col 3: Customer Support */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1.2rem', fontWeight: 700 }}>
              CUSTOMER CARE
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.8rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={14} style={{ color: '#fff' }} />
                <span>Call Support: <strong>077 431 1313</strong></span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={14} style={{ color: '#fff' }} />
                <span>atalyaclothing@gmail.com</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Facebook size={14} style={{ color: '#fff' }} />
                <a href="https://www.facebook.com/profile.php?id=61592837846677" target="_blank" rel="noreferrer" style={{ color: '#fff', textDecoration: 'none' }}>
                  Facebook Page
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1.2rem', fontWeight: 700 }}>
              NEWSLETTER
            </h4>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.9rem' }}>
              Subscribe for new drop announcements and special offers.
            </p>
            {subscribed ? (
              <div style={{ background: '#121216', border: '1px solid var(--border-subtle)', padding: '0.7rem 0.9rem', borderRadius: '4px', color: '#fff', fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Check size={14} /> You are subscribed to Atalya updates.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0.4rem' }}>
                <input
                  type="email"
                  placeholder="Enter email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    flex: 1,
                    background: '#121216',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '4px',
                    padding: '0.55rem 0.7rem',
                    color: '#fff',
                    outline: 'none',
                    fontSize: '0.78rem'
                  }}
                />
                <button type="submit" className="btn-primary" style={{ padding: '0.55rem 0.8rem' }}>
                  <Send size={13} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="footer-bottom-bar"
          style={{
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '1.4rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.75rem',
            color: 'var(--text-muted)'
          }}
        >
          <div>
            © {new Date().getFullYear()} <strong>ATALYA CLOTHING</strong>. All Rights Reserved.
          </div>
          <div>
            <span>Contemporary Sri Lankan Apparel</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .footer-bottom-bar {
            flex-direction: column !important;
            justify-content: center !important;
            text-align: center !important;
            gap: 0.4rem !important;
          }
        }
      `}</style>
    </footer>
  );
}
