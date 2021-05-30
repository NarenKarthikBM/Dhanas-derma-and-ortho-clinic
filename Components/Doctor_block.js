import React, { useState } from 'react';
import Image from 'next/image';
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
                <Image height={60} width={36} id="service-img-card" src={url} alt="not available" />
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
                <Image layout="fill" src={img} alt="docpic1" className="img-rounded"></Image>
            </div>
            <div className="doc-info">
                <div className="h2">{name}</div>
                <div className="body-light">{designation}</div>
            </div>
            <div className="services-carousel">
                <div className="service-controls" onClick={PrevbtnOnClick}><Image height={50} width={50} src="/prev_btn.svg" alt="next-service"></Image></div>
                <Services />
                <div className="service-controls next-btn" onClick={NextbtnOnClick}><Image height={50} width={50} src="/prev_btn.svg" alt="next-service"></Image></div><br />
                <Link href="/services"><div className="body-light-light more-services">SEE MORE SERVICES</div></Link>
            </div>
        </div>
    );
};
export default Doctor_Block;