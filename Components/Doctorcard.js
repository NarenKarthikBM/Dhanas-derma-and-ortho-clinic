import moment, { months } from 'moment';
import { useState } from 'react';
import styles from './doctorcard.module.css';
import cn from 'classnames';

export default function Doctorcard(props){
    return(
        <div className={styles.card}>
            <div className={styles.docpic}><img src="/Dr.Jenson.webp" className={styles.docimg}></img></div>
            <div className={styles.inlineblock}>
                <div className={styles.title}>Dr. Jenson Isaac</div>
                <div classname={styles.subtitle}>ORTHO</div>
            </div>
        </div>
    );
}