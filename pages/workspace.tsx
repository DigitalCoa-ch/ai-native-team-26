'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const KNOWLEDGE_RULES = [
  { id: 1, title: 'Context Before Demand (因果)', desc: 'Lead with shared background/situational constraints before placing requests.' },
  { id: 2, title: 'Mianzi (Face) Preservation', desc: 'Soften direct imperatives into indirect, collaborative inquiries.' },
  { id: 3, title: 'Hierarchical Alignment', desc: 'Explicitly acknowledge structural titles and group success.' },
  { id: 4, title: 'Relational Warmth (Guanxi)', desc: 'Begin with brief, context-appropriate relationship-building pleasantries.' },
  { id: 5, title: 'Collectivist Framing', desc: 'Reframe personal accountability as mutual project success.' },
];

const RELATIONSHIP_LABELS: { [key: string]: string } = {
  prospect: 'New Prospect / Cold Outreach',
  vendor: 'Long-Term Vendor',
  government: 'Senior Government Official',
  peer: 'Peer-to-Peer Colleague',
};

export default function Workspace() {
  const [emailDraft, setEmailDraft] = useState('');
  const [relationship, setRelationship] = useState('');
  const [loading, setLoading] = useState(false);
  const [contextChanged, setContextChanged] = useState(false);
  const router = useRouter();

  const handleRelationshipChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;
    if (newValue !== relationship && emailDraft.trim()) {
      setContextChanged(true);
      setEmailDraft('');
    } else {
      setContextChanged(false);
    }
    setRelationship(newValue);
  };

  const handleAnalyze = () => {
    if (!emailDraft.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push('/output');
    }, 1200);
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
        <Link href="/workspace" style={{ ...styles.navLink, ...styles.navLinkActive }}>Core Reframing Workspace</Link>
        <Link href="/knowledge" style={styles.navLink}>Knowledge Base</Link>
        <Link href="/output" style={styles.navLink}>Panel & Output</Link>
        <Link href="/control" style={styles.navLink}>HITL Controls</Link>
      </nav>

      <main style={styles.mainContent}>
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h2 style={styles.cardTitle}>1. Core Reframing Workspace</h2>
            <span style={styles.cardBadge}>Input & Context</span>
          </div>

          <div style={styles.formGrid}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Target Culture</label>
              <select style={{...styles.select, backgroundColor: '#1e293b'}} disabled>
                <option>China 🇨🇳</option>
              </select>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Relationship Context</label>
              <select style={styles.select} value={relationship} onChange={handleRelationshipChange}>
                <option value="">Select context...</option>
                <option value="prospect">New Prospect / Cold Outreach</option>
                <option value="vendor">Long-Term Vendor</option>
                <option value="government">Senior Government Official</option>
                <option value="peer">Peer-to-Peer Colleague</option>
              </select>
            </div>
          </div>

          {contextChanged && (
            <div style={styles.contextWarning}>
              ⚠️ Context changed — previous draft cleared. Enter new draft for {RELATIONSHIP_LABELS[relationship as keyof typeof RELATIONSHIP_LABELS] || 'selected context'}.
            </div>
          )}

          <div style={styles.formGroup}>
            <label style={styles.label}>Raw Western Email Draft</label>
            <textarea
              style={styles.textarea}
              placeholder="e.g., Send me the Q2 financial report by Tuesday morning. Do not be late."
              value={emailDraft}
              onChange={(e) => { setEmailDraft(e.target.value); setContextChanged(false); }}
              rows={6}
            />
          </div>

          <button
            style={{...styles.primaryBtn, ...(loading || !emailDraft.trim() ? styles.btnDisabled : {})}}
            onClick={handleAnalyze}
            disabled={loading || !emailDraft.trim()}
          >
            {loading ? 'Analyzing...' : 'Analyze & Reframe Draft →'}
          </button>
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
  cardHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid #334155' },
  cardTitle: { fontSize: '1.1rem', fontWeight: '700', color: '#f8fafc', margin: 0 },
  cardBadge: { fontSize: '0.65rem', fontWeight: '600', color: '#0f172a', backgroundColor: '#22d3ee', padding: '0.25rem 0.6rem', borderRadius: '4px', textTransform: 'uppercase' },
  formGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' },
  formGroup: { marginBottom: '1.25rem' },
  label: { display: 'block', fontSize: '0.8rem', fontWeight: '600', color: '#cbd5e1', marginBottom: '0.5rem' },
  select: { width: '100%', padding: '0.75rem 1rem', fontSize: '0.875rem', backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px', color: '#e2e8f0', outline: 'none' },
  textarea: { width: '100%', padding: '0.75rem 1rem', fontSize: '0.875rem', fontFamily: 'inherit', backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px', color: '#e2e8f0', outline: 'none', resize: 'vertical', boxSizing: 'border-box' },
  contextWarning: { fontSize: '0.8rem', color: '#fbbf24', backgroundColor: 'rgba(251, 191, 36, 0.1)', border: '1px solid rgba(251, 191, 36, 0.3)', padding: '0.75rem 1rem', borderRadius: '8px', marginBottom: '1rem' },
  primaryBtn: { width: '100%', padding: '0.875rem 1.5rem', fontSize: '0.9rem', fontWeight: '700', color: '#0f172a', backgroundColor: '#22d3ee', border: 'none', borderRadius: '8px', cursor: 'pointer' },
  btnDisabled: { backgroundColor: '#334155', color: '#64748b', cursor: 'not-allowed' },
};