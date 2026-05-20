'use client';

import React from 'react';
import Link from 'next/link';

const MOCK_REFRAMED = `Dear Mr. Zhang,

I hope this message finds you well and that your Q2 planning initiatives are progressing smoothly.

As we approach the end of Q2, our team is currently preparing for our quarterly review meeting scheduled for Tuesday morning. In preparation for this important session, we would greatly appreciate any Q2 financial documentation you may be able to share at your convenience prior to the meeting.

Would you kindly let us know if there are any constraints we should be aware of, or if there is any additional context that would be helpful for us to consider?

We look forward to your continued partnership and are happy to discuss further at your convenience.

With respect,
[Your Name]`;

const MOCK_RULES_TRIGGERED = [
  { ruleId: 1, title: 'Context Before Demand', highlight: '"As we approach the end of Q2..." establishes temporal context before the request' },
  { ruleId: 2, title: 'Mianzi Preservation', highlight: '"would greatly appreciate" and "at your convenience" soften imperatives' },
  { ruleId: 4, title: 'Relational Warmth', highlight: 'Opening wishes acknowledge partnership and mutual success' },
];

export default function Output() {
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
        <Link href="/knowledge" style={styles.navLink}>Knowledge Base</Link>
        <Link href="/output" style={{ ...styles.navLink, ...styles.navLinkActive }}>Panel & Output</Link>
        <Link href="/control" style={styles.navLink}>HITL Controls</Link>
      </nav>

      <main style={styles.mainContent}>
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h2 style={styles.cardTitle}>3. Panel & Output — Reasoning Layer</h2>
            <span style={styles.cardBadgeComplete}>Complete</span>
          </div>

          <div style={styles.riskSection}>
            <div style={styles.riskHeader}>
              <span style={styles.riskLabel}>Mianzi (Face) Risk Meter</span>
              <span style={styles.riskValue}>HIGH RISK</span>
            </div>
            <div style={styles.riskBarBg}>
              <div style={{ ...styles.riskBarFill, width: '85%' }} />
            </div>
            <p style={styles.riskNote}>
              <strong>Raw input analysis:</strong> 85% Bluntness/Accidental Offense score — Direct imperative "Do not be late" violates Mianzi preservation (Rule 2)
            </p>
          </div>

          <div style={styles.outputSection}>
            <div style={styles.outputHeader}>
              <span style={styles.outputLabel}>Reframed Email for China 🇨🇳</span>
            </div>
            <div style={styles.outputText}>{MOCK_REFRAMED}</div>
          </div>

          <div style={styles.highlightsSection}>
            <h3 style={styles.highlightsTitle}>Rules Triggered in This Reframing</h3>
            {MOCK_RULES_TRIGGERED.map((item) => (
              <div key={item.ruleId} style={styles.highlightItem}>
                <span style={styles.highlightNumber}>Rule {item.ruleId}</span>
                <div style={styles.highlightContent}>
                  <span style={styles.highlightTitle}>{item.title}</span>
                  <span style={styles.highlightText}>{item.highlight}</span>
                </div>
              </div>
            ))}
          </div>

          <div style={styles.navHint}>
            <Link href="/control" style={styles.navHintLink}>
              Continue to HITL Control Center →
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
  mainContent: { padding: '2rem', maxWidth: '850px', margin: '0 auto' },
  card: { backgroundColor: '#1e293b', borderRadius: '12px', padding: '2rem', border: '1px solid #334155' },
  cardHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid #334155' },
  cardTitle: { fontSize: '1.1rem', fontWeight: '700', color: '#f8fafc', margin: 0 },
  cardBadgeComplete: { fontSize: '0.65rem', fontWeight: '600', color: '#ecfdf5', backgroundColor: '#059669', padding: '0.25rem 0.6rem', borderRadius: '4px', textTransform: 'uppercase' },
  riskSection: { marginBottom: '2rem' },
  riskHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' },
  riskLabel: { fontSize: '0.875rem', fontWeight: '600', color: '#e2e8f0' },
  riskValue: { fontSize: '0.75rem', fontWeight: '700', color: '#f87171', backgroundColor: 'rgba(248, 113, 113, 0.15)', padding: '0.25rem 0.6rem', borderRadius: '4px' },
  riskBarBg: { width: '100%', height: '10px', backgroundColor: '#334155', borderRadius: '5px', overflow: 'hidden', marginBottom: '0.75rem' },
  riskBarFill: { height: '100%', backgroundColor: '#f87171', borderRadius: '5px', transition: 'width 0.5s ease' },
  riskNote: { fontSize: '0.8rem', color: '#94a3b8', margin: 0, lineHeight: '1.5' },
  outputSection: { marginBottom: '2rem' },
  outputHeader: { marginBottom: '0.75rem' },
  outputLabel: { fontSize: '0.875rem', fontWeight: '600', color: '#e2e8f0' },
  outputText: { fontSize: '0.875rem', color: '#e2e8f0', lineHeight: '1.7', whiteSpace: 'pre-wrap', backgroundColor: '#0f172a', padding: '1.25rem', borderRadius: '8px', border: '1px solid #334155' },
  highlightsSection: { marginBottom: '1.5rem' },
  highlightsTitle: { fontSize: '0.9rem', fontWeight: '700', color: '#f8fafc', margin: '0 0 1rem 0' },
  highlightItem: { display: 'flex', gap: '1rem', padding: '1rem', backgroundColor: '#0f172a', borderRadius: '8px', marginBottom: '0.75rem', border: '1px solid #334155' },
  highlightNumber: { fontSize: '0.7rem', fontWeight: '700', color: '#0f172a', backgroundColor: '#a78bfa', padding: '0.25rem 0.5rem', borderRadius: '4px', height: 'fit-content', flexShrink: 0 },
  highlightContent: { display: 'flex', flexDirection: 'column', gap: '0.25rem' },
  highlightTitle: { fontSize: '0.85rem', fontWeight: '600', color: '#f8fafc' },
  highlightText: { fontSize: '0.8rem', color: '#94a3b8', lineHeight: '1.4' },
  navHint: { paddingTop: '1rem', borderTop: '1px solid #334155', textAlign: 'center' },
  navHintLink: { fontSize: '0.875rem', fontWeight: '600', color: '#22d3ee', textDecoration: 'none' },
};
