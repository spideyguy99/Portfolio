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


export default function Activities() {

    const UltTeam = require('../Images/ultTeam.JPG');

    const BaseLine = require('../Images/bassline.JPG');

    const Paintball = require('../Images/paintball.JPG');

    const classes = useStyles();

    return(
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
            <Paper className={classes.paperinpaper} style={{width:"44%"}} elevation={6}>
                <h4>Ultimate Frisbee</h4>
                <p>Club Vice President</p>
                <img
                    className={classes.imgInCard}
                    src={UltTeam}
                />
            </Paper>
            <Paper className={classes.paperinpaper} style={{width:"44%"}} elevation={6}>
                <h4>Marching Band</h4>
                <p>Percussion: Bass Line & Quads</p>
                <img
                    className={classes.imgInCard}
                    src={BaseLine}
                />
            </Paper>
            <Paper className={classes.paperinpaper} elevation={6} style={{width:"44%"}}>
                <h4>Paintball</h4>
                <p>Just a fun hobby I enjoy... maybe a little too much</p>
                <img
                    className={classes.imgInCard}
                    src={Paintball}
                />
            </Paper>
        </div>
    )
}