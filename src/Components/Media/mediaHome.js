import React from 'react';

//material ui
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
    cardButton: {
        color: "#263238"
    }
});

export default function MediaCard() {
    const classes = useStyles();

    return (
        <div className={classes.card}>
                <Card className={classes.root}>
                    <CardActionArea  target={"_blank"}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                home
                            </Typography>
                            <Typography variant="subtitle2" >
                               test
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                test
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button variant={"contained"} size="small" target={"_blank"}>
                            Album
                        </Button>
                        <Button variant={"contained"} size="small" target={"_blank"}>
                            Wiki
                        </Button>
                    </CardActions>
                </Card>
        </div>
    );
}