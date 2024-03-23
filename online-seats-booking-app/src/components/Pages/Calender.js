import React from "react";
import {CardComponent } from "../Card/CardComponent";
import { WeekBar, WeeksBar } from "./week-bar/WeeksBar";

export const Calender = ()=> {

    return (
        <div>
            <h1>
                Weekly Calender
            </h1>

            {/* <WeeksBar></WeeksBar> */}

            <div  className="grid-container">
            
            <CardComponent day={"Monday"} office={"XYZ"}class="grid-item"/>
            <CardComponent day={"Tuesday"} class="grid-item" />
            <CardComponent day={"Wednesday"} class="grid-item"/>
            <CardComponent day={"Thursday"} class="grid-item"/>
            <CardComponent day={"Friday"} class="grid-item" /> 
            <CardComponent day={"Saturday"} class="grid-item" />         
            </div>
        </div>
    )

}