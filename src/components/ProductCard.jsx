import React from 'react';
import { Heart, Eye, ShoppingBag, Star, MessageCircle } from 'lucide-react';

export default function ProductCard({
  product,
  isWishlisted,
  onToggleWishlist,
  onQuickView,
  onAddToCart,
  onWhatsAppOrder
}) {
  return (
    <div className="glass-card" style={{
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      position: 'relative',
      height: '100%'
    }}>
      {/* Image & Overlay Controls */}
      <div style={{ position: 'relative', paddingTop: '125%', overflow: 'hidden', background: '#121218' }}>
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
            transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        />

        {/* Top Badges */}
        <div style={{ position: 'absolute', top: '0.8rem', left: '0.8rem', display: 'flex', flexDirection: 'column', gap: '0.3rem', zIndex: 2 }}>
          {product.isNew && <span className="badge-gold">NEW</span>}
          <span className="badge-tag">{product.gender}</span>
        </div>

        {/* Action Buttons (Wishlist & Quick View) */}
        <div style={{ position: 'absolute', top: '0.8rem', right: '0.8rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', zIndex: 2 }}>
          <button
            onClick={() => onToggleWishlist(product)}
            title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
            style={{
              background: 'rgba(11, 11, 14, 0.75)',
              backdropFilter: 'blur(8px)',
              border: '1px solid var(--border-light)',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justify: 'center',
              cursor: 'pointer',
              color: isWishlisted ? '#e63946' : '#fff',
              transition: 'var(--transition-fast)'
            }}
          >
            <Heart size={16} fill={isWishlisted ? '#e63946' : 'none'} />
          </button>

          <button
            onClick={() => onQuickView(product)}
            title="Quick View"
            style={{
              background: 'rgba(11, 11, 14, 0.75)',
              backdropFilter: 'blur(8px)',
              border: '1px solid var(--border-light)',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justify: 'center',
              cursor: 'pointer',
              color: '#fff',
              transition: 'var(--transition-fast)'
            }}
          >
            <Eye size={16} />
          </button>
        </div>
      </div>

      {/* Product Content Details */}
      <div style={{ padding: '1.2rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
        <div>
          {/* Category & Rating */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--gold-accent)' }}>
              {product.category}
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', fontSize: '0.75rem', color: '#ffb703' }}>
              <Star size={12} fill="#ffb703" />
              <span>{product.rating}</span>
              <span style={{ color: 'var(--text-muted)' }}>({product.reviewsCount})</span>
            </div>
          </div>

          {/* Title */}
          <h3
            onClick={() => onQuickView(product)}
            className="font-serif"
            style={{
              fontSize: '1.2rem',
              fontWeight: 600,
              color: '#fff',
              marginBottom: '0.4rem',
              cursor: 'pointer',
              lineHeight: 1.2
            }}
          >
            {product.name}
          </h3>

          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.8rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            {product.tagline}
          </p>

          {/* Color Swatches */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '1rem' }}>
            {product.colors.map((col, idx) => (
              <span
                key={idx}
                title={col.name}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: col.hex,
                  border: '1px solid rgba(255,255,255,0.3)',
                  display: 'inline-block'
                }}
              />
            ))}
          </div>
        </div>

        {/* Pricing & CTA Buttons */}
        <div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.6rem', marginBottom: '0.9rem' }}>
            <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--gold-primary)' }}>
              Rs. {product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textDecoration: 'line-through' }}>
                Rs. {product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 42px', gap: '0.5rem' }}>
            <button
              onClick={() => onAddToCart(product, product.sizes[0], product.colors[0].name)}
              className="btn-gold"
              style={{ width: '100%', padding: '0.65rem 0.8rem', fontSize: '0.78rem' }}
            >
              <ShoppingBag size={14} />
              <span>Add to Cart</span>
            </button>

            <button
              onClick={() => onWhatsAppOrder(product)}
              title="Order on WhatsApp"
              style={{
                background: '#25d366',
                border: 'none',
                borderRadius: '6px',
                color: '#000',
                display: 'flex',
                alignItems: 'center',
                justify: 'center',
                cursor: 'pointer'
              }}
            >
              <MessageCircle size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
