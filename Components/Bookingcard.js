import moment, { months } from 'moment';
import { useState } from 'react';
import styles from './bookingcard.module.css';
import cn from 'classnames';

export default function Bookingcard(props){
    const[confirmpopup, setConfirmpopup] = useState(false)

    const times = ["4:00 PM", "4:00 PM", "4:00 PM", "4:00 PM", "4:00 PM", "4:00 PM", "4:00 PM","4:00 PM","4:00 PM", "4:00 PM", "4:00 PM", "4:00 PM"]
    let timebtns = times.map(time => {
        return (
          <div key={time} className={styles.btn}>
           {time}
          </div>
        );
     });

    const confirmOnclick = () => {
        setConfirmpopup(true)
    }

    const confirmeditOnclick = () => {
        setConfirmpopup(false)
    }

    const Popup = () => {

        if (confirmpopup == false) {
            return null
        }

        return(
            <div>
            <div className={styles.bgblur}></div>
                <div className={styles.confirmappointment}>
                    <div className={styles.label}>CONFIRM APOINTMENT</div>
                    <div className={styles.appointmentinfo}>
                        <div className={styles.gridblock + ' ' + styles.borderright}>
                            <div className={styles.label}>PATIENT NAME</div>
                            <div className={styles.subtitle + ' ' + styles.popuptitle}>Naren Karthik B M</div>
                        </div>
                        <div className={styles.gridblock}>
                            <div className={styles.label}>PATIENT AGE</div>
                            <div className={styles.subtitle + ' ' + styles.popuptitle}>16</div>
                        </div>
                        <div className={styles.gridblock + ' ' + styles.borderright + ' ' + styles.bordertop}>
                            <div className={styles.label}>DATE</div>
                            <div className={styles.subtitle + ' ' + styles.popuptitle}>12th April 2021</div>
                        </div>
                        <div className={styles.gridblock + ' ' + styles.bordertop}>
                            <div className={styles.label}>TIME</div>
                            <div className={styles.subtitle + ' ' + styles.popuptitle}>7:00 PM</div>
                        </div>
                    </div>
                    <div className={styles.service}>
                        <div className={styles.logo}><img src="skin_logo.svg"></img></div>
                        <div className={styles.subtitle + ' ' + styles.popuptitle}>GENERAL CONSULTATION</div>
                        <div className={styles.labelblack}>SKIN</div>
                        <div className={styles.btn + ' ' + styles.mtop} onClick={confirmeditOnclick} >EDIT DETAILS</div>
                        <div className={styles.btn + ' ' + styles.mtop}>CONFIRM BOOKING</div>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div>
        <div className={styles.card}>
            <div className={styles.label + ' ' + styles.cardtitle}>APPOINTMENT BOOKING</div>
            <div className={styles.dateselect}>
                <div className={styles.label + ' ' + styles.textalignleft}>SELECT A DATE</div>
                <div className={styles.title}>12th April</div>
                <div className={styles.pointer}></div>
            </div>
            <div className={styles.timeselect}>
                <div className={styles.label + ' ' + styles.textalignleft}>SELECT A DATE</div>
                <div className={styles.times}>
                    {timebtns}
                </div>
                <div className={styles.timepointer}></div>
            </div>
            <div className={styles.patientselect}>
                <div className={styles.label + ' ' + styles.textalignleft}>PATIENT</div>
                <div className={styles.patientselector}>
                    <div className={styles.btn}>FOR YOU</div>
                    <div className={styles.btn + ' ' + styles.faded}>FOR OTHERS</div>
                </div>
                <div className={styles.inputgrp}>
                    <input type="text" className={styles.patientname} placeholder="PATIENT NAME"/>
                    <input type="number" className={styles.patientage} placeholder="AGE" min="1"/>
                </div>
                <div className={styles.btn + ' ' + styles.textalignleft} onClick={confirmOnclick} >NEXT</div>
                <div className={styles.patientpointer}></div>
            </div>
        </div>
        <Popup />
        </div>
    );
}