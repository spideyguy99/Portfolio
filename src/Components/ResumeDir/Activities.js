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


export default function Activities() {

    const UltTeam = require('../Images/ultTeam.JPG');

    const BaseLine = require('../Images/bassline.JPG');

    const Paintball = require('../Images/paintball.JPG');

    const classes = useStyles();

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return(
        <div>
           <Paper className={classes.cardpaper} style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
               <h3 style={{width: "90%"}}>Activities</h3>
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
               <Collapse in={expanded} timeout="auto" unmountOnExit>
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
               </Collapse>
           </Paper>
        </div>
    )
}