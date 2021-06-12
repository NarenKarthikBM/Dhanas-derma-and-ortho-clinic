import moment, { months } from 'moment';
import { useState } from 'react';
import styles from './calendar.module.css';
import cn from 'classnames';
export default function Calendar(props){
    const[date, setDate] = useState(moment().format('D'))
    const[selecteddate, setSelecteddate] = useState(moment().format('D'))
    const[selectedmonth, setSelectedmonth] = useState(0)
    const[month, setMonth] = useState(0)
    const state = {
        dateObject: moment()
    }

    const nextmonth = () => {
        if (month < 3) {
            setMonth(month + 1)
        }
    }

    const prevmonth = () => {
        if (month >= 1) {
            setMonth(month - 1)
        }
    }

    const DateOnclick = (newdate) => {
      setSelecteddate(newdate)
    }

    const highlighter = (name, d) => {
        const classname = cn({
            [styles.highlighter]: d == name && selectedmonth === month,
            [styles.disabled]: d < date && month == 0
        }, styles.tablecell)
        return classname
    }

    var weekdayshort = moment.weekdaysShort();
    let weekdayshortname = weekdayshort.map(day => {
        return (
          <th key={day} className={styles.weekday + ' ' + styles.tablecell}>
           {day}
          </th>
        );
     });

    const firstDayOfMonth = (state) => {
        let dateObject = state.dateObject;
        let firstDay = moment(dateObject)
                     .add(month, 'M')
                     .startOf("month")
                     .format("d"); 
       return firstDay;
    };

    let blanks = [];
    for (let i = 0; i < firstDayOfMonth(state); i++) {
      blanks.push(
        <td className="calendar-day empty">{""}</td>
      );
    };

    let daysInMonth = [];
    for (let d = 1; d <= state.dateObject.add(month, 'M').daysInMonth(); d++) {
      daysInMonth.push(
        <td key={d} className={highlighter(selecteddate,d)} onClick={() => DateOnclick(d)} >
          {d}
        </td>
      );
    }

    var totalSlots = [...blanks, ...daysInMonth];
    let rows = [];
    let cells = [];

    totalSlots.forEach((row, i) => {
        if (i % 7 !== 0) {
          cells.push(row); // if index not equal 7 that means not go to next week
        } else {
          rows.push(cells); // when reach next week we contain all td in last week to rows 
          cells = []; // empty container 
          cells.push(row); // in current loop we still push current row to new container
        }
        if (i === totalSlots.length - 1) { // when end loop we add remain date
          rows.push(cells);
        }
    });

    let daysinmonth = rows.map((d, i) => {
        return <tr>{d}</tr>;
    });

    return (
        <div className={styles.card}>
            <div className={styles.prev}><img src="/calendar-prev.svg" alt="Prev" onClick={prevmonth} /></div>
            <div className={styles.monthname}>{moment().add(month, 'M').format('MMMM') + ' ' + moment().add(month, 'M').format('YYYY')}</div>
            <div className={styles.next}><img src="/calendar-next.svg" alt="Next"  onClick={nextmonth}/></div>
            <table className={styles.calendartable}>
                <thead>
                <tr>{weekdayshortname}</tr>
                </thead>
                <tbody>{daysinmonth}</tbody>
            </table>
        </div>
    );
}
