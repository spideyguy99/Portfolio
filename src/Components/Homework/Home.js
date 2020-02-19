import React from "react";
import "../../App.css";

import Homework413 from '../Data/HomeworkData';
import Homework from "./Homework";

export default function Home () {

    let homework = Homework413.map((hmk, idx)=>
        <Homework name={hmk.name} url={hmk.url} sub={hmk.subHead}/>
    );

    return(
        <div>
            {homework}
        </div>
    );
}