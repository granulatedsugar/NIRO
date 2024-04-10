import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import HomePage from "../../pages/HomePage";
import AboutPage from "../../pages/AboutPage";
import WebPage from "../../pages/WebPage";
import MobilePage from "../../pages/MobilePage";
import DesignPage from "../../pages/DesignPage";
import ContactPage from "../../pages/ContactPage";
import BiPage from "../../pages/BiPage";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "NIRO",
      // Page Headers Info
      home: {
        title: "Hey there, I'm Nikko",
        subTitle: "",
        background: "<root />",
        buttonLabel: "My Journey",
      },
      about: {
        title: "Check out my journey...",
        background: "<about />",
      },
      businessIntelligence: {
        title: "Business Intelligence",
        subTitle: "Work Projects",
      },
      web: {
        title: "Java & Web Applications",
        subTitle: "Projects",
      },
      mobile: {
        title: "Mobile Application",
        subTitle: "Personal Projects",
      },
      design: {
        title: "Web Design",
        subTitle: "Contract Projects",
      },
      contact: {
        title: "Let's Talk",
      },
      webapp: [
        {
          id: 0,
          link: "https://www.triacore.com",
          title: "Triacore",
          category: "React | Styled Components",
          background: require("../../assets/images/web-app/triacore.png")
            .default,
        },
        {
          id: 1,
          link: "https://vellora.com.ph/",
          title: "Vellora Jewelry",
          category: "React | WooCommerce | Wordpress | MySQL",
          background: require("../../assets/images/web-app/e-commerce.png")
            .default,
        },
        {
          id: 2,
          link: "https://granulatedsugar.github.io/FIVE/#",
          title: "MotorPH Enterprise System",
          category: "Java | JavaFX | MySQL | CSS",
          background: require("../../assets/images/web-app/exorp.png").default,
        },
      ],
      mobObj: [
        {
          id: 0,
          lightBg: true,
          lightText: false,
          lightTextDesc: false,
          topLine: "React Native",
          headline: "Tesla Clone",
          description: "Landing Page",
          buttonLabel: "SOURCE CODE",
          link: "https://github.com/granulatedsugar/tesla-clone",
          imgStart: false,
          img: require("../../assets/images/1.png").default,
          alt: "Tesla-iPhone-Mock",
          dark: false,
          primary: false,
          darkText: true,
        },
        {
          id: 1,
          lightBg: false,
          lightText: true,
          lightTextDesc: true,
          topLine: "React Native | TypeScript",
          headline: "WassApp",
          description: "Mobile App Chat Platform",
          buttonLabel: "SOURCE CODE",
          link: "https://github.com/granulatedsugar/WassApp",
          imgStart: true,
          img: require("../../assets/images/2.png").default,
          alt: "WassApp-iPhone-Mock",
          dark: true,
          primary: true,
          darkText: false,
        },
        {
          id: 2,
          lightBg: true,
          lightText: false,
          lightTextDesc: false,
          topLine: "React Native",
          headline: "McDonalds Clone",
          description: "Simple Menu",
          buttonLabel: "SOURCE CODE",
          link: "https://github.com/granulatedsugar/mcdonalds-basic-menu",
          imgStart: false,
          img: require("../../assets/images/3.png").default,
          alt: "McDo-iPhone-Mock",
          dark: false,
          primary: false,
          darkText: true,
        },
      ],
    };
  }

  render() {
    const Home = () => {
      return (
        <HomePage
          background={this.state.home.background}
          title={this.state.home.title}
          subTitle={this.state.home.subTitle}
          buttonLabel={this.state.home.buttonLabel}
        />
      );
    };

    const About = () => {
      return (
        <AboutPage
          background={this.state.about.background}
          title={this.state.about.title}
          subTitle={this.state.about.subTitle}
          buttonLabel={this.state.about.buttonLabel}
          id={this.state.about.id}
        />
      );
    };

    const BusinessIntelligence = () => {
      return (
        <BiPage
          title={this.state.businessIntelligence.title}
          subTitle={this.state.businessIntelligence.subTitle}
        />
      );
    };

    const Web = () => {
      return (
        <WebPage
          title={this.state.web.title}
          subTitle={this.state.web.subTitle}
          webApp={this.state.webapp}
        />
      );
    };

    const Mobile = () => {
      return (
        <MobilePage
          title={this.state.mobile.title}
          subTitle={this.state.mobile.subTitle}
          mobObj={this.state.mobObj}
        />
      );
    };

    const Design = () => {
      return (
        <DesignPage
          title={this.state.design.title}
          subTitle={this.state.design.subTitle}
        />
      );
    };

    const Contact = () => {
      return (
        <ContactPage
          title={this.state.contact.title}
          subTitle={this.state.contact.subTitle}
        />
      );
    };

    return (
      <div>
        <Navbar title={this.state.title} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route
            exact
            path="/businessIntelligence"
            component={BusinessIntelligence}
          />
          <Route exact path="/java-web" component={Web} />
          <Route exact path="/mobile" component={Mobile} />
          <Route exact path="/design" component={Design} />
          <Route exact path="/contact" component={Contact} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Main);
