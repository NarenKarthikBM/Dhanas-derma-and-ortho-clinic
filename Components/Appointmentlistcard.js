import styles from './appointmentlistcard.module.css';
import cn from 'classnames';
import {useState} from 'react';
import Link from 'next/link';
import {usestate} from 'react';

export default function Appointmentlistcard(props){

    const Appointmentcard = ({prop, index}) => {
        const styling = cn({
            [styles.active]:index == prop.appointmentindex,
            [styles.appointment]:index != prop.appointmentindex
        })
        console.log(prop.appointmentindex)
        return(
            <div>
                <div className={styles.timeline}>
                    <div className={styling} onClick={() => prop.setindex(index)}>
                        <div className={styles.appointmenttimings + ' ' + styles.divider}>
                            <div className={styles.title}>{prop.date}</div>
                            <div className={styles.subtitle}>{prop.day}</div>
                            <div className={styles.subtitle}>{prop.time}</div>
                        </div>
                        <div className={styles.divider}>
                            <div className={styles.appointmentdoctor}>
                                <div className={styles.title}>{prop.doctor}</div>
                                <div className={styles.subtitle}>{prop.speciality}</div>
                            </div>
                        </div>
                        <div className={styles.appointmentservice}>
                            <div>
                                <p className={styles.title}>{prop.service}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.pointer}></div>
            </div>
        );
    }

    return(
        <div className={styles.card}>
            <div className={styles.label}>YOUR APPOINTMENTS</div>
            <div className={styles.appointmentsblock}>
                <div className={styles.appointmentinfo + ' ' + styles.finishedapointments}>
                    <div className={styles.title + ' ' + styles.appointmenttitle}>{props.finishedappointments}</div>
                    <div className={styles.label}>FINISHED</div>
                </div>
                <div className={styles.appointmentinfo + ' ' + styles.finishedapointments}>
                    <div className={styles.title + ' ' + styles.appointmenttitle}>{props.upcomingappointments}</div>
                    <div className={styles.label}>UPCOMING</div>
                </div>
                <div className={styles.appointmentinfo + ' ' + styles.finishedapointments}>
                    <div className={styles.title + ' ' + styles.appointmenttitle}>{props.skinappointments}</div>
                    <div className={styles.label}>SKIN</div>
                </div>
                <div className={styles.appointmentinfo}>
                    <div className={styles.title + ' ' + styles.appointmenttitle}>{props.orthoappointments}</div>
                    <div className={styles.label}>ORTHO</div>
                </div>
            </div>
            <hr className="hr" />
            <div className={styles.appointmentdetailsblock}>
                <Appointmentcard index="1" prop={props} />
                <Appointmentcard index="2" prop={props} />
                <Appointmentcard index="3" prop={props} />
            </div>
            <div className={styles.btn}>SEE MORE APPOINTMENTS</div>
        </div>
    );
}