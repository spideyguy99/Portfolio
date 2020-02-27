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
import GamesList from "../Data/GamesData";

const useStyles = makeStyles({
    root: {
        width: 250,
        minHeight: 250,
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
});

export default function GamesCard() {
    const classes = useStyles();

    return (
        <div>
            <Paper className={classes.cardpaper}>
                <h2>My Favorite Games!</h2>
                A top 9 list of my favorite Games! I am an avid PC gamer, but I don't limit myself to just that, I also play Switch, Playstation, and xBox. Click on the card to view the game on Steam!
            </Paper>
            <div className={classes.card}>
                {GamesList.map(item => (
                    <Card className={classes.root} elevation={0}>
                        <CardActionArea href={item.store} target={"_blank"}>
                            <CardMedia
                                className={classes.media}
                                image={item.img}
                                title={item.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2" >
                                    {item.name}
                                </Typography>
                                <Typography variant="subtitle2" >
                                    {item.genre}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Hours Played: {item.hours}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <div style={{height: "100%", width: "100%", backgroundColor: "#37474f"}}/>
                    </Card>
                ))}
            </div>
        </div>
    );
}