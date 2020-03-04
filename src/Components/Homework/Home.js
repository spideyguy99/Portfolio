import React from "react";
import "../../App.css";

//component imports
import Homework413 from '../Data/HomeworkData';
import Homework from "./Homework";

//material ui imports
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme =>({
    cardpaper: {
        backgroundColor: "#37474f",
        color: "#eceff1",
        minWidth: 250,
        marginLeft: 5,
        marginRight: 5,
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
            <div style={{backgroundColor: "#212121", height: 20}}>

            </div>
            <Paper className={classes.cardpaper}>
                <h2>Homework from CIT 41300 - Advanced Commercial Web Development</h2>
                All homeworks are posted to GitHub, and available to access through Netlify.
            </Paper>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
                {homework}
            </div>
            <Paper className={classes.cardpaper} style={{display: "flex"}}>
                <div style={{width: "85%"}}>
                    <h2>I also have a CodePen!</h2>
                    All homeworks are JavaScript, 100 and 200 level classes
                </div>
                <Button variant={"contained"} target={"_blank"} href={"https://codepen.io/NFurniss"} style={{margin: 20, height: 50}}>
                    CodePen
                </Button>
            </Paper>
        </div>
    );
}