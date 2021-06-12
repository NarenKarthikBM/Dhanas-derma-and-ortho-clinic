import styles from './profileinfo.module.css';
import cn from 'classnames';
import {useState} from 'react';
import Link from 'next/link';


export default function Profileinfocard(props){

    return(
        <div className={styles.card}>
            <div className={styles.roundedlogo}>{props.nickname}</div>
            <div className={styles.title}>{props.name}</div>
            <div className={styles.infoblock}>
                <div className={styles.block}>
                    <div className={styles.label}>MOBILE NO.</div>
                    <div className={styles.info}>{props.mobileno}</div>
                </div>
                <div className={styles.block}>
                    <div className={styles.label}>AGE</div>
                    <div className={styles.info}>{props.age}</div>
                </div>
                <div className={styles.block}>
                    <div className={styles.label}>EMAIL ID</div>
                    <div className={styles.info + ' ' + styles.email}>{props.email}</div>
                </div>
                <div className={styles.block}>
                    <div className={styles.label}>GENDER</div>
                    <div className={styles.info}>{props.gender}</div>
                </div>
            </div>
            <div className={styles.btn}>EDIT PROFILE</div>
            <div className={styles.btn + ' ' + styles.passwordbtn}>CHANGE PASSWORD</div>
            <div className={styles.label}>YOUR APPOINTMENTS</div>
            <div className={styles.appointmentsblock}>
                <div className={styles.appointmentinfo + ' ' + styles.finishedapointments}>
                    <div className={styles.title + ' ' + styles.appointmenttitle}>{props.finishedappointments}</div>
                    <div className={styles.label}>FINISHED</div>
                </div>
                <div className={styles.appointmentinfo}>
                    <div className={styles.title + ' ' + styles.appointmenttitle}>{props.upcomingappointments}</div>
                    <div className={styles.label}>UPCOMING</div>
                </div>
            </div>
        </div>
    );
}