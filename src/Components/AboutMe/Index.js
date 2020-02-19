import React from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

//material ui imports
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import TheatersIcon from '@material-ui/icons/Theaters';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';
import Paper from '@material-ui/core/Paper';

//page imports
import mediaHome from "./mediaHome";
import Music from "./Music";
import Games from './Games';
import Movies from "./Movies";


const useStyles = makeStyles(theme =>({
    icon: {
        color: "#e8eaf6",
        height: 35,
        width: 35,
    },
    root: {
        display: "flex",
        flexDirection: "column",
        flexGrow: 4,
    },
    paper: {
        backgroundColor: "#303f9f",
        display: "flex",
        justifyContent: "space-around"
    }
}));

export default function Index () {
    const classes = useStyles();


    return(
            <Router>
                <div className={classes.root}>
                    <nav>
                        <Paper className={classes.paper}>
                        <Link to={`/about`}>
                            <IconButton aria-label="About Me">
                                <PersonIcon className={classes.icon} />
                            </IconButton>
                        </Link>
                        <Link to={`/about/music`}>
                            <IconButton aria-label="Music">
                                <LibraryMusicIcon className={classes.icon}/>
                            </IconButton>
                        </Link>
                        <Link to={`/about/games`}>
                            <IconButton aria-label="Games">
                                <SportsEsportsIcon className={classes.icon}/>
                            </IconButton>
                        </Link>
                        <Link to={`/about/movies`}>
                            <IconButton aria-label="Shows">
                                <TheatersIcon className={classes.icon}/>
                            </IconButton>
                        </Link>
                        </Paper>
                    </nav>
                        <Switch>
                            <Route path={"/about"}  exact component={mediaHome} />
                            <Route path={"/about/music"} component={Music} />
                            <Route path={"/about/movies"} component={Movies} />
                            <Route path={"/about/games"} component={Games} />
                        </Switch>
                </div>
            </Router>
    )
}