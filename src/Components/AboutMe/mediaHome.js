import React from 'react';

//material ui
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';

//pages
import Carousel from './Carousel';


const useStyles = makeStyles(theme=>({
    text: {
        color: "#eceff1"
    },
    welcomepaper: {
        '& > *': {
            margin: theme.spacing(1),
        },
        backgroundColor: "#263238",
        color: "#eceff1",
        paddingLeft: 50,
        padding: 12,
        display: "flex"
    },
    cardpaper: {
        backgroundColor: "#263238",
        color: "#eceff1",
        minWidth: 250,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        padding: 8
    },
    paperholder: {
        display: "flex",
        justifyContent: "space-around"
    },
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
    },
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
                <Paper className={classes.cardpaper} elevation={5}>
                    <div>
                        <h3>
                            Some Fun Facts About Me!
                        </h3>
                    </div>
                    <ul>
                        <li>I have a black belt</li>
                        <li>I am VP of the Ultimate Frisbee Club</li>
                        <li>I am currently working 2 jobs</li>
                        <li>I have marched on Lucas Oil</li>
                        <li>I participated in a research project</li>
                    </ul>
                </Paper>
                <Paper className={classes.cardpaper}>
                    <h3>What is this website for?</h3>
                    <div>
                        <ul>
                            <li>My portfolio is meant to give you both a look into my personal, and professional life.</li>
                            <li>In the navigation above you can find a selection of my favorite albums, video games, and shows!</li>
                            <li>Links to all of my social media.</li>
                            <li>A collection of my posted homework for my CIT 41300 class</li>
                        </ul>
                    </div>
                </Paper>
            </div>

        </div>
    );
}