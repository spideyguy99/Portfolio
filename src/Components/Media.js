import React from "react";

//material ui imports
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import TheatersIcon from '@material-ui/icons/Theaters';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';

//page imports
import Music from "./Music";
import Games from './Games';
import Movies from "./Movies";

export default function Media () {
    return(
        <div>
            <LibraryMusicIcon/>
            <TheatersIcon/>
            <SportsEsportsIcon/>

            <Music/>
            <Games/>
            <Movies/>
        </div>
    )
}