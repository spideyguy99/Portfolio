import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

//page imports
import MoviesList from "../Data/MoviesData";

const useStyles = makeStyles({
    root: {
        width: 250,
        minHeight: 250,
        backgroundColor: "#455a64",
        color: "#eceff1"
    },
    media: {
        height: 140,
    },
    card: {
        padding: 10,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
    },
});

export default function MoviesCard() {
    const classes = useStyles();

    return (
        <div className={classes.card}>
            {MoviesList.map(item => (
                <Card className={classes.root}>
                    <CardActionArea  href={item.wiki} target={"_blank"}>
                        <CardMedia
                            className={classes.media}
                            image={item.img}
                            title={item.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {item.name}
                            </Typography>
                            <Typography variant="subtitle2" >
                                {item.genre}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Directed By: {item.director}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </div>
    );
}