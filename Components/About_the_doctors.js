import React from 'react';
import cn from 'classnames';
import {useState} from 'react';
import Link from 'next/link';

const About_the_doctors = () => {

    const [ortho, setOrtho] = useState(false);
    const [service, SetService] = useState(0);

    const ToggleOnClick = (active) => {
        if (active === 'skin' ) {
            setOrtho(false)
        } else {
            setOrtho(true)
        }
    }

    const Services = () => {

        let elements = [];
        let url;

        if (ortho === true) {
            elements = ['Fracture Management', 'POP treatment']
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

    const NextbtnOnClick = () => {
        let elements = [];
        let url;

        if (ortho === true) {
            elements = ['Fracture Management', 'POP treatment']
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

    const PrevbtnOnClick = () => {
        let elements = [];
        let url;

        if (ortho === true) {
            elements = ['Fracture Management', 'POP treatment']
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


    const DocInfo = ({active}) => {

        let name;
        let designation;
        let src;

        if (active === true) {
            name = "Dr.Jenson Isaac";
            designation = "Orthopaedic Surgeon";
            src = "/Dr.Jenson.jpg";
        } else {
            name = "Dr.Dhanalakshmi Kathirvel";
            designation = "Dermatologist";
            src = "/Dr.Dhanalakshmi.jpeg";
        }

        return(
            <div>
                <div id="doc-img"><img styles="objectfit:cover" className="docs-img" src={src} alt="not available" /></div>
                <p className="h1" id="doc-name">{name}</p>
                <p className="h4-light" id="doc-info">{designation}</p>
            </div>
        );
    };
    
    const orthoclassnames = cn({
        ["active-logo"]: ortho === true,
        [""]: ortho === false
    }, "toggle-logo");

    const skinclassnames = cn({
        ["active-logo"]: ortho === false,
        [""]: ortho === true
    }, "toggle-logo");

    return (
            <section className="about_the_doctors">
                <div className="doctor-toggle">
                    <div className={skinclassnames} onClick={() => ToggleOnClick("skin")}><div className="skin-toggle-logo"><img src="/skin_logo.svg" alt="not available" /></div></div>
                    <div className={orthoclassnames} onClick={() => ToggleOnClick("ortho")}><div className="ortho-toggle-logo"><img src="/Ortho.svg" alt="not available" /></div></div>
                </div>
                <DocInfo active={ortho} />
                {/*<p className="body-light-light" id="doctor-info-p">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Loremunt ut labore et dolore magna 
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet </p> */}
                <div className="services-carousel services-group">
                    <div onClick={() => PrevbtnOnClick()}><div className="service-controls"><img src="/prev_btn.svg" alt="next-service"></img></div></div>
                    <Services />
                    <div onClick={() => NextbtnOnClick()}><div className="service-controls next-btn"><img src="/prev_btn.svg" alt="next-service"></img></div></div><br />
                    <Link href="/services"><div className="body-light-light more-services">SEE MORE SERVICES</div></Link>
                </div>
            </section>
    );
};

export default About_the_doctors;