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

export default function Home() {
  return (
    <div style={styles.pageWrapper}>
      <header style={styles.header}>
        <div style={styles.headerLeft}>
          <span style={styles.headerLogo}>🇺🇸</span>
          <span style={styles.headerTitle}>Email Culture Bridge</span>
          <span style={styles.headerLogo}>🇨🇳</span>
        </div>
        <div style={styles.headerRight}>
          <span style={styles.headerBadge}>B2B SaaS Utility</span>
          <span style={styles.headerVersion}>v1.0 Enterprise</span>
        </div>
      </header>

      <main style={styles.mainContent}>
        <div style={styles.heroSection}>
          <h1 style={styles.heroTitle}>What would you like to do?</h1>
          <p style={styles.heroSubtitle}>Select a module below to get started</p>
        </div>

        <div style={styles.grid}>
          {SECTIONS.map((section) => (
            <Link key={section.num} href={section.href} style={{ textDecoration: 'none' }}>
              <div style={{ ...styles.card, borderTop: `4px solid ${section.color}` }}>
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
  pageWrapper: { fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", minHeight: '100vh', backgroundColor: '#0f172a', color: '#e2e8f0' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', borderBottom: '1px solid #1e293b', backgroundColor: '#1e293b' },
  headerLeft: { display: 'flex', alignItems: 'center', gap: '0.75rem' },
  headerLogo: { fontSize: '1.5rem' },
  headerTitle: { fontSize: '1.1rem', fontWeight: '700', color: '#f8fafc', letterSpacing: '0.05em' },
  headerRight: { display: 'flex', alignItems: 'center', gap: '1rem' },
  headerBadge: { fontSize: '0.7rem', fontWeight: '600', color: '#0f172a', backgroundColor: '#22d3ee', padding: '0.25rem 0.75rem', borderRadius: '9999px', textTransform: 'uppercase', letterSpacing: '0.05em' },
  headerVersion: { fontSize: '0.75rem', color: '#64748b' },
  mainContent: { padding: '3rem 2rem', maxWidth: '1200px', margin: '0 auto' },
  heroSection: { textAlign: 'center', marginBottom: '3rem' },
  heroTitle: { fontSize: '2rem', fontWeight: '800', color: '#f8fafc', margin: '0 0 0.5rem 0' },
  heroSubtitle: { fontSize: '1rem', color: '#94a3b8', margin: 0 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' },
  card: { backgroundColor: '#1e293b', borderRadius: '16px', padding: '2rem', border: '1px solid #334155', cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s', display: 'flex', flexDirection: 'column' },
  cardNum: { marginBottom: '1rem' },
  numCircle: { width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: '700', color: '#0f172a' },
  cardIcon: { fontSize: '2.5rem', marginBottom: '1rem' },
  cardTitle: { fontSize: '1.1rem', fontWeight: '700', color: '#f8fafc', margin: '0 0 0.25rem 0' },
  cardSubtitle: { fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 1rem 0' },
  cardDesc: { fontSize: '0.875rem', color: '#94a3b8', lineHeight: '1.6', margin: '0 0 1.5rem 0', flex: 1 },
  cardAction: { fontSize: '0.875rem', fontWeight: '600' },
};
