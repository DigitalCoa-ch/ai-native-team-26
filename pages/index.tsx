'use client';

import React from 'react';
import Link from 'next/link';

const BACKGROUND_IMAGE = 'https://minimax-algeng-chat-tts-us.oss-us-east-1.aliyuncs.com/ccv2%2F2026-05-20%2FMiniMax-M2.7%2F2053528104411869618%2Ffb386fe3dfbe9bdf9a5b136ed505fb1ccc0e5f43cdc18caee203154ac32dbc01..jpeg?Expires=1779362194&OSSAccessKeyId=LTAI5tCpJNKCf5EkQHSuL9xg&Signature=xsItlr31gpCFmljMHfdfA4dwpjE%3D';

const FEATURES = [
  { icon: '✏️', title: 'Reframe Emails', desc: 'Transform direct Western demands into culturally appropriate Chinese business communications' },
  { icon: '📚', title: 'Learn the Rules', desc: 'Understand the five core principles of Chinese corporate communication' },
  { icon: '🧠', title: 'See the Logic', desc: 'Review which rules were triggered and why your message was transformed' },
  { icon: '⚠️', title: 'Human Approval', desc: 'Every reframe requires human review before any action is taken' },
];

export default function Home() {
  return (
    <div style={{ ...styles.pageWrapper, backgroundImage: `url(${BACKGROUND_IMAGE})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div style={styles.topBar}>
        <span style={styles.topLogo}>🇺🇸</span>
        <span style={styles.topTitle}>Email Culture Bridge</span>
        <span style={styles.topLogo}>🇨🇳</span>
      </div>

      <main style={styles.mainContent}>
        <div style={styles.heroCard}>
          <h1 style={styles.heroTitle}>Cultural Bridge Builder<br />Between The USA & China</h1>
          <p style={styles.heroSlogan}>Translate Meaning, Not Just Language</p>
          <div style={styles.divider} />
          <p style={styles.heroDesc}>
            Transform direct Western email drafts into culturally appropriate communications 
            for Chinese business contexts — while preserving your original intent.
          </p>
          <div style={styles.ctaButtons}>
            <Link href="/workspace" style={styles.primaryBtn}>
              Start Reframing →
            </Link>
            <Link href="/about" style={styles.secondaryBtn}>
              Learn More
            </Link>
          </div>
        </div>

        <div style={styles.featuresGrid}>
          {FEATURES.map((feature, i) => (
            <div key={i} style={styles.featureCard}>
              <div style={styles.featureIcon}>{feature.icon}</div>
              <h3 style={styles.featureTitle}>{feature.title}</h3>
              <p style={styles.featureDesc}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  pageWrapper: { fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", minHeight: '100vh', backgroundColor: '#0f172a' },
  topBar: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', padding: '1.5rem 2rem', backgroundColor: 'rgba(15, 23, 42, 0.9)', borderBottom: '1px solid #1e293b' },
  topLogo: { fontSize: '1.75rem' },
  topTitle: { fontSize: '1.5rem', fontWeight: '800', color: '#ffffff', letterSpacing: '0.02em' },
  mainContent: { padding: '3rem 2rem', maxWidth: '1000px', margin: '0 auto' },
  heroCard: { textAlign: 'center', padding: '3rem 2rem', backgroundColor: 'rgba(30, 41, 59, 0.95)', borderRadius: '24px', border: '1px solid #334155', marginBottom: '3rem', backdropFilter: 'blur(8px)' },
  heroTitle: { fontSize: '2.25rem', fontWeight: '800', color: '#f8fafc', margin: '0 0 1rem 0', lineHeight: '1.2' },
  heroSlogan: { fontSize: '1.25rem', fontWeight: '600', color: '#22d3ee', margin: '0 0 1.5rem 0', letterSpacing: '0.02em' },
  divider: { width: '80px', height: '4px', backgroundColor: '#22d3ee', borderRadius: '2px', margin: '0 auto 1.5rem' },
  heroDesc: { fontSize: '1rem', color: '#94a3b8', lineHeight: '1.7', margin: '0 0 2rem 0', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' },
  ctaButtons: { display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' },
  primaryBtn: { padding: '0.875rem 2rem', fontSize: '1rem', fontWeight: '700', color: '#0f172a', backgroundColor: '#22d3ee', borderRadius: '8px', textDecoration: 'none' },
  secondaryBtn: { padding: '0.875rem 2rem', fontSize: '1rem', fontWeight: '700', color: '#22d3ee', backgroundColor: 'transparent', border: '2px solid #22d3ee', borderRadius: '8px', textDecoration: 'none' },
  featuresGrid: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' },
  featureCard: { backgroundColor: 'rgba(30, 41, 59, 0.9)', borderRadius: '16px', padding: '1.75rem', border: '1px solid #334155', backdropFilter: 'blur(8px)' },
  featureIcon: { fontSize: '2rem', marginBottom: '0.75rem' },
  featureTitle: { fontSize: '1rem', fontWeight: '700', color: '#f8fafc', margin: '0 0 0.5rem 0' },
  featureDesc: { fontSize: '0.875rem', color: '#94a3b8', lineHeight: '1.6', margin: 0 },
};