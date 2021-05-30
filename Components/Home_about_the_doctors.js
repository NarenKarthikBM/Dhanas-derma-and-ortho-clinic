import React from 'react';
import Doctor_Block from './Doctor_block';

const Home_about_the_doctors = () => {

    return (
    <section className="about-the-doctors">
        <div className="watermark">CONSULTING DOCTORS</div>
        <h1 className="h1">CONSULTING DOCTORS</h1><br/>
        <Doctor_Block name="Dr.Dhanalakshmi" designation="Dermatologist" img="/Dr.Dhanalakshmi Kathirvel.jpeg" />
        <Doctor_Block name="Dr.Jenson Isaac" designation="Orthopedic Surgeon" img="/Dr.Jenson Isaac.jpg" />
    </section>
    );
};

export default Home_about_the_doctors;