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
  FaUser,
  FaFilePdf,
  FaGoogle,
  FaCertificate,
  FaAddressBook,
  FaPhone,
} from "react-icons/fa";
import "react-vertical-timeline-component/style.min.css";
import { Link, Resume } from "./VerticalTimelineElements";

const Vertical = () => {
  return (
    <VerticalTimeline id="timeline">
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2024"
        iconStyle={{ background: "#222", color: "#fff" }}
        icon={<FaFilePdf />}
      >
        <h3 className="vertical-timeline-element-title">Resume</h3>
        <h4 className="vertical-timeline-element-subtitle">Updated 2024</h4>
        <Resume>
          <Link
            href="https://nikkoroque.com/Resume/Resume-of-Nicholas-Roque.pdf"
            target="_blank"
          >
            <FaFilePdf size={28} />
          </Link>
        </Resume>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Feb 2024"
        iconStyle={{ background: "#222", color: "#fff" }}
        icon={<FaAddressBook />}
      >
        <h3 className="vertical-timeline-element-title">Reference</h3>
        <h4 className="vertical-timeline-element-subtitle"></h4>
        <p>
          Andrew Pomarole
          <br />
          Director of Continuous Improvement <br />
          <FaPhone /> 714.290.8676
        </p>
        <p>
          Paymaun Jafari
          <br />
          System Admin II - Supervisor <br />
          <FaPhone /> 310.880.7518
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ backgroundColor: "#EEE", color: "#222" }}
        contentArrowStyle={{ borderRight: "7px solid  #EEE" }}
        date="Oct 2022 - CURRENT"
        iconStyle={{ background: "#222", color: "#fff" }}
        icon={<FaBriefcase />}
      >
        <h3 className="vertical-timeline-element-title">
          Senior Manager of Systems & WMS
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Lakeshore Learning Materials
        </h4>
        <p>
          • Successfully spearheaded end-to-end project management for a
          critical system upgrade, overseeing a team of technical professionals,
          coordinating tasks, and ensuring seamless implementation within budget
          and timeline constraints.
        </p>
        <p>
          •Facilitating timely problem/issue identification,
          communication/escalation, troubleshooting and resolution.
        </p>
        <p>
          •Developed multiple Applications, KPI, and data analysis reports with
          but not limited to MSSQL, AWS Redshift, Python, Power Apps, and Power
          Bi.
        </p>
        <h4
          className="vertical-timeline-element-subtitle"
          style={{ paddingTop: "10px" }}
        >
          Projects
        </h4>
        <p>
          • SAP ERP Transition - Played a key role in the testing and
          integration phase of the SAP ERP and Warehouse Management System (WMS)
          transition project.
        </p>
        <p>
          • Supply Chain RD&D Vendor App - Led the development of a vendor
          sample application to track Golden and Reference samples for each
          vendor and item. Oversaw the entire project lifecycle, from
          conceptualization to implementation, ensuring seamless collaboration
          with vendors. The application facilitated efficient sample tracking,
          enhancing quality control processes and ensuring compliance standards.
        </p>
        <p>
          • RF Modernization Initiative - Orchestrated the transition of legacy
          applications from DOS screens to a mobile application interface.
          Implemented cost-saving measures resulting in $2 million company-wide
          savings.
        </p>
        <p>
          • Competitor Data Web Scraping - Led a cross-functional team in
          developing a Python script using Selenium and Beautiful Soup for
          comprehensive competitor product data scraping, enabling strategic
          insights and competitive analysis.
        </p>
        <p>
          • Data Lake - Collaborated with cross-functional teams to develop
          efficient data pipelines and optimize query performance, resulting in
          enhanced data accessibility. Achieved remarkable operational
          improvements, including a 97.8% On-Time Delivery rate within three
          months and a 13% reduction in international lead-times, saving $1.3
          million in transit costs.
        </p>
        <p>
          • Quality Model-Driven Application - Led the development of a data
          model-driven application to track pick errors using Power Apps,
          Dataverse, Power Automate, and Power BI. Managed the project
          lifecycle, fostering collaboration and meeting timelines. Achieved a
          95% increase in quality and saved $1.2 million in Full-Time Equivalent
          (FTE) hours within two months of implementation, highlighting the
          project's significant impact on operational efficiency and financial
          savings.
        </p>
        <p>
          • Warehouse Consolidation Tool - Spearheaded the development of a
          script aimed at capturing base data from a COBOL AS/400 System,
          complemented by an automated business intelligence dashboard utilizing
          Python, SQL, Power Automate, and Power BI technologies.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Feb 2024"
        iconStyle={{ background: "#222", color: "#fff" }}
        icon={<FaGoogle />}
      >
        <h3 className="vertical-timeline-element-title">
          Google Project Management
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Specialization</h4>
        <p>Coursera : Google</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="April 2023"
        iconStyle={{ background: "#222", color: "#fff" }}
        icon={<FaCertificate />}
      >
        <h3 className="vertical-timeline-element-title">
          Lean Six Sigma Black Belt
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Lean & Continuous Improvement
        </h4>
        <p>American Society of Quality</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Jun 2022 - CURRENT"
        iconStyle={{ background: "#222", color: "#fff" }}
        icon={<FaBriefcase />}
      >
        <h3 className="vertical-timeline-element-title">IT Mentor (Online)</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Empower2Free Singapore
        </h4>
        <p>
          Mentoring aspiring developers in mastering programming languages such
          as Java, Python, JavaScript, and HTML through personalized instruction
          and hands-on projects.{" "}
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentArrowStyle={{ borderRight: "7px solid  #EEE" }}
        date="Jan 2020 - CURRENT"
        iconStyle={{ background: "#222", color: "#fff" }}
        icon={<FaBriefcase />}
      >
        <h3 className="vertical-timeline-element-title">
          Java & Web Developer
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Freelance</h4>
        <p>
          • Successfully collaborated in Agile development teams, consistently
          delivering high-quality software solutions on time and within budget
          by leveraging continuous integration and test-driven development (TDD)
          methodologies.
        </p>
        <p>
          •A track record of identifying performance bottlenecks and optimizing
          web applications for speed and scalability, enhancing user experiences
          and reducing load times through code refactoring and performance
          tuning.
        </p>
        <h4
          className="vertical-timeline-element-subtitle"
          style={{ paddingTop: "10px" }}
        >
          Recent Projects
        </h4>
        <p>• MotorPH Enterprise Systems (Java | MySQL)</p>
        <p>
          • Vellora Jewelry E-Commerce Website (Wordpress | React | MySQL |
          WooCommerce)
        </p>
        <p>• iArki Website (Wordpress | React)</p>
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
        <p>Coursera : The Hongkong University of Science and Technology</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Sep 2020 - Dec 2020"
        iconStyle={{ background: "#222", color: "#fff" }}
        icon={<FaPython />}
      >
        <h3 className="vertical-timeline-element-title">Python Programing</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Data Analytics Course
        </h4>
        <p>General Assembly Los Angeles California</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentArrowStyle={{ borderRight: "7px solid  #EEE" }}
        date="Jan 2020 - Oct 2022"
        iconStyle={{ background: "#222", color: "#fff" }}
        icon={<FaBriefcase />}
      >
        <h3 className="vertical-timeline-element-title">
          Operations Specialist - West Coast
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          IKEA North America
        </h4>
        <p>
          • Developed multiple applications and data analysis reports with but
          not limited to SQL, Python, IBM Cognos, and Power Bi.
        </p>
        <p>
          •Overseeing logistical and technical aspect of the supply chain
          business in the West Coast Region.
        </p>
        <p>
          •Responsible for high-performing daily operations and an efficient
          fulfillment network connected to all Store Distribution and Central
          Fulfillment unit types on the market through identifying and acting on
          improvement potentials in operational performance.
        </p>
        <h4
          className="vertical-timeline-element-subtitle"
          style={{ paddingTop: "10px" }}
        >
          Projects
        </h4>
        <p>
          • Spearheaded the Supply Chain On-Time Delivery Project, this
          initiative resulted in a 20% increase in on-time deliveries,
          accompanied by significant cost savings of $4 million and a remarkable
          50% boost in customer satisfaction.
        </p>
        <p>
          • Productivity Tracker - Led the conversion of an Excel productivity
          tracker into an automated business intelligence dashboard utilizing
          IBM Cognos, SQL, Power Automate, and Power BI. Collaborated with
          stakeholders to understand requirements and ensure seamless
          integration
        </p>
        <p>
          • CFF Parcel Increase - Collaborated with Packsize (Box Machine),
          Warehouse Solutions (Conveyor), and Delaney MFG (Carts) teams to
          ensure project success. Developed and executed a comprehensive time
          study to optimize equipment efficiency and system integration.
          Leveraged data insights for informed decision-making, enhancing
          project effectiveness and success.
        </p>
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
        <p>
          • Developed and launched a Yard Management Application for the site to
          increase efficiency and gather concrete data in operations in terms of
          managing the yard inbound and outbound.
        </p>
        <p>
          • Created and launched multiple WMS logic to increase co-worker
          efficiency.
        </p>
        <p>
          • Maintained system tools and applications, creation of SQL queries
          for data analysis, and maintenance of IT Assets
        </p>
        <h4
          className="vertical-timeline-element-subtitle"
          style={{ paddingTop: "10px" }}
        >
          Projects
        </h4>
        <p>• Developed and launched Yard Management Application</p>
        <p>• Created and implemented WMS logic</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Aug 2015 - Jan 2018"
        iconStyle={{ background: "#222", color: "#fff" }}
        icon={<FaBriefcase />}
      >
        <h3 className="vertical-timeline-element-title">IT</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Nestle Bakersfield California
        </h4>
        <p>
          •Testing and modifying systems to ensure that they operate reliably,
          consulting users to ascertain needs, and ensuring that facilities meet
          user or project requirements.
        </p>
        <p>
          •Responsible for implementing and managing security or integrity and
          backup procedures.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Sep 2014 - Sep 2015"
        iconStyle={{ background: "#222", color: "#fff" }}
        icon={<FaBriefcase />}
      >
        <h3 className="vertical-timeline-element-title">
          Geek Squad / Microsoft Specialist
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          BestBuy Bakersfield California
        </h4>
        <p>
          Troubleshoots and fix devices for clients, test and certify devices.
          Engage with customers using selling skills to provide solutions to
          their technology challenges. Leading and motivating the team to make
          sure that we’re hitting our revenues.{" "}
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Sep 2014 - Sep 2015"
        iconStyle={{ background: "#222", color: "#fff" }}
        icon={<FaBriefcase />}
      >
        <h3 className="vertical-timeline-element-title">
          IT Instructor (College)
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          STI College Philippines
        </h4>
        <p>
          Taught courses on Java, Python, and Basic Computer Concepts to
          undergraduate students, employing a variety of teaching methods
          including lectures, workshops, and group projects.{" "}
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2006 - 2009"
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
