'use client';

import React, { useState } from 'react';

const KNOWLEDGE_RULES = [
  { id: 1, title: 'Context Before Demand (因果)', desc: 'Lead with shared background/situational constraints before placing requests.' },
  { id: 2, title: 'Mianzi (Face) Preservation', desc: 'Soften direct imperatives into indirect, collaborative inquiries.' },
  { id: 3, title: 'Hierarchical Alignment', desc: 'Explicitly acknowledge structural titles and group success.' },
  { id: 4, title: 'Relational Warmth (Guanxi)', desc: 'Begin with brief, context-appropriate relationship-building pleasantries.' },
  { id: 5, title: 'Collectivist Framing', desc: 'Reframe personal accountability as mutual project success.' },
];

const MOCK_REFRAMED = `Dear Mr. Zhang,

I hope this message finds you well and that your Q2 planning initiatives are progressing smoothly.

As we approach the end of Q2, our team is currently preparing for our quarterly review meeting scheduled for Tuesday morning. In preparation for this important session, we would greatly appreciate any Q2 financial documentation you may be able to share at your convenience prior to the meeting.

Would you kindly let us know if there are any constraints we should be aware of, or if there is any additional context that would be helpful for us to consider?

We look forward to your continued partnership and are happy to discuss further at your convenience.

With respect,
[Your Name]`;

const MOCK_RULES_TRIGGERED = [
  { ruleId: 1, title: 'Context Before Demand', highlight: '"As we approach the end of Q2..." and meeting context established first' },
  { ruleId: 2, title: 'Mianzi Preservation', highlight: '"would greatly appreciate" and "at your convenience" soften imperatives' },
  { ruleId: 4, title: 'Relational Warmth', highlight: 'Opening wishes and acknowledgment of partnership' },
];

export default function Home() {
  const [emailDraft, setEmailDraft] = useState('');
  const [relationship, setRelationship] = useState('');
  const [analyzed, setAnalyzed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [refineInput, setRefineInput] = useState('');
  const [activeTab, setActiveTab] = useState('analyze');

  const handleAnalyze = () => {
    if (!emailDraft.trim()) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setAnalyzed(true); setActiveTab('results'); }, 1200);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(MOCK_REFRAMED);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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

      <nav style={styles.nav}>
        <button style={{...styles.navBtn, ...(activeTab === 'analyze' ? styles.navBtnActive : {})}} onClick={() => setActiveTab('analyze')}>Analyze</button>
        <button style={{...styles.navBtn, ...(activeTab === 'rules' ? styles.navBtnActive : {})}} onClick={() => setActiveTab('rules')}>Knowledge Base</button>
        <button style={{...styles.navBtn, ...(activeTab === 'results' ? styles.navBtnActive : {})}} onClick={() => setActiveTab('results')}>Results</button>
        <button style={{...styles.navBtn, ...(activeTab === 'hith' ? styles.navBtnActive : {})}} onClick={() => setActiveTab('hith')}>HITL Controls</button>
      </nav>

      <main style={styles.mainContent}>
        {activeTab === 'analyze' && (
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <h2 style={styles.cardTitle}>The Core Reframing Workspace</h2>
              <span style={styles.cardBadge}>Input</span>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Target Culture</label>
              <select style={{...styles.select, backgroundColor: '#1e293b'}} disabled>
                <option>China 🇨🇳</option>
              </select>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Relationship Context</label>
              <select style={styles.select} value={relationship} onChange={(e) => setRelationship(e.target.value)}>
                <option value="">Select context...</option>
                <option value="prospect">New Prospect / Cold Outreach</option>
                <option value="vendor">Long-Term Vendor</option>
                <option value="government">Senior Government Official</option>
                <option value="peer">Peer-to-Peer Colleague</option>
              </select>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Raw Western Email Draft</label>
              <textarea style={styles.textarea} placeholder="e.g., Send me the Q2 financial report by Tuesday morning. Do not be late." value={emailDraft} onChange={(e) => setEmailDraft(e.target.value)} rows={5} />
            </div>
            <button style={{...styles.primaryBtn, ...(loading || !emailDraft.trim() ? styles.btnDisabled : {})}} onClick={handleAnalyze} disabled={loading || !emailDraft.trim()}>
              {loading ? 'Analyzing...' : 'Analyze & Reframe Draft'}
            </button>
          </div>
        )}

        {activeTab === 'rules' && (
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <h2 style={styles.cardTitle}>Active Grounding Guardrails</h2>
              <span style={styles.cardBadgeEnterprise}>Enterprise Tier</span>
            </div>
            <p style={styles.cardSubtitle}>System is using these Chinese corporate communication rules:</p>
            <div style={styles.rulesList}>
              {KNOWLEDGE_RULES.map((rule) => (
                <div key={rule.id} style={styles.ruleItem}>
                  <div style={styles.ruleNumber}>{rule.id}</div>
                  <div style={styles.ruleContent}>
                    <span style={styles.ruleTitle}>{rule.title}</span>
                    <span style={styles.ruleDesc}>{rule.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'results' && (
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <h2 style={styles.cardTitle}>Reframed Output & Reasoning</h2>
              <span style={{...styles.cardBadge, ...(analyzed ? styles.cardBadgeActive : {})}}>{analyzed ? 'Complete' : 'Awaiting Input'}</span>
            </div>
            {!analyzed && (
              <div style={styles.emptyState}>
                <span style={styles.emptyIcon}>📋</span>
                <p style={styles.emptyText}>Submit a draft to see analysis</p>
                <button style={styles.primaryBtn} onClick={() => setActiveTab('analyze')}>Go to Analyze</button>
              </div>
            )}
            {analyzed && (
              <>
                <div style={styles.riskSection}>
                  <div style={styles.riskHeader}>
                    <span style={styles.riskLabel}>Mianzi (Face) Risk Meter</span>
                    <span style={styles.riskValue}>HIGH RISK</span>
                  </div>
                  <div style={styles.riskBarBg}><div style={{...styles.riskBarFill, width: '85%'}} /></div>
                  <p style={styles.riskNote}>Raw input: 85% Bluntness/Accidental Offense — Direct imperative "Do not be late" violates Mianzi preservation</p>
                </div>
                <div style={styles.outputSection}>
                  <div style={styles.outputHeader}><span style={styles.outputLabel}>Reframed Email for China 🇨🇳</span></div>
                  <div style={styles.outputText}>{MOCK_REFRAMED}</div>
                </div>
                <div style={styles.highlightsSection}>
                  <h3 style={styles.highlightsTitle}>Rules Triggered</h3>
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
              </>
            )}
          </div>
        )}

        {activeTab === 'hith' && (
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <h2 style={styles.cardTitle}>HITL Control Center</h2>
              <span style={styles.cardBadgeWarning}>Human Required</span>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Refine Tone with AI Agent</label>
              <div style={styles.refineRow}>
                <input style={styles.input} placeholder="e.g., The tone is good, but make it slightly more urgent..." value={refineInput} onChange={(e) => setRefineInput(e.target.value)} />
                <button style={styles.secondaryBtn}>Refine</button>
              </div>
            </div>
            <div style={styles.actionCenter}>
              <p style={styles.actionLabel}>Action Center</p>
              <div style={styles.actionButtons}>
                <button style={styles.actionBtn} onClick={handleCopy}>{copied ? '✓ Copied!' : 'Copy Reframed Email to Clipboard'}</button>
                <button style={styles.actionBtnOutline}>Export to Outlook Drafts</button>
              </div>
              <p style={styles.complianceNote}>⚠️ Human-in-the-Loop: Review before sending. No auto-send enabled.</p>
            </div>
          </div>
        )}
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
  nav: { display: 'flex', gap: '0', padding: '0 2rem', backgroundColor: '#1e293b', borderBottom: '1px solid #334155' },
  navBtn: { padding: '0.875rem 1.5rem', fontSize: '0.875rem', fontWeight: '600', color: '#94a3b8', backgroundColor: 'transparent', border: 'none', borderBottom: '2px solid transparent', cursor: 'pointer', transition: 'all 0.2s' },
  navBtnActive: { color: '#22d3ee', borderBottom: '2px solid #22d3ee' },
  mainContent: { padding: '2rem', maxWidth: '800px', margin: '0 auto' },
  card: { backgroundColor: '#1e293b', borderRadius: '12px', padding: '1.5rem', border: '1px solid #334155' },
  cardHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', paddingBottom: '1rem', borderBottom: '1px solid #334155' },
  cardTitle: { fontSize: '1rem', fontWeight: '700', color: '#f8fafc', margin: 0 },
  cardBadge: { fontSize: '0.65rem', fontWeight: '600', color: '#94a3b8', backgroundColor: '#334155', padding: '0.25rem 0.6rem', borderRadius: '4px', textTransform: 'uppercase' },
  cardBadgeActive: { backgroundColor: '#059669', color: '#ecfdf5' },
  cardBadgeEnterprise: { fontSize: '0.65rem', fontWeight: '600', color: '#0f172a', backgroundColor: '#f59e0b', padding: '0.25rem 0.6rem', borderRadius: '4px', textTransform: 'uppercase' },
  cardBadgeWarning: { fontSize: '0.65rem', fontWeight: '600', color: '#fef3c7', backgroundColor: '#d97706', padding: '0.25rem 0.6rem', borderRadius: '4px', textTransform: 'uppercase' },
  cardSubtitle: { fontSize: '0.8rem', color: '#94a3b8', margin: '0 0 1rem 0' },
  formGroup: { marginBottom: '1.25rem' },
  label: { display: 'block', fontSize: '0.8rem', fontWeight: '600', color: '#cbd5e1', marginBottom: '0.5rem' },
  select: { width: '100%', padding: '0.75rem 1rem', fontSize: '0.875rem', backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px', color: '#e2e8f0', outline: 'none' },
  textarea: { width: '100%', padding: '0.75rem 1rem', fontSize: '0.875rem', fontFamily: 'inherit', backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px', color: '#e2e8f0', outline: 'none', resize: 'vertical', boxSizing: 'border-box' },
  input: { flex: 1, padding: '0.75rem 1rem', fontSize: '0.875rem', fontFamily: 'inherit', backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px', color: '#e2e8f0', outline: 'none' },
  primaryBtn: { width: '100%', padding: '0.875rem 1.5rem', fontSize: '0.9rem', fontWeight: '700', color: '#0f172a', backgroundColor: '#22d3ee', border: 'none', borderRadius: '8px', cursor: 'pointer' },
  secondaryBtn: { padding: '0.75rem 1.25rem', fontSize: '0.8rem', fontWeight: '600', color: '#0f172a', backgroundColor: '#22d3ee', border: 'none', borderRadius: '8px', cursor: 'pointer' },
  btnDisabled: { backgroundColor: '#334155', color: '#64748b', cursor: 'not-allowed' },
  rulesList: { display: 'flex', flexDirection: 'column', gap: '0.75rem' },
  ruleItem: { display: 'flex', gap: '1rem', padding: '0.875rem', backgroundColor: '#0f172a', borderRadius: '8px', border: '1px solid #334155' },
  ruleNumber: { width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#334155', color: '#22d3ee', fontSize: '0.8rem', fontWeight: '700', borderRadius: '6px', flexShrink: 0 },
  ruleContent: { display: 'flex', flexDirection: 'column', gap: '0.25rem' },
  ruleTitle: { fontSize: '0.85rem', fontWeight: '600', color: '#f8fafc' },
  ruleDesc: { fontSize: '0.75rem', color: '#94a3b8', lineHeight: '1.4' },
  emptyState: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '3rem 0', color: '#64748b' },
  emptyIcon: { fontSize: '3rem', marginBottom: '1rem' },
  emptyemptyText: { fontSize: '0.9rem', margin: 0 },
  riskSection: { marginBottom: '1.5rem' },
  riskHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' },
  riskLabel: { fontSize: '0.8rem', fontWeight: '600', color: '#e2e8f0' },
  riskValue: { fontSize: '0.7rem', fontWeight: '700', color: '#f87171', backgroundColor: 'rgba(248, 113, 113, 0.15)', padding: '0.25rem 0.5rem', borderRadius: '4px' },
  riskBarBg: { width: '100%', height: '8px', backgroundColor: '#334155', borderRadius: '4px', overflow: 'hidden', marginBottom: '0.5rem' },
  riskBarFill: { height: '100%', backgroundColor: '#f87171', borderRadius: '4px', transition: 'width 0.5s ease' },
  riskNote: { fontSize: '0.75rem', color: '#94a3b8', margin: 0, lineHeight: '1.4' },
  outputSection: { marginBottom: '1.5rem' },
  outputHeader: { display: 'flex', alignItems: 'center', marginBottom: '0.75rem' },
  outputLabel: { fontSize: '0.8rem', fontWeight: '600', color: '#e2e8f0' },
  outputText: { fontSize: '0.875rem', color: '#e2e8f0', lineHeight: '1.6', whiteSpace: 'pre-wrap', backgroundColor: '#0f172a', padding: '1rem', borderRadius: '8px', border: '1px solid #334155' },
  highlightsSection: { },
  highlightsTitle: { fontSize: '0.9rem', fontWeight: '700', color: '#f8fafc', margin: '0 0 1rem 0' },
  highlightItem: { display: 'flex', gap: '0.75rem', padding: '0.75rem', backgroundColor: '#0f172a', borderRadius: '8px', marginBottom: '0.5rem', border: '1px solid #334155' },
  highlightNumber: { fontSize: '0.7rem', fontWeight: '700', color: '#22d3ee', backgroundColor: '#334155', padding: '0.2rem 0.5rem', borderRadius: '4px', height: 'fit-content', flexShrink: 0 },
  highlightContent: { display: 'flex', flexDirection: 'column', gap: '0.25rem' },
  highlightTitle: { fontSize: '0.8rem', fontWeight: '600', color: '#f8fafc' },
  highlightText: { fontSize: '0.75rem', color: '#94a3b8', lineHeight: '1.4' },
  refineRow: { display: 'flex', gap: '0.75rem' },
  actionCenter: { },
  actionLabel: { fontSize: '0.8rem', fontWeight: '600', color: '#cbd5e1', marginBottom: '0.75rem' },
  actionButtons: { display: 'flex', gap: '0.75rem', flexWrap: 'wrap' },
  actionBtn: { flex: 1, minWidth: '200px', padding: '0.75rem 1rem', fontSize: '0.8rem', fontWeight: '600', color: '#0f172a', backgroundColor: '#22d3ee', border: 'none', borderRadius: '8px', cursor: 'pointer' },
  actionBtnOutline: { flex: 1, minWidth: '200px', padding: '0.75rem 1rem', fontSize: '0.8rem', fontWeight: '600', color: '#22d3ee', backgroundColor: 'transparent', border: '1px solid #22d3ee', borderRadius: '8px', cursor: 'pointer' },
  complianceNote: { fontSize: '0.75rem', color: '#fbbf24', margin: '1rem 0 0 0', fontWeight: '500' },
};
