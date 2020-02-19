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
        backgroundColor:"#263238",
        color: "#eceff1",
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        maxWidth: 200,
    },
    action: {
        display: "flex",
        alignSelf: "flex-end",
    },
    root: {
        flexGrow: 1,
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
                    <Link href={props.url}>
                        <Button size="small" variant={"contained"} style={{backgroundColor:"#455a64", color: "#eceff1"}}>
                            View on Netlify
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </div>
    );
}