import React from 'react';
import styles from './footer.module.css';
import cn from 'classnames';
import Link from 'next/link';

const Footer = (props) => {

    const HandleLoginOnClick = () => {
        props.LoginOnClick();
    }
    const footerclassnames = cn({
        [styles.footerfixed]: props.footerstatic === false,
        [styles.footer]: props.footerstatic === true
    });
    return (
            <footer className={footerclassnames}>
                <div className={styles.logo}>
                    <Link href="/"><img src="/Logo.svg" alt="logo"></img></Link>
                </div>
                <ul className={styles.primaryfooterul}>
                    {/* <li className={styles["primaryfooterulli"] + " " + styles["login"]}><p className={styles.footeritem} onClick={HandleLoginOnClick}>LOGIN</p></li> */}
                    <li className={styles["primaryfooterulli"] + " " + styles["home"]}><Link href="/"><p className={styles.footeritem}>HOME</p></Link></li>
                    {/* <li className={styles["primaryfooterulli"] + " " + styles["dashboard"]}><p className={styles.footeritem} onClick={HandleLoginOnClick}>DASHBOARD</p></li> */}
                    {/* <li className={styles["primaryfooterulli"] + " " + styles["booknow"]}><p className={styles.footeritem} onClick={HandleLoginOnClick}>BOOK NOW</p></li> */}
                    <li className={styles["primaryfooterulli"] + " " + styles["contactus"]}><Link href="/contactus"><p className={styles.footeritem}>CONTACT US</p></Link></li>
                    <li className={styles["primaryfooterulli"] + " " + styles["services"]}><Link href="/services"><p className={styles.footeritem}>SERVICES</p></Link></li>
                    <li className={styles["primaryfooterulli"] + " " + styles["aboutthedoctors"]}><Link href="/aboutthedoctors"><p className={styles.footeritem}>ABOUT</p></Link></li>
                </ul>
                <ul className={styles.secondaryfooterul}>
                    <li className={styles.secondaryfooterli}><div className={styles.mobilediv}><img src="/mobile-white.svg" alt="mobie"></img></div> <a href="tel:+919566120848"><p className={styles.secondaryfooterp}>+91 9566120848</p></a></li>
                    <li className={styles['secondaryfooterli'] + styles['styles.secondaryfootermailimg']}><div className={styles.maildiv}><img src="/mail-white.svg" alt="email"></img></div> <a href="mailto:drdhanuk@gmail.com"><p className={styles.secondaryfooterp}>drdhanuk@gmail.com</p></a></li>
                </ul>
                <div className={styles.mapslocation}>

                </div>
                <div className={styles.copyrightsdiv}>
                    <p className={styles.bodywhite}>&#169;DHANA'S DERMA {"&"} ORTHO CLINIC 2021</p>
                </div>
            </footer>
    );
};

export default Footer;