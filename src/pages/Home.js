import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Kevin</h2>
        <div className="prompt">
          <p>
            A retired Marine veteran who has always had a passion Tech industry. And is now a Software Engineer turning his dreams in realities by learning and creating projects.
            <LinkedInIcon />
            <GitHubIcon />
            <EmailIcon />
          </p>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, NPM, Material UI, TailwindCSS,
              StyleComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS,SQL, Sequelize, PostgreSql, API</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
