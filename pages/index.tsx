'use client';

import React from 'react';
import Link from 'next/link';

const SECTIONS = [
  {
    num: 1,
    title: 'Core Reframing Workspace',
    subtitle: 'Input & Context',
    description: 'Draft your raw Western email, select relationship context, and culture target to prepare for reframing.',
    icon: '✏️',
    href: '/workspace',
    color: '#22d3ee',
  },
  {
    num: 2,
    title: 'Knowledge-Based Manager',
    subtitle: 'Data Foundation',
    description: 'View the active grounding guardrails — the Chinese corporate communication rules driving the analysis.',
    icon: '📚',
    href: '/knowledge',
    color: '#f59e0b',
  },
  {
    num: 3,
    title: 'Panel & Output',
    subtitle: 'Reasoning Layer',
    description: 'See the reframed email, Mianzi risk meter, and which rules were triggered to transform your message.',
    icon: '🧠',
    href: '/output',
    color: '#a78bfa',
  },
  {
    num: 4,
    title: 'HITL Control Center',
    subtitle: 'Human Checkpoint',
    description: 'Refine tone, copy the result, or export to Outlook. Human review is required before any action.',
    icon: '⚠️',
    href: '/control',
    color: '#fb923c',
  },
];

const BACKGROUND_IMAGE = 'https://minimax-algeng-chat-tts-us.oss-us-east-1.aliyuncs.com/ccv2%2F2026-05-20%2FMiniMax-M2.7%2F2053528104411869618%2Ffb386fe3dfbe9bdf9a5b136ed505fb1ccc0e5f43cdc18caee203154ac32dbc01..jpeg?Expires=1779362194&OSSAccessKeyId=LTAI5tCpJNKCf5EkQHSuL9xg&Signature=xsItlr31gpCFmljMHfdfA4dwpjE%3D';

export default function Home() {
  return (
    <div style={{ ...styles.pageWrapper, backgroundImage: `url(${BACKGROUND_IMAGE})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div style={styles.topBar}>
        <span style={styles.topLogo}>🇺🇸</span>
        <span style={styles.topTitle}>Email Culture Bridge</span>
        <span style={styles.topLogo}>🇨🇳</span>
      </div>

      <div style={styles.heroSection}>
        <h1 style={styles.heroTitle}>What would you like to do?</h1>
        <p style={styles.heroSubtitle}>Select a module below to get started</p>
      </div>

      <main style={styles.mainContent}>
        <div style={styles.grid}>
          {SECTIONS.map((section) => (
            <Link key={section.num} href={section.href} style={{ textDecoration: 'none' }}>
              <div style={{ ...styles.card, borderTop: `5px solid ${section.color}` }}>
                <div style={styles.cardNum}>
                  <span style={{ ...styles.numCircle, backgroundColor: section.color }}>{section.num}</span>
                </div>
                <div style={styles.cardIcon}>{section.icon}</div>
                <h2 style={styles.cardTitle}>{section.title}</h2>
                <p style={styles.cardSubtitle}>{section.subtitle}</p>
                <p style={styles.cardDesc}>{section.description}</p>
                <div style={{ ...styles.cardAction, color: section.color }}>
                  Open module →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

const styles = {
  pageWrapper: { fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", minHeight: '100vh', backgroundColor: '#f8fafc' },
  topBar: { display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1.5rem 2rem', backgroundColor: '#0f172a' },
  topLogo: { fontSize: '1.75rem' },
  topTitle: { fontSize: '1.5rem', fontWeight: '800', color: '#ffffff', letterSpacing: '0.02em' },
  heroSection: { padding: '2.5rem 2rem 1.5rem', textAlign: 'left', maxWidth: '1200px', margin: '0 auto' },
  heroTitle: { fontSize: '1.75rem', fontWeight: '800', color: '#0f172a', margin: '0 0 0.25rem 0' },
  heroSubtitle: { fontSize: '1rem', color: '#64748b', margin: 0 },
  mainContent: { padding: '0 2rem 3rem', maxWidth: '1200px', margin: '0 auto' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' },
  card: { backgroundColor: '#ffffff', borderRadius: '16px', padding: '2rem', border: '1px solid #e2e8f0', cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s', display: 'flex', flexDirection: 'column' },
  cardNum: { marginBottom: '1rem' },
  numCircle: { width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', fontWeight: '800', color: '#0f172a' },
  cardIcon: { fontSize: '2.5rem', marginBottom: '1rem' },
  cardTitle: { fontSize: '1.1rem', fontWeight: '800', color: '#0f172a', margin: '0 0 0.25rem 0' },
  cardSubtitle: { fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#64748b', margin: '0 0 1rem 0' },
  cardDesc: { fontSize: '0.875rem', color: '#475569', lineHeight: '1.6', margin: '0 0 1.5rem 0', flex: 1 },
  cardAction: { fontSize: '0.875rem', fontWeight: '700' },
};
