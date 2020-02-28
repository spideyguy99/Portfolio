import React from "react";
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

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
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
    textfield: {
        width: "100%",
        backgroundColor: "#cfd8dc",
        borderRadius: 3
    },
    button: {
        backgroundColor: "#cfd8dc",
    }
}));

export default function Contact() {

    const classes = useStyles();

    return(
        <div>
            <div style={{backgroundColor: "#212121", height: 20}}>
            </div>
            <Paper className={classes.cardpaper} style={{margin: "0 auto", marginBottom: 20}} elevation={10}>
                <h1>
                    Contact Me
                </h1>
                <div style={{display: "flex"}}>
                    <p>Or direct message me using these  </p>
                    <ArrowForwardIcon style={{marginTop: 15, marginLeft: 3}}/>
                    <IconButton aria-label="GitHub" href="https://www.instagram.com/https.noah99/" target={"_blank"}>
                        <InstagramIcon style={{color: "#e8eaf6"}}/>
                    </IconButton>
                    <IconButton aria-label="GitHub" href="https://www.facebook.com/noah.furniss.73" target={"_blank"}>
                        <FacebookIcon style={{color: "#e8eaf6"}}/>
                    </IconButton>
                </div>
            </Paper>

            <Paper className={classes.cardpaper} elevation={5}>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField
                        className={classes.textfield}
                        id="standard-secondary"
                        label="Name"
                        variant="filled"
                        color="primary"
                    />
                    <TextField
                        className={classes.textfield}
                        id="filled-secondary"
                        label="Company / Organization"
                        variant="filled"
                        color="primary"
                    />
                    <TextField
                        className={classes.textfield}
                        id="filled-secondary"
                        label="Email"
                        variant="filled"
                        color="primary"
                    />
                    <TextField
                        className={classes.textfield}
                        id="standard-multiline-static"
                        label="Message"
                        multiline
                        rows="4"
                        variant="filled"
                        color="primary"
                    />
                    <Button
                        className={classes.button}
                        variant={"contained"}
                    >
                        Send
                    </Button>
                </form>
            </Paper>
        </div>
    );
}