import React, { useState } from 'react';
import { Phone, Mail, Facebook, Send, Heart, Check } from 'lucide-react';

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
      borderTop: '1px solid var(--border-gold)',
      color: 'var(--text-secondary)',
      padding: '4rem 0 2rem 0',
      fontSize: '0.88rem'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '3rem',
          marginBottom: '3.5rem'
        }}>
          {/* Col 1: Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
              <img src="/logo.jpg" alt="Atalya" style={{ height: '42px', borderRadius: '4px', border: '1px solid var(--border-gold)' }} />
              <div>
                <h3 className="font-sans" style={{ color: '#fff', fontSize: '1.2rem', letterSpacing: '3px', fontWeight: 700 }}>ATALYA</h3>
                <span className="font-cursive" style={{ color: 'var(--gold-primary)', fontSize: '0.95rem' }}>where elegance begins</span>
              </div>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.83rem', lineHeight: 1.7, marginBottom: '1.2rem' }}>
              Contemporary luxury and unisex bespoke tailoring. Designed to elevate presence with quiet elegance.
            </p>
            <div style={{ display: 'flex', gap: '0.8rem' }}>
              <a
                href="https://www.facebook.com/profile.php?id=61592837846677"
                target="_blank"
                rel="noopener noreferrer"
                style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: '0.2s' }}
              >
                <Facebook size={16} />
              </a>
              <a
                href="tel:0774311313"
                style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', color: 'var(--gold-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: '0.2s' }}
              >
                <Phone size={16} />
              </a>
              <a
                href="mailto:atalyaclothing@gmail.com"
                style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: '0.2s' }}
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '0.95rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1.2rem' }}>
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <li><a href="#catalog-section" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>All Collections</a></li>
              <li><a href="#catalog-section" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Women's Fashion</a></li>
              <li><a href="#catalog-section" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Men's Fashion</a></li>
              <li><a href="#catalog-section" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Unisex Essentials</a></li>
              <li><a href="#story-section" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Our Brand Story</a></li>
            </ul>
          </div>

          {/* Col 3: Customer Care & Contacts */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '0.95rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1.2rem' }}>
              Customer Care
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={15} style={{ color: 'var(--gold-primary)' }} />
                <span>Call Support: <strong>077 431 1313</strong></span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={15} style={{ color: 'var(--gold-primary)' }} />
                <span>atalyaclothing@gmail.com</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Facebook size={15} style={{ color: 'var(--gold-primary)' }} />
                <a href="https://www.facebook.com/profile.php?id=61592837846677" target="_blank" rel="noreferrer" style={{ color: '#fff', textDecoration: 'none' }}>
                  Facebook Page
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: VIP Newsletter */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '0.95rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1.2rem' }}>
              VIP Privileges
            </h4>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
              Subscribe for private drop announcements, exclusive previews, and invitations.
            </p>
            {subscribed ? (
              <div style={{ background: 'rgba(212,175,55,0.15)', border: '1px solid var(--gold-primary)', padding: '0.8rem', borderRadius: '6px', color: 'var(--gold-light)', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Check size={14} style={{ color: 'var(--gold-primary)' }} /> Welcome to the Atalya VIP Private List.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0.4rem' }}>
                <input
                  type="email"
                  placeholder="Enter email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    flex: 1,
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid var(--border-light)',
                    borderRadius: '6px',
                    padding: '0.6rem',
                    color: '#fff',
                    outline: 'none',
                    fontSize: '0.82rem'
                  }}
                />
                <button type="submit" className="btn-gold" style={{ padding: '0.6rem 0.9rem' }}>
                  <Send size={14} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom copyright line */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '1.5rem',
          display: 'flex',
          justify: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.78rem',
          color: 'var(--text-muted)'
        }}>
          <div>
            © {new Date().getFullYear()} <strong>Atalya Clothing</strong>. All Rights Reserved. <em>where elegance begins</em>.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <span>Designed for Luxury Fashion</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
