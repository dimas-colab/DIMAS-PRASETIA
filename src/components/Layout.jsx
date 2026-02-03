import React from 'react';
import LiquidEther from './Backgrounds/LiquidEther';
import '../App.css'; // Ensure styles are imported

const Layout = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative' }}>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, pointerEvents: 'none' }}>
        <LiquidEther
          colors={['#002B5C', '#fdc500', '#004a8d']}
          autoSpeed={0.3}
          autoIntensity={1.5}
        />
      </div>
      <header className="header-wrapper">
        <div className="container header">
          <div className="brand-container">
            <h1 className="brand-title">Dimas Prasetia</h1>
            <span className="brand-subtitle">Urban & Regional Planning Portfolio</span>
          </div>
          <nav className="nav-links">
            <a href="#about">Profil</a>
            <a href="#projects">Publikasi & Riset</a>
            <a href="#contact">Kontak</a>
          </nav>
        </div>
      </header>

      <main style={{ flex: 1 }}>
        {children}
      </main>

      <footer style={{ backgroundColor: 'var(--bumn-dark-blue)', color: 'white', padding: '3rem 0', marginTop: 'auto' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
          <div style={{ maxWidth: '400px' }}>
            <h4 style={{ color: 'var(--bumn-gold)', marginBottom: '1rem' }}>URBAN PLANNING PORTFOLIO</h4>
            <p style={{ fontSize: '0.9rem', color: '#e0e0e0' }}>
              Mewujudkan pembangunan wilayah yang berkelanjutan melalui analisis spasial dan perencanaan berbasis data.
            </p>
          </div>
          <div>
            <h5 style={{ marginBottom: '1rem', color: 'white' }}>Tautan Cepat</h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a href="#about" style={{ color: '#e0e0e0', fontWeight: '400' }}>Tentang Saya</a>
              <a href="#projects" style={{ color: '#e0e0e0', fontWeight: '400' }}>Penelitian</a>
            </div>
          </div>
        </div>
        <div className="container" style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: '0.8rem', textAlign: 'center', color: '#aaaaaa' }}>
          &copy; {new Date().getFullYear()} Dimas Prasetia. Inspired by Ministry of SOE (BUMN) Design.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
