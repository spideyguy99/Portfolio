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
        minWidth: 250,
        margin: 20,
        padding: 8
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
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
    },
    mediaholder: {
        paddingTop: 10,
        margin: 20,
        backgroundColor: "#37474f"
    }
}));

export default function MediaCard() {
    const classes = useStyles();

    const portrait = require('../Images/profile.jpeg');

    return (
        <div>
            <Carousel/>
            <Paper className={classes.welcomepaper} elevation={5}>
                <Avatar alt="Portrait" src={portrait} className={classes.large}/>
                <div>
                    <h1>
                        My name is Noah!
                    </h1>
                    <h4>
                        But I'm guessing you already knew that.
                    </h4>
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
            <Paper className={classes.cardpaper} >
                <h3>What is this website for?</h3>
                <div>
                    <ul>
                        <li>My portfolio is meant to give you both a look into my personal, and professional life.</li>
                        <li>In the navigation above you can find links to my Resume, some of my relavant course work, and a contact form if you like what you see!</li>
                        <li>Links to all of my social media are in the footer, and on my Resume page.</li>
                    </ul>
                </div>
            </Paper>
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