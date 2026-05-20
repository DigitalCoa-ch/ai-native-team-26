'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const MOCK_REFRAMED = `Dear Mr. Zhang,

I hope this message finds you well and that your Q2 planning initiatives are progressing smoothly.

As we approach the end of Q2, our team is currently preparing for our quarterly review meeting scheduled for Tuesday morning. In preparation for this important session, we would greatly appreciate any Q2 financial documentation you may be able to share at your convenience prior to the meeting.

Would you kindly let us know if there are any constraints we should be aware of, or if there is any additional context that would be helpful for us to consider?

We look forward to your continued partnership and are happy to discuss further at your convenience.

With respect,
[Your Name]`;

export default function Control() {
  const [copied, setCopied] = useState(false);
  const [refineInput, setRefineInput] = useState('');

  const handleCopy = () => {
    navigator.clipboard.writeText(MOCK_REFRAMED);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
        <Link href="/output" style={styles.navLink}>Panel & Output</Link>
        <Link href="/control" style={{ ...styles.navLink, ...styles.navLinkActive }}>HITL Controls</Link>
      </nav>

      <main style={styles.mainContent}>
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h2 style={styles.cardTitle}>4. HITL Control Center</h2>
            <span style={styles.cardBadgeWarning}>Human Required</span>
          </div>

          <div style={styles.refineSection}>
            <label style={styles.label}>Refine Tone with AI Agent</label>
            <div style={styles.refineRow}>
              <input
                style={styles.input}
                placeholder="e.g., The tone is good, but make it slightly more urgent for technical context..."
                value={refineInput}
                onChange={(e) => setRefineInput(e.target.value)}
              />
              <button style={styles.secondaryBtn}>Refine</button>
            </div>
          </div>

          <div style={styles.actionCenter}>
            <p style={styles.actionLabel}>Action Center</p>
            <div style={styles.actionButtons}>
              <button style={styles.actionBtn} onClick={handleCopy}>
                {copied ? '✓ Copied to Clipboard!' : '📋 Copy Reframed Email to Clipboard'}
              </button>
              <button style={styles.actionBtnOutline}>
                📤 Export to Outlook Drafts
              </button>
            </div>
          </div>

          <div style={styles.complianceBox}>
            <div style={styles.complianceIcon}>⚠️</div>
            <div style={styles.complianceContent}>
              <p style={styles.complianceTitle}>Human-in-the-Loop Compliance</p>
              <p style={styles.complianceText}>
                This system requires human review before any email action. The reframed output must be reviewed by an authorized user. There is no auto-send functionality — you must explicitly copy or export the content yourself.
              </p>
            </div>
          </div>

          <div style={styles.refinedPreview}>
            <p style={styles.previewLabel}>Current Draft</p>
            <div style={styles.previewText}>{MOCK_REFRAMED}</div>
          </div>

          <div style={styles.navHints}>
            <Link href="/workspace" style={styles.navHintsLink}>← Back to Workspace</Link>
            <Link href="/output" style={styles.navHintsLink}>View Results →</Link>
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
  cardBadgeWarning: { fontSize: '0.65rem', fontWeight: '600', color: '#fef3c7', backgroundColor: '#d97706', padding: '0.25rem 0.6rem', borderRadius: '4px', textTransform: 'uppercase' },
  refineSection: { marginBottom: '1.5rem' },
  label: { display: 'block', fontSize: '0.8rem', fontWeight: '600', color: '#cbd5e1', marginBottom: '0.5rem' },
  refineRow: { display: 'flex', gap: '0.75rem' },
  input: { flex: 1, padding: '0.75rem 1rem', fontSize: '0.875rem', fontFamily: 'inherit', backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px', color: '#e2e8f0', outline: 'none' },
  secondaryBtn: { padding: '0.75rem 1.25rem', fontSize: '0.875rem', fontWeight: '600', color: '#0f172a', backgroundColor: '#22d3ee', border: 'none', borderRadius: '8px', cursor: 'pointer', whiteSpace: 'nowrap' },
  actionCenter: { marginBottom: '1.5rem' },
  actionLabel: { fontSize: '0.8rem', fontWeight: '600', color: '#cbd5e1', marginBottom: '0.75rem' },
  actionButtons: { display: 'flex', gap: '0.75rem', flexWrap: 'wrap' },
  actionBtn: { flex: 1, minWidth: '220px', padding: '0.875rem 1rem', fontSize: '0.875rem', fontWeight: '600', color: '#0f172a', backgroundColor: '#22d3ee', border: 'none', borderRadius: '8px', cursor: 'pointer' },
  actionBtnOutline: { flex: 1, minWidth: '220px', padding: '0.875rem 1rem', fontSize: '0.875rem', fontWeight: '600', color: '#22d3ee', backgroundColor: 'transparent', border: '1px solid #22d3ee', borderRadius: '8px', cursor: 'pointer' },
  complianceBox: { display: 'flex', gap: '1rem', padding: '1rem', backgroundColor: 'rgba(251, 191, 36, 0.1)', borderRadius: '8px', border: '1px solid rgba(251, 191, 36, 0.3)', marginBottom: '1.5rem' },
  complianceIcon: { fontSize: '1.5rem', flexShrink: 0 },
  complianceContent: { flex: 1 },
  complianceTitle: { fontSize: '0.875rem', fontWeight: '700', color: '#fbbf24', margin: '0 0 0.25rem 0' },
  complianceText: { fontSize: '0.8rem', color: '#d97706', lineHeight: '1.5', margin: 0 },
  refinedPreview: { marginBottom: '1.5rem' },
  previewLabel: { fontSize: '0.8rem', fontWeight: '600', color: '#cbd5e1', marginBottom: '0.5rem' },
  previewText: { fontSize: '0.875rem', color: '#e2e8f0', lineHeight: '1.6', whiteSpace: 'pre-wrap', backgroundColor: '#0f172a', padding: '1rem', borderRadius: '8px', border: '1px solid #334155' },
  navHints: { display: 'flex', justifyContent: 'space-between', paddingTop: '1rem', borderTop: '1px solid #334155' },
  navHintsLink: { fontSize: '0.875rem', fontWeight: '600', color: '#22d3ee', textDecoration: 'none' },
};
