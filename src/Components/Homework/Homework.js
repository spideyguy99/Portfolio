import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import GamesList from "../Data/GamesData";
import CardActionArea from "@material-ui/core/CardActionArea";
import HomeworkList from "../Data/HomeworkData";

const useStyles = makeStyles(theme =>({
    card: {
        display: 'flex',
        flexWrap: "wrap",
        justifyContent: "space-around",
        backgroundColor:"#37474f",
        color: "#eceff1",
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
    },
    action: {
        display: "flex",
        alignSelf: "flex-end",
    },
    root: {
        display: 'flex',
        flexWrap: "wrap",
    },
    media: {
        height: 200,
        width: 350
    },
}));

export default function Homework(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {HomeworkList.map(item => (
                <Card className={classes.card} elevation={0}>
                    <CardActionArea href={item.url} target={"_blank"}>
                        <CardMedia
                            className={classes.media}
                            image={item.img}
                            title={item.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" >
                                {item.name}
                            </Typography>
                            <Typography gutterBottom>
                                {item.subHead}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </div>
    );
}