import React, { useState } from 'react';
import { X, Ruler, Info } from 'lucide-react';

export default function SizeGuideModal({ onClose }) {
  const [tab, setTab] = useState('women');

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="glass-card animate-fade-in"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '650px',
          padding: '2rem',
          position: 'relative',
          border: '1px solid var(--border-gold)'
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'transparent',
            border: 'none',
            color: '#a1a1aa',
            cursor: 'pointer'
          }}
        >
          <X size={20} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
          <Ruler size={20} style={{ color: 'var(--gold-primary)' }} />
          <h2 className="font-serif" style={{ fontSize: '1.6rem', color: '#fff' }}>
            Size & Fit Guide
          </h2>
        </div>

        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
          Atalya Clothing garments are tailored according to international contemporary fitting standards.
        </p>

        {/* Gender Tabs */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', background: 'rgba(0,0,0,0.4)', padding: '0.3rem', borderRadius: '8px' }}>
          <button
            onClick={() => setTab('women')}
            style={{
              flex: 1,
              padding: '0.5rem',
              borderRadius: '6px',
              border: 'none',
              background: tab === 'women' ? 'var(--gold-gradient)' : 'transparent',
              color: tab === 'women' ? '#000' : '#a1a1aa',
              fontWeight: 600,
              fontSize: '0.85rem',
              cursor: 'pointer'
            }}
          >
            Women's Sizing
          </button>
          <button
            onClick={() => setTab('men')}
            style={{
              flex: 1,
              padding: '0.5rem',
              borderRadius: '6px',
              border: 'none',
              background: tab === 'men' ? 'var(--gold-gradient)' : 'transparent',
              color: tab === 'men' ? '#000' : '#a1a1aa',
              fontWeight: 600,
              fontSize: '0.85rem',
              cursor: 'pointer'
            }}
          >
            Men's & Unisex Sizing
          </button>
        </div>

        {/* Table */}
        <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-gold)', color: 'var(--gold-primary)' }}>
                <th style={{ padding: '0.6rem' }}>Size</th>
                <th style={{ padding: '0.6rem' }}>Bust / Chest (in)</th>
                <th style={{ padding: '0.6rem' }}>Waist (in)</th>
                <th style={{ padding: '0.6rem' }}>Hips (in)</th>
              </tr>
            </thead>
            <tbody>
              {tab === 'women' ? (
                <>
                  <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                    <td style={{ padding: '0.6rem', fontWeight: 600, color: '#fff' }}>XS (UK 6)</td>
                    <td style={{ padding: '0.6rem' }}>31 - 33</td>
                    <td style={{ padding: '0.6rem' }}>24 - 25</td>
                    <td style={{ padding: '0.6rem' }}>34 - 35</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                    <td style={{ padding: '0.6rem', fontWeight: 600, color: '#fff' }}>S (UK 8)</td>
                    <td style={{ padding: '0.6rem' }}>33 - 35</td>
                    <td style={{ padding: '0.6rem' }}>26 - 27</td>
                    <td style={{ padding: '0.6rem' }}>36 - 37</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                    <td style={{ padding: '0.6rem', fontWeight: 600, color: '#fff' }}>M (UK 10)</td>
                    <td style={{ padding: '0.6rem' }}>35 - 37</td>
                    <td style={{ padding: '0.6rem' }}>28 - 29</td>
                    <td style={{ padding: '0.6rem' }}>38 - 39</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                    <td style={{ padding: '0.6rem', fontWeight: 600, color: '#fff' }}>L (UK 12)</td>
                    <td style={{ padding: '0.6rem' }}>37 - 39</td>
                    <td style={{ padding: '0.6rem' }}>30 - 32</td>
                    <td style={{ padding: '0.6rem' }}>40 - 42</td>
                  </tr>
                </>
              ) : (
                <>
                  <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                    <td style={{ padding: '0.6rem', fontWeight: 600, color: '#fff' }}>S (38)</td>
                    <td style={{ padding: '0.6rem' }}>36 - 38</td>
                    <td style={{ padding: '0.6rem' }}>30 - 31</td>
                    <td style={{ padding: '0.6rem' }}>37 - 38</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                    <td style={{ padding: '0.6rem', fontWeight: 600, color: '#fff' }}>M (40)</td>
                    <td style={{ padding: '0.6rem' }}>39 - 41</td>
                    <td style={{ padding: '0.6rem' }}>32 - 33</td>
                    <td style={{ padding: '0.6rem' }}>39 - 40</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                    <td style={{ padding: '0.6rem', fontWeight: 600, color: '#fff' }}>L (42)</td>
                    <td style={{ padding: '0.6rem' }}>42 - 44</td>
                    <td style={{ padding: '0.6rem' }}>34 - 36</td>
                    <td style={{ padding: '0.6rem' }}>41 - 43</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                    <td style={{ padding: '0.6rem', fontWeight: 600, color: '#fff' }}>XL (44)</td>
                    <td style={{ padding: '0.6rem' }}>45 - 47</td>
                    <td style={{ padding: '0.6rem' }}>37 - 39</td>
                    <td style={{ padding: '0.6rem' }}>44 - 46</td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(212,175,55,0.1)', padding: '0.8rem', borderRadius: '6px', fontSize: '0.8rem', color: 'var(--gold-light)' }}>
          <Info size={16} />
          <span>Need custom sizing or tailoring help? Message us directly on WhatsApp or call <strong>077 431 1313</strong> for personal advice!</span>
        </div>
      </div>
    </div>
  );
}
