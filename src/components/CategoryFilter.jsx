import React from 'react';
import { Search, RotateCcw, ChevronDown } from 'lucide-react';
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
    <div style={{
      background: '#121216',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      padding: '1.2rem 1.5rem',
      marginBottom: '1.5rem'
    }}>
      {/* Gender & Search Header Row — Centered Flex */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
        marginBottom: '1rem'
      }}>
        {/* Gender Filter Buttons */}
        <div style={{ display: 'flex', gap: '0.35rem', background: '#0a0a0c', padding: '0.25rem', borderRadius: '6px', border: '1px solid var(--border-subtle)' }}>
          {GENDERS.map((gender) => (
            <button
              key={gender}
              onClick={() => setActiveGender(gender)}
              style={{
                background: activeGender === gender ? '#ffffff' : 'transparent',
                color: activeGender === gender ? '#000000' : '#a1a1aa',
                fontWeight: activeGender === gender ? 700 : 500,
                border: 'none',
                padding: '0.4rem 0.9rem',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '0.78rem',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                transition: 'all 0.2s ease'
              }}
            >
              {gender === 'All' ? 'ALL' : gender}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div style={{ flex: 1, minWidth: '200px', maxWidth: '340px', position: 'relative' }}>
          <Search size={15} style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input
            type="text"
            placeholder="Search catalog..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              background: '#0a0a0c',
              border: '1px solid var(--border-subtle)',
              borderRadius: '6px',
              padding: '0.55rem 1rem 0.55rem 2.4rem',
              color: '#fff',
              fontSize: '0.82rem',
              outline: 'none',
              transition: 'border-color 0.2s'
            }}
            onFocus={(e) => e.target.style.borderColor = '#ffffff'}
            onBlur={(e) => e.target.style.borderColor = 'var(--border-subtle)'}
          />
        </div>

        {/* Sort Dropdown Container with Custom ChevronDown Arrow & Reset Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                background: '#0a0a0c',
                border: '1px solid var(--border-subtle)',
                borderRadius: '6px',
                color: '#ffffff',
                padding: '0.55rem 2.2rem 0.55rem 0.8rem',
                fontSize: '0.78rem',
                outline: 'none',
                cursor: 'pointer',
                fontWeight: 600,
                WebkitAppearance: 'none',
                MozAppearance: 'none',
                appearance: 'none'
              }}
            >
              <option value="featured">SORT: FEATURED</option>
              <option value="price-asc">PRICE: LOW TO HIGH</option>
              <option value="price-desc">PRICE: HIGH TO LOW</option>
              <option value="rating">TOP RATED</option>
              <option value="newest">NEWEST ARRIVALS</option>
            </select>

            <ChevronDown
              size={14}
              style={{
                position: 'absolute',
                right: '0.75rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#a1a1aa',
                pointerEvents: 'none'
              }}
            />
          </div>

          <button
            onClick={onResetFilters}
            title="Reset Filters"
            style={{
              background: '#0a0a0c',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-muted)',
              padding: '0.55rem',
              borderRadius: '6px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <RotateCcw size={14} />
          </button>
        </div>
      </div>

      {/* Category Pills & Price Slider — Centered Alignment */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '1.2rem',
        paddingTop: '0.8rem',
        borderTop: '1px solid var(--border-subtle)'
      }}>
        {/* Category Pills */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                background: activeCategory === cat ? '#ffffff' : 'transparent',
                color: activeCategory === cat ? '#000000' : '#a1a1aa',
                border: activeCategory === cat ? '1px solid #ffffff' : '1px solid var(--border-subtle)',
                padding: '0.35rem 0.8rem',
                borderRadius: '4px',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Price Slider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Max: <strong style={{ color: '#ffffff' }}>LKR {maxPrice.toLocaleString()}</strong>
          </span>
          <input
            type="range"
            min="8000"
            max="40000"
            step="1000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            style={{
              accentColor: '#ffffff',
              cursor: 'pointer',
              width: '110px'
            }}
          />
        </div>
      </div>
    </div>
  );
}
