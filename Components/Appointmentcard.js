import React from 'react';
import styles from './appointmentcards.module.css';
import cn from 'classnames';
import {useState} from 'react';
import Link from 'next/link';


export default function Appointment_card(props){

    return(
        <div className={styles.card}>
            <div className={styles.cardtitle}>{props.title}</div>
            <div className={styles.appointmentlogo}></div>
            <div className={styles.datetime}>{props.date}</div>
            <div className={styles.datetime}>{props.time}</div>
            <div className={styles.infoblock}>
                <div className={styles.infotext}>{props.doctor}</div>
                <div className={styles.infotext}>{props.service}</div>
            </div>
            <div className={styles.btn}>VIEW DETAILS</div>
        </div>
    );
}