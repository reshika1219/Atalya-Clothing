import React, { useState } from 'react';
import { Phone, Mail, Facebook, MessageSquare, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export default function ContactSection() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: "HOW DO I PLACE AN ORDER?",
      a: "Simply browse our collection, select your preferred size and color, and click 'BUY NOW' or 'PROCEED TO CHECKOUT'. Your order summary will be automatically formatted for instant order confirmation!"
    },
    {
      q: "WHAT IS THE DELIVERY TIMEFRAME ACROSS SRI LANKA?",
      a: "We offer express Islandwide delivery across Sri Lanka. Orders in Colombo and suburbs are delivered within 1–2 business days. Outstation deliveries take 2–3 business days. Orders over LKR 15,000 enjoy FREE express delivery."
    },
    {
      q: "CAN I EXCHANGE AN ITEM IF THE SIZE DOESN'T FIT?",
      a: "Yes! We offer hassle-free size exchanges within 7 days of delivery as long as the tags remain intact and the garment is unworn. Contact us via phone (077 431 1313) for quick assistance."
    },
    {
      q: "WHAT PAYMENT OPTIONS ARE AVAILABLE?",
      a: "We accept Bank Transfers, Online Payment Gateway links, and Cash on Delivery (COD) for eligible locations."
    }
  ];

  const orderUrl = `https://wa.me/94717995000?text=${encodeURIComponent('Hello Atalya Clothing! I would like to place an order.')}`;

  return (
    <section id="contact-section" style={{ padding: '5rem 0', background: 'var(--bg-primary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 3.5rem auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
            CONNECT WITH US
          </h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            We are here to assist with custom fitting recommendations, order tracking, and inquiries.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
          gap: '1.2rem',
          marginBottom: '4rem'
        }}>
          {/* Phone Call Card */}
          <a
            href="tel:0774311313"
            style={{ padding: '1.8rem 1.4rem', textAlign: 'center', textDecoration: 'none', display: 'block', background: '#121216', borderRadius: '6px', border: '1px solid var(--border-subtle)' }}
          >
            <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#0a0a0c', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.8rem auto' }}>
              <Phone size={18} />
            </div>
            <h3 style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.3rem' }}>PHONE SUPPORT</h3>
            <p style={{ color: '#fff', fontWeight: 800, fontSize: '1.05rem', marginBottom: '0.2rem' }}>077 431 1313</p>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Mon - Sat: 9 AM - 7 PM</span>
          </a>

          {/* Direct Messaging Card */}
          <a
            href={orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ padding: '1.8rem 1.4rem', textAlign: 'center', textDecoration: 'none', display: 'block', background: '#121216', borderRadius: '6px', border: '1px solid var(--border-subtle)' }}
          >
            <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#0a0a0c', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.8rem auto' }}>
              <MessageSquare size={18} />
            </div>
            <h3 style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.3rem' }}>DIRECT ORDERING</h3>
            <p style={{ color: '#fff', fontWeight: 800, fontSize: '1.05rem', marginBottom: '0.2rem' }}>INSTANT ASSISTANCE</p>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Quick order setup</span>
          </a>

          {/* Email Card */}
          <a
            href="mailto:atalyaclothing@gmail.com"
            style={{ padding: '1.8rem 1.4rem', textAlign: 'center', textDecoration: 'none', display: 'block', background: '#121216', borderRadius: '6px', border: '1px solid var(--border-subtle)' }}
          >
            <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#0a0a0c', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.8rem auto' }}>
              <Mail size={18} />
            </div>
            <h3 style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.3rem' }}>EMAIL SUPPORT</h3>
            <p style={{ color: '#fff', fontWeight: 600, fontSize: '0.85rem', marginBottom: '0.2rem' }}>atalyaclothing@gmail.com</p>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>24/7 Email assistance</span>
          </a>

          {/* Facebook Card */}
          <a
            href="https://www.facebook.com/profile.php?id=61592837846677"
            target="_blank"
            rel="noopener noreferrer"
            style={{ padding: '1.8rem 1.4rem', textAlign: 'center', textDecoration: 'none', display: 'block', background: '#121216', borderRadius: '6px', border: '1px solid var(--border-subtle)' }}
          >
            <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#0a0a0c', color: '#1877f2', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.8rem auto' }}>
              <Facebook size={18} />
            </div>
            <h3 style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.3rem' }}>FACEBOOK</h3>
            <p style={{ color: '#1877f2', fontWeight: 600, fontSize: '0.88rem', marginBottom: '0.2rem' }}>@atalyaclothing</p>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Follow for drop updates</span>
          </a>
        </div>

        {/* FAQ Accordion */}
        <div style={{ maxWidth: '750px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.2rem', justifyContent: 'center' }}>
            <HelpCircle size={18} style={{ color: '#fff' }} />
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff', textTransform: 'uppercase', letterSpacing: '1px' }}>FREQUENTLY ASKED QUESTIONS</h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {faqs.map((faq, index) => (
              <div
                key={index}
                style={{ padding: '1rem 1.2rem', cursor: 'pointer', background: '#121216', borderRadius: '6px', border: '1px solid var(--border-subtle)' }}
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{faq.q}</h4>
                  {openFaq === index ? <ChevronUp size={16} style={{ color: '#fff' }} /> : <ChevronDown size={16} style={{ color: '#a1a1aa' }} />}
                </div>
                {openFaq === index && (
                  <p style={{ marginTop: '0.7rem', color: 'var(--text-secondary)', fontSize: '0.84rem', lineHeight: 1.6, borderTop: '1px solid var(--border-subtle)', paddingTop: '0.7rem' }}>
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
