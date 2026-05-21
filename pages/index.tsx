'use client';

import React from 'react';
import Link from 'next/link';

const BACKGROUND_IMAGE = 'https://minimax-algeng-chat-tts-us.oss-us-east-1.aliyuncs.com/ccv2%2F2026-05-20%2FMiniMax-M2.7%2F2053528104411869618%2Ffb386fe3dfbe9bdf9a5b136ed505fb1ccc0e5f43cdc18caee203154ac32dbc01..jpeg?Expires=1779362194&OSSAccessKeyId=LTAI5tCpJNKCf5EkQHSuL9xg&Signature=xsItlr31gpCFmljMHfdfA4dwpjE%3D';

export default function Home() {
  return (
    <div style={{ ...styles.pageWrapper, backgroundImage: `url(${BACKGROUND_IMAGE})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div style={styles.topBar}>
        <span style={styles.topLogo}>🇺🇸</span>
        <span style={styles.topTitle}>Email Culture Bridge</span>
        <span style={styles.topLogo}>🇨🇳</span>
      </div>

      <main style={styles.mainContent}>
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
      </main>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  pageWrapper: { fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", minHeight: '100vh', backgroundColor: '#0f172a' },
  topBar: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', padding: '1.5rem 2rem', backgroundColor: 'rgba(255, 255, 255, 0.8)' },
  topLogo: { fontSize: '1.75rem' },
  topTitle: { fontSize: '1.5rem', fontWeight: '800', color: '#0f172a', letterSpacing: '0.02em' },
  mainContent: { padding: '3rem 2rem', maxWidth: '900px', margin: '0 auto', minHeight: 'calc(100vh - 80px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' },
  heroTitle: { fontSize: '2.25rem', fontWeight: '800', color: '#0f172a', margin: '0 0 1rem 0', lineHeight: '1.2' },
  heroSlogan: { fontSize: '1.25rem', fontWeight: '600', color: '#0f172a', margin: '0 0 1.5rem 0', letterSpacing: '0.02em' },
  divider: { width: '80px', height: '4px', backgroundColor: '#22d3ee', borderRadius: '2px', margin: '0 auto 1.5rem' },
  heroDesc: { fontSize: '1rem', color: '#1e293b', lineHeight: '1.7', margin: '0 0 2rem 0', maxWidth: '600px' },
  ctaButtons: { display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' },
  primaryBtn: { padding: '0.875rem 2rem', fontSize: '1rem', fontWeight: '700', color: '#ffffff', backgroundColor: '#0f172a', borderRadius: '8px', textDecoration: 'none' },
  secondaryBtn: { padding: '0.875rem 2rem', fontSize: '1rem', fontWeight: '700', color: '#0f172a', backgroundColor: 'transparent', border: '2px solid #0f172a', borderRadius: '8px', textDecoration: 'none' },
};