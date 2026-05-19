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
        <p style={styles.subtext}>
          Bridging email cultures between the USA & China
        </p>
        <div style={styles.features}>
          <div style={styles.feature}>
            <span style={styles.featureEmoji}>💬</span>
            <h3>Communication Styles</h3>
            <p>Understanding direct vs indirect approaches</p>
          </div>
          <div style={styles.feature}>
            <span style={styles.featureEmoji}>🤝</span>
            <h3>Relationship First</h3>
            <p>Building trust before business</p>
          </div>
          <div style={styles.feature}>
            <span style={styles.featureEmoji}>🌏</span>
            <h3>Global Teams</h3>
            <p>Connecting East & West</p>
          </div>
        </div>
        <div style={styles.footer}>
          Better communication starts with understanding
        </div>
      </div>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
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
    marginBottom: '1rem',
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
  subtext: {
    fontSize: '1.1rem',
    color: '#4a5568',
    margin: '0 0 2.5rem 0',
  },
  features: {
    display: 'flex',
    gap: '1.5rem',
    marginBottom: '2rem',
  },
  feature: {
    flex: 1,
    padding: '1.25rem 1rem',
    background: '#f7fafc',
    borderRadius: '16px',
  },
  featureEmoji: {
    fontSize: '2rem',
    display: 'block',
    marginBottom: '0.75rem',
  },
  features h3: {
    fontSize: '0.95rem',
    fontWeight: '700',
    color: '#2d3748',
    margin: '0 0 0.5rem 0',
  },
  features p: {
    fontSize: '0.8rem',
    color: '#718096',
    margin: 0,
    lineHeight: '1.4',
  },
  footer: {
    fontSize: '0.85rem',
    color: '#718096',
    padding: '1rem',
    background: '#edf2f7',
    borderRadius: '12px',
  },
};
