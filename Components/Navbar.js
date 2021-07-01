import React from 'react';
import styles from './navbar.module.css';
import cn from 'classnames';
import {useState} from 'react';
import Link from 'next/link';

const Navbar = (props) => {
    const [navbar, setNavbar] = useState(false);
    const [src, setSrc] = useState("/nav_burger.svg");
  
    const HandleLoginOnClick = () => {
        props.LoginOnClick();
    }
  
    const HandleNavToggleOnClick = () => {
        if (src == "/nav_burger.svg"){
            setSrc("/exit.svg")
            setNavbar(true);
        } else {
            setSrc("/nav_burger.svg")
            setNavbar(false);
        }
    }

    const navclassnames = cn({
        [styles.navhidden]: navbar === false,
        [styles.nav]: navbar === true
    }, styles.navdesktop);
    

    return (
            <div className={styles.navbar}>
                <nav className={navclassnames}>
                    <ul className={styles.navul}>
                        <li className={styles["navli"] + " " + styles["logo"] + " " + styles['navlogo']}><Link href="/"><img height={60} width={50} src="/Logo.svg" alt="not available"></img></Link></li>
                        <li className={styles.navli}><Link href="/"><p className={styles.navp}>HOME</p></Link></li>
                        {/* <li className={styles.navli}><p className={styles.navp} onClick={HandleLoginOnClick}>DASHBOARD</p></li> */}
                        {/* <li className={styles.navli}><p className={styles.navp} onClick={HandleLoginOnClick}>BOOK NOW</p></li> */}
                        <li className={styles.navli}><Link href="/contactus"><p className={styles.navp}>CONTACT US</p></Link></li>
                        <li className={styles.navli}><Link href="/services"><p className={styles.navp}>SERVICES</p></Link></li>
                        <li className={styles.navli}><Link href="/aboutthedoctors"><p className={styles.navp} id>ABOUT</p></Link></li>
                        {/* <li className={styles["navli"] + " " + styles["loginitem"]}><p className={styles.navp} onClick={HandleLoginOnClick}>LOGIN/SIGN UP</p></li> */}
                    </ul>
                </nav>
                <div className={styles.mobilenav}>
                    <div className={styles.logo}><Link href="/"><img src="/Logo.svg" alt="not available"></img></Link></div>
                    <div className={styles.navtoggle}><img src={src} alt="not available" onClick={HandleNavToggleOnClick}></img></div>
                </div>
            </div>
    );
};



export default Navbar;