import React from "react";
import {CardComponent } from "../../Card/CardComponent";
import { WeekBar, WeeksBar } from "../week-bar/WeeksBar";
import styles from './Calender.module.css'

export const Calender = ()=> {

    return (
        <div >
            <h1>
                Weekly Calender
            </h1>

            {/* <WeeksBar></WeeksBar> */}

            <div  className={styles.gridContainer}>
            
            <CardComponent day={"Monday"} office={"GK-Mall"} time={"9:00 - 18:00"} desk={"3"} floor={3} className={styles.gridItem}/>
            <CardComponent day={"Tuesday"} class={styles.gridItem} />
            <CardComponent day={"Wednesday"} class={styles.gridItem}/>
            <CardComponent day={"Thursday"} class={styles.gridItem}/>
            <CardComponent day={"Friday"} class={styles.gridItem} /> 
            <CardComponent day={"Saturday"} class={styles.gridItem} />         
            </div>
        </div>
    )

}