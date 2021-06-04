import React from 'react';
import styles from './events.module.css';

const Events = () => {
    const serviceinfocn = "body" + ' ' + styles.serviceinfo
    return(
        <section className="events">
            <div className="watermark">EVENTS</div>
            <h1 className="h1">EVENTS</h1><br/>
            <a href="http://www.facebook.com/Skin360byMankind" className={styles.servicegallery}>
                <div className={styles.servicecard}>
                    <div className={styles.eventimg}><img src='/event-sunscreens.webp' alt="not available" /></div>
                    <p className={"body" + ' ' + styles.eventheading}>Facebook Live Event on Sunscreens</p>
                    <p className={serviceinfocn}>Date : 5th June 2021</p>
                    <p className={serviceinfocn}>Time : 11 AM</p>
                </div>
            </a>
        </section>
    );
} 
export default Events;