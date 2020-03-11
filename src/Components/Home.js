import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import Carousel from "./AboutMe/Carousel";


const useStyles = makeStyles(theme=>({
    large: {
        width: theme.spacing(17),
        height: theme.spacing(17),
        margin: 20,
        marginTop: 0,
    },
    cardpaper: {
        backgroundColor: "#37474f",
        color: "#eceff1",
        minWidth: 250,
        margin: 20,
        padding: 8,
        marginTop: 0
    },
}));

const portrait = require('./Images/profile.jpeg');

export default function Home(){


    const classes = useStyles();

    return(
        <div>
            <Carousel/>
            <div style={{display: "flex"}}>
                <Avatar alt="Portrait" src={portrait} className={classes.large}/>
                <Paper className={classes.cardpaper} >
                    <h3>What is this website for?</h3>
                    <div>
                        <ul>
                            <li>My portfolio is meant to give you both a look into my personal, and professional life.</li>
                            <li>In the navigation above you can find links to my Resume, and some of my relevant course work.</li>
                            <li>Links to all of my social media are in the footer.</li>
                        </ul>
                    </div>
                </Paper>
            </div>
        </div>
    );
}