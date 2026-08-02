import React, { useState } from 'react';
import { X, ShoppingBag, Trash2, Plus, Minus, MessageCircle, Truck, Phone, CheckCircle2 } from 'lucide-react';

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
  const [customerCity, setCustomerCity] = useState('');

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const freeDeliveryThreshold = 15000;
  const amountForFreeDelivery = Math.max(0, freeDeliveryThreshold - subtotal);
  const progressPercent = Math.min(100, (subtotal / freeDeliveryThreshold) * 100);

  const handleWhatsAppCheckout = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) return;

    let message = `*NEW ORDER - ATALYA CLOTHING*\n`;
    message += `_where elegance begins_\n\n`;
    message += `*ORDER ITEMS:*\n`;

    cartItems.forEach((item, index) => {
      message += `${index + 1}. *${item.name}*\n`;
      message += `   • Size: ${item.size} | Color: ${item.color}\n`;
      message += `   • Qty: ${item.quantity} x Rs. ${item.price.toLocaleString()} = Rs. ${(item.price * item.quantity).toLocaleString()}\n\n`;
    });

    message += `*ORDER SUMMARY:*\n`;
    message += `• Subtotal: Rs. ${subtotal.toLocaleString()}\n`;
    message += `• Delivery: ${subtotal >= freeDeliveryThreshold ? 'FREE Islandwide Express' : 'Rs. 450 Standard'}\n`;
    message += `• *TOTAL AMOUNT: Rs. ${(subtotal + (subtotal >= freeDeliveryThreshold ? 0 : 450)).toLocaleString()}*\n\n`;

    if (customerName || customerPhone || customerAddress) {
      message += `*CUSTOMER & DELIVERY DETAILS:*\n`;
      if (customerName) message += `• Name: ${customerName}\n`;
      if (customerPhone) message += `• Contact Phone: ${customerPhone}\n`;
      if (customerAddress) message += `• Address: ${customerAddress}${customerCity ? `, ${customerCity}` : ''}\n`;
    }

    message += `\nPlease confirm availability and payment instructions. Thank you!`;

    // TARGET WHATSAPP DESTINATION NUMBER: 0717995000 -> formatted as 94717995000
    // (Never shown in text, strictly used in backend wa.me URL)
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
          maxWidth: '480px',
          height: '100vh',
          background: 'var(--bg-secondary)',
          borderLeft: '1px solid var(--border-gold)',
          display: 'flex',
          flexDirection: 'column',
          justify: 'space-between',
          boxShadow: 'var(--shadow-dark)'
        }}
      >
        {/* Cart Header */}
        <div style={{ padding: '1.5rem 1.5rem 1rem 1.5rem', borderBottom: '1px solid var(--border-light)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <ShoppingBag size={20} style={{ color: 'var(--gold-primary)' }} />
              <h2 className="font-serif" style={{ fontSize: '1.4rem', color: '#fff' }}>
                Shopping Cart ({cartItems.reduce((a, b) => a + b.quantity, 0)})
              </h2>
            </div>
            <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: '#a1a1aa', cursor: 'pointer' }}>
              <X size={20} />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div style={{ background: 'rgba(0,0,0,0.4)', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.78rem', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
              <Truck size={14} style={{ color: 'var(--gold-primary)' }} />
              {amountForFreeDelivery > 0 ? (
                <span>Add <strong style={{ color: 'var(--gold-primary)' }}>Rs. {amountForFreeDelivery.toLocaleString()}</strong> more for FREE Express Delivery!</span>
              ) : (
                <span style={{ color: '#25d366', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <CheckCircle2 size={14} style={{ color: '#25d366' }} /> You unlocked FREE Islandwide Delivery!
                </span>
              )}
            </div>
            <div style={{ width: '100%', height: '5px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px', overflow: 'hidden' }}>
              <div style={{ width: `${progressPercent}%`, height: '100%', background: 'var(--gold-gradient)', transition: 'width 0.4s ease' }} />
            </div>
          </div>
        </div>

        {/* Cart Items List */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {cartItems.length > 0 ? (
            cartItems.map((item, idx) => (
              <div
                key={`${item.id}-${item.size}-${item.color}-${idx}`}
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
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <h4 className="font-serif" style={{ fontSize: '1rem', color: '#fff', marginBottom: '0.2rem' }}>{item.name}</h4>
                      <button
                        onClick={() => onRemoveFromCart(idx)}
                        style={{ background: 'transparent', border: 'none', color: '#e63946', cursor: 'pointer', padding: '0.2rem' }}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      Size: <span style={{ color: '#fff' }}>{item.size}</span> | Color: <span style={{ color: '#fff' }}>{item.color}</span>
                    </p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.5rem' }}>
                    <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--gold-primary)' }}>
                      Rs. {(item.price * item.quantity).toLocaleString()}
                    </span>

                    {/* Quantity Selector */}
                    <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--border-light)', borderRadius: '4px', overflow: 'hidden' }}>
                      <button
                        onClick={() => onUpdateQuantity(idx, item.quantity - 1)}
                        style={{ background: 'rgba(255,255,255,0.05)', border: 'none', color: '#fff', padding: '0.2rem 0.5rem', cursor: 'pointer' }}
                      >
                        -
                      </button>
                      <span style={{ padding: '0 0.5rem', fontSize: '0.8rem', color: '#fff' }}>{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(idx, item.quantity + 1)}
                        style={{ background: 'rgba(255,255,255,0.05)', border: 'none', color: '#fff', padding: '0.2rem 0.5rem', cursor: 'pointer' }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--text-muted)' }}>
              <ShoppingBag size={42} style={{ margin: '0 auto 1rem auto', opacity: 0.3 }} />
              <p>Your shopping cart is currently empty.</p>
            </div>
          )}
        </div>

        {/* Checkout Form & Order Summary */}
        {cartItems.length > 0 && (
          <div style={{ padding: '1.5rem', background: 'var(--bg-primary)', borderTop: '1px solid var(--border-light)' }}>
            <form onSubmit={handleWhatsAppCheckout}>
              <div style={{ marginBottom: '1rem' }}>
                <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--gold-primary)', marginBottom: '0.6rem' }}>
                  Delivery Details (Optional)
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid var(--border-light)', padding: '0.45rem 0.6rem', color: '#fff', borderRadius: '4px', fontSize: '0.8rem', outline: 'none' }}
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid var(--border-light)', padding: '0.45rem 0.6rem', color: '#fff', borderRadius: '4px', fontSize: '0.8rem', outline: 'none' }}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Street Address & City"
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                  style={{ width: '100%', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--border-light)', padding: '0.45rem 0.6rem', color: '#fff', borderRadius: '4px', fontSize: '0.8rem', outline: 'none' }}
                />
              </div>

              {/* Subtotal Calculation */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', marginBottom: '1rem', borderTop: '1px dotted var(--border-light)', paddingTop: '0.8rem', fontSize: '0.88rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
                  <span>Subtotal:</span>
                  <span>Rs. {subtotal.toLocaleString()}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
                  <span>Estimated Delivery:</span>
                  <span>{subtotal >= freeDeliveryThreshold ? 'FREE' : 'Rs. 450'}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#fff', fontWeight: 700, fontSize: '1.1rem', marginTop: '0.3rem' }}>
                  <span>Total Amount:</span>
                  <span style={{ color: 'var(--gold-primary)' }}>
                    Rs. {(subtotal + (subtotal >= freeDeliveryThreshold ? 0 : 450)).toLocaleString()}
                  </span>
                </div>
              </div>

              <button type="submit" className="btn-whatsapp">
                <MessageCircle size={18} />
                <span>Complete Order via WhatsApp</span>
              </button>
            </form>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', marginTop: '0.8rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              <Phone size={12} style={{ color: 'var(--gold-primary)' }} />
              <span>For phone inquiries, call <strong>077 431 1313</strong></span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
