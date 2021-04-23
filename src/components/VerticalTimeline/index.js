import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import {
  FaBriefcase,
  FaReact,
  FaPython,
  FaGraduationCap,
  FaSchool,
  FaUser
} from "react-icons/fa";
import "react-vertical-timeline-component/style.min.css";

const Vertical = () => {

  return (
    <VerticalTimeline id="timeline">
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ backgroundColor: "#EEE", color: "#222" }}
        contentArrowStyle={{ borderRight: "7px solid  #EEE" }}
        date="Jan 2020 - PRESENT"
        iconStyle={{ background: "#222", color: "#fff" }}
        icon={<FaBriefcase />}
      >
        <h3 className="vertical-timeline-element-title">Operations Specialist - West Coast</h3>
        <h4 className="vertical-timeline-element-subtitle">IKEA North America</h4>
        <p>
        Responsible for a high performing daily operations and an 
        efficient fulfilment network connected to all Central Fulfillment 
        unit types on the market through identifying and acting on 
        improvement potentials in operational performance.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Jan 2021 - Apr 2021"
        iconStyle={{ background: "#222", color: "#fff" }}
        icon={<FaReact />}
      >
        <h3 className="vertical-timeline-element-title">
        Full-Stack Web Dev with React Specialization
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
        <p>
          Coursera : The Hongkong University of Science and Technology
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Sep 2020 - Dec 2020"
        iconStyle={{ background: "#222", color: "#fff" }}
        icon={<FaPython />}
      >
        <h3 className="vertical-timeline-element-title">Python Programing</h3>
        <h4 className="vertical-timeline-element-subtitle">Course</h4>
        <p>General Assembly Los Angeles California</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Jan 2018 - Jan 2020"
        iconStyle={{ background: "#222", color: "#fff" }}
        icon={<FaBriefcase />}
      >
        <h3 className="vertical-timeline-element-title">IT Superuser</h3>
        <h4 className="vertical-timeline-element-subtitle">
          IKEA Tejon California
        </h4>
        <p>Responsible for maintaining system tools and applications, 
        creation of Oracle SQL queries for data analysis, and 
        maintenance of IT Assets. Developed and launched a Yard 
        Management Application for the site to increase efficiency.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Aug 2015 - Jan 2018"
        iconStyle={{ background: "#222", color: "#fff" }}
        icon={<FaBriefcase />}
      >
        <h3 className="vertical-timeline-element-title">
          IT
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Nestle Bakersfield California</h4>
        <p>Responsible for implementing and managing security or 
        integrity and backup procedures. Testing and modifying 
        systems to ensure that they operate reliably, consulting users 
        to ascertain needs and to ensure that facilities meet user or 
        project requirements.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Sep 2014 - Sep 2015"
        iconStyle={{ background: "#222", color: "#fff" }}
        icon={<FaBriefcase/>}
      >
        <h3 className="vertical-timeline-element-title">
          Geek Squad / Microsoft Specialist
        </h3>
        <h4 className="vertical-timeline-element-subtitle">BestBuy Bakersfield California</h4>
        <p>Troubleshoots and fix devices for clients, test and certify 
        devices. Engage with customers using selling skills to provide 
        solutions to their technology challenges. Leading and 
        motivating the team to make sure that we’re hitting our 
        revenues. </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2009 - 2011"
        iconStyle={{ background: "#222", color: "#fff" }}
        icon={<FaGraduationCap />}
      >
        <h3 className="vertical-timeline-element-title">
          Diploma in Multimedia Arts
        </h3>
        <p>STI College Philippines</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2006 - 2008"
        iconStyle={{ background: "#222", color: "#fff" }}
        icon={<FaSchool />}
      >
        <h3 className="vertical-timeline-element-title">
          Bachelor of Science in Computer Engineering
        </h3>
        <p>Asia Pacific College Philippines</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        iconStyle={{ background: "#222", color: "#fff" }}
        icon={<FaUser />}
      />
    </VerticalTimeline>
  );
};

export default Vertical;
