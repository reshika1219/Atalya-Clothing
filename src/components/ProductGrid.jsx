import React from 'react';
import ProductCard from './ProductCard';

export default function ProductGrid({
  products,
  wishlistIds,
  onToggleWishlist,
  onQuickView,
  onAddToCart,
  onWhatsAppOrder,
  onResetFilters
}) {
  return (
    <section id="catalog-section" style={{ padding: '1rem 0 5rem 0' }}>
      <div className="container">
        {/* Centered Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.3rem' }}>
            CURATED COLLECTIONS
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', letterSpacing: '1.5px', textTransform: 'uppercase', fontWeight: 600 }}>
            SHOWING {products.length} ITEMS
          </p>
        </div>

        {/* Product Cards Grid — Responsive 2-column on mobile, 4-column on desktop */}
        {products.length > 0 ? (
          <div
            className="product-grid-layout"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: '1.6rem'
            }}
          >
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isWishlisted={wishlistIds.includes(product.id)}
                onToggleWishlist={onToggleWishlist}
                onQuickView={onQuickView}
                onAddToCart={onAddToCart}
                onWhatsAppOrder={onWhatsAppOrder}
              />
            ))}
          </div>
        ) : (
          /* Centered Empty State */
          <div style={{ padding: '4rem 2rem', textAlign: 'center', background: '#121216', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
              NO ITEMS MATCH YOUR SELECTION
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', maxWidth: '460px', margin: '0 auto 1.5rem auto', fontSize: '0.85rem' }}>
              Try adjusting your search query, category filters, or price slider.
            </p>
            <button onClick={onResetFilters} className="btn-primary">
              RESET FILTERS
            </button>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .product-grid-layout {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.8rem !important;
          }
        }
      `}</style>
    </section>
  );
}
