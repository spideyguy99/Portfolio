import React from 'react';

//material ui
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Button from "@material-ui/core/Button";

//pages
import Carousel from './Carousel';
import Music from "./Music";
import Games from "./Games";
import Movies from "./Movies";

const useStyles = makeStyles(theme=>({
    text: {
        color: "#eceff1"
    },
    welcomepaper: {
        '& > *': {
            margin: theme.spacing(1),
        },
        backgroundColor: "#37474f",
        color: "#eceff1",
        paddingLeft: 50,
        padding: 12,
        display: "flex",
        margin: 20
    },
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
    cardinpaper: {
        backgroundColor: "#37474f",
        color: "#eceff1",
        minWidth: 250,
        margin: 20,
        padding: 20
    },
    paperholder: {
        display: "flex",
        justifyContent: "space-around",
    },
    mediaholder: {
        paddingTop: 10,
        margin: 20,
        paddingBottom: 10,
        backgroundColor: "#37474f"
    }
}));

export default function MediaCard() {
    const classes = useStyles();

    const portrait = require('../Images/profile.jpeg');

    return (
        <div>
            <div style={{backgroundColor: "#212121", height: 20}}/>
            <Paper className={classes.cardpaper} style={{width: "50%", margin: "0 auto", marginBottom: 20}} elevation={10}>
                <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
                    <h1>
                        About Me
                    </h1>
                </div>
            </Paper>
            <div className={classes.paperholder}>
                <Paper className={classes.cardinpaper} elevation={5}>
                    <div>
                        <h3>
                            Some Fun Facts About Me!
                        </h3>
                    </div>
                    <ul>
                        <li>I have a black belt in Goju Ryu</li>
                        <li>I am a Supervisor for UITS</li>
                        <li>I am VP of the Ultimate Frisbee Club at IUPUI</li>
                        <li>I have marched on Lucas Oil</li>
                        <li>My favorite pizza is Pineapple pizza >:)</li>
                    </ul>
                </Paper>
                <Paper className={classes.cardinpaper}>
                    <h3 style={{height: "50%"}}>
                        The Site I am currently working on!
                    </h3>
                    <Button
                        target={"_blank"}
                        href={"https://et.iupui.edu/"}
                        variant={"contained"}
                        style={{backgroundColor: "#e8eaf6"}}
                    >
                        Engineering and Technology
                    </Button>
                </Paper>
            </div>
            <Paper className={classes.mediaholder} elevation={10}>
                <Music/>
            </Paper>
            <Paper className={classes.mediaholder} elevation={10}>
                <Games/>
            </Paper>
            <Paper className={classes.mediaholder} elevation={10}>
                <Movies/>
            </Paper>
        </div>
    );
}