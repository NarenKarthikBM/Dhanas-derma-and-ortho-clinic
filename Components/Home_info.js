import React from 'react';
import Link from 'next/link';
const Home_info = () => {

    return (
    <section className="info">
        <div className="left-info">
            <div className="watermark" id="header">DHANA'S DERMA {"&"} ORTHO CLINIC</div>
            <h1 className="h1">DHANA'S DERMA {"&"} ORTHO CLINIC</h1>
            <div className="body-light-light">Dhana's Derma and Ortho clinic, in Guduvanchery (Chengalpattu),  ensures ethical practice of the skin, hair and nail problems and Ortho / trauma related and joint related issues. 
            We undertake safe and aseptic precautions while doing day care procedures/ OP procedures for Acne, scar related, Peels, Lasers, PRP and Intra articular injections, POP services and Fracture management without surgeries </div>
            <Link href="/contactus"><div className="btn" id="cta-btn">ENQUIRE NOW</div></Link>
        </div>
        <div className="gallery-grid">
            <div className="pic"></div>
            <div className="pic2"></div>
            <div className="pic2"></div>
            <div className="pic"></div>
            <div className="pic"></div>
            <div className="pic2"></div>
        </div>
    </section>
    );
};

export default Home_info;