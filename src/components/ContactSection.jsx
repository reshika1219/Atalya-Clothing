import React, { useState } from 'react';
import { Phone, Mail, Facebook, MessageCircle, MapPin, ChevronDown, ChevronUp, Clock, HelpCircle } from 'lucide-react';

export default function ContactSection() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: "How do I place an order via WhatsApp?",
      a: "Simply browse our collections, select your items or add them to your shopping cart, then click 'Complete Order via WhatsApp'. Our system will automatically format your order summary so you can confirm size, color, and delivery details directly with our team!"
    },
    {
      q: "What is your delivery timeframe across Sri Lanka?",
      a: "We offer express Islandwide delivery! Orders in Colombo and suburbs are delivered within 1–2 business days. Outstation deliveries take 2–3 business days. Orders over Rs. 15,000 enjoy FREE express delivery."
    },
    {
      q: "Can I exchange an item if the size doesn't fit?",
      a: "Yes! We offer hassle-free size exchanges within 7 days of delivery as long as the tags remain intact and the garment is unworn. Contact us via phone (077 431 1313) or WhatsApp for quick size assistance."
    },
    {
      q: "What payment options are available?",
      a: "We accept Direct Bank Transfer, Online Payment Gateway links, and Cash on Delivery (COD) for eligible locations across Sri Lanka."
    }
  ];

  // Hidden 0717995000 in wa.me link
  const whatsappUrl = `https://wa.me/94717995000?text=${encodeURIComponent('Hello Atalya Clothing! I would like to inquire about placing an order.')}`;

  return (
    <section id="contact-section" style={{ padding: '6rem 0', background: 'var(--bg-primary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem auto' }}>
          <h2 className="font-serif" style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '0.6rem' }}>
            Connect With Atalya Clothing
          </h2>
          <p className="font-cursive" style={{ fontSize: '1.8rem', color: 'var(--gold-primary)', marginBottom: '1rem' }}>
            where elegance begins
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            We are here to assist with custom fitting recommendations, order tracking, and personal styling inquiries.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
          marginBottom: '4rem'
        }}>
          {/* Phone Call Card */}
          <a
            href="tel:0774311313"
            className="glass-card"
            style={{ padding: '2rem', textAlign: 'center', textDecoration: 'none', display: 'block' }}
          >
            <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(212,175,55,0.15)', color: 'var(--gold-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
              <Phone size={22} />
            </div>
            <h3 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.4rem' }}>Phone Assistance</h3>
            <p style={{ color: 'var(--gold-primary)', fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.2rem' }}>077 431 1313</p>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Mon - Sat: 9 AM - 7 PM</span>
          </a>

          {/* WhatsApp Direct Card */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card"
            style={{ padding: '2rem', textAlign: 'center', textDecoration: 'none', display: 'block', borderColor: 'rgba(37,211,102,0.4)' }}
          >
            <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(37,211,102,0.15)', color: '#25d366', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
              <MessageCircle size={22} />
            </div>
            <h3 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.4rem' }}>WhatsApp Express</h3>
            <p style={{ color: '#25d366', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.2rem' }}>Order via WhatsApp</p>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Instant message & order setup</span>
          </a>

          {/* Email Card */}
          <a
            href="mailto:atalyaclothing@gmail.com"
            className="glass-card"
            style={{ padding: '2rem', textAlign: 'center', textDecoration: 'none', display: 'block' }}
          >
            <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(212,175,55,0.15)', color: 'var(--gold-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
              <Mail size={22} />
            </div>
            <h3 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.4rem' }}>Email Inquiries</h3>
            <p style={{ color: 'var(--gold-light)', fontWeight: 600, fontSize: '0.92rem', marginBottom: '0.2rem' }}>atalyaclothing@gmail.com</p>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>24/7 Email Customer Support</span>
          </a>

          {/* Facebook Card */}
          <a
            href="https://www.facebook.com/profile.php?id=61592837846677"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card"
            style={{ padding: '2rem', textAlign: 'center', textDecoration: 'none', display: 'block' }}
          >
            <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(24,119,242,0.15)', color: '#1877f2', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
              <Facebook size={22} />
            </div>
            <h3 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.4rem' }}>Facebook Community</h3>
            <p style={{ color: '#1877f2', fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.2rem' }}>@atalyaclothing</p>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Follow for new drop reveals</span>
          </a>
        </div>

        {/* FAQ Accordion */}
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem', justifyContent: 'center' }}>
            <HelpCircle size={20} style={{ color: 'var(--gold-primary)' }} />
            <h3 className="font-serif" style={{ fontSize: '1.8rem', color: '#fff' }}>Frequently Asked Questions</h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="glass-card"
                style={{ padding: '1.2rem 1.5rem', cursor: 'pointer' }}
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h4 style={{ fontSize: '0.98rem', fontWeight: 600, color: '#fff' }}>{faq.q}</h4>
                  {openFaq === index ? <ChevronUp size={18} style={{ color: 'var(--gold-primary)' }} /> : <ChevronDown size={18} style={{ color: '#a1a1aa' }} />}
                </div>
                {openFaq === index && (
                  <p style={{ marginTop: '0.8rem', color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6, borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '0.8rem' }}>
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
