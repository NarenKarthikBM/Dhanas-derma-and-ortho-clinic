import React from 'react';

const Gallery = () => {
    const elements = ['Laser-treatment-room.webp', 'Laser-equipments.webp', 'Dr.Dhanalakshmi-desk.webp', 'Reception.webp']
    
    return(
        <section className="gallery">
            <div className="watermark">GALLERY</div>
            <h1 className="h1">GALLERY</h1><br/>
            <div className="service-gallery">
                {elements.map((name) => {
                    return (
                    <div key={name} className="gallery-card">
                        <img key={name} className="gallery-img"  src={'/' + name } alt={name} />
                    </div>
                    )
                })}
            </div>
        </section>
    );
} 
export default Gallery;