import React from 'react';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';

export default function WishlistDrawer({
  isOpen,
  onClose,
  wishlistItems,
  onRemoveFromWishlist,
  onAddToCart
}) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} style={{ justifyContent: 'flex-end', padding: 0 }}>
      <div
        className="animate-slide-right"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '450px',
          height: '100vh',
          background: 'var(--bg-secondary)',
          borderLeft: '1px solid var(--border-gold)',
          display: 'flex',
          flexDirection: 'column',
          justify: 'space-between',
          padding: '1.5rem',
          boxShadow: 'var(--shadow-dark)'
        }}
      >
        {/* Header */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-light)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Heart size={20} style={{ color: '#e63946' }} fill="#e63946" />
              <h2 className="font-serif" style={{ fontSize: '1.4rem', color: '#fff' }}>
                Your Saved Favorites ({wishlistItems.length})
              </h2>
            </div>
            <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: '#a1a1aa', cursor: 'pointer' }}>
              <X size={20} />
            </button>
          </div>

          {/* List of items */}
          {wishlistItems.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxHeight: '70vh', overflowY: 'auto' }}>
              {wishlistItems.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    background: 'rgba(0,0,0,0.3)',
                    padding: '0.8rem',
                    borderRadius: '8px',
                    border: '1px solid var(--border-light)'
                  }}
                >
                  <img src={item.image} alt={item.name} style={{ width: '70px', height: '85px', objectFit: 'cover', borderRadius: '4px' }} />
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <h4 className="font-serif" style={{ fontSize: '1rem', color: '#fff', marginBottom: '0.2rem' }}>{item.name}</h4>
                      <span style={{ fontSize: '0.9rem', color: 'var(--gold-primary)', fontWeight: 700 }}>
                        Rs. {item.price.toLocaleString()}
                      </span>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.4rem' }}>
                      <button
                        onClick={() => {
                          onAddToCart(item, item.sizes[0], item.colors[0].name);
                          onRemoveFromWishlist(item.id);
                        }}
                        className="btn-gold"
                        style={{ padding: '0.4rem 0.8rem', fontSize: '0.75rem', flex: 1 }}
                      >
                        <ShoppingBag size={12} />
                        <span>Move to Cart</span>
                      </button>
                      <button
                        onClick={() => onRemoveFromWishlist(item.id)}
                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-light)', color: '#e63946', borderRadius: '4px', padding: '0.4rem', cursor: 'pointer' }}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--text-muted)' }}>
              <Heart size={40} style={{ margin: '0 auto 1rem auto', opacity: 0.3 }} />
              <p>Your wishlist is currently empty.</p>
            </div>
          )}
        </div>

        {/* Footer */}
        {wishlistItems.length > 0 && (
          <button onClick={onClose} className="btn-secondary" style={{ width: '100%', marginTop: '1rem' }}>
            Continue Shopping
          </button>
        )}
      </div>
    </div>
  );
}
