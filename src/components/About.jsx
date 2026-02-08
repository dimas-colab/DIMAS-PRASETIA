import React from 'react';

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

const TimelineItem = ({ year, title, subtitle, description, highlights }) => (
    <div className="timeline-container" style={{ display: 'flex', gap: '2rem', marginBottom: '2rem', position: 'relative' }}>
        <div className="timeline-year" style={{ fontWeight: '800', color: 'var(--bumn-blue)', fontSize: '1rem', textAlign: 'right', paddingTop: '0.2rem' }}>
            {year}
        </div>
        <div style={{
            flex: '0 0 2px',
            backgroundColor: 'var(--bumn-gold)',
            position: 'relative'
        }}>
            <div style={{
                position: 'absolute',
                top: '0.5rem',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: 'var(--bumn-blue)',
                border: '3px solid white'
            }}></div>
        </div>
        <div style={{ flex: 1, paddingBottom: '1rem' }}>
            <h4 style={{ color: 'var(--bumn-dark-blue)', marginBottom: '0.25rem', fontSize: '1.1rem' }}>{title}</h4>
            <div style={{ color: 'var(--bumn-blue)', fontWeight: '600', fontSize: '0.9rem', marginBottom: '0.75rem' }}>{subtitle}</div>
            {description && <p style={{ color: '#444', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '0.5rem' }}>{description}</p>}
            {highlights && (
                <ul style={{ paddingLeft: '1.2rem', margin: 0, color: '#666', fontSize: '0.9rem', lineHeight: '1.6' }}>
                    {highlights.map((h, i) => <li key={i} style={{ marginBottom: '0.25rem' }}>{h}</li>)}
                </ul>
            )}
        </div>
    </div>
);

const About = () => {
    return (
        <section id="about" className="section" style={{ backgroundColor: 'white' }}>
            <style>{`
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
                    background: rgba(255, 255, 255, 0.7);
                    backdrop-filter: blur(10px);
                    padding: 1.25rem;
                    border-radius: 12px;
                    margin-bottom: 1.25rem;
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    position: relative;
                    box-shadow: 0 4px 6px rgba(0,0,0,0.02);
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                    z-index: 1;
                }
                .skill-card-premium:hover {
                    transform: translateY(-5px) scale(1.02);
                    background: rgba(255, 255, 255, 0.9);
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
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
                }
                @media (max-width: 480px) {
                    .timeline-year {
                        flex: 0 0 75px !important;
                        font-size: 0.75rem !important;
                        text-align: left !important;
                        margin-bottom: 0.5rem;
                        padding-left: 20px;
                    }
                    .timeline-container {
                        gap: 0.5rem !important;
                        flex-direction: column;
                        margin-bottom: 2.5rem !important;
                    }
                    .skill-card-premium {
                        padding: 1rem;
                    }
                    .skill-desc-text {
                        padding-left: 1.75rem;
                        font-size: 0.85rem;
                    }
                }
            `}</style>
            <div className="container">
                <h2 className="section-title">Profil & Rekam Jejak</h2>

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
                            />
                            <TimelineItem
                                year="Feb – Sep 2024"
                                title="Admin Marketplace, Kurir, dan Sales (Rangkap)"
                                subtitle="Herbal Berkah Group | Yogyakarta"
                                description="UMKM bidang jamu tradisional yang dipasarkan melalui marketplace online dan distribusi offline."
                                highlights={[
                                    "Mengelola penjualan online melalui marketplace (input produk, update stok, dan order).",
                                    "Menangani komunikasi pelanggan, follow-up pesanan, dan pelayanan konsumen.",
                                    "Melakukan pengiriman produk langsung ke pelanggan serta distribusi ke mitra offline.",
                                    "Membantu pemasaran produk secara langsung melalui strategi sales lapangan."
                                ]}
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
                            />
                            <TimelineItem
                                year="2023 – 2024"
                                title="Tim Kreatif (Desain Grafis & Administrasi)"
                                subtitle="Saestu Printing | Yogyakarta"
                                description="Perusahaan jasa printing (poster, baju, dan kebutuhan cetak online/offline)."
                                highlights={[
                                    "Mendesain kebutuhan visual seperti poster, banner, dan desain cetak lainnya.",
                                    "Membantu administrasi pesanan dan pengelolaan data pelanggan.",
                                    "Berkoordinasi dengan tim produksi untuk memastikan hasil cetak sesuai desain.",
                                    "Mendukung pelayanan pelanggan online maupun offline terkait permintaan desain."
                                ]}
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
                            />
                            <TimelineItem
                                year="2016 – 2019"
                                title="SMK Negeri 1 Seyegan"
                                subtitle="Teknik Konstruksi Batu dan Beton"
                            />
                            <TimelineItem
                                year="2013 – 2016"
                                title="MTs Negeri 1 Seyegan"
                            />
                            <TimelineItem
                                year="2007 – 2013"
                                title="SD Negeri 1 Margoagung"
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
            </div>
        </section>
    );
};

export default About;
