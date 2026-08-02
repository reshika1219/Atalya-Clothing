import React, { useState } from 'react';
import { X, Heart, Star, Ruler } from 'lucide-react';

export default function ProductModal({
  product,
  isWishlisted,
  onClose,
  onToggleWishlist,
  onAddToCart,
  onWhatsAppOrder,
  onOpenSizeGuide
}) {
  if (!product) return null;

  const [selectedImage, setSelectedImage] = useState(product.image);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0].name);
  const [quantity, setQuantity] = useState(1);

  const handleDirectOrder = () => {
    onWhatsAppOrder(product, selectedSize, selectedColor, quantity);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="glass-card animate-fade-in"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '840px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '0',
          position: 'relative',
          background: '#121216',
          border: '1px solid var(--border-strong)',
          borderRadius: 'var(--radius-lg)'
        }}
      >
        {/* Sticky Header Bar with Close Button at Far Top Right */}
        <div style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.9rem 1.4rem',
          borderBottom: '1px solid var(--border-subtle)',
          background: '#0a0a0c'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span className="badge-accent">{product.category}</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>{product.gender}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
            <button
              onClick={() => onToggleWishlist(product)}
              style={{
                background: 'transparent',
                border: 'none',
                color: isWishlisted ? '#e63946' : 'var(--text-secondary)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.78rem',
                fontWeight: 700
              }}
            >
              <Heart size={16} fill={isWishlisted ? '#e63946' : 'none'} />
              <span>{isWishlisted ? 'SAVED' : 'WISHLIST'}</span>
            </button>

            {/* Exit button in top right corner */}
            <button
              onClick={onClose}
              title="Close modal (Esc)"
              style={{
                background: '#ffffff',
                border: 'none',
                color: '#000000',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontWeight: 700,
                transition: 'transform 0.2s ease',
                boxShadow: '0 2px 8px rgba(0,0,0,0.5)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Content Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {/* Left Column: Image Gallery */}
          <div style={{ padding: '1.4rem', background: '#0a0a0c', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <div style={{ position: 'relative', paddingTop: '115%', borderRadius: '6px', overflow: 'hidden', border: '1px solid var(--border-subtle)' }}>
              <img
                src={selectedImage}
                alt={product.name}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Gallery Thumbnails */}
            <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', justifyContent: 'center' }}>
              {(product.gallery || [product.image]).map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(imgUrl)}
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    border: selectedImage === imgUrl ? '2px solid #ffffff' : '1px solid var(--border-subtle)',
                    cursor: 'pointer',
                    background: 'none',
                    padding: 0
                  }}
                >
                  <img src={imgUrl} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Product Specs & Ordering */}
          <div style={{ padding: '1.6rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#ffb703', fontSize: '0.8rem', marginBottom: '0.5rem' }}>
                <Star size={13} fill="#ffb703" />
                <strong>{product.rating}</strong>
                <span style={{ color: 'var(--text-muted)' }}>({product.reviewsCount} reviews)</span>
              </div>

              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                {product.name}
              </h2>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.6rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff' }}>
                  LKR {product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)', textDecoration: 'line-through' }}>
                    LKR {product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>

              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.4rem', lineHeight: 1.6 }}>
                {product.description}
              </p>

              {/* Color Selection */}
              <div style={{ marginBottom: '1.1rem' }}>
                <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 700 }}>
                  COLOR: <strong style={{ color: '#fff' }}>{selectedColor}</strong>
                </label>
                <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap' }}>
                  {product.colors.map((col) => (
                    <button
                      key={col.name}
                      onClick={() => setSelectedColor(col.name)}
                      style={{
                        padding: '0.35rem 0.75rem',
                        borderRadius: '4px',
                        border: selectedColor === col.name ? '1px solid #ffffff' : '1px solid var(--border-subtle)',
                        background: selectedColor === col.name ? '#ffffff' : '#0a0a0c',
                        color: selectedColor === col.name ? '#000000' : 'var(--text-secondary)',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem'
                      }}
                    >
                      <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: col.hex, display: 'inline-block', border: '1px solid rgba(0,0,0,0.2)' }} />
                      {col.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div style={{ marginBottom: '1.2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                  <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 700 }}>
                    SIZE: <strong style={{ color: '#fff' }}>{selectedSize}</strong>
                  </label>
                  <button
                    onClick={onOpenSizeGuide}
                    style={{ background: 'transparent', border: 'none', color: '#ffffff', cursor: 'pointer', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.25rem', textDecoration: 'underline' }}
                  >
                    <Ruler size={12} />
                    <span>Size Guide</span>
                  </button>
                </div>

                <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap' }}>
                  {product.sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      style={{
                        minWidth: '38px',
                        height: '38px',
                        borderRadius: '4px',
                        border: selectedSize === sz ? '1px solid #ffffff' : '1px solid var(--border-subtle)',
                        background: selectedSize === sz ? '#ffffff' : '#0a0a0c',
                        color: selectedSize === sz ? '#000000' : 'var(--text-primary)',
                        fontWeight: 700,
                        fontSize: '0.8rem',
                        cursor: 'pointer'
                      }}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Counter */}
              <div style={{ marginBottom: '1.4rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 700 }}>
                  QTY:
                </label>
                <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--border-subtle)', borderRadius: '4px', overflow: 'hidden', background: '#0a0a0c' }}>
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    style={{ background: 'transparent', border: 'none', color: '#fff', width: '30px', height: '30px', cursor: 'pointer', fontWeight: 700 }}
                  >
                    -
                  </button>
                  <span style={{ padding: '0 0.7rem', color: '#fff', fontSize: '0.85rem', fontWeight: 700 }}>{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    style={{ background: 'transparent', border: 'none', color: '#fff', width: '30px', height: '30px', cursor: 'pointer', fontWeight: 700 }}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <button onClick={handleDirectOrder} className="btn-primary" style={{ width: '100%' }}>
                BUY NOW
              </button>

              <button
                onClick={() => { onAddToCart(product, selectedSize, selectedColor, quantity); onClose(); }}
                className="btn-secondary"
                style={{ width: '100%' }}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
