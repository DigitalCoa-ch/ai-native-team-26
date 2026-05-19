import React from 'react';

export default function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <span style={styles.flag}>🇺🇸</span>
          <span style={styles.title}>Email Culture Bridge</span>
          <span style={styles.flag}>🇨🇳</span>
        </div>
        <h1 style={styles.heading}>Can't wait to be Friday</h1>
        <div style={styles.divider} />
        <p style={styles.subtext}>
          Bridging email cultures between the USA & China
        </p>
        <div style={styles.comparison}>
          <div style={styles.column}>
            <h3 style={styles.columnTitle}>🇺🇸 American Style</h3>
            <ul style={styles.list}>
              <li>Direct & concise</li>
              <li>Get to the point fast</li>
              <li>"How are you?" is small talk</li>
              <li>Clear subject lines</li>
            </ul>
          </div>
          <div style={styles.column}>
            <h3 style={styles.columnTitle}>🇨🇳 Chinese Style</h3>
            <ul style={styles.list}>
              <li>Indirect & contextual</li>
              <li>Build relationship first</li>
              <li>Greetings show respect</li>
              <li>Context matters more</li>
            </ul>
          </div>
        </div>
        <div style={styles.footer}>
          🌏 Connecting East & West through better communication
        </div>
      </div>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
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
    background: 'linear-gradient(135deg, #1a365d 0%, #2c5282 50%, #3182ce 100%)',
    padding: '1rem',
  },
  card: {
    background: 'rgba(255, 255, 255, 0.95)',
    borderRadius: '24px',
    padding: '3rem',
    textAlign: 'center',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
    maxWidth: '600px',
    width: '100%',
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.75rem',
    marginBottom: '1.5rem',
  },
  flag: {
    fontSize: '2rem',
  },
  title: {
    fontSize: '0.9rem',
    fontWeight: '600',
    color: '#4299e1',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: '800',
    color: '#1a365d',
    margin: '0 0 1rem 0',
    lineHeight: '1.2',
  },
  divider: {
    width: '80px',
    height: '4px',
    background: 'linear-gradient(90deg, #3182ce, #4299e1)',
    borderRadius: '2px',
    margin: '0 auto 1.5rem',
  },
  subtext: {
    fontSize: '1.1rem',
    color: '#4a5568',
    margin: '0 0 2rem 0',
  },
  comparison: {
    display: 'flex',
    gap: '2rem',
    textAlign: 'left',
    marginBottom: '2rem',
  },
  column: {
    flex: 1,
    padding: '1.25rem',
    background: '#f7fafc',
    borderRadius: '16px',
  },
  columnTitle: {
    fontSize: '1rem',
    fontWeight: '700',
    color: '#2d3748',
    margin: '0 0 1rem 0',
  },
  list: {
    margin: 0,
    padding: '0 0 0 1.25rem',
    fontSize: '0.9rem',
    color: '#4a5568',
    lineHeight: '1.8',
  },
  footer: {
    fontSize: '0.85rem',
    color: '#718096',
    padding: '1rem',
    background: '#edf2f7',
    borderRadius: '12px',
  },
};
