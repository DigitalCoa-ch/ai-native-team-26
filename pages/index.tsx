import React from 'react';

export default function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.header}>
          <span style={styles.flag}>🇺🇸</span>
          <span style={styles.title}>Email Culture Bridge</span>
          <span style={styles.flag}>🇨🇳</span>
        </div>
        <h1 style={styles.heading}>Bridging email cultures between the USA & China</h1>
        <p style={styles.tagline}>Better communication starts with understanding</p>
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .content-animate {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://minimax-algeng-chat-tts-us.oss-us-east-1.aliyuncs.com/ccv2%2F2026-05-19%2FMiniMax-M2.7%2F2053528104411869618%2Ffb386fe3dfbe9bdf9a5b136ed505fb1ccc0e5f43cdc18caee203154ac32dbc01..jpeg?Expires=1779266111&OSSAccessKeyId=LTAI5tCpJNKCf5EkQHSuL9xg&Signature=bB3vW17xicO4f5XXFj7te5koVkY%3D)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '2rem',
  },
  content: {
    textAlign: 'center',
    maxWidth: '700px',
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '2rem',
  },
  flag: {
    fontSize: '3rem',
  },
  title: {
    fontSize: '1.1rem',
    fontWeight: '700',
    color: '#ffffff',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    textShadow: '0 2px 10px rgba(0,0,0,0.5)',
  },
  heading: {
    fontSize: '3rem',
    fontWeight: '800',
    color: '#ffffff',
    margin: '0 0 1.5rem 0',
    lineHeight: '1.2',
    textShadow: '0 4px 20px rgba(0,0,0,0.7), 0 2px 8px rgba(0,0,0,0.5)',
  },
  tagline: {
    fontSize: '1.4rem',
    color: '#ffffff',
    fontWeight: '500',
    margin: 0,
    textShadow: '0 2px 15px rgba(0,0,0,0.6)',
  },
};
