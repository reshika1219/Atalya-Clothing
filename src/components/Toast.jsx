import React, { useEffect } from 'react';
import { CheckCircle, Heart, ShoppingBag, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        onClose();
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [toast, onClose]);

  if (!toast) return null;

  return (
    <div
      className="animate-fade-in"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 2000,
        background: 'var(--bg-glass)',
        backdropFilter: 'blur(16px)',
        border: '1px solid var(--border-accent)',
        borderRadius: '10px',
        padding: '0.9rem 1.4rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.8rem',
        boxShadow: 'var(--shadow-dark)',
        maxWidth: '380px'
      }}
    >
      {toast.type === 'cart' ? (
        <ShoppingBag size={20} style={{ color: 'var(--accent)' }} />
      ) : toast.type === 'wishlist' ? (
        <Heart size={20} style={{ color: '#e63946' }} fill="#e63946" />
      ) : (
        <CheckCircle size={20} style={{ color: '#fff' }} />
      )}

      <div style={{ flex: 1 }}>
        <h4 style={{ fontSize: '0.88rem', fontWeight: 600, color: '#fff' }}>{toast.title}</h4>
        {toast.message && <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>{toast.message}</p>}
      </div>

      <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: '#a1a1aa', cursor: 'pointer', padding: '0.2rem' }}>
        <X size={14} />
      </button>
    </div>
  );
}
