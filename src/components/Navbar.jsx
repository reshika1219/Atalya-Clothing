import React, { useState } from 'react';
import { ShoppingBag, Heart, Search, Menu, X, Phone } from 'lucide-react';

export default function Navbar({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  searchQuery,
  setSearchQuery,
  activeGender,
  setActiveGender
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const handleGenderSelect = (gender) => {
    setActiveGender(gender);
    setMobileMenuOpen(false);
    const catalogElem = document.getElementById('catalog-section');
    if (catalogElem) catalogElem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="glass-nav" style={{ position: 'sticky', top: 0, zIndex: 50 }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justify: 'space-between',
        padding: '0.85rem 1.5rem',
        minHeight: '75px'
      }}>
        {/* Brand Logo & Tagline */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', textDecoration: 'none' }}>
          <img
            src="/logo.jpg"
            alt="Atalya Clothing"
            style={{
              height: '46px',
              width: 'auto',
              borderRadius: '4px',
              border: '1px solid var(--border-gold)',
              objectFit: 'cover'
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 700,
              fontSize: '1.25rem',
              letterSpacing: '3.5px',
              color: '#fff',
              textTransform: 'uppercase',
              lineHeight: 1.1
            }}>
              ATALYA
            </span>
            <span className="font-cursive" style={{
              fontSize: '0.95rem',
              color: 'var(--gold-primary)',
              letterSpacing: '0.5px',
              lineHeight: 1
            }}>
              where elegance begins
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <a
            href="#catalog-section"
            onClick={() => handleGenderSelect('All')}
            style={{
              color: activeGender === 'All' ? 'var(--gold-primary)' : '#a1a1aa',
              textDecoration: 'none',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              transition: 'color 0.2s'
            }}
          >
            Collections
          </a>
          <a
            href="#catalog-section"
            onClick={() => handleGenderSelect('Women')}
            style={{
              color: activeGender === 'Women' ? 'var(--gold-primary)' : '#a1a1aa',
              textDecoration: 'none',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              transition: 'color 0.2s'
            }}
          >
            Women
          </a>
          <a
            href="#catalog-section"
            onClick={() => handleGenderSelect('Men')}
            style={{
              color: activeGender === 'Men' ? 'var(--gold-primary)' : '#a1a1aa',
              textDecoration: 'none',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              transition: 'color 0.2s'
            }}
          >
            Men
          </a>
          <a
            href="#catalog-section"
            onClick={() => handleGenderSelect('Unisex')}
            style={{
              color: activeGender === 'Unisex' ? 'var(--gold-primary)' : '#a1a1aa',
              textDecoration: 'none',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              transition: 'color 0.2s'
            }}
          >
            Unisex
          </a>
          <a
            href="#story-section"
            style={{
              color: '#a1a1aa',
              textDecoration: 'none',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              transition: 'color 0.2s'
            }}
          >
            Our Story
          </a>
          <a
            href="#contact-section"
            style={{
              color: '#a1a1aa',
              textDecoration: 'none',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              transition: 'color 0.2s'
            }}
          >
            Contact
          </a>
        </nav>

        {/* Actions (Search, Wishlist, Cart) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {/* Search Toggle */}
          <div style={{ position: 'relative' }}>
            {searchOpen ? (
              <div style={{ display: 'flex', alignItems: 'center', background: 'rgba(255,255,255,0.06)', borderRadius: '20px', padding: '0.2rem 0.6rem', border: '1px solid var(--border-gold)' }}>
                <Search size={16} style={{ color: 'var(--gold-primary)' }} />
                <input
                  type="text"
                  placeholder="Search elegance..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  style={{
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: '#fff',
                    padding: '0.3rem 0.5rem',
                    fontSize: '0.85rem',
                    width: '160px'
                  }}
                />
                <button
                  onClick={() => setSearchOpen(false)}
                  style={{ background: 'transparent', border: 'none', color: '#a1a1aa', cursor: 'pointer' }}
                >
                  <X size={14} />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                title="Search Products"
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#f5f5f7',
                  cursor: 'pointer',
                  padding: '0.4rem',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <Search size={20} />
              </button>
            )}
          </div>

          {/* Wishlist Icon with Counter */}
          <button
            onClick={onOpenWishlist}
            title="Wishlist"
            style={{
              background: 'transparent',
              border: 'none',
              color: '#f5f5f7',
              cursor: 'pointer',
              padding: '0.4rem',
              position: 'relative',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Heart size={20} style={{ color: wishlistCount > 0 ? '#e63946' : '#f5f5f7' }} />
            {wishlistCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '0',
                right: '0',
                background: 'var(--gold-primary)',
                color: '#000',
                fontSize: '0.65rem',
                fontWeight: 700,
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Cart Icon with Counter */}
          <button
            onClick={onOpenCart}
            title="Shopping Cart"
            style={{
              background: 'transparent',
              border: 'none',
              color: '#f5f5f7',
              cursor: 'pointer',
              padding: '0.4rem',
              position: 'relative',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <ShoppingBag size={21} style={{ color: 'var(--gold-primary)' }} />
            {cartCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '-2px',
                right: '-2px',
                background: 'var(--gold-gradient)',
                color: '#000',
                fontSize: '0.68rem',
                fontWeight: 800,
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(212,175,55,0.5)'
              }}>
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#fff',
              cursor: 'pointer',
              padding: '0.4rem',
              display: 'none'
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          background: 'var(--bg-secondary)',
          borderTop: '1px solid var(--border-light)',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          <a href="#catalog-section" onClick={() => handleGenderSelect('All')} style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem', fontWeight: 600 }}>All Collections</a>
          <a href="#catalog-section" onClick={() => handleGenderSelect('Women')} style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem', fontWeight: 600 }}>Women's Collection</a>
          <a href="#catalog-section" onClick={() => handleGenderSelect('Men')} style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem', fontWeight: 600 }}>Men's Collection</a>
          <a href="#catalog-section" onClick={() => handleGenderSelect('Unisex')} style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem', fontWeight: 600 }}>Unisex Collection</a>
          <a href="#story-section" onClick={() => setMobileMenuOpen(false)} style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem', fontWeight: 600 }}>Our Story</a>
          <a href="#contact-section" onClick={() => setMobileMenuOpen(false)} style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem', fontWeight: 600 }}>Contact & Store Info</a>
        </div>
      )}

      <style>{`
        @media (max-width: 850px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
