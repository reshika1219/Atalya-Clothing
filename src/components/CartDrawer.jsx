import React, { useState } from 'react';
import { X, ShoppingBag, Trash2, Truck, Phone, CheckCircle2 } from 'lucide-react';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveFromCart,
  onClearCart
}) {
  if (!isOpen) return null;

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const freeDeliveryThreshold = 15000;
  const amountForFreeDelivery = Math.max(0, freeDeliveryThreshold - subtotal);
  const progressPercent = Math.min(100, (subtotal / freeDeliveryThreshold) * 100);

  const handleCheckout = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) return;

    let message = `*NEW ORDER — ATALYA CLOTHING*\n\n`;
    message += `*ORDER ITEMS:*\n`;

    cartItems.forEach((item, index) => {
      message += `${index + 1}. *${item.name}*\n`;
      message += `   • Size: ${item.size} | Color: ${item.color}\n`;
      message += `   • Qty: ${item.quantity} × LKR ${item.price.toLocaleString()} = LKR ${(item.price * item.quantity).toLocaleString()}\n\n`;
    });

    message += `*ORDER SUMMARY:*\n`;
    message += `• Subtotal: LKR ${subtotal.toLocaleString()}\n`;
    message += `• Delivery: ${subtotal >= freeDeliveryThreshold ? 'FREE Express Shipping' : 'LKR 450 Standard'}\n`;
    message += `• *TOTAL: LKR ${(subtotal + (subtotal >= freeDeliveryThreshold ? 0 : 450)).toLocaleString()}*\n\n`;

    if (customerName || customerPhone || customerAddress) {
      message += `*DELIVERY DETAILS:*\n`;
      if (customerName) message += `• Name: ${customerName}\n`;
      if (customerPhone) message += `• Phone: ${customerPhone}\n`;
      if (customerAddress) message += `• Address: ${customerAddress}\n`;
    }

    message += `\nPlease confirm availability. Thank you!`;

    const targetWhatsAppUrl = `https://wa.me/94717995000?text=${encodeURIComponent(message)}`;
    window.open(targetWhatsAppUrl, '_blank');
  };

  return (
    <div className="modal-overlay" onClick={onClose} style={{ justifyContent: 'flex-end', padding: 0 }}>
      <div
        className="animate-slide-right"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '460px',
          height: '100vh',
          background: '#121216',
          borderLeft: '1px solid var(--border-strong)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxShadow: 'var(--shadow-drawer)'
        }}
      >
        {/* Cart Header */}
        <div style={{ padding: '1.4rem 1.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <ShoppingBag size={19} />
              <h2 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff', textTransform: 'uppercase', letterSpacing: '1px' }}>
                SHOPPING BAG ({cartItems.reduce((a, b) => a + b.quantity, 0)})
              </h2>
            </div>
            <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: '#a1a1aa', cursor: 'pointer' }}>
              <X size={18} />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div style={{ background: '#0a0a0c', padding: '0.75rem 0.9rem', borderRadius: '6px', border: '1px solid var(--border-subtle)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.4rem', fontWeight: 500 }}>
              <Truck size={13} style={{ color: '#fff' }} />
              {amountForFreeDelivery > 0 ? (
                <span>Add <strong style={{ color: '#fff' }}>LKR {amountForFreeDelivery.toLocaleString()}</strong> more for free express shipping</span>
              ) : (
                <span style={{ color: '#ffffff', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                  <CheckCircle2 size={13} /> FREE EXPRESS SHIPPING UNLOCKED
                </span>
              )}
            </div>
            <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: `${progressPercent}%`, height: '100%', background: '#ffffff', transition: 'width 0.3s ease', borderRadius: '4px' }} />
            </div>
          </div>
        </div>

        {/* Cart Items List */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '1.4rem', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
          {cartItems.length > 0 ? (
            cartItems.map((item, idx) => (
              <div
                key={`${item.id}-${item.size}-${item.color}-${idx}`}
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
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff', marginBottom: '0.2rem' }}>{item.name}</h4>
                      <button onClick={() => onRemoveFromCart(idx)} style={{ background: 'transparent', border: 'none', color: '#e63946', cursor: 'pointer', padding: '0.2rem' }}>
                        <Trash2 size={14} />
                      </button>
                    </div>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      SIZE: {item.size} · COLOR: {item.color}
                    </p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.4rem' }}>
                    <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#fff' }}>
                      LKR {(item.price * item.quantity).toLocaleString()}
                    </span>

                    <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--border-subtle)', borderRadius: '4px', overflow: 'hidden', background: '#121216' }}>
                      <button onClick={() => onUpdateQuantity(idx, item.quantity - 1)} style={{ background: 'transparent', border: 'none', color: '#fff', padding: '0.2rem 0.5rem', cursor: 'pointer', fontWeight: 700 }}>-</button>
                      <span style={{ padding: '0 0.4rem', fontSize: '0.78rem', color: '#fff', fontWeight: 700 }}>{item.quantity}</span>
                      <button onClick={() => onUpdateQuantity(idx, item.quantity + 1)} style={{ background: 'transparent', border: 'none', color: '#fff', padding: '0.2rem 0.5rem', cursor: 'pointer', fontWeight: 700 }}>+</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--text-muted)' }}>
              <ShoppingBag size={40} style={{ margin: '0 auto 1rem auto', opacity: 0.3 }} />
              <p style={{ fontSize: '0.88rem', fontWeight: 600 }}>YOUR BAG IS EMPTY</p>
            </div>
          )}
        </div>

        {/* Checkout Section */}
        {cartItems.length > 0 && (
          <div style={{ padding: '1.4rem', background: '#0a0a0c', borderTop: '1px solid var(--border-subtle)' }}>
            <form onSubmit={handleCheckout}>
              <div style={{ marginBottom: '1rem' }}>
                <h4 style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)', marginBottom: '0.5rem', fontWeight: 700 }}>
                  DELIVERY DETAILS (OPTIONAL)
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.4rem', marginBottom: '0.4rem' }}>
                  <input type="text" placeholder="Full Name" value={customerName} onChange={(e) => setCustomerName(e.target.value)} style={{ background: '#121216', border: '1px solid var(--border-subtle)', padding: '0.45rem 0.6rem', color: '#fff', borderRadius: '4px', fontSize: '0.78rem', outline: 'none' }} />
                  <input type="tel" placeholder="Phone Number" value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)} style={{ background: '#121216', border: '1px solid var(--border-subtle)', padding: '0.45rem 0.6rem', color: '#fff', borderRadius: '4px', fontSize: '0.78rem', outline: 'none' }} />
                </div>
                <input type="text" placeholder="Delivery Address" value={customerAddress} onChange={(e) => setCustomerAddress(e.target.value)} style={{ width: '100%', background: '#121216', border: '1px solid var(--border-subtle)', padding: '0.45rem 0.6rem', color: '#fff', borderRadius: '4px', fontSize: '0.78rem', outline: 'none' }} />
              </div>

              {/* Order Summary */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', marginBottom: '1rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.75rem', fontSize: '0.82rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
                  <span>Subtotal</span>
                  <span>LKR {subtotal.toLocaleString()}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
                  <span>Delivery</span>
                  <span>{subtotal >= freeDeliveryThreshold ? 'FREE' : 'LKR 450'}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#fff', fontWeight: 800, fontSize: '1rem', marginTop: '0.3rem' }}>
                  <span>TOTAL</span>
                  <span>LKR {(subtotal + (subtotal >= freeDeliveryThreshold ? 0 : 450)).toLocaleString()}</span>
                </div>
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                PROCEED TO CHECKOUT
              </button>
            </form>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', marginTop: '0.8rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              <Phone size={12} />
              <span>Support Hotline: <strong>077 431 1313</strong></span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
