import React from 'react';
import { Heart } from 'lucide-react';

export default function ProductCard({
  product,
  isWishlisted,
  onToggleWishlist,
  onQuickView,
  onAddToCart,
  onWhatsAppOrder
}) {
  return (
    <div
      className="glass-card"
      onClick={() => onQuickView(product)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        cursor: 'pointer',
        height: '100%',
        background: '#121216',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--border-subtle)',
        transition: 'all 0.3s ease'
      }}
    >
      {/* Product Image Frame */}
      <div style={{ position: 'relative', paddingTop: '125%', overflow: 'hidden', background: '#0a0a0c' }}>
        <img
          src={product.image}
          alt={product.name}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.04)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        />

        {/* Badges */}
        <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem', display: 'flex', gap: '0.35rem', zIndex: 2 }}>
          {product.isNew && <span className="badge-accent">NEW</span>}
          <span className="badge-tag">{product.gender}</span>
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          title={isWishlisted ? "Remove from Wishlist" : "Save to Wishlist"}
          style={{
            position: 'absolute',
            top: '0.75rem',
            right: '0.75rem',
            background: 'rgba(0, 0, 0, 0.65)',
            border: 'none',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: isWishlisted ? '#e63946' : '#ffffff',
            zIndex: 2,
            transition: 'transform 0.2s ease'
          }}
        >
          <Heart size={15} fill={isWishlisted ? '#e63946' : 'none'} />
        </button>
      </div>

      {/* Product Content Details — Centered alignment like Carnage & Pepper Street */}
      <div style={{ padding: '1rem 1.1rem 1.2rem 1.1rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between', textAlign: 'center' }}>
        <div>
          <span style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)', fontWeight: 700, display: 'block' }}>
            {product.category}
          </span>

          <h3 style={{ fontSize: '0.98rem', fontWeight: 700, color: '#ffffff', marginTop: '0.2rem', marginBottom: '0.35rem', lineHeight: 1.3 }}>
            {product.name}
          </h3>

          <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.9rem' }}>
            LKR {product.price.toLocaleString()}
            {product.originalPrice && (
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textDecoration: 'line-through', marginLeft: '0.5rem', fontWeight: 400 }}>
                LKR {product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onQuickView(product);
          }}
          className="btn-primary"
          style={{ width: '100%', padding: '0.7rem 0.8rem', fontSize: '0.75rem' }}
        >
          QUICK VIEW
        </button>
      </div>
    </div>
  );
}
