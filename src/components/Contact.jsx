import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="section" style={{
            backgroundColor: 'var(--bumn-gray-light)',
            position: 'relative',
            overflow: 'hidden',
            paddingBottom: '8rem'
        }}>
            <style>{`
                .contact-card-container {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 2rem;
                    margin-top: 4rem;
                }
                .business-card {
                    background: white;
                    border-radius: 15px;
                    padding: 2.5rem;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                    border: 1px solid #eee;
                    position: relative;
                    overflow: hidden;
                    transition: all 0.3s ease;
                    text-decoration: none;
                    display: block;
                }
                .business-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 20px 40px rgba(0, 80, 157, 0.1);
                    border-color: var(--bumn-blue);
                }
                .card-accent {
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 100px;
                    height: 100px;
                    background: var(--bumn-blue);
                    opacity: 0.05;
                    border-radius: 0 0 0 100%;
                    transition: all 0.3s ease;
                }
                .business-card:hover .card-accent {
                    opacity: 0.1;
                    width: 120px;
                    height: 120px;
                }
                .contact-icon-circle {
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.5rem;
                    margin-bottom: 1.5rem;
                    color: white;
                    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
                }
                .wa-icon { background: #25D366; }
                .email-icon { background: var(--bumn-blue); }
                
                .contact-label {
                    font-size: 0.75rem;
                    font-weight: 800;
                    color: #999;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    margin-bottom: 0.5rem;
                }
                .contact-value {
                    font-size: 1.2rem;
                    font-weight: 800;
                    color: var(--bumn-dark-blue);
                    word-break: break-all;
                }
                .contact-action {
                    margin-top: 1.5rem;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-weight: 700;
                    color: var(--bumn-blue);
                    font-size: 0.9rem;
                }
                .contact-action span {
                    transition: transform 0.3s ease;
                }
                .business-card:hover .contact-action span {
                    transform: translateX(5px);
                }
            `}</style>

            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h2 className="section-title">Hubungi Saya</h2>
                    <p style={{ color: '#666', maxWidth: '600px', margin: '1.5rem auto 0 auto', lineHeight: '1.8' }}>
                        Terbuka untuk kolaborasi profesional, proyek strategis, dan diskusi mengenai perencanaan wilayah serta pengembangan GIS.
                    </p>
                </div>

                <div className="contact-card-container">
                    <a href="https://wa.me/6289525959477" target="_blank" rel="noopener noreferrer" className="business-card">
                        <div className="card-accent"></div>
                        <div className="contact-icon-circle wa-icon">💬</div>
                        <div className="contact-label">WhatsApp Messenger</div>
                        <div className="contact-value">0895-2595-9477</div>
                        <div className="contact-action">
                            Kirim Pesan Sekarang <span>→</span>
                        </div>
                    </a>

                    <a href="mailto:Dimaseka.amikom@gmail.com" className="business-card">
                        <div className="card-accent"></div>
                        <div className="contact-icon-circle email-icon">✉️</div>
                        <div className="contact-label">Email Profesional</div>
                        <div className="contact-value">Dimaseka.amikom@gmail.com</div>
                        <div className="contact-action">
                            Kirim Email <span>→</span>
                        </div>
                    </a>
                </div>

                <div style={{
                    marginTop: '6rem',
                    textAlign: 'center',
                    padding: '3rem',
                    background: 'white',
                    borderRadius: '20px',
                    border: '1px solid #eee'
                }}>
                    <h4 style={{ color: 'var(--bumn-dark-blue)', marginBottom: '1rem', fontWeight: '800' }}>Lokasi Domisili</h4>
                    <p style={{ color: '#666', fontSize: '1.1rem' }}>📍 Sleman, Daerah Istimewa Yogyakarta</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
