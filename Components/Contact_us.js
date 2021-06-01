import React from 'react';
import {useState} from 'react';
import Maps_location from './Maps_location';

const Contact_us = () => {
    const [maps, setMaps] = useState(false);

    const Interactivemap = () => {
        setMaps(true)
    }

    return (
        <section className="contact-us">
            <div className="left-contact-us">
                <div className="watermark">CONTACT US</div>
                <h1 className="h1">CONTACT US</h1><br/>
                <div className="mobile-no">
                    <div className="contact-us-img"><img src="/mobile-dark.svg" alt="mobile"></img></div> <a href="tel:+919566120848"><p className="h4 contact-us-p"> +91 9566120848</p></a>
                </div>
                <div className="email-id">
                    <div className="contact-us-img"><img src="/mail-dark.svg" alt="email"></img></div> <a href="mailto:drdhanuk@gmail.com"><p className="h4 contact-us-p">drdhanuk@gmail.com</p></a>
                </div>
            </div>
            <div className="maps-location" onMouseOver={Interactivemap} >
                <Maps_location maps={maps} />
            </div>
        </section>
    );
};

export default Contact_us;