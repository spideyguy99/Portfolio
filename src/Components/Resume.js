import React from "react";
import Paper from '@material-ui/core/Paper';
import {makeStyles} from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Typography from "@material-ui/core/Typography";
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
    }
}));

export default function Resume() {

    const classes = useStyles();

    return(
        <div>
            <div style={{backgroundColor: "#212121", height: 20}}>
            </div>
            <Paper className={classes.cardpaper} style={{width: "50%", margin: "0 auto", marginBottom: 20}} elevation={10}>
                <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
                    <h1>
                        My Resume
                    </h1>
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
            </Paper>
            <Paper className={classes.cardpaper}>
                <h2>
                    My Objective as a Professional Web Developer
                </h2>
                <p>
                    To constantly expand my knowledge and proficiency with any and all tools that allow me to create and maintain professional websites.
                </p>
            </Paper>

            <div style={{display: "flex", flexWrap: "flexWrap", width: "100%"}}>
                <Paper className={classes.cardpaper} style={{width: "50%"}}>
                    <h3>
                        Education
                    </h3>
                    <Paper className={classes.paperinpaper} elevation={6}>
                        <h4>
                            Indiana University Purdue University Indianapolis - IUPUI
                        </h4>
                        <p>Purdue School of Engineering and Technology </p>
                        <p>Bachelor of Science Computer and Information Technology</p>
                        <p>Concentration: Web/Application Development</p>
                    </Paper>
                    <Paper className={classes.paperinpaper} elevation={6}>
                        <h4>
                            Indiana University Kokomo
                        </h4>
                        <p>Indiana University School of Sciences</p>
                        <p>Bachelor of Science New Media</p>
                    </Paper>
                </Paper>
                <Paper className={classes.cardpaper} style={{width: "50%"}}>
                    <h3>Relavant Courses</h3>
                    <Paper className={classes.paperinpaper} elevation={6}>
                        <h4>Commercial Web Development</h4>
                        <p>Advanced React JavaScript</p>
                    </Paper>
                    <Paper className={classes.paperinpaper} elevation={6}>
                        <h4>Website Design</h4>
                        <p>Basic HTML and CSS</p>
                    </Paper>
                    <Paper className={classes.paperinpaper} elevation={6}>
                        <h4>Physical Computing</h4>
                        <p>Processing Javascript, and Robotics</p>
                    </Paper>
                    <Paper className={classes.paperinpaper} elevation={6}>
                        <h4>Information Technology Architectures</h4>
                        <p>Basics of both computing hardware and software</p>
                    </Paper>
                </Paper>
            </div>
            <Paper className={classes.cardpaper}>
                <h3>
                    Work Experience
                </h3>
                <Paper style={{display: "flex"}} className={classes.paperinpaper} elevation={6}>
                    <div style={{width: "75%"}}>
                        <h4>IUPUI: University Information Technology Services</h4>
                        <p>Consultant Supervisor</p>
                    </div>
                        <div>
                            <ul>
                                <li>Trained and oversaw constultants</li>
                                <li>Assisted with both First and Second Tier IT Support for IUPUI Students</li>
                            </ul>
                        </div>
                </Paper>
                <Paper style={{display: "flex"}} className={classes.paperinpaper} elevation={6}>
                    <div style={{width: "75%"}}>
                        <h4>IUPUI: School of Engineering and Technology</h4>
                        <p>Assistant to the Webmaster</p>
                    </div>
                    <div>
                        <ul>
                            <li>Developed Engineering and Technology Website using Trello (Kanban) </li>
                            <li>Built website using Cascade CMS</li>
                        </ul>
                    </div>
                </Paper>
                <Paper style={{display: "flex"}} className={classes.paperinpaper} elevation={6}>
                    <div style={{width: "80%"}}>
                        <h4>IUPUI: Multidisciplinary Undergraduate Research Institute (MURI)</h4>
                        <p>Researcher / Developer</p>
                    </div>
                    <div>
                        <ul>
                            <li>Researched and Developed a mobile application with React Native</li>
                            <li>Present total research findings at CRL Summer Symposium at IUPUI</li>
                            <li>Developed application using a broken version of Agile in a small group setting</li>
                        </ul>
                    </div>
                </Paper>
            </Paper>
            <div style={{display: "flex", flexWrap: "flexWrap"}}>
               <Paper className={classes.cardpaper} style={{width: "50%"}}>
                   <h3>
                       Skills
                   </h3>
                   <Paper className={classes.paperinpaper} elevation={6}>
                       <h4>Programming Languages</h4>
                       <ul>
                           <li>JavaScript (JQuery, Vue)</li>
                           <li>React, React Native</li>
                           <li>HTML</li>
                           <li>CSS</li>
                           <li>Java</li>
                           <li>C++</li>
                           <li>Visual Basic</li>
                       </ul>
                   </Paper>
                   <Paper className={classes.paperinpaper} elevation={6}>
                       <h4>Operating Systems</h4>
                       <ul>
                           <li>Windows 10</li>
                           <li>MacOS</li>
                           <li>Linux (Ubuntu)</li>
                       </ul>
                   </Paper>
                   <Paper className={classes.paperinpaper} elevation={6}>
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
                       </ul>
                   </Paper>
                   <Paper className={classes.paperinpaper} elevation={6}>
                       <h4>IDE's</h4>
                       <ul>
                           <li>WebStorm</li>
                           <li>Codepen</li>
                           <li>Brackets</li>
                           <li>Visual Studio Code</li>
                       </ul>
                   </Paper>
               </Paper>
               <Paper className={classes.cardpaper} style={{width: "50%"}} elevation={6}>
                   <h3>
                       Activites
                   </h3>
                   <Paper className={classes.paperinpaper} elevation={6}>
                       <h4>Ultimate Frisbee</h4>
                       <p>Club Vice President</p>
                   </Paper>
               </Paper>
            </div>
        </div>
    );
}