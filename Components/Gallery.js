import React from 'react';

const Gallery = () => {
    const elements = ['Laser-treatment-room', 'Laser-equipments', 'Dr.Dhanalakshmi-desk', 'Reception']
    
    return(
        <section className="gallery">
            <div className="watermark">GALLERY</div>
            <h1 className="h1">GALLERY</h1><br/>
            <div className="service-gallery">
                {elements.map((name) => {
                    return (
                    <div key={name} className="service-card">
                        <img key={name} className="gallery-img"  src={'/' + name + '.jpeg'} alt={name} />
                    </div>
                    )
                })}
            </div>
        </section>
    );
} 
export default Gallery;