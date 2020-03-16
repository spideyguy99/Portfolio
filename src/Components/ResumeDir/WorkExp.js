import React from "react";

//material ui imports
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";

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
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    expand: {
        margin: '0 auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
}));


export default function WorkExp() {

    const classes = useStyles();

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return(
        <div>
            <Paper className={classes.cardpaper} style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                <h3 style={{width: "90%"}}>Work Experience</h3>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon style={{fontSize: 50,color: "#eceff1", backgroundColor: "#546e7a", borderRadius: 100}}/>
                </IconButton>
                <div/>
                <Collapse in={expanded} timeout="auto" unmountOnExi>
                    <Paper style={{display: "flex"}} className={classes.paperinpaper} elevation={6}>
                        <div style={{width: "50%"}}>
                            <h4>IUPUI: University Information Technology Services</h4>
                            <p>Consultant Supervisor</p>
                        </div>
                        <div style={{width: "50%"}}>
                            <ul>
                                <li>Trained and oversaw constultants</li>
                                <li>Assisted with both First and Second Tier IT Support for IUPUI Students</li>
                            </ul>
                        </div>
                    </Paper>
                    <Paper style={{display: "flex"}} className={classes.paperinpaper} elevation={6}>
                        <div style={{width: "50%"}}>
                            <h4>IUPUI: School of Engineering and Technology</h4>
                            <p>Assistant to the Webmaster</p>
                        </div>
                        <div style={{width: "50%"}}>
                            <ul>
                                <li>Developed Engineering and Technology Website using Trello (Kanban) </li>
                                <li>Built website using Cascade CMS</li>
                            </ul>
                        </div>
                    </Paper>
                    <Paper style={{display: "flex"}} className={classes.paperinpaper} elevation={6}>
                        <div style={{width: "50%"}}>
                            <h4>IUPUI: Multidisciplinary Undergraduate Research Institute</h4>
                            <p>Researcher / Developer</p>
                        </div>
                        <div style={{width: "50%"}}>
                            <ul>
                                <li>Researched and Developed a mobile application with React Native</li>
                                <li>Present total research findings at CRL Summer Symposium at IUPUI</li>
                                <li>Developed application using a broken version of Agile in a small group setting</li>
                            </ul>
                        </div>
                    </Paper>
                </Collapse>

            </Paper>
        </div>
    )
}