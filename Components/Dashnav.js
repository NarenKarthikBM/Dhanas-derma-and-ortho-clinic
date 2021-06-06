import React from 'react';
import styles from './dashnav.module.css';
import cn from 'classnames';
import {useState} from 'react';
import Link from 'next/link';


export default function Dashnav(props){
    const highlighter = (name) => {
        const classname = cn({
            [styles.highlighter]: props.page === name,
        }, styles.imgdiv)
        return classname
    }
    return (
        <div className={styles.navbar}>
            <div className={styles.mobilenav}>
                <div className={styles.logo}><img src="/Logo.svg" alt="logo"></img></div>
                <div className={styles.profilelogo}><div className="h4">DD</div></div>
            </div>
            <div className={styles.footernav}>
                <div className={styles.desktoplogo + ' ' + styles.logo}><img  src="/Logo.svg" alt="email"></img></div>
                <div className={styles.desktoplogo + ' ' + styles.profilelogo}><p className="h4">DD</p></div>
                <div className={styles.navul}>
                    <div className={styles.li}><div className={highlighter("Home")}><img className={styles.navimg} src="/Homelogo.svg" alt="Home"></img></div><div className={styles.navinfo + ' ' + "body-white"}>Dashboard</div></div>
                    <div className={styles.li}><div className={highlighter("Patient")}><img className={styles.navimg} src="/Patientlogo.svg" alt="Patient"></img></div><div className={styles.navinfo + ' ' + "body-white"}>Patient</div></div>
                    <div className={styles.li}><div className={highlighter("Services")}><img className={styles.navimg} src="/Serviceslogo.svg" alt="Services"></img></div><div className={styles.navinfo + ' ' + "body-white"}>Services</div></div>
                    <div className={styles.li}><div className={highlighter("Appointment")}><img className={styles.navimg} src="/Appointmentlogo.svg" alt="Appointment"></img></div><div className={styles.navinfo + ' ' + "body-white"}>Appointment</div></div>
                    <div className={styles.li}><div className={highlighter("Add")}><img className={styles.navimg} src="/Addlogo.svg" alt="Add"></img></div><div className={styles.navinfo + ' ' + "body-white"}>Appointment</div></div>
                </div>
            </div>
            <div className={styles.logout}><img className={styles.navimg} src="/Addlogo.svg" alt="email"></img><div className={styles.navinfo + ' ' + "body-white"}>Logout</div></div>
        </div>
    );
}
