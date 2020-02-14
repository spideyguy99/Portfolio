import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import YouTubeIcon from '@material-ui/icons/YouTube';

import MusicList from "./Data/MusicData";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: "#424242",
    },
    gridList: {
        width: 800,
        height: "90vh",
        verticalAlign: "text-top"
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    text: {
        color: "#e8eaf6",
        borderRadius: 13,
        boxShadow: '1px 2px 4px 10 rgba(138, 148, 159, 0.2)',
        backgroundColor:"#121212",
    }
}));

export default function Music() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography className={classes.text} variant={"h5"}>
                -My Favorite Music-
            </Typography>
            <GridList cellHeight={250} className={classes.gridList} cols={3}>
                {MusicList.map(tile => (
                    <GridListTile key={tile.img} cols={tile.cols || 1}>
                        <img src={tile.img} alt={tile.artist} />
                        <GridListTileBar
                            title={tile.artist}
                            subtitle={<span>{tile.leadSinger}</span>}
                            actionIcon={
                                <IconButton aria-label={`info about ${tile.artist}`} className={classes.icon}>
                                    <YouTubeIcon/>
                                </IconButton>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}