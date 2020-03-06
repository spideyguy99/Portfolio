import React from "react";
import Paper from '@material-ui/core/Paper';
import {makeStyles} from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles(theme =>({
    cardpaper: {
        backgroundColor: "#37474f",
        color: "#eceff1",
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        padding: 8,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 5
    },
    paperinpaper: {
        backgroundColor: "#546e7a",
        color: "#eceff1",
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 1,
        paddingBottom: 12,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 20,
    },
    imgInCard: {
        width:"95%",
        borderRadius: 5,
        border: "5px solid #37474f",
        marginLeft: 5,
        justifyContent: "space-around"
    }
}));

export default function Resume() {

    const classes = useStyles();

    const UltTeam = require('./Images/ultTeam.JPG');

    const BaseLine = require('./Images/bassline.JPG');

    const Paintball = require('./Images/paintball.JPG');

    const IUPUI = require('./Images/iupui.png');

    const IUK = require('./Images/iukokomo.png');

    const FHS = require('./Images/fhs.png');

    return(
        <div>
            <div style={{backgroundColor: "#212121", height: 20}}/>
            <Paper className={classes.cardpaper} style={{width: "50%", margin: "0 auto", marginBottom: 20}} elevation={10}>
                <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
                    <h1>
                        My Resume
                    </h1>
                </div>
            </Paper>
            <Paper className={classes.cardpaper}>
                <h2>
                    My Objective as a Professional Web Developer
                </h2>
                <p>
                    To constantly expand my knowledge and proficiency with any and all tools that allow me to create and maintain professional websites.
                </p>
            </Paper>

        <Paper className={classes.cardpaper} style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
            <h3 style={{width: "100%"}}>
                Skills
            </h3>
            <Paper className={classes.paperinpaper} elevation={6} style={{width: 350}}>
                <h4>Programming Languages</h4>
                <ul>
                    <li>JavaScript</li>
                    <ul>
                        <li>Vue</li>
                        <li>JQuery</li>
                    </ul>
                    <li>React JS</li>
                    <ul>
                        <li>Material UI</li>
                        <li>Redux</li>
                        <li>Firebase</li>
                    </ul>
                    <li>React Native</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Java</li>
                    <li>C++</li>
                    <li>Visual Basic</li>
                </ul>
            </Paper>
            <Paper className={classes.paperinpaper} elevation={6} style={{width: 350}}>
            <h4>Software</h4>
            <ul>
                <li>Microsoft Office Suite</li>
                <ul>
                    <li>Word</li>
                    <li>Powerpoint</li>
                    <li>Excel</li>
                </ul>
                <li>Adobe Suite</li>
                <ul>
                    <li>Illustrator</li>
                    <li>Photoshop</li>
                    <li>Premiere</li>
                </ul>
                <li>GitHub</li>
                <li>Netlify</li>
                <li>Google Firebase</li>
            </ul>
        </Paper>
            <Paper className={classes.paperinpaper} elevation={6} style={{width: 350}}>
                <h4>Operating Systems</h4>
                <ul>
                    <li>Windows 10</li>
                    <li>MacOS</li>
                    <li>Linux (Ubuntu)</li>
                </ul>
            </Paper>
            <Paper className={classes.paperinpaper} elevation={6} style={{width: 350}}>
                <h4>IDE's</h4>
                <ul>
                    <li>WebStorm</li>
                    <li>Codepen</li>
                    <li>Brackets</li>
                    <li>Visual Studio Code</li>
                </ul>
            </Paper>
        </Paper>
            <Paper className={classes.cardpaper}>
                <h3>
                    Work Experience
                </h3>
                <Paper style={{display: "flex"}} className={classes.paperinpaper} elevation={6}>
                    <div style={{width: "50%"}}>
                        <h4>IUPUI: University Information Technology Services</h4>
                        <p>Consultant Supervisor</p>
                    </div>
                    <div style={{width: "50%"}}>
                        <ul>
                            <li>Trained and oversaw constultants</li>
                            <li>Assisted with both First and Second Tier IT Support for IUPUI Students</li>
                        </ul>
                    </div>
                </Paper>
                <Paper style={{display: "flex"}} className={classes.paperinpaper} elevation={6}>
                    <div style={{width: "50%"}}>
                        <h4>IUPUI: School of Engineering and Technology</h4>
                        <p>Assistant to the Webmaster</p>
                    </div>
                    <div style={{width: "50%"}}>
                        <ul>
                            <li>Developed Engineering and Technology Website using Trello (Kanban) </li>
                            <li>Built website using Cascade CMS</li>
                        </ul>
                    </div>
                </Paper>
                <Paper style={{display: "flex"}} className={classes.paperinpaper} elevation={6}>
                    <div style={{width: "50%"}}>
                        <h4>IUPUI: Multidisciplinary Undergraduate Research Institute</h4>
                        <p>Researcher / Developer</p>
                    </div>
                    <div style={{width: "50%"}}>
                        <ul>
                            <li>Researched and Developed a mobile application with React Native</li>
                            <li>Present total research findings at CRL Summer Symposium at IUPUI</li>
                            <li>Developed application using a broken version of Agile in a small group setting</li>
                        </ul>
                    </div>
                </Paper>
            </Paper>
            <Paper className={classes.cardpaper}>
                <h3>
                    Education
                </h3>
                <Paper className={classes.paperinpaper} elevation={6} style={{display: "flex"}}>
                    <div style={{width: "100%", margin: 20}}>
                        <h4>
                            Indiana University Purdue University Indianapolis - IUPUI
                        </h4>
                        <p>Purdue School of Engineering and Technology </p>
                        <p>Bachelor of Science Computer and Information Technology</p>
                        <p>Concentration: Web/Application Development</p>
                    </div>
                    <img src={IUPUI} style={{height: 100, margin: 20}}/>
                </Paper>
                <Paper className={classes.paperinpaper} elevation={6} style={{display: "flex"}}>
                    <div style={{width: "100%", margin: 20}}>
                        <h4>
                            Indiana University Kokomo
                        </h4>
                        <p>Indiana University School of Sciences</p>
                        <p>Bachelor of Science New Media</p>
                    </div>
                    <img src={IUK} style={{height: 100, margin: 20}}/>
                </Paper>
                <Paper className={classes.paperinpaper} elevation={6} style={{display: "flex"}}>
                    <div style={{width: "100%", margin: 20}}>
                        <h4>
                            Fishers High School
                        </h4>
                        <p>Core 40</p>
                    </div>
                    <img src={FHS} style={{height: 100, margin: 20}}/>
                </Paper>
            </Paper>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
                   <Paper className={classes.cardpaper} elevation={6} style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
                       <h3 style={{width: "100%"}}>
                           Activites
                       </h3>
                       <Paper className={classes.paperinpaper} style={{width:"44%"}} elevation={6}>
                           <h4>Ultimate Frisbee</h4>
                           <p>Club Vice President</p>
                           <img
                               className={classes.imgInCard}
                               src={UltTeam}
                           />
                       </Paper>
                       <Paper className={classes.paperinpaper} style={{width:"44%"}} elevation={6}>
                           <h4>Marching Band</h4>
                           <p>Percussion: Bass Line & Quads</p>
                           <img
                               className={classes.imgInCard}
                               src={BaseLine}
                           />
                       </Paper>
                       <Paper className={classes.paperinpaper} elevation={6} style={{width:"44%"}}>
                           <h4>Paintball</h4>
                           <p>Just a fun hobby I enjoy... maybe a little too much</p>
                           <img
                               className={classes.imgInCard}
                               src={Paintball}
                           />
                       </Paper>
                   </Paper>
            </div>
        </div>
    );
}