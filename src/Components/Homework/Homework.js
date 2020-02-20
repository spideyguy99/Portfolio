import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme =>({
    card: {
        display: 'flex',
        flexWrap: "wrap",
        justifyContent: "space-around",
        backgroundColor:"#37474f",
        color: "#eceff1",
        marginBottom: 20,
        marginLeft: 40,
        marginRight: 40,
        maxWidth: 175,
    },
    action: {
        display: "flex",
        alignSelf: "flex-end",
    },
    root: {
        display: 'flex',
        flexWrap: "wrap",
    },
}));

export default function Homework(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Card className={classes.card} elevation={4}>
                <CardContent>
                    <Typography variant="h5">
                        {props.name}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {props.sub}
                    </Typography>
                </CardContent>
                <CardActions className={classes.action}>
                    <Link href={props.url} target={"_blank"}>
                        <Button size="small" variant={"contained"} style={{backgroundColor:"#546e7a", color: "#eceff1"}}>
                            View on Netlify
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </div>
    );
}