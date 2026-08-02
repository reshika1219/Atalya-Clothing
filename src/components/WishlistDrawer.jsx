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
          maxWidth: '440px',
          height: '100vh',
          background: '#121216',
          borderLeft: '1px solid var(--border-strong)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '1.4rem',
          boxShadow: 'var(--shadow-drawer)'
        }}
      >
        {/* Header */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.2rem', paddingBottom: '0.9rem', borderBottom: '1px solid var(--border-subtle)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Heart size={18} style={{ color: '#e63946' }} fill="#e63946" />
              <h2 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff', textTransform: 'uppercase', letterSpacing: '1px' }}>
                WISHLIST ({wishlistItems.length})
              </h2>
            </div>
            <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: '#a1a1aa', cursor: 'pointer' }}>
              <X size={18} />
            </button>
          </div>

          {/* Items */}
          {wishlistItems.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', maxHeight: '72vh', overflowY: 'auto' }}>
              {wishlistItems.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: 'flex',
                    gap: '0.9rem',
                    background: '#0a0a0c',
                    padding: '0.8rem',
                    borderRadius: '6px',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  <img src={item.image} alt={item.name} style={{ width: '65px', height: '80px', objectFit: 'cover', borderRadius: '4px' }} />
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff', marginBottom: '0.2rem' }}>{item.name}</h4>
                      <span style={{ fontSize: '0.88rem', color: '#fff', fontWeight: 800 }}>
                        LKR {item.price.toLocaleString()}
                      </span>
                    </div>
                    <div style={{ display: 'flex', gap: '0.4rem', marginTop: '0.4rem' }}>
                      <button
                        onClick={() => {
                          onAddToCart(item, item.sizes[0], item.colors[0].name);
                          onRemoveFromWishlist(item.id);
                        }}
                        className="btn-primary"
                        style={{ padding: '0.4rem 0.7rem', fontSize: '0.72rem', flex: 1 }}
                      >
                        <ShoppingBag size={12} />
                        <span>MOVE TO CART</span>
                      </button>
                      <button
                        onClick={() => onRemoveFromWishlist(item.id)}
                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-subtle)', color: '#e63946', borderRadius: '4px', padding: '0.4rem', cursor: 'pointer' }}
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--text-muted)' }}>
              <Heart size={38} style={{ margin: '0 auto 1rem auto', opacity: 0.3 }} />
              <p style={{ fontSize: '0.88rem', fontWeight: 600 }}>YOUR WISHLIST IS EMPTY</p>
            </div>
          )}
        </div>

        {/* Footer */}
        {wishlistItems.length > 0 && (
          <button onClick={onClose} className="btn-secondary" style={{ width: '100%', marginTop: '1rem' }}>
            CONTINUE SHOPPING
          </button>
        )}
      </div>
    </div>
  );
}
