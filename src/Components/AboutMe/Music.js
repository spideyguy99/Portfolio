import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from "@material-ui/core/Paper";
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import clsx from 'clsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//page imports
import MusicList from "../Data/MusicData";

const useStyles = makeStyles(theme => ({
    root: {
        width: 250,
        minHeight: 20,
        backgroundColor: "#546e7a",
        color: "#eceff1",
        marginBottom: 20
    },
    media: {
        height: 140,
    },
    card: {
        padding: 10,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
    },
    cardpaper: {
        backgroundColor: "#546e7a",
        color: "#eceff1",
        minWidth: 250,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        padding: 8,
        paddingLeft: 20,
        paddingBottom: 20
    },
    expand: {
        transform: 'rotate(0deg)',
        margin: '0 auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}));

export default function MusicCard() {
    const classes = useStyles();

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div>
            <Paper className={classes.cardpaper} style={{display: "flex"}}>
                <div style={{width: "100%"}}>
                    <h2>My Favorite Albums!</h2>
                    A top 9 list of my favorite Albums! Click the Card to view a selected song from the artist!
                </div>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon style={{fontSize: 75, color: "#eceff1", backgroundColor: "#78909c", borderRadius: 100}}/>
                </IconButton>
            </Paper>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <div className={classes.card}>
                    {MusicList.map(item => (
                        <Card className={classes.root} elevation={0}>
                            <CardActionArea href={item.youTube} target={"_blank"}>
                                <CardMedia
                                    className={classes.media}
                                    image={item.img}
                                    title={item.artist}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {item.artist} - {item.album}
                                    </Typography>
                                    <Typography variant="subtitle2" >
                                        {item.genre}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        Lead Singer: {item.leadSinger}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))}
                    </div>
                </Collapse>
        </div>
    );
}