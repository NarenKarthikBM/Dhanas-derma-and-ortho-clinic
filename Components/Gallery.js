import React from 'react';
import Image from 'next/image';

const Gallery = () => {
    const elements = ['Laser-treatment-room', 'Laser-equipments', 'Dr.Dhanalakshmi-desk', 'Reception']
    
    return(
        <section className="gallery">
            <div className="watermark">GALLERY</div>
            <h1 className="h1">GALLERY</h1><br/>
            <div className="service-gallery">
                {elements.map((name) => {
                    return (
                    <div className="service-card">
                        <Image className="gallery-img" layout="fill" objectFit="cover" id="service-img-card" src={'/' + name + '.jpeg'} alt={name} />
                    </div>
                    )
                })}
            </div>
        </section>
    );
} 
export default Gallery;