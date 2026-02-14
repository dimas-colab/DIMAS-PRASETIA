import React, { useState } from 'react';

const SkillBadge = ({ title, items }) => (
    <div style={{
        backgroundColor: 'white',
        padding: '1.25rem',
        borderRadius: '8px',
        boxShadow: 'var(--shadow-small)',
        border: '1px solid #eee',
        borderTop: '3px solid var(--bumn-blue)'
    }}>
        <strong style={{ display: 'block', color: 'var(--bumn-blue)', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.75rem', letterSpacing: '0.5px' }}>{title}</strong>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {items.map((item, idx) => (
                <span key={idx} style={{
                    fontSize: '0.85rem',
                    backgroundColor: 'var(--bumn-gray-light)',
                    padding: '4px 10px',
                    borderRadius: '4px',
                    color: 'var(--bumn-text-dark)',
                    fontWeight: '500'
                }}>
                    {item}
                </span>
            ))}
        </div>
    </div>
);

const TimelineItem = ({ year, title, subtitle, description, highlights, bgColor }) => (
    <div className={`timeline-container ${bgColor || ''}`}>
        <div className="orbit-decor">
            <div className="orbit-inner"></div>
            <div className="orbit-outer"></div>
        </div>
        <div className="timeline-year">{year}</div>
        <div className="timeline-content" style={{ flex: 1 }}>
            <h3 style={{ margin: '0 0 0.25rem 0', color: 'var(--bumn-dark-blue)', fontSize: '1.2rem', fontWeight: '800' }}>{title}</h3>
            <div style={{ color: 'var(--bumn-blue)', fontWeight: '600', marginBottom: '0.75rem', fontSize: '0.95rem' }}>{subtitle}</div>
            {description && <p style={{ margin: '0 0 1rem 0', color: '#444', fontSize: '0.9rem', lineHeight: '1.5' }}>{description}</p>}
            {highlights && (
                <ul style={{ paddingLeft: '1.25rem', margin: 0, color: '#555', fontSize: '0.85rem' }}>
                    {highlights.map((h, i) => (
                        <li key={i} style={{ marginBottom: '0.4rem', lineHeight: '1.4' }}>{h}</li>
                    ))}
                </ul>
            )}
        </div>
    </div>
);

const About = () => {
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [accessCode, setAccessCode] = useState('');
    const [isError, setIsError] = useState(false);

    const handleUnlock = () => {
        if (accessCode.toUpperCase() === 'BAIK SILAHKAN') {
            setIsUnlocked(true);
            setIsError(false);
        } else {
            setIsError(true);
            setTimeout(() => setIsError(false), 500);
        }
    };
    return (
        <section id="about" className="section" style={{
            position: 'relative',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
        }}>
            <style>{`
                /* Animated Background */
                .about-animated-bg {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 0;
                    overflow: hidden;
                    background: linear-gradient(135deg, 
                        rgba(248, 249, 250, 0.95) 0%, 
                        rgba(233, 236, 239, 0.95) 50%,
                        rgba(248, 249, 250, 0.95) 100%
                    );
                    background-size: 200% 200%;
                    animation: gradientShift 15s ease infinite;
                }

                @keyframes gradientShift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }

                /* Floating Orbs with BUMN Colors */
                .floating-orb {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(80px);
                    opacity: 0.4;
                    animation: floatOrb 20s ease-in-out infinite;
                }

                .orb-red {
                    width: 400px;
                    height: 400px;
                    background: radial-gradient(circle, rgba(214, 48, 49, 0.6) 0%, transparent 70%);
                    top: 10%;
                    left: -10%;
                    animation-delay: 0s;
                }

                .orb-blue {
                    width: 500px;
                    height: 500px;
                    background: radial-gradient(circle, rgba(0, 80, 157, 0.5) 0%, transparent 70%);
                    top: 40%;
                    right: -15%;
                    animation-delay: 5s;
                }

                .orb-yellow {
                    width: 350px;
                    height: 350px;
                    background: radial-gradient(circle, rgba(253, 197, 0, 0.5) 0%, transparent 70%);
                    bottom: 20%;
                    left: 10%;
                    animation-delay: 10s;
                }

                .orb-green {
                    width: 450px;
                    height: 450px;
                    background: radial-gradient(circle, rgba(39, 174, 96, 0.4) 0%, transparent 70%);
                    bottom: 10%;
                    right: 5%;
                    animation-delay: 15s;
                }

                @keyframes floatOrb {
                    0%, 100% { 
                        transform: translate(0, 0) scale(1);
                        opacity: 0.4;
                    }
                    25% { 
                        transform: translate(30px, -40px) scale(1.1);
                        opacity: 0.6;
                    }
                    50% { 
                        transform: translate(-20px, -60px) scale(0.9);
                        opacity: 0.5;
                    }
                    75% { 
                        transform: translate(40px, -30px) scale(1.05);
                        opacity: 0.55;
                    }
                }

                /* Particle Effect */
                .particle {
                    position: absolute;
                    width: 4px;
                    height: 4px;
                    background: rgba(0, 80, 157, 0.3);
                    border-radius: 50%;
                    animation: particleFloat 15s linear infinite;
                }

                @keyframes particleFloat {
                    0% {
                        transform: translateY(0) translateX(0);
                        opacity: 0;
                    }
                    10% {
                        opacity: 1;
                    }
                    90% {
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(-100vh) translateX(50px);
                        opacity: 0;
                    }
                }

                /* Content Container with Glass Effect */
                .about-content-wrapper {
                    position: relative;
                    z-index: 1;
                }

                .about-grid {
                    display: grid;
                    grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
                    gap: 4rem;
                    align-items: start;
                }
                .section-header-bumn {
                    color: var(--bumn-dark-blue);
                    margin-bottom: 2.5rem;
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    font-size: 1.4rem;
                    font-weight: 800;
                    letter-spacing: 0.5px;
                    border-bottom: 2px solid var(--bumn-gold);
                    padding-bottom: 0.5rem;
                    width: fit-content;
                }
                .about-sticky-sidebar {
                    position: sticky;
                    top: 120px;
                }
                .skill-card-premium {
                    background: rgba(255, 255, 255, 0.85);
                    backdrop-filter: blur(10px);
                    padding: 1.25rem;
                    border-radius: 12px;
                    margin-bottom: 1.25rem;
                    border: 1px solid rgba(255, 255, 255, 0.5);
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    position: relative;
                    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                    z-index: 1;
                }
                .skill-card-premium:hover {
                    transform: translateY(-5px) scale(1.02);
                    background: rgba(255, 255, 255, 0.95);
                    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
                }
                .skill-card-premium::before {
                    content: '';
                    position: absolute;
                    inset: -2px;
                    z-index: -1;
                    background: linear-gradient(45deg, #d63031, #00509d, #fdc500, #27ae60);
                    background-size: 400% 400%;
                    animation: glowShift 8s linear infinite;
                    border-radius: 14px;
                    opacity: 0.3;
                    transition: opacity 0.3s;
                }
                .skill-card-premium:hover::before {
                    opacity: 0.8;
                    filter: blur(8px);
                }
                @keyframes glowShift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .skill-icon-wrap {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    margin-bottom: 0.25rem;
                }
                .skill-label-text {
                    font-weight: 800;
                    color: var(--bumn-dark-blue);
                    font-size: 0.95rem;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }
                .skill-desc-text {
                    color: #555;
                    font-size: 0.9rem;
                    line-height: 1.4;
                    padding-left: 2rem;
                }
                .timeline-container {
                    display: flex;
                    gap: 2rem;
                    margin-bottom: 3rem;
                    position: relative;
                    padding: 1.5rem;
                    border-radius: 12px;
                    background: rgba(255, 255, 255, 0.7);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255,255,255,0.3);
                    transition: all 0.3s ease;
                    overflow: hidden;
                }
                .timeline-container:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
                    background: rgba(255, 255, 255, 0.85);
                }
                .timeline-container.bg-red { border-left: 5px solid #d63031; animation: pulseRed 4s infinite; }
                .timeline-container.bg-blue { border-left: 5px solid #00509d; animation: pulseBlue 4s infinite; }
                .timeline-container.bg-yellow { border-left: 5px solid #fdc500; animation: pulseYellow 4s infinite; }
                .timeline-container.bg-green { border-left: 5px solid #27ae60; animation: pulseGreen 4s infinite; }

                @keyframes pulseRed { 0% { background: rgba(214, 48, 49, 0.02); } 50% { background: rgba(214, 48, 49, 0.08); } 100% { background: rgba(214, 48, 49, 0.02); } }
                @keyframes pulseBlue { 0% { background: rgba(0, 80, 157, 0.02); } 50% { background: rgba(0, 80, 157, 0.08); } 100% { background: rgba(0, 80, 157, 0.02); } }
                @keyframes pulseYellow { 0% { background: rgba(253, 197, 0, 0.02); } 50% { background: rgba(253, 197, 0, 0.08); } 100% { background: rgba(253, 197, 0, 0.02); } }
                @keyframes pulseGreen { 0% { background: rgba(39, 174, 96, 0.02); } 50% { background: rgba(39, 174, 96, 0.08); } 100% { background: rgba(39, 174, 96, 0.02); } }

                .orbit-decor {
                    position: absolute;
                    right: -40px;
                    top: -40px;
                    width: 150px;
                    height: 150px;
                    pointer-events: none;
                    z-index: 0;
                }
                .orbit-inner, .orbit-outer {
                    position: absolute;
                    inset: 0;
                    border: 1px solid rgba(255,255,255,0.2);
                    border-radius: 50%;
                }
                .orbit-inner {
                    animation: rotateOrbit 12s linear infinite;
                    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
                }
                .orbit-outer {
                    scale: 1.2;
                    animation: rotateOrbit 20s linear reverse infinite;
                    border: 1px dashed rgba(255,255,255,0.15);
                }
                @keyframes rotateOrbit {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                @media (max-width: 992px) {
                    .about-grid {
                        grid-template-columns: 1fr;
                        gap: 2rem;
                    }
                    .about-sticky-sidebar {
                        position: static;
                    }
                }
                .timeline-year {
                    flex: 0 0 110px;
                    font-weight: 800;
                    color: var(--bumn-blue);
                    font-size: 1rem;
                    text-align: right;
                }
                @media (max-width: 480px) {
                    .timeline-container {
                        gap: 0.5rem !important;
                        flex-direction: column;
                        padding: 1.25rem !important;
                        margin-bottom: 2rem !important;
                    }
                    .timeline-year {
                        flex: none !important;
                        font-size: 0.9rem !important;
                        text-align: left !important;
                        margin-bottom: 0.5rem;
                        background: rgba(255,255,255,0.5);
                        display: inline-block;
                        padding: 2px 8px;
                        border-radius: 4px;
                    }
                    .skill-card-premium {
                        padding: 1rem;
                    }
                    .skill-desc-text {
                    padding-left: 1.75rem;
                        font-size: 0.85rem;
                    }
                }

                /* Privacy Toggle Styles */
                .unlock-overlay {
                    position: relative;
                    padding: 5rem 2rem;
                    text-align: center;
                    z-index: 10;
                    background: rgba(255, 255, 255, 0.4);
                    backdrop-filter: blur(15px);
                    border-radius: 20px;
                    border: 2px dashed var(--bumn-blue);
                    margin: 2rem auto;
                    max-width: 800px;
                    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
                }
                .unlock-btn {
                    background: var(--bumn-blue);
                    color: white;
                    border: none;
                    padding: 1.1rem 3rem;
                    font-size: 1.1rem;
                    font-weight: 800;
                    border-radius: 50px;
                    cursor: pointer;
                    box-shadow: 0 10px 25px rgba(0, 80, 157, 0.3);
                    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
                .unlock-btn:hover {
                    transform: scale(1.05) translateY(-5px);
                    background: var(--bumn-dark-blue);
                    box-shadow: 0 15px 35px rgba(0, 80, 157, 0.4);
                }
                .unlock-icon {
                    font-size: 3.5rem;
                    display: block;
                    margin-bottom: 1.5rem;
                    animation: pulseLock 2s infinite;
                }
                .access-input-group {
                    margin-bottom: 2rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1rem;
                }
                .access-input {
                    padding: 1rem 1.5rem;
                    font-size: 1.2rem;
                    border-radius: 12px;
                    border: 2px solid #ddd;
                    width: 100%;
                    max-width: 350px;
                    text-align: center;
                    text-transform: uppercase;
                    font-weight: 800;
                    letter-spacing: 2px;
                    transition: all 0.3s ease;
                    outline: none;
                }
                .access-input:focus {
                    border-color: var(--bumn-blue);
                    box-shadow: 0 0 15px rgba(0, 80, 157, 0.2);
                }
                .access-input.error {
                    border-color: #d63031;
                    animation: shakeError 0.4s ease;
                }
                @keyframes shakeError {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-8px); }
                    50% { transform: translateX(8px); }
                    75% { transform: translateX(-8px); }
                }
                .wa-request-link {
                    color: #25D366;
                    text-decoration: none;
                    font-weight: 800;
                    font-size: 0.95rem;
                    margin-top: 1.5rem;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    transition: opacity 0.3s ease;
                }
                .wa-request-link:hover {
                    opacity: 0.8;
                    text-decoration: underline;
                }
                @keyframes pulseLock {
                    0%, 100% { transform: scale(1); opacity: 0.8; }
                    50% { transform: scale(1.1); opacity: 1; }
                }
            `}</style>

            {/* Animated Background with BUMN Color Orbs */}
            <div className="about-animated-bg">
                <div className="floating-orb orb-red"></div>
                <div className="floating-orb orb-blue"></div>
                <div className="floating-orb orb-yellow"></div>
                <div className="floating-orb orb-green"></div>
                {/* Floating Particles */}
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="particle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${i * 2}s`,
                            animationDuration: `${15 + Math.random() * 10}s`
                        }}
                    ></div>
                ))}
            </div>

            <div className="about-content-wrapper">
                <div className="container">
                    <h2 className="section-title">Profil & Rekam Jejak</h2>

                    {!isUnlocked ? (
                        <div className="unlock-overlay">
                            <span className="unlock-icon">🔒</span>
                            <h3 style={{ color: 'var(--bumn-dark-blue)', marginBottom: '1rem', fontWeight: '900', fontSize: '1.5rem' }}>INFORMASI TERBATAS</h3>
                            <p style={{ color: '#444', marginBottom: '2.5rem', maxWidth: '500px', margin: '0 auto 2.5rem auto', lineHeight: '1.6', fontSize: '1rem' }}>
                                Keamanan data dan privasi adalah prioritas. Untuk melihat detail profil, pengalaman kerja, dan kompetensi saya, silakan masukkan <b>Kode Akses</b> di bawah ini.
                            </p>

                            <div className="access-input-group">
                                <input
                                    type="text"
                                    className={`access-input ${isError ? 'error' : ''}`}
                                    placeholder="Masukkan Kode"
                                    value={accessCode}
                                    onChange={(e) => setAccessCode(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleUnlock()}
                                />
                                <button className="unlock-btn" onClick={handleUnlock}>
                                    Buka Detail Profil
                                </button>
                            </div>

                            <div style={{ borderTop: '1px solid #eee', paddingTop: '1.5rem' }}>
                                <p style={{ color: '#888', fontSize: '0.85rem', marginBottom: '0.5rem' }}>Belum punya kode?</p>
                                <a
                                    href={`https://wa.me/6289525959477?text=${encodeURIComponent('Halo Mas Dimas, saya dari website portfolio. Boleh minta "Kode Akses" buat liat detail Profil & Rekam Jejak Anda?')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="wa-request-link"
                                >
                                    💬 Minta Akses via WhatsApp
                                </a>
                            </div>
                        </div>
                    ) : (
                        <div className="about-grid">
                            <div>
                                {/* ✅ WORK EXPERIENCE SECTION */}
                                <div className="section-header-bumn">
                                    ✅ WORK EXPERIENCE / PENGALAMAN KERJA
                                </div>

                                <div style={{ marginTop: '1rem' }}>
                                    <TimelineItem
                                        year="2021 – Sekrg"
                                        title="Admin Produksi & Operator Produksi"
                                        subtitle="CV Rina Gori | Yogyakarta"
                                        description="Perusahaan penyedia bahan baku utama pembuatan gudeg (nangka muda)."
                                        highlights={[
                                            "Mengelola administrasi produksi dan pencatatan stok bahan baku.",
                                            "Mengoperasikan proses produksi sesuai standar kualitas dan target harian.",
                                            "Melakukan kontrol kualitas bahan mentah sebelum distribusi.",
                                            "Berkoordinasi dengan tim untuk memastikan proses produksi berjalan tepat waktu."
                                        ]}
                                        bgColor="bg-red"
                                    />
                                    <TimelineItem
                                        year="Feb – Sep 2024"
                                        title="Admin Marketplace, Kurir, dan Sales (Rangkap)"
                                        subtitle="Herbal Berkah Group | Yogyakarta"
                                        description="UMKM bidang jamu tradisional yang dipasarkan melalui marketplace online and distribusi offline."
                                        highlights={[
                                            "Mengelola penjualan online melalui marketplace (input produk, update stok, dan order).",
                                            "Menangani komunikasi pelanggan, follow-up pesanan, dan pelayanan konsumen.",
                                            "Melakukan pengiriman produk langsung ke pelanggan serta distribusi ke mitra offline.",
                                            "Membantu pemasaran produk secara langsung melalui strategi sales lapangan."
                                        ]}
                                        bgColor="bg-blue"
                                    />
                                    <TimelineItem
                                        year="Nov '24 – Jul '25"
                                        title="Kurir & Sales Lapangan"
                                        subtitle="Chaitea Teh Tarik | Yogyakarta"
                                        description="UMKM pengembangan teh tarik Indonesia dengan distribusi ke lebih dari 200 warung di Yogyakarta."
                                        highlights={[
                                            "Mengelola distribusi produk ke jaringan warung dan mitra usaha.",
                                            "Menjalankan strategi sales langsung untuk memperluas pasar dan menjaga relasi pelanggan.",
                                            "Memastikan pengiriman tepat waktu serta menjaga kualitas produk selama pengantaran.",
                                            "Membantu peningkatan penjualan melalui pendekatan promosi dan komunikasi langsung."
                                        ]}
                                        bgColor="bg-yellow"
                                    />
                                    <TimelineItem
                                        year="2023 – 2024"
                                        title="Tim Kreatif (Desain Grafis & Administrasi)"
                                        subtitle="Saestu Printing | Yogyakarta"
                                        description="Perusahaan jaza printing (poster, baju, dan kebutuhan cetak online/offline)."
                                        highlights={[
                                            "Mendesain kebutuhan visual seperti poster, banner, dan desain cetak lainnya.",
                                            "Membantu administrasi pesanan dan pengelolaan data pelanggan.",
                                            "Berkoordinasi dengan tim produksi untuk memastikan hasil cetak sesuai desain.",
                                            "Mendukung pelayanan pelanggan online maupun offline terkait permintaan desain."
                                        ]}
                                        bgColor="bg-green"
                                    />
                                </div>

                                {/* 🎓 EDUCATION SECTION */}
                                <div className="section-header-bumn" style={{ marginTop: '4rem' }}>
                                    🎓 EDUCATION / RIWAYAT PENDIDIKAN
                                </div>
                                <div style={{ marginTop: '1rem' }}>
                                    <TimelineItem
                                        year="2019 – 2025"
                                        title="Universitas AMIKOM Yogyakarta"
                                        subtitle="S1 Perencanaan Wilayah dan Kota (PWK)"
                                        description="Lulus tahun 2025 (mengalami cuti akademik selama ±1,5 tahun karena kondisi kesehatan)."
                                        bgColor="bg-blue"
                                    />
                                    <TimelineItem
                                        year="2016 – 2019"
                                        title="SMK Negeri 1 Seyegan"
                                        subtitle="Teknik Konstruksi Batu dan Beton"
                                        bgColor="bg-yellow"
                                    />
                                    <TimelineItem
                                        year="2013 – 2016"
                                        title="MTs Negeri 1 Seyegan"
                                        bgColor="bg-green"
                                    />
                                    <TimelineItem
                                        year="2007 – 2013"
                                        title="SD Negeri 1 Margoagung"
                                        bgColor="bg-red"
                                    />
                                </div>
                            </div>

                            <div className="about-sticky-sidebar" style={{
                                backgroundColor: 'transparent',
                                padding: '1rem',
                            }}>
                                <h4 style={{ color: 'var(--bumn-dark-blue)', marginBottom: '2.5rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '2px', borderLeft: '6px solid var(--bumn-gold)', paddingLeft: '1rem', fontSize: '1.2rem' }}>
                                    Kompetensi Utama
                                </h4>

                                <div className="skill-card-premium">
                                    <div className="skill-icon-wrap"><span>🌍</span><span className="skill-label-text">GIS & Pemetaan</span></div>
                                    <div className="skill-desc-text">Analisis Spasial & Kartografi Digital (ArcGIS, QGIS, Google Earth)</div>
                                </div>
                                <div className="skill-card-premium">
                                    <div className="skill-icon-wrap"><span>📐</span><span className="skill-label-text">Perencanaan Wilayah</span></div>
                                    <div className="skill-desc-text">Analisis dan Perencanaan Wilayah (Microsoft Word, Excel, PowerPoint)</div>
                                </div>
                                <div className="skill-card-premium">
                                    <div className="skill-icon-wrap"><span>📊</span><span className="skill-label-text">Olah Data & Statistik</span></div>
                                    <div className="skill-desc-text">Pengolahan Data Statistik & Penelitian (SPSS, Microsoft Excel)</div>
                                </div>
                                <div className="skill-card-premium">
                                    <div className="skill-icon-wrap"><span>📝</span><span className="skill-label-text">Reporting Strategis</span></div>
                                    <div className="skill-desc-text">Penyusunan Laporan Analisis & Dokumen Perencanaan (MS Word, Excel, PPT)</div>
                                </div>
                                <div className="skill-card-premium">
                                    <div className="skill-icon-wrap"><span>📍</span><span className="skill-label-text">Survey Lapangan</span></div>
                                    <div className="skill-desc-text">Survey Lapangan & Pengumpulan Data (Google Earth, GPS, Dokumentasi)</div>
                                </div>
                                <div className="skill-card-premium">
                                    <div className="skill-icon-wrap"><span>🎨</span><span className="skill-label-text">Komunikasi Visual</span></div>
                                    <div className="skill-desc-text">Layout Peta, Presentasi & Infografis (Adobe Illustrator, Photoshop, Canva, CorelDRAW)</div>
                                </div>
                                <div className="skill-card-premium">
                                    <div className="skill-icon-wrap"><span>🏗️</span><span className="skill-label-text">Visualisasi 3D</span></div>
                                    <div className="skill-desc-text">Desain Teknis & Visualisasi Tata Ruang (AutoCAD, SketchUp)</div>
                                </div>
                                <div className="skill-card-premium">
                                    <div className="skill-icon-wrap"><span>🎤</span><span className="skill-label-text">Public Speaking</span></div>
                                    <div className="skill-desc-text">Public Speaking & Presentasi Profesional (PowerPoint, Canva)</div>
                                </div>
                                <div className="skill-card-premium">
                                    <div className="skill-icon-wrap"><span>🎬</span><span className="skill-label-text">Digital Content</span></div>
                                    <div className="skill-desc-text">Editing Video & Konten Digital (CapCut Excellence)</div>
                                </div>
                                <div className="skill-card-premium">
                                    <div className="skill-icon-wrap"><span>🏛️</span><span className="skill-label-text">Instansi Teknis</span></div>
                                    <div className="skill-desc-text">Pengalaman DPUPKP Sleman (Nilai Sempurna - Laporan & Analisis Lapangan)</div>
                                </div>
                                <div className="skill-card-premium">
                                    <div className="skill-icon-wrap"><span>🤳</span><span className="skill-label-text">Digital Interaction</span></div>
                                    <div className="skill-desc-text">Host Shopee & TikTok Live (Communication & Sales Skill)</div>
                                </div>

                                <div style={{
                                    marginTop: '3rem',
                                    padding: '1.5rem',
                                    background: 'linear-gradient(135deg, var(--bumn-blue), #003366)',
                                    borderRadius: '15px',
                                    color: 'white',
                                    textAlign: 'center',
                                    boxShadow: '0 10px 20px rgba(0,43,92,0.3)',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}>
                                    <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '80px', height: '80px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }}></div>
                                    <div style={{ fontSize: '0.85rem', opacity: 0.8, marginBottom: '0.5rem', letterSpacing: '1px' }}>STATUS PROFESIONAL</div>
                                    <div style={{ fontWeight: '800', fontSize: '1.1rem' }}>Siap Berkontribusi!</div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default About;
