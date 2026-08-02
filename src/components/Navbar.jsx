import React, { useState } from 'react';
import { ShoppingBag, Heart, Search, Menu, X } from 'lucide-react';

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
        justifyContent: 'space-between',
        padding: '0.9rem 1.5rem',
        minHeight: '70px'
      }}>
        {/* Brand Logo & High-Fashion Typography */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <img
            src="/logo.jpg"
            alt="Atalya Clothing"
            style={{
              height: '42px',
              width: 'auto',
              borderRadius: '2px',
              objectFit: 'cover',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 800,
              fontSize: '1.35rem',
              letterSpacing: '4px',
              color: '#ffffff',
              textTransform: 'uppercase',
              lineHeight: 1
            }}>
              ATALYA
            </span>
            <span style={{
              fontSize: '0.58rem',
              color: '#a1a1aa',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              fontWeight: 700,
              lineHeight: 1.2,
              marginTop: '3px'
            }}>
              COLLECTION
            </span>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2.2rem' }}>
          {[
            { label: 'ALL', gender: 'All' },
            { label: 'WOMEN', gender: 'Women' },
            { label: 'MEN', gender: 'Men' },
            { label: 'UNISEX', gender: 'Unisex' }
          ].map((item) => (
            <a
              key={item.gender}
              href="#catalog-section"
              onClick={() => handleGenderSelect(item.gender)}
              style={{
                color: activeGender === item.gender ? '#ffffff' : '#a1a1aa',
                borderBottom: activeGender === item.gender ? '2px solid #ffffff' : '2px solid transparent',
                paddingBottom: '4px',
                textDecoration: 'none',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                transition: 'all 0.2s ease'
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#story-section"
            style={{
              color: '#a1a1aa',
              textDecoration: 'none',
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              transition: 'color 0.2s'
            }}
          >
            OUR STORY
          </a>
        </nav>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          {/* Search Toggle */}
          <div style={{ position: 'relative' }}>
            {searchOpen ? (
              <div style={{ display: 'flex', alignItems: 'center', background: '#181820', borderRadius: '4px', padding: '0.25rem 0.6rem', border: '1px solid var(--border-strong)' }}>
                <Search size={15} style={{ color: '#a1a1aa' }} />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  style={{
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: '#fff',
                    padding: '0.3rem 0.5rem',
                    fontSize: '0.82rem',
                    width: '150px'
                  }}
                />
                <button onClick={() => setSearchOpen(false)} style={{ background: 'transparent', border: 'none', color: '#a1a1aa', cursor: 'pointer' }}>
                  <X size={14} />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                title="Search"
                style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer', padding: '0.4rem', display: 'flex', alignItems: 'center' }}
              >
                <Search size={19} />
              </button>
            )}
          </div>

          {/* Wishlist */}
          <button
            onClick={onOpenWishlist}
            title="Wishlist"
            style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer', padding: '0.4rem', position: 'relative', display: 'flex', alignItems: 'center' }}
          >
            <Heart size={19} style={{ color: wishlistCount > 0 ? '#e63946' : '#fff' }} />
            {wishlistCount > 0 && (
              <span style={{ position: 'absolute', top: '2px', right: '2px', background: '#ffffff', color: '#000', fontSize: '0.62rem', fontWeight: 800, width: '15px', height: '15px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Cart Bag */}
          <button
            onClick={onOpenCart}
            title="Cart"
            style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer', padding: '0.4rem', position: 'relative', display: 'flex', alignItems: 'center' }}
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span style={{ position: 'absolute', top: '1px', right: '1px', background: '#ffffff', color: '#000', fontSize: '0.62rem', fontWeight: 800, width: '16px', height: '16px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer', padding: '0.4rem', display: 'none' }}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{ background: '#121216', borderTop: '1px solid var(--border-subtle)', padding: '1.2rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
          <a href="#catalog-section" onClick={() => handleGenderSelect('All')} style={{ color: '#fff', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 700, letterSpacing: '1px' }}>ALL COLLECTIONS</a>
          <a href="#catalog-section" onClick={() => handleGenderSelect('Women')} style={{ color: '#fff', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 700, letterSpacing: '1px' }}>WOMEN</a>
          <a href="#catalog-section" onClick={() => handleGenderSelect('Men')} style={{ color: '#fff', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 700, letterSpacing: '1px' }}>MEN</a>
          <a href="#catalog-section" onClick={() => handleGenderSelect('Unisex')} style={{ color: '#fff', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 700, letterSpacing: '1px' }}>UNISEX</a>
          <a href="#story-section" onClick={() => setMobileMenuOpen(false)} style={{ color: '#fff', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 700, letterSpacing: '1px' }}>OUR STORY</a>
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
