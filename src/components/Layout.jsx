import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="container">
      <header className="header">
        <div className="brand">
          <h2 style={{ marginBottom: 0 }}>Dimas Prasetia</h2>
          <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Urban & Regional Planner</span>
        </div>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Research & Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      
      <main>
        {children}
      </main>

      <footer style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--bg-secondary)', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        <p>&copy; {new Date().getFullYear()} Dimas Prasetia. Urban Planning & GIS Portfolio.</p>
      </footer>
    </div>
  );
};

export default Layout;
