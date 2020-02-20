import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";

//material ui imports
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Container from '@material-ui/core/Container';

//page imports
import Resume from "./Components/Resume";
import Index from "./Components/AboutMe/Index";
import Homework from "./Components/Homework/Home";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#121212'
    },
    menuButton: {
        marginRight: theme.spacing(2),
        textDecoration: "none",
        backgroundColor: "#e8eaf6"
    },
    title: {
        flexGrow: 1,
    },
    appbar: {
        backgroundColor: "#263238"
    }
}));

function App() {

    const classes = useStyles();

  return (
      <Router>
          <div className={classes.root}>
              <nav>
                  <AppBar position={"static"} className={classes.appbar}>
                      <Toolbar>
                          <Typography variant={"h4"} className={classes.title}>
                              <Link to={"/"} style={{color: "white", textDecoration: "none"}}>
                                  My Portfolio
                              </Link>
                              <IconButton aria-label="GitHub" href="https://www.instagram.com/https.noah99/" target={"_blank"}>
                                  <InstagramIcon style={{color: "#e8eaf6"}}/>
                              </IconButton>

                              <IconButton aria-label="GitHub" href="https://www.facebook.com/noah.furniss.73" target={"_blank"}>
                                  <FacebookIcon style={{color: "#e8eaf6"}}/>
                              </IconButton>

                              <IconButton aria-label="GitHub" href="https://www.linkedin.com/in/noah-furniss-61a682163/" target={"_blank"}>
                                  <LinkedInIcon style={{color: "#e8eaf6"}}/>
                              </IconButton>
                          </Typography>

                          <Link to={"/"} style={{textDecoration: "none"}}>
                              <Button variant={"contained"} className={classes.menuButton}>
                                  About Me
                              </Button>
                          </Link>

                          <Link to={"/resume"} style={{textDecoration: "none"}}>
                              <Button variant={"contained"} className={classes.menuButton}>
                                  Resume
                              </Button>
                          </Link>

                          <Link to={"/homework"} style={{textDecoration: "none"}}>
                              <Button variant={"contained"} className={classes.menuButton}>
                                  Course Work
                              </Button>
                          </Link>

                          <IconButton aria-label="GitHub" href="https://github.com/spideyguy99" target={"_blank"}>
                              <GitHubIcon style={{color: "#e8eaf6"}}/>
                          </IconButton>

                      </Toolbar>
                  </AppBar>
              </nav>
              <Container maxWidth={"md"} style={{ backgroundColor: "#212121", minHeight: '100vh' }}>
                  <Switch>
                      <Route path={"/"} component={Index} exact />
                      <Route path={"/resume"} component={Resume} />
                      <Route path={"/homework"} component={Homework} />
                  </Switch>
              </Container>
          </div>
      </Router>
  );
}

export default App;
