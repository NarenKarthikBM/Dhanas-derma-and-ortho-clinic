import React, { useState } from 'react';
import Link from 'next/link';

const Doctor_Block = ({name, designation, img}) => {

    const[service, SetService] = useState(0)

    const Services = () => {

        let elements = [];
        let url;

        if (img === '/Dr.Jenson Isaac.jpg') {
            elements = ['Fracture Management', 'POP Treatment']
            url = '/Ortho.svg'
        } else {
            elements = ['Acne (Pimple) Treatment', 'Acne Scar Treatment', 'Chemical Peel', 'Skin polishing', 'Derma roller', 'Skin rejuvenation', 'Hair Removal (Laser)', 'Tattoo removal', 'Scar (Laser)', 'Hair Growth (PRP)', 'Ear Lobe Repair', 'Day Care Surgeries', 'Nail Treatment']
            url = '/skin_logo.svg'
        }

        return(
            <div className="service-card">
                <div id="service-img"><img src={url} alt="not available" /></div>
                <p className="body-light">{elements[service]}</p>
            </div>
        );
    };

    const NextbtnOnClick = () =>{
        let elements = [];
        let url;

        if (img === '/Dr.Jenson Isaac.jpg') {
            elements = ['Fracture Management', 'POP Treatment']
            url = '/Ortho.svg'
        } else {
            elements = ['Acne (Pimple) Treatment', 'Acne Scar Treatment', 'Chemical Peel', 'Skin polishing', 'Derma roller', 'Skin rejuvenation', 'Hair Removal (Laser)', 'Tattoo removal', 'Scar (Laser)', 'Hair Growth (PRP)', 'Ear Lobe Repair', 'Day Care Surgeries', 'Nail Treatment']
            url = '/skin_logo.svg'
        }
        if (service === (elements.length - 1)) {
            SetService(0)
        } else {
            SetService(service + 1)
        }
    }

    const PrevbtnOnClick = () =>{
        let elements = [];
        let url;

        if (img === '/Dr.Jenson Isaac.jpg') {
            elements = ['Fracture Management', 'POP Treatment']
            url = '/Ortho.svg'
        } else {
            elements = ['Acne (Pimple) Treatment', 'Acne Scar Treatment', 'Chemical Peel', 'Skin polishing', 'Derma roller', 'Skin rejuvenation', 'Hair Removal (Laser)', 'Tattoo removal', 'Scar (Laser)', 'Hair Growth (PRP)', 'Ear Lobe Repair', 'Day Care Surgeries', 'Nail Treatment']
            url = '/skin_logo.svg'
        }
        if (service === 0) {
            SetService((elements.length - 1))
        } else {
            SetService(service - 1)
        }
    }

    return (
        <div className="doctor-block">
            <div className="doc-pic">
                <img src={img} alt="docpic1" className="img-rounded"></img>
            </div>
            <div className="doc-info">
                <div className="h2">{name}</div>
                <div className="body-light">{designation}</div>
            </div>
            <div className="services-carousel">
                <div onClick={() => PrevbtnOnClick()}><div className="service-controls"><img src="/prev_btn.svg" alt="next-service"></img></div></div>
                    <Services />
                <div onClick={() => NextbtnOnClick()}><div className="service-controls next-btn"><img src="/prev_btn.svg" alt="next-service"></img></div></div><br />
                <Link href="/services"><div className="body-light-light more-services">SEE MORE SERVICES</div></Link>
            </div>
        </div>
    );
};
export default Doctor_Block;