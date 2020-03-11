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
import Resume from "./Components/ResumeDir/Resume";
import Homework from "./Components/Homework/Home";
import Music from "./Components/AboutMe/Music";
import Movies from "./Components/AboutMe/Movies";
import Games from "./Components/AboutMe/Games";
import mediaHome from "./Components/AboutMe/mediaHome";
import Contact from "./Components/Contact";
import Home from './Components/Home';

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
        backgroundColor: "#263238",
        top: 0,
        zIndex: 99,
        position: "fixed",
        width: "100%"
    },
    footercontainer: {
        backgroundColor: "#263238",
        color: "white",
        display: "flex",
    },
    footer: {
        backgroundColor: "#263238",
        color: "white",
        display: "flex",
        marginTop: 20,
        marginBottom: 20
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
                          </Typography>

                          <Link to={"/"} style={{textDecoration: "none"}}>
                              <Button variant={"contained"} className={classes.menuButton}>
                                  Home
                              </Button>
                          </Link>

                          <Link to={"/about"} style={{textDecoration: "none"}}>
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
                                  Relevant Work
                              </Button>
                          </Link>

                          {/*<Link to={"/contact_me"} style={{textDecoration: "none"}}>*/}
                          {/*    <Button variant={"contained"} className={classes.menuButton}>*/}
                          {/*        Contact Me*/}
                          {/*    </Button>*/}
                          {/*</Link>*/}
                      </Toolbar>
                  </AppBar>
              </nav>
              <Container maxWidth={"md"} style={{ backgroundColor: "#212121", minHeight: '95vh', paddingBottom: 20, paddingTop: 65 }}>
                  <Switch>
                      <Route path={"/"}  exact component={Home} />
                      <Route path={"/about"} component={mediaHome}/>
                      <Route path={"/resume"} component={Resume} />
                      <Route path={"/homework"} component={Homework} />
                      <Route path={"/contact_me"} component={Contact} />
                  </Switch>
              </Container>
          </div>
          <div className={classes.footercontainer}>
              <Container className={classes.footer} maxWidth={"md"}>
                  <div style={{width: "70%"}}>
                      {/*<Link to={"/contact_me"} style={{textDecoration: "none", color: "white"}}>*/}
                      {/*    Contact Me!*/}
                      {/*</Link>*/}
                  </div>
                  <div style={{marginTop: 15}}>
                      Follow Me!
                  </div>
                  <div style={{marginLeft:"auto", marginRight:0}}>
                      <IconButton aria-label="GitHub" href="https://www.instagram.com/https.noah99/" target={"_blank"}>
                          <InstagramIcon style={{color: "#e8eaf6"}}/>
                      </IconButton>

                      <IconButton aria-label="GitHub" href="https://www.facebook.com/noah.furniss.73" target={"_blank"}>
                          <FacebookIcon style={{color: "#e8eaf6"}}/>
                      </IconButton>

                      <IconButton aria-label="GitHub" href="https://www.linkedin.com/in/noah-furniss-61a682163/" target={"_blank"}>
                          <LinkedInIcon style={{color: "#e8eaf6"}}/>
                      </IconButton>

                      <IconButton aria-label="GitHub" href="https://github.com/spideyguy99" target={"_blank"}>
                          <GitHubIcon style={{color: "#e8eaf6"}}/>
                      </IconButton>
                  </div>
              </Container>
          </div>
      </Router>
  );
}

export default App;
