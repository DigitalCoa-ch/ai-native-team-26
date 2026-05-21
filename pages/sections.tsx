'use client';

import React from 'react';
import Link from 'next/link';

const MODULES = [
  {
    num: 1,
    title: 'Core Reframing Workspace',
    subtitle: 'Input & Context',
    description: 'Draft your raw Western email, select relationship context, and culture target to prepare for reframing.',
    icon: '✏️',
    href: '/workspace',
    color: '#22d3ee',
    badge: 'Start Here',
  },
  {
    num: 2,
    title: 'Knowledge-Based Manager',
    subtitle: 'Data Foundation',
    description: 'View the active grounding guardrails — the Chinese corporate communication rules driving the analysis.',
    icon: '📚',
    href: '/knowledge',
    color: '#f59e0b',
    badge: null,
  },
  {
    num: 3,
    title: 'Panel & Output',
    subtitle: 'Reasoning Layer',
    description: 'See the reframed email, Mianzi risk meter, and which rules were triggered to transform your message.',
    icon: '🧠',
    href: '/output',
    color: '#a78bfa',
    badge: null,
  },
  {
    num: 4,
    title: 'HITL Control Center',
    subtitle: 'Human Checkpoint',
    description: 'Refine tone, copy the result, or export to Outlook. Human review is required before any action.',
    icon: '⚠️',
    href: '/control',
    color: '#fb923c',
    badge: 'Required',
  },
];

export default function Sections() {
  return (
    <div style={styles.pageWrapper}>
      <header style={styles.header}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <div style={styles.headerLeft}>
            <span style={styles.headerLogo}>🇺🇸</span>
            <span style={styles.headerTitle}>Email Culture Bridge</span>
            <span style={styles.headerLogo}>🇨🇳</span>
          </div>
        </Link>
        <div style={styles.headerRight}>
          <span style={styles.headerBadge}>B2B SaaS Utility</span>
          <span style={styles.headerVersion}>v1.0 Enterprise</span>
        </div>
      </header>

      <nav style={styles.nav}>
        <Link href="/" style={styles.navLink}>Home</Link>
        <Link href="/about" style={styles.navLink}>Why This Matters</Link>
        <Link href="/sections" style={{ ...styles.navLink, ...styles.navLinkActive }}>Modules</Link>
        <Link href="/workspace" style={styles.navLink}>Core Workspace</Link>
      </nav>

      <main style={styles.mainContent}>
        <div style={styles.hero}>
          <h1 style={styles.heroTitle}>Email Culture Bridge Modules</h1>
          <p style={styles.heroSubtitle}>Select a module below to get started with cultural email reframing</p>
        </div>

        <div style={styles.grid}>
          {MODULES.map((module) => (
            <Link key={module.num} href={module.href} style={{ textDecoration: 'none' }}>
              <div style={{ ...styles.card, borderTop: `5px solid ${module.color}` }}>
                <div style={styles.cardHeader}>
                  <div style={styles.cardNum}>
                    <span style={{ ...styles.numCircle, backgroundColor: module.color }}>{module.num}</span>
                  </div>
                  {module.badge && (
                    <span style={{ ...styles.badge, backgroundColor: module.color }}>{module.badge}</span>
                  )}
                </div>
                <div style={styles.cardIcon}>{module.icon}</div>
                <h2 style={styles.cardTitle}>{module.title}</h2>
                <p style={styles.cardSubtitle}>{module.subtitle}</p>
                <p style={styles.cardDesc}>{module.description}</p>
                <div style={{ ...styles.cardAction, color: module.color }}>
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

const styles: { [key: string]: React.CSSProperties } = {
  pageWrapper: { fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", minHeight: '100vh', backgroundColor: '#0f172a', color: '#e2e8f0' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', borderBottom: '1px solid #1e293b', backgroundColor: '#1e293b' },
  headerLeft: { display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' },
  headerLogo: { fontSize: '1.5rem' },
  headerTitle: { fontSize: '1.1rem', fontWeight: '700', color: '#f8fafc', letterSpacing: '0.05em' },
  headerRight: { display: 'flex', alignItems: 'center', gap: '1rem' },
  headerBadge: { fontSize: '0.7rem', fontWeight: '600', color: '#0f172a', backgroundColor: '#22d3ee', padding: '0.25rem 0.75rem', borderRadius: '9999px', textTransform: 'uppercase', letterSpacing: '0.05em' },
  headerVersion: { fontSize: '0.75rem', color: '#64748b' },
  nav: { display: 'flex', padding: '0 2rem', backgroundColor: '#1e293b', borderBottom: '1px solid #334155', overflowX: 'auto' as const },
  navLink: { padding: '0.875rem 1.5rem', fontSize: '0.875rem', fontWeight: '600', color: '#94a3b8', textDecoration: 'none', borderBottom: '2px solid transparent', whiteSpace: 'nowrap' },
  navLinkActive: { color: '#22d3ee', borderBottom: '2px solid #22d3ee' },
  mainContent: { padding: '2rem', maxWidth: '1000px', margin: '0 auto' },
  hero: { textAlign: 'center', marginBottom: '2.5rem' },
  heroTitle: { fontSize: '1.75rem', fontWeight: '800', color: '#f8fafc', margin: '0 0 0.5rem 0' },
  heroSubtitle: { fontSize: '1rem', color: '#94a3b8', margin: 0 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' },
  card: { backgroundColor: '#1e293b', borderRadius: '16px', padding: '2rem', border: '1px solid #334155', cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s', display: 'flex', flexDirection: 'column' },
  cardHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' },
  cardNum: { marginBottom: 0 },
  numCircle: { width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', fontWeight: '800', color: '#0f172a' },
  badge: { fontSize: '0.65rem', fontWeight: '700', color: '#0f172a', padding: '0.25rem 0.6rem', borderRadius: '4px', textTransform: 'uppercase' },
  cardIcon: { fontSize: '2.5rem', marginBottom: '1rem' },
  cardTitle: { fontSize: '1.1rem', fontWeight: '800', color: '#f8fafc', margin: '0 0 0.25rem 0' },
  cardSubtitle: { fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#64748b', margin: '0 0 1rem 0' },
  cardDesc: { fontSize: '0.875rem', color: '#94a3b8', lineHeight: '1.6', margin: '0 0 1.5rem 0', flex: 1 },
  cardAction: { fontSize: '0.875rem', fontWeight: '700' },
};