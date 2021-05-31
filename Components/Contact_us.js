import React from 'react';

const Contact_us = () => {

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
            <div className="maps-location">
                <iframe className="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.013689039984!2d80.05614491482065!3d12.84239179094072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f7ec128ec04f%3A0x9b3a679bbbf2b3e4!2sDhana&#39;s%20Derma%20clinic%20(Skin%20and%20Ortho%20Clinic)!5e0!3m2!1sen!2sin!4v1622287061007!5m2!1sen!2sin" width={500} height={300} allowFullScreen="" loading="lazy"></iframe>
            </div>
        </section>
    );
};

export default Contact_us;