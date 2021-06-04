import React from 'react';
import {useState} from 'react';
import styles from './homeservices.module.css';
import cn from 'classnames';

const Home_Services = () => {
    const [ortho, setOrtho] = useState(false);

    const ToggleOnClick = (active) => {
        if (active === 'skin') {
            setOrtho(false)
        } else {
            setOrtho(true)
        }
    }

    const Services = ({active}) => {

        let elements = [];
        let url;

        if (active === true) {
            elements = ['Fracture Management', 'POP Treatment']
            url = '/Ortho.svg'
        } else {
            elements = ['Acne (Pimple) Treatment', 'Acne Scar Treatment', 'Chemical Peel', 'Skin polishing', 'Derma roller', 'Skin rejuvenation', 'Hair Removal (Laser)', 'Tattoo removal', 'Scar (Laser)', 'Hair Growth (PRP)', 'Ear Lobe Repair', 'Day Care Surgeries', 'Nail Treatment']
            url = '/skin_logo.svg'
        }

        const serviceinfocn = "body-light" + ' ' + styles.serviceinfo

        return(
            <div className={styles.servicegallery}>
                {elements.map((value) => {
                    return (<div className={styles.servicecard}>
                                <div id="service-img"><img src={url} alt="not available" /></div>
                                <p className="body">{value}</p>
                                <hr className={styles.divider} />
                                <p className={serviceinfocn}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                            </div>)
                })}
            </div>
        );
    };

    const DocInfo = ({active}) => {

        let name;
        let designation;
        let src;

        if (active === true) {
            name = "Dr.Jenson Isaac";
            designation = "Orthopedic Surgeon";
            src = "/Dr.Jenson.webp";
        } else {
            name = "Dr.Dhanalakshmi Kathirvel";
            designation = "Dermatologist";
            src = "/Dr.Dhanalakshmi.webp";
        }

        return(
            <div>
                <div id="doc-img"><img className="docs-img" src={src} alt="not available" /></div>
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
        <section className="services">
            <div className="doctor-toggle">
                <div className={skinclassnames} onClick={() => ToggleOnClick("skin")}><div className="skin-toggle-logo"><img src="/skin_logo.svg" alt="not available" /></div></div>
                <div className={orthoclassnames} onClick={() => ToggleOnClick("ortho")}><div className="ortho-toggle-logo"><img src="/Ortho.svg" alt="not available" /></div></div>
            </div>
            <DocInfo active={ortho} />
            <Services active={ortho} />
        </section>
    );
};

export default Home_Services;