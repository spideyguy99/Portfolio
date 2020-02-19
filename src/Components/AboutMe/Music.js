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

//page imports
import MusicList from "../Data/MusicData";

const useStyles = makeStyles({
    root: {
        width: 250,
        minHeight: 20,
        backgroundColor: "#263238",
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
    cardButton: {
        backgroundColor: "#263238"
    },
    cardpaper: {
        backgroundColor: "#263238",
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
});

export default function MusicCard() {
    const classes = useStyles();

    return (
        <div>
            <Paper className={classes.cardpaper}>
                <h2>My Favorite Albums!</h2>
                A top 9 list of my favorite Albums! Click the Card to view a selected song from the album, the ALBUM button will take you to Spotify, and the wiki will lead you to more info about the band!
            </Paper>
            <div className={classes.card}>
            {MusicList.map(item => (
                <Card className={classes.root} elevation={5}>
                    <CardActionArea href={item.youTube} target={"_blank"}>
                        <CardMedia
                            className={classes.media}
                            image={item.img}
                            title={item.artist}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {item.artist}
                            </Typography>
                            <Typography variant="subtitle2" >
                                {item.genre}
                            </Typography>
                            <Typography variant="body2" component="p">
                                Lead Singer: {item.leadSinger}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions className={classes.cardbutton}>
                        <Button  variant={"contained"} size="small" target={"_blank"} href={item.spot} style={{backgroundColor:"#455a64", color: "#eceff1"}}>
                            Album
                        </Button>
                        <Button variant={"contained"} size="small" target={"_blank"} href={item.wiki} style={{backgroundColor:"#455a64", color: "#eceff1"}}>
                            Wiki
                        </Button>
                    </CardActions>
                </Card>
            ))}
            </div>
        </div>
    );
}