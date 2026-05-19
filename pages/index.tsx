import React from 'react';

export default function Home() {
  return (
    <div style={{ 
      fontFamily: 'sans-serif', 
      padding: '2rem', 
      textAlign: 'center',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f0f0'
    }}>
      <h1 style={{ fontSize: '3rem', color: '#333' }}>Can't wait to be Friday</h1>
    </div>
  );
}
