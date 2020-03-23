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
        paddingTop: 1,
        paddingBottom: 12,
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


export default function Education() {

    const classes = useStyles();

    const IUPUI = require('../Images/iupui.png');

    const IUK = require('../Images/iukokomo.png');

    const FHS = require('../Images/fhs.png');

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return(
        <div>
            <Paper className={classes.cardpaper} style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                <h3 style={{width:"90%"}}>Education</h3>
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
                        <Paper className={classes.paperinpaper} elevation={6} style={{display: "flex"}}>
                            <div style={{width: 600, margin: 20}}>
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
                </Collapse>
            </Paper>
        </div>
    )
}