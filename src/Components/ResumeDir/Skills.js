import React from "react";

//material ui imports
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme =>({
    paperinpaper: {
        backgroundColor: "#546e7a",
        color: "#eceff1",
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 1,
        paddingBottom: 12,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 20,
    },
    imgInCard: {
        width:"95%",
        borderRadius: 5,
        border: "5px solid #37474f",
        marginLeft: 5,
        justifyContent: "space-around"
    }
}));

export default function Skills() {

    const classes = useStyles();

    return(
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
            <Paper className={classes.paperinpaper} elevation={6} style={{width: 350}}>
                <h4>Programming Languages</h4>
                <ul>
                    <li>JavaScript</li>
                    <ul>
                        <li>Vue</li>
                        <li>JQuery</li>
                    </ul>
                    <li>React JS</li>
                    <ul>
                        <li>Material UI</li>
                        <li>Redux</li>
                        <li>Firebase</li>
                    </ul>
                    <li>React Native</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Java</li>
                    <li>C++</li>
                    <li>Visual Basic</li>
                </ul>
            </Paper>
            <Paper className={classes.paperinpaper} elevation={6} style={{width: 350}}>
                <h4>Software</h4>
                <ul>
                    <li>Microsoft Office Suite</li>
                    <ul>
                        <li>Word</li>
                        <li>Powerpoint</li>
                        <li>Excel</li>
                    </ul>
                    <li>Adobe Suite</li>
                    <ul>
                        <li>Illustrator</li>
                        <li>Photoshop</li>
                        <li>Premiere</li>
                    </ul>
                    <li>GitHub</li>
                    <li>Netlify</li>
                    <li>Google Firebase</li>
                </ul>
            </Paper>
            <Paper className={classes.paperinpaper} elevation={6} style={{width: 350}}>
                <h4>Operating Systems</h4>
                <ul>
                    <li>Windows 10</li>
                    <li>MacOS</li>
                    <li>Linux (Ubuntu)</li>
                </ul>
            </Paper>
            <Paper className={classes.paperinpaper} elevation={6} style={{width: 350}}>
                <h4>IDE's</h4>
                <ul>
                    <li>WebStorm</li>
                    <li>Codepen</li>
                    <li>Brackets</li>
                    <li>Visual Studio Code</li>
                </ul>
            </Paper>
        </div>
    )
}