import React from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

//material ui imports
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import TheatersIcon from '@material-ui/icons/Theaters';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';

//page imports
import Music from "./Music";
import Games from './Games';
import Movies from "./Movies";


const useStyles = makeStyles(theme =>({
    icon: {
        color: "white",
        height: 50,
        width: 50
    }
}));

export default function Media () {
    const classes = useStyles();


    return(
            <Router>
                <div>
                    <nav>
                        <Link to={`/media/music`}>
                            <IconButton>
                                <LibraryMusicIcon className={classes.icon}/>
                            </IconButton>
                        </Link>
                        <Link to={`/media/games`}>
                            <IconButton>
                                <SportsEsportsIcon className={classes.icon}/>
                            </IconButton>
                        </Link>
                        <Link to={`/media/movies`}>
                            <IconButton>
                                <TheatersIcon className={classes.icon}/>
                            </IconButton>
                        </Link>
                    </nav>
                        <Switch>
                            <Route path={"/media/music"} component={Music} />
                            <Route path={"/media/movies"} component={Movies} />
                            <Route path={"/media/games"} component={Games} />
                        </Switch>
                    This is a test to see where the text goes
                </div>
            </Router>
    )
}