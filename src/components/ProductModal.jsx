import React, { useState } from 'react';
import { X, Heart, ShoppingBag, MessageCircle, Star, Ruler, Check, Truck, ShieldCheck } from 'lucide-react';

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

  const handleAdd = () => {
    onAddToCart(product, selectedSize, selectedColor, quantity);
    onClose();
  };

  const handleDirectWhatsApp = () => {
    onWhatsAppOrder(product, selectedSize, selectedColor, quantity);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="glass-card animate-fade-in"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '900px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '0',
          position: 'relative',
          border: '1px solid var(--border-gold)'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'rgba(0,0,0,0.6)',
            border: '1px solid var(--border-light)',
            color: '#fff',
            borderRadius: '50%',
            width: '38px',
            height: '38px',
            display: 'flex',
            alignItems: 'center',
            justify: 'center',
            cursor: 'pointer',
            zIndex: 10
          }}
        >
          <X size={20} />
        </button>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {/* Left Column: Image Gallery */}
          <div style={{ padding: '1.5rem', background: '#0b0b0e', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ position: 'relative', paddingTop: '110%', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-light)' }}>
              <img
                src={selectedImage}
                alt={product.name}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Thumbnail selector */}
            <div style={{ display: 'flex', gap: '0.6rem', overflowX: 'auto' }}>
              {(product.gallery || [product.image]).map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(imgUrl)}
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '6px',
                    overflow: 'hidden',
                    border: selectedImage === imgUrl ? '2px solid var(--gold-primary)' : '1px solid var(--border-light)',
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

          {/* Right Column: Product Specs & Options */}
          <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span className="badge-gold">{product.category} • {product.gender}</span>
                <button
                  onClick={() => onToggleWishlist(product)}
                  style={{ background: 'transparent', border: 'none', color: isWishlisted ? '#e63946' : '#a1a1aa', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.85rem' }}
                >
                  <Heart size={18} fill={isWishlisted ? '#e63946' : 'none'} />
                  <span>{isWishlisted ? 'Wishlisted' : 'Save'}</span>
                </button>
              </div>

              <h2 className="font-serif" style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '0.5rem' }}>
                {product.name}
              </h2>

              {/* Rating */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#ffb703', fontSize: '0.85rem', marginBottom: '1rem' }}>
                <Star size={14} fill="#ffb703" />
                <strong>{product.rating}</strong>
                <span style={{ color: 'var(--text-muted)' }}>({product.reviewsCount} customer reviews)</span>
              </div>

              {/* Price */}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.8rem', marginBottom: '1.2rem' }}>
                <span style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--gold-primary)' }}>
                  Rs. {product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span style={{ fontSize: '1rem', color: 'var(--text-muted)', textDecoration: 'line-through' }}>
                    Rs. {product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>

              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                {product.description}
              </p>

              {/* Color Selection */}
              <div style={{ marginBottom: '1.2rem' }}>
                <label style={{ fontSize: '0.82rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Color: <strong style={{ color: '#fff' }}>{selectedColor}</strong>
                </label>
                <div style={{ display: 'flex', gap: '0.6rem' }}>
                  {product.colors.map((col) => (
                    <button
                      key={col.name}
                      onClick={() => setSelectedColor(col.name)}
                      title={col.name}
                      style={{
                        padding: '0.4rem 0.8rem',
                        borderRadius: '6px',
                        border: selectedColor === col.name ? '1px solid var(--gold-primary)' : '1px solid var(--border-light)',
                        background: selectedColor === col.name ? 'rgba(212,175,55,0.15)' : 'rgba(0,0,0,0.3)',
                        color: selectedColor === col.name ? 'var(--gold-primary)' : 'var(--text-secondary)',
                        fontSize: '0.8rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem'
                      }}
                    >
                      <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: col.hex, display: 'inline-block' }} />
                      {col.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection & Size Guide */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <label style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Select Size: <strong style={{ color: '#fff' }}>{selectedSize}</strong>
                  </label>
                  <button
                    onClick={onOpenSizeGuide}
                    style={{ background: 'transparent', border: 'none', color: 'var(--gold-primary)', cursor: 'pointer', fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                  >
                    <Ruler size={13} />
                    <span>Size Guide</span>
                  </button>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {product.sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      style={{
                        minWidth: '42px',
                        height: '42px',
                        borderRadius: '6px',
                        border: selectedSize === sz ? '1px solid var(--gold-primary)' : '1px solid var(--border-light)',
                        background: selectedSize === sz ? 'var(--gold-gradient)' : 'rgba(0,0,0,0.3)',
                        color: selectedSize === sz ? '#000' : 'var(--text-primary)',
                        fontWeight: selectedSize === sz ? 700 : 500,
                        fontSize: '0.85rem',
                        cursor: 'pointer'
                      }}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Counter */}
              <div style={{ marginBottom: '1.8rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <label style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Quantity:
                </label>
                <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--border-light)', borderRadius: '6px', overflow: 'hidden' }}>
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    style={{ background: 'rgba(255,255,255,0.05)', border: 'none', color: '#fff', width: '32px', height: '32px', cursor: 'pointer' }}
                  >
                    -
                  </button>
                  <span style={{ padding: '0 0.8rem', color: '#fff', fontSize: '0.9rem', fontWeight: 600 }}>{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    style={{ background: 'rgba(255,255,255,0.05)', border: 'none', color: '#fff', width: '32px', height: '32px', cursor: 'pointer' }}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <button onClick={handleAdd} className="btn-gold" style={{ width: '100%', padding: '0.9rem' }}>
                <ShoppingBag size={18} />
                <span>Add to Shopping Cart</span>
              </button>

              <button onClick={handleDirectWhatsApp} className="btn-whatsapp">
                <MessageCircle size={18} />
                <span>Order Now via WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
