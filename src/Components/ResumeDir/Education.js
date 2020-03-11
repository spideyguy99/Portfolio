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


export default function Education() {

    const classes = useStyles();

    const IUPUI = require('../Images/iupui.png');

    const IUK = require('../Images/iukokomo.png');

    const FHS = require('../Images/fhs.png');

    return(
        <div>
            <Paper className={classes.paperinpaper} elevation={6} style={{display: "flex"}}>
                <div style={{width: "100%", margin: 20}}>
                    <h4>
                        Indiana University Purdue University Indianapolis - IUPUI
                    </h4>
                    <p>Purdue School of Engineering and Technology </p>
                    <p>Bachelor of Science Computer and Information Technology</p>
                    <p>Concentration: Web/Application Development</p>
                </div>
                <img src={IUPUI} style={{height: 100, margin: 20}}/>
            </Paper>
            <Paper className={classes.paperinpaper} elevation={6} style={{display: "flex"}}>
                <div style={{width: "100%", margin: 20}}>
                    <h4>
                        Indiana University Kokomo
                    </h4>
                    <p>Indiana University School of Sciences</p>
                    <p>Bachelor of Science New Media</p>
                </div>
                <img src={IUK} style={{height: 100, margin: 20}}/>
            </Paper>
            <Paper className={classes.paperinpaper} elevation={6} style={{display: "flex"}}>
                <div style={{width: "100%", margin: 20}}>
                    <h4>
                        Fishers High School
                    </h4>
                    <p>Core 40</p>
                </div>
                <img src={FHS} style={{height: 100, margin: 20}}/>
            </Paper>
        </div>
    )
}