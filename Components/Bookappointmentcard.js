import React from 'react';
import styles from './bookappointmentcard.module.css';
import cn from 'classnames';
import {useState} from 'react';
import Link from 'next/link';


export default function Bookappointment_card(){

    return(
        <div className={styles.card}>
            <div className={styles.cardtitle}>BOOK AN APPOINTMENT</div>
            <div className={styles.btnblock}>
                <div className={styles.orthobtn + ' ' + styles.btn}>
                    <div className={styles.orthologo}>
                        <img src="/Ortho.svg" alt="ortho" />
                    </div>
                    <div className={styles.btntext}>
                        ORTHO
                    </div>
                </div>
                <div className={styles.skinbtn + ' ' + styles.btn}>
                    <div className={styles.skinlogo}>
                        <img src="/skin_logo.svg" alt="skin" />
                    </div>
                    <div className={styles.btntext}>
                        SKIN
                    </div>
                </div>
            </div>
        </div>
    );
}