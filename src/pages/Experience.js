import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';

import '../styles/Experience.css'

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement className="vertical-time-element--education" date="2002-2010" iconStyle={{background:"#4C871F", color: "#fff"}}
        icon={<MilitaryTechIcon />} >
        <h3 className="vertical-time-element-title">United States Marines Corps-Field Radio Operator </h3><h4 className="vertical-timeline-element-subtitle">O'ahu Hawaii
        </h4>

        <p>Honorably Discharge from US Marines in 2006. And served 4 years inactive duty. </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-time-element--education" date="2016-2019" iconStyle={{background:"#3e497a", color: "#fff"}}
        icon={<SchoolIcon/>}
        >
        <h3 className="vertical-time-element-title">Suny Broome Community College </h3>
        <h4 className="vertical-timeline-element-subtitle">Binghamton, New York
        </h4>
        <p>  Acquired 2 Associate Degree's Health Science and Physical Therapist Assistant</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-time-element--education" date="2020-2022" iconStyle={{background:"#e9d35b", color: "#fff"}}
        icon={<WorkHistoryIcon/>}
        >
        <h3 className="vertical-time-element-title">Allstate Insurance Sale Agent</h3>
        <h4 className="vertical-timeline-element-subtitle">Binghamton, New York
        </h4>
        <p>Certificated license insurance agent</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-time-element--education" date="2022-2023" iconStyle={{background:"#3e497a", color: "#fff"}}
        icon={<SchoolIcon/>}
        >
        <h3 className="vertical-time-element-title">Fullstack Academy</h3>
        <h4 className="vertical-timeline-element-subtitle">New York , New York
        </h4>
        <p>Certificate of Completion. With 2 Fullstack projects an E-commerce web-site and social media web-site</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
