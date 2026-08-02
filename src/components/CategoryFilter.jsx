import React from 'react';
import { Search, SlidersHorizontal, RotateCcw } from 'lucide-react';
import { CATEGORIES, GENDERS } from '../data/products';

export default function CategoryFilter({
  searchQuery,
  setSearchQuery,
  activeCategory,
  setActiveCategory,
  activeGender,
  setActiveGender,
  maxPrice,
  setMaxPrice,
  sortBy,
  setSortBy,
  onResetFilters
}) {
  return (
    <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '2.5rem' }}>
      {/* Top Search & Controls Row */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justify: 'space-between',
        flexWrap: 'wrap',
        gap: '1.2rem',
        marginBottom: '1.5rem'
      }}>
        {/* Gender Tabs */}
        <div style={{ display: 'flex', gap: '0.4rem', background: 'rgba(0,0,0,0.4)', padding: '0.3rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
          {GENDERS.map((gender) => (
            <button
              key={gender}
              onClick={() => setActiveGender(gender)}
              style={{
                background: activeGender === gender ? 'var(--gold-gradient)' : 'transparent',
                color: activeGender === gender ? '#000' : 'var(--text-secondary)',
                fontWeight: activeGender === gender ? 700 : 500,
                border: 'none',
                padding: '0.45rem 1rem',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '0.82rem',
                letterSpacing: '0.5px',
                transition: 'var(--transition-fast)'
              }}
            >
              {gender === 'All' ? 'All Genders' : gender}
            </button>
          ))}
        </div>

        {/* Search Input Bar */}
        <div style={{ flex: 1, minWidth: '240px', maxWidth: '400px', position: 'relative' }}>
          <Search size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input
            type="text"
            placeholder="Search dresses, blazers, silk shirts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              background: 'rgba(0, 0, 0, 0.4)',
              border: '1px solid var(--border-light)',
              borderRadius: '8px',
              padding: '0.65rem 1rem 0.65rem 2.6rem',
              color: '#fff',
              fontSize: '0.88rem',
              outline: 'none',
              transition: 'border-color 0.2s'
            }}
            onFocus={(e) => e.target.style.borderColor = 'var(--gold-primary)'}
            onBlur={(e) => e.target.style.borderColor = 'var(--border-light)'}
          />
        </div>

        {/* Sorting Dropdown & Reset */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <SlidersHorizontal size={14} style={{ color: 'var(--gold-primary)' }} />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                background: 'rgba(0, 0, 0, 0.4)',
                border: '1px solid var(--border-light)',
                borderRadius: '8px',
                color: 'var(--text-primary)',
                padding: '0.6rem 0.8rem',
                fontSize: '0.82rem',
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              <option value="featured">Featured First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
              <option value="newest">Newest Arrivals</option>
            </select>
          </div>

          <button
            onClick={onResetFilters}
            title="Reset Filters"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-light)',
              color: 'var(--text-muted)',
              padding: '0.6rem',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justify: 'center'
            }}
          >
            <RotateCcw size={14} />
          </button>
        </div>
      </div>

      {/* Category Pills & Price Slider */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justify: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem',
        paddingTop: '1rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)'
      }}>
        {/* Category Pills */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                background: activeCategory === cat ? 'rgba(212, 175, 55, 0.15)' : 'transparent',
                color: activeCategory === cat ? 'var(--gold-primary)' : 'var(--text-secondary)',
                border: activeCategory === cat ? '1px solid var(--gold-primary)' : '1px solid var(--border-light)',
                padding: '0.4rem 0.9rem',
                borderRadius: '20px',
                fontSize: '0.8rem',
                cursor: 'pointer',
                transition: 'var(--transition-fast)'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Price Slider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            Max Price: <strong style={{ color: 'var(--gold-primary)' }}>Rs. {maxPrice.toLocaleString()}</strong>
          </span>
          <input
            type="range"
            min="8000"
            max="40000"
            step="1000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            style={{
              accentColor: 'var(--gold-primary)',
              cursor: 'pointer',
              width: '120px'
            }}
          />
        </div>
      </div>
    </div>
  );
}
