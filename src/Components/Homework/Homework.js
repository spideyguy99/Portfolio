import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme =>({
    card: {
        display: 'flex',
        width: 313,
        height: 105,
        borderRadius: 13,
        boxShadow: '1px 2px 4px 10 rgba(138, 148, 159, 0.2)',
        backgroundColor:"#607d8b",
    },
    action: {
        alignSelf: "flex-end",
    },
    root: {
        flexGrow: 1
    }
}));

export default function Homework(props) {
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={3} className={classes.root}>
                <Grid item>

                    <Card className={classes.card}>
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
                                <Button size="small" variant={"contained"} style={{backgroundColor:"#263238", color: "#eceff1"}}>
                                    View on Netlify
                                </Button>
                            </Link>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}