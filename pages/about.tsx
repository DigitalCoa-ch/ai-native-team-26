'use client';

import React from 'react';
import Link from 'next/link';

export default function About() {
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
        <Link href="/about" style={{ ...styles.navLink, ...styles.navLinkActive }}>Why This Matters</Link>
        <Link href="/sections" style={styles.navLink}>Modules</Link>
        <Link href="/workspace" style={styles.navLink}>Core Workspace</Link>
      </nav>

      <main style={styles.mainContent}>
        <div style={styles.card}>
          <h1 style={styles.title}>Why Cross-Cultural Email Communication Matters</h1>
          <p style={styles.subtitle}>The hidden cost of cultural miscommunication in B2B email</p>

          <div style={styles.statsSection}>
            <h2 style={styles.sectionTitle}>📊 The Cost of Miscommunication</h2>
            <div style={styles.statsGrid}>
              <div style={styles.statCard}>
                <div style={styles.statNumber}>70%</div>
                <div style={styles.statLabel}>of international partnerships fail due to communication issues</div>
              </div>
              <div style={styles.statCard}>
                <div style={styles.statNumber}>$2T+</div>
                <div style={styles.statLabel}>lost annually due to cross-cultural business miscommunication</div>
              </div>
              <div style={styles.statCard}>
                <div style={styles.statNumber}>3x</div>
                <div style={styles.statLabel}>higher chance of deal failure when cultural norms are ignored</div>
              </div>
              <div style={styles.statCard}>
                <div style={styles.statNumber}>89%</div>
                <div style={styles.statLabel}>of employees have witnessed cultural miscommunication at work</div>
              </div>
            </div>
          </div>

          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>🇺🇸 The Western Approach</h2>
            <p style={styles.sectionText}>
              In American and European business culture, emails are expected to be <strong>direct, concise, and action-oriented</strong>. 
              "Send me the report by Friday" is considered efficient and professional. Time is money, and cluttering emails 
              with pleasantries is seen as inefficient.
            </p>
            <ul style={styles.list}>
              <li>Get to the point quickly</li>
              <li>Use direct imperatives ("Send", "Complete", "Review")</li>
              <li>"How are you?" is optional small talk</li>
              <li>Clear subject lines, actionable requests</li>
            </ul>
          </div>

          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>🇨🇳 The Chinese Business Approach</h2>
            <p style={styles.sectionText}>
              In Chinese business culture, emails require <strong>context, relationship-building, and face preservation</strong>. 
              A direct demand like "Send me the report" without prior context or relationship framing can cause the recipient 
              to lose face (Mianzi) and damage the business relationship.
            </p>
            <ul style={styles.list}>
              <li>Establish context before making requests</li>
              <li>Use indirect, collaborative language</li>
              <li>Respect hierarchical relationships and titles</li>
              <li>Relationship (Guanxi) precedes business</li>
            </ul>
          </div>

          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>⚠️ The Impact on Partnerships</h2>
            <p style={styles.sectionText}>
              When Western-style emails are sent to Chinese business partners without cultural reframing:
            </p>
            <ul style={styles.list}>
              <li>😰 <strong>Face loss</strong> — Direct demands can humiliate recipients</li>
              <li>📉 <strong>Damaged Guanxi</strong> — Business relationships suffer long-term</li>
              <li>🚫 <strong>Ignored requests</strong> — Emails may go unanswered or receive passive responses</li>
              <li>💼 <strong>Lost deals</strong> — The underlying request never gets fulfilled</li>
              <li>⏰ <strong>Delays</strong> — Extra rounds of back-and-forth to rebuild trust</li>
              <li>📝 <strong>Legal risk</strong> — Misunderstood agreements can lead to disputes</li>
            </ul>
          </div>

          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>✅ The Solution</h2>
            <p style={styles.sectionText}>
              <strong>Email Culture Bridge</strong> transforms your direct Western email drafts into culturally appropriate 
              communications for Chinese business contexts — while preserving your original intent and message.
            </p>
            <p style={styles.sectionText}>
              The system applies five core rules derived from Chinese corporate communication norms: 
              Context Before Demand, Mianzi Preservation, Hierarchical Alignment, Relational Warmth, 
              and Collectivist Framing.
            </p>
          </div>

          <div style={styles.cta}>
            <Link href="/workspace" style={styles.ctaButton}>
              Try the Reframing Workspace →
            </Link>
          </div>
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
  mainContent: { padding: '2rem', maxWidth: '800px', margin: '0 auto' },
  card: { backgroundColor: '#1e293b', borderRadius: '12px', padding: '2rem', border: '1px solid #334155' },
  title: { fontSize: '1.75rem', fontWeight: '800', color: '#f8fafc', margin: '0 0 0.5rem 0' },
  subtitle: { fontSize: '1rem', color: '#94a3b8', margin: '0 0 2rem 0' },
  statsSection: { marginBottom: '2rem', padding: '1.5rem', backgroundColor: '#0f172a', borderRadius: '12px', border: '1px solid #334155' },
  sectionTitle: { fontSize: '1.1rem', fontWeight: '700', color: '#f8fafc', margin: '0 0 1rem 0' },
  statsGrid: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' },
  statCard: { backgroundColor: '#1e293b', borderRadius: '12px', padding: '1.25rem', textAlign: 'center', border: '1px solid #334155' },
  statNumber: { fontSize: '2rem', fontWeight: '800', color: '#22d3ee', marginBottom: '0.5rem' },
  statLabel: { fontSize: '0.8rem', color: '#94a3b8', lineHeight: '1.4' },
  section: { marginBottom: '2rem', padding: '1.5rem', backgroundColor: '#0f172a', borderRadius: '12px', border: '1px solid #334155' },
  sectionText: { fontSize: '0.9rem', color: '#cbd5e1', lineHeight: '1.7', margin: '0 0 1rem 0' },
  list: { fontSize: '0.875rem', color: '#94a3b8', lineHeight: '1.8', margin: '0', paddingLeft: '1.5rem' },
  cta: { textAlign: 'center', paddingTop: '1rem' },
  ctaButton: { display: 'inline-block', padding: '0.875rem 2rem', fontSize: '0.9rem', fontWeight: '700', color: '#0f172a', backgroundColor: '#22d3ee', borderRadius: '8px', textDecoration: 'none' },
};