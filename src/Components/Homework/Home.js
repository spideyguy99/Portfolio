import React from "react";
import "../../App.css";

import Homework413 from '../Data/HomeworkData';
import Homework from "./Homework";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme =>({
    cardpaper: {
        backgroundColor: "#37474f",
        color: "#eceff1",
        minWidth: 250,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        padding: 8,
        paddingLeft: 20,
        paddingBottom: 20
    },
}));

export default function Home () {

    const classes = useStyles();

    let homework = Homework413.map((hmk, idx)=>
        <Homework name={hmk.name} url={hmk.url} sub={hmk.subHead}/>
    );

    return(
        <div>
            <div style={{backgroundColor: "#212121", color: "#212121"}}>
                Bumber
            </div>
            <Paper className={classes.cardpaper}>
            <h2>Homework from CIT 41300 - Advanced Commercial Web Development</h2>
            All homeworks are posted to GitHub, and available to access through Netlify.
        </Paper>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
                {homework}
            </div>
        </div>
    );
}