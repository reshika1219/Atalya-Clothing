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
    <section id="catalog-section" style={{ padding: '2rem 0 5rem 0' }}>
      <div className="container">
        {/* Section Heading & Counter */}
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
          <div>
            <h2 className="font-serif" style={{ fontSize: '2.2rem', fontWeight: 500, color: '#fff' }}>
              Curated Collections
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Showing {products.length} elegant items
            </p>
          </div>
        </div>

        {/* Product Cards Grid */}
        {products.length > 0 ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.8rem'
          }}>
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
          /* Empty State */
          <div className="glass-card" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
            <h3 className="font-serif" style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '0.8rem' }}>
              No Luxury Items Match Your Selection
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', maxWidth: '500px', margin: '0 auto 1.5rem auto' }}>
              Try adjusting your search criteria, category filters, or price slider to explore our full collection.
            </p>
            <button onClick={onResetFilters} className="btn-gold">
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
