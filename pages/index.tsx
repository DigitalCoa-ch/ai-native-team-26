import React from 'react';

export default function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.emoji}>🎉</div>
        <h1 style={styles.heading}>Can't wait to be Friday</h1>
        <div style={styles.divider} />
        <p style={styles.subtext}>
          The weekend is calling. Are you ready?
        </p>
        <div style={styles.countdown}>
          <Countdown />
        </div>
      </div>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      `}</style>
    </div>
  );
}

function Countdown() {
  const [timeLeft, setTimeLeft] = React.useState('');

  React.useEffect(() => {
    const update = () => {
      const now = new Date();
      const friday = new Date(now);
      friday.setDate(now.getDate() + ((5 - now.getDay() + 7) % 7 || 7));
      friday.setHours(17, 0, 0, 0);
      
      if (now.getDay() === 5 && now.getHours() >= 17) {
        setTimeLeft('🎊 It\'s Friday! Enjoy!');
        return;
      }
      
      const diff = friday - now;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      
      if (days > 0) {
        setTimeLeft(`${days}d ${hours}h ${mins}m until Friday`);
      } else if (hours > 0) {
        setTimeLeft(`${hours}h ${mins}m until Friday`);
      } else {
        setTimeLeft(`${mins}m until Friday!`);
      }
    };
    update();
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, []);

  return <p style={styles.countdownText}>{timeLeft}</p>;
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '1rem',
  },
  card: {
    background: 'rgba(255, 255, 255, 0.95)',
    borderRadius: '24px',
    padding: '3rem 4rem',
    textAlign: 'center',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    maxWidth: '500px',
    width: '100%',
  },
  emoji: {
    fontSize: '4rem',
    animation: 'float 3s ease-in-out infinite',
    marginBottom: '1rem',
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: '800',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    margin: '0 0 1.5rem 0',
    lineHeight: '1.2',
  },
  divider: {
    width: '60px',
    height: '4px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '2px',
    margin: '0 auto 1.5rem',
  },
  subtext: {
    fontSize: '1.1rem',
    color: '#6b7280',
    margin: '0 0 2rem 0',
  },
  countdown: {
    background: '#f3f4f6',
    borderRadius: '12px',
    padding: '1rem',
  },
  countdownText: {
    margin: 0,
    fontSize: '1rem',
    color: '#4b5563',
    fontWeight: '500',
  },
};
