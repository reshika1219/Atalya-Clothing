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
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '0',
          position: 'relative',
          background: '#121216',
          border: '1px solid var(--border-strong)',
          borderRadius: 'var(--radius-lg)'
        }}
      >
        {/* Sticky Header Bar */}
        <div style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.9rem 1.4rem',
          borderBottom: '1px solid var(--border-subtle)',
          background: '#0a0a0c'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Ruler size={16} style={{ color: '#fff' }} />
            <h2 style={{ fontSize: '1rem', fontWeight: 800, color: '#fff', textTransform: 'uppercase', letterSpacing: '1px' }}>
              SIZE & FIT GUIDE
            </h2>
          </div>

          <button
            onClick={onClose}
            title="Close"
            style={{
              background: '#ffffff',
              border: 'none',
              color: '#000000',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontWeight: 700
            }}
          >
            <X size={18} />
          </button>
        </div>

        <div style={{ padding: '1.6rem' }}>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.4rem', textAlign: 'center' }}>
            Garments are tailored according to international contemporary fitting standards.
          </p>

          {/* Gender Tabs */}
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.4rem', background: '#0a0a0c', padding: '0.25rem', borderRadius: '6px' }}>
            <button
              onClick={() => setTab('women')}
              style={{
                flex: 1,
                padding: '0.45rem',
                borderRadius: '4px',
                border: 'none',
                background: tab === 'women' ? '#ffffff' : 'transparent',
                color: tab === 'women' ? '#000000' : '#a1a1aa',
                fontWeight: 700,
                fontSize: '0.8rem',
                cursor: 'pointer',
                textTransform: 'uppercase'
              }}
            >
              WOMEN'S SIZING
            </button>
            <button
              onClick={() => setTab('men')}
              style={{
                flex: 1,
                padding: '0.45rem',
                borderRadius: '4px',
                border: 'none',
                background: tab === 'men' ? '#ffffff' : 'transparent',
                color: tab === 'men' ? '#000000' : '#a1a1aa',
                fontWeight: 700,
                fontSize: '0.8rem',
                cursor: 'pointer',
                textTransform: 'uppercase'
              }}
            >
              MEN'S & UNISEX SIZING
            </button>
          </div>

          {/* Table */}
          <div style={{ overflowX: 'auto', marginBottom: '1.4rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem', textAlign: 'center' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border-subtle)', color: 'var(--text-muted)' }}>
                  <th style={{ padding: '0.6rem', textTransform: 'uppercase' }}>Size</th>
                  <th style={{ padding: '0.6rem', textTransform: 'uppercase' }}>Bust / Chest (in)</th>
                  <th style={{ padding: '0.6rem', textTransform: 'uppercase' }}>Waist (in)</th>
                  <th style={{ padding: '0.6rem', textTransform: 'uppercase' }}>Hips (in)</th>
                </tr>
              </thead>
              <tbody>
                {tab === 'women' ? (
                  <>
                    <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                      <td style={{ padding: '0.6rem', fontWeight: 700, color: '#fff' }}>XS (UK 6)</td>
                      <td style={{ padding: '0.6rem' }}>31 - 33</td>
                      <td style={{ padding: '0.6rem' }}>24 - 25</td>
                      <td style={{ padding: '0.6rem' }}>34 - 35</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                      <td style={{ padding: '0.6rem', fontWeight: 700, color: '#fff' }}>S (UK 8)</td>
                      <td style={{ padding: '0.6rem' }}>33 - 35</td>
                      <td style={{ padding: '0.6rem' }}>26 - 27</td>
                      <td style={{ padding: '0.6rem' }}>36 - 37</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                      <td style={{ padding: '0.6rem', fontWeight: 700, color: '#fff' }}>M (UK 10)</td>
                      <td style={{ padding: '0.6rem' }}>35 - 37</td>
                      <td style={{ padding: '0.6rem' }}>28 - 29</td>
                      <td style={{ padding: '0.6rem' }}>38 - 39</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                      <td style={{ padding: '0.6rem', fontWeight: 700, color: '#fff' }}>L (UK 12)</td>
                      <td style={{ padding: '0.6rem' }}>37 - 39</td>
                      <td style={{ padding: '0.6rem' }}>30 - 32</td>
                      <td style={{ padding: '0.6rem' }}>40 - 42</td>
                    </tr>
                  </>
                ) : (
                  <>
                    <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                      <td style={{ padding: '0.6rem', fontWeight: 700, color: '#fff' }}>S (38)</td>
                      <td style={{ padding: '0.6rem' }}>36 - 38</td>
                      <td style={{ padding: '0.6rem' }}>30 - 31</td>
                      <td style={{ padding: '0.6rem' }}>37 - 38</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                      <td style={{ padding: '0.6rem', fontWeight: 700, color: '#fff' }}>M (40)</td>
                      <td style={{ padding: '0.6rem' }}>39 - 41</td>
                      <td style={{ padding: '0.6rem' }}>32 - 33</td>
                      <td style={{ padding: '0.6rem' }}>39 - 40</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                      <td style={{ padding: '0.6rem', fontWeight: 700, color: '#fff' }}>L (42)</td>
                      <td style={{ padding: '0.6rem' }}>42 - 44</td>
                      <td style={{ padding: '0.6rem' }}>34 - 36</td>
                      <td style={{ padding: '0.6rem' }}>41 - 43</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                      <td style={{ padding: '0.6rem', fontWeight: 700, color: '#fff' }}>XL (44)</td>
                      <td style={{ padding: '0.6rem' }}>45 - 47</td>
                      <td style={{ padding: '0.6rem' }}>37 - 39</td>
                      <td style={{ padding: '0.6rem' }}>44 - 46</td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', background: '#0a0a0c', padding: '0.75rem', borderRadius: '6px', fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
            <Info size={15} style={{ color: '#fff' }} />
            <span>Need custom sizing? Call <strong>077 431 1313</strong> for support.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
