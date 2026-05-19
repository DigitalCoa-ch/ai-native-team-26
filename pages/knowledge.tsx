'use client';

import React from 'react';
import Link from 'next/link';

const KNOWLEDGE_RULES = [
  { id: 1, title: 'Context Before Demand (因果)', desc: 'Lead with shared background/situational constraints before placing requests. Begin by establishing shared context or situational constraints before placing any requests or demands.' },
  { id: 2, title: 'Mianzi (Face) Preservation', desc: 'Softening direct imperatives into indirect, collaborative inquiries. Avoid blunt commands that could cause loss of face. Use polite, cooperative language.' },
  { id: 3, title: 'Hierarchical Alignment', desc: 'Explicitly acknowledge structural titles and group success. Reference organizational roles appropriately and frame achievements as collective rather than individual.' },
  { id: 4, title: 'Relational Warmth (Guanxi)', desc: 'Begin with brief, context-appropriate relationship-building pleasantries. Open with appropriate greetings that demonstrate respect for the relationship.' },
  { id: 5, title: 'Collectivist Framing', desc: 'Reframe personal accountability as mutual project success. Shift focus from "you" and "I" to "we" and "us" to align with collectivist cultural values.' },
];

export default function Knowledge() {
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
        <Link href="/workspace" style={styles.navLink}>Core Reframing Workspace</Link>
        <Link href="/knowledge" style={{ ...styles.navLink, ...styles.navLinkActive }}>Knowledge Base</Link>
        <Link href="/output" style={styles.navLink}>Panel & Output</Link>
        <Link href="/control" style={styles.navLink}>HITL Controls</Link>
      </nav>

      <main style={styles.mainContent}>
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h2 style={styles.cardTitle}>2. Active Grounding Guardrails</h2>
            <span style={styles.cardBadgeEnterprise}>Enterprise Tier</span>
          </div>
          <p style={styles.cardSubtitle}>These Chinese corporate communication rules are actively applied during email reframing. Understanding them helps you anticipate how your message will be transformed.</p>

          <div style={styles.rulesList}>
            {KNOWLEDGE_RULES.map((rule) => (
              <div key={rule.id} style={styles.ruleItem}>
                <div style={styles.ruleHeader}>
                  <div style={styles.ruleNumber}>{rule.id}</div>
                  <h3 style={styles.ruleTitle}>{rule.title}</h3>
                </div>
                <p style={styles.ruleDesc}>{rule.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

const styles = {
  pageWrapper: { fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", minHeight: '100vh', backgroundColor: '#0f172a', color: '#e2e8f0' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', borderBottom: '1px solid #1e293b', backgroundColor: '#1e293b' },
  headerLeft: { display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' },
  headerLogo: { fontSize: '1.5rem' },
  headerTitle: { fontSize: '1.1rem', fontWeight: '700', color: '#f8fafc', letterSpacing: '0.05em' },
  headerRight: { display: 'flex', alignItems: 'center', gap: '1rem' },
  headerBadge: { fontSize: '0.7rem', fontWeight: '600', color: '#0f172a', backgroundColor: '#22d3ee', padding: '0.25rem 0.75rem', borderRadius: '9999px', textTransform: 'uppercase', letterSpacing: '0.05em' },
  headerVersion: { fontSize: '0.75rem', color: '#64748b' },
  nav: { display: 'flex', padding: '0 2rem', backgroundColor: '#1e293b', borderBottom: '1px solid #334155', overflowX: 'auto' },
  navLink: { padding: '0.875rem 1.5rem', fontSize: '0.875rem', fontWeight: '600', color: '#94a3b8', textDecoration: 'none', borderBottom: '2px solid transparent', whiteSpace: 'nowrap' },
  navLinkActive: { color: '#22d3ee', borderBottom: '2px solid #22d3ee' },
  mainContent: { padding: '2rem', maxWidth: '900px', margin: '0 auto' },
  card: { backgroundColor: '#1e293b', borderRadius: '12px', padding: '2rem', border: '1px solid #334155' },
  cardHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid #334155' },
  cardTitle: { fontSize: '1.1rem', fontWeight: '700', color: '#f8fafc', margin: 0 },
  cardBadgeEnterprise: { fontSize: '0.65rem', fontWeight: '600', color: '#0f172a', backgroundColor: '#f59e0b', padding: '0.25rem 0.6rem', borderRadius: '4px', textTransform: 'uppercase' },
  cardSubtitle: { fontSize: '0.875rem', color: '#94a3b8', lineHeight: '1.6', margin: '0 0 2rem 0' },
  rulesList: { display: 'flex', flexDirection: 'column', gap: '1.25rem' },
  ruleItem: { padding: '1.5rem', backgroundColor: '#0f172a', borderRadius: '12px', border: '1px solid #334155' },
  ruleHeader: { display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' },
  ruleNumber: { width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f59e0b', color: '#0f172a', fontSize: '1rem', fontWeight: '700', borderRadius: '8px', flexShrink: 0 },
  ruleTitle: { fontSize: '1rem', fontWeight: '700', color: '#f8fafc', margin: 0 },
  ruleDesc: { fontSize: '0.875rem', color: '#94a3b8', lineHeight: '1.6', margin: '0 0 0 2.5rem' },
};
