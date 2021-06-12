import React from 'react';

function Mapslocation(props) {

    if (props.maps === false){
        return (
            <div className="static-img">
                <img src="/maps-location.webp" alt="maps-location" className="maps-img"></img>
            </div>
        );
    } else {
        return (
            <div className="iframe">
                <iframe className="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.013689039984!2d80.05614491482065!3d12.84239179094072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f7ec128ec04f%3A0x9b3a679bbbf2b3e4!2sDhana&#39;s%20Derma%20clinic%20(Skin%20and%20Ortho%20Clinic)!5e0!3m2!1sen!2sin!4v1622287061007!5m2!1sen!2sin" width={500} height={300} allowFullScreen="" loading="lazy"></iframe>
            </div>
        );
    }

}

export default Mapslocation;
