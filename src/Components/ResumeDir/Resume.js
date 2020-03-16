import React from "react";

//material ui imports
import Paper from '@material-ui/core/Paper';
import {makeStyles} from "@material-ui/core/styles";

//page imports
import Skills from "./Skills";
import WorkExp from "./WorkExp";
import Education from "./Education";
import Activities from "./Activities";

const useStyles = makeStyles(theme =>({
    cardpaper: {
        backgroundColor: "#37474f",
        color: "#eceff1",
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        padding: 8,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 5
    },
}));

export default function Resume() {

    const classes = useStyles();

    return(
        <div>
            <div style={{backgroundColor: "#212121", height: 20}}/>
            <Paper className={classes.cardpaper} style={{width: "50%", margin: "0 auto", marginBottom: 20}} elevation={10}>
                <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
                    <h1>
                        My Resume
                    </h1>
                </div>
            </Paper>
            <Paper className={classes.cardpaper}>
                <h2>
                    My Objective as a Professional Web Developer
                </h2>
                <p>
                    To constantly expand my knowledge and proficiency with any and all tools that allow me to create and maintain professional websites.
                </p>
            </Paper>
            <Skills/>
            <WorkExp/>
            <Education/>
            <Activities/>
        </div>
    );
}