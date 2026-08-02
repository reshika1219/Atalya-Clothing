import React, { useEffect, useState } from 'react';

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fading out after 1.2s
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 1200);

    // Completely unmount after 1.6s
    const removeTimer = setTimeout(() => {
      setVisible(false);
    }, 1600);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 99999,
      background: '#0a0a0c',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: fadeOut ? 0 : 1,
      transition: 'opacity 0.4s ease-in-out',
      pointerEvents: fadeOut ? 'none' : 'all'
    }}>
      {/* Circled Logo Container */}
      <div style={{
        position: 'relative',
        marginBottom: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Ambient Pulse Ring */}
        <div style={{
          position: 'absolute',
          width: '130px',
          height: '130px',
          borderRadius: '50%',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          animation: 'splashPulse 1.5s ease-in-out infinite'
        }} />

        <img
          src="/logo.jpg"
          alt="Atalya Clothing"
          style={{
            width: '110px',
            height: '110px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '2px solid #ffffff',
            boxShadow: '0 10px 30px rgba(0,0,0,0.8)'
          }}
        />
      </div>

      {/* Brand Name */}
      <h1 style={{
        color: '#ffffff',
        fontFamily: 'var(--font-sans)',
        fontSize: '1.5rem',
        fontWeight: 800,
        letterSpacing: '4px',
        textTransform: 'uppercase',
        marginBottom: '0.4rem',
        lineHeight: 1
      }}>
        ATALYA
      </h1>

      {/* Subtitle */}
      <p style={{
        color: '#a1a1aa',
        fontSize: '0.72rem',
        letterSpacing: '2.5px',
        textTransform: 'uppercase',
        fontWeight: 600
      }}>
        where elegance begins
      </p>

      {/* Minimal Loading Indicator Bar */}
      <div style={{
        marginTop: '2rem',
        width: '140px',
        height: '2px',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '2px',
        overflow: 'hidden'
      }}>
        <div style={{
          width: '100%',
          height: '100%',
          background: '#ffffff',
          animation: 'splashBar 1.2s ease-in-out forwards'
        }} />
      </div>

      <style>{`
        @keyframes splashPulse {
          0% { transform: scale(0.95); opacity: 0.3; }
          50% { transform: scale(1.15); opacity: 0.8; }
          100% { transform: scale(0.95); opacity: 0.3; }
        }
        @keyframes splashBar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </div>
  );
}
