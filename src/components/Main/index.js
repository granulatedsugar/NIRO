import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { connect } from 'react-redux';
import { fetchHero } from '../../redux/ActionCreators';
import HomePage from '../../pages/HomePage';
import AboutPage from '../../pages/AboutPage';
import WebPage from '../../pages/WebPage';
import MobilePage from '../../pages/MobilePage';
import DesignPage from '../../pages/DesignPage';
import ContactPage from '../../pages/ContactPage';


const mapStateToProps = state => {
  return {
    hero: state.hero
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchHero: () => dispatch(fetchHero())
});

class Main  extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'NIRO',
      // Page Headers Info
      about: {
        title: 'Check out my story...',
        background: '<about />',
        buttonLabel: 'Timeline',
        id: 'timeline'
      },
      web: {
        title: 'Web Application',
        subTitle: 'Projects'
      },
      mobile: {
        title: 'Mobile Application',
        subTitle: 'Projects'
      },
      design: {
        title: 'Web Design',
        subTitle: 'Projects'
      },
      contact: {
        title: 'Let\'s Talk',
      },
      webapp: [
        {
          id: 0,
          link: 'https://www.google.com',
          title: 'Web App One',
          category: 'Web App',
          background:'https://images.unsplash.com/photo-1556680262-9990363a3e6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
        },
        {
          id: 1,
          link: 'https://www.google.com',
          title: 'Web App Two',
          category: 'Web App',
          background:'https://images.unsplash.com/photo-1556680262-9990363a3e6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
        },
        {
          id: 2,
          link: 'https://www.google.com',
          title: 'Web App Three',
          category: 'Web App',
          background:'https://images.unsplash.com/photo-1556680262-9990363a3e6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
        },
        {
          id: 3,
          link: 'https://www.google.com',
          title: 'Web App Four',
          category: 'Web App',
          background:'https://images.unsplash.com/photo-1556680262-9990363a3e6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
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
          description:
            "Landing Page",
          buttonLabel: "SOURCE CODE",
          imgStart: false,
          img: require("../../assets/images/1.png").default,
          alt: "Phone",
          dark: false,
          primary: false,
          darkText: true,
        },
          {
          id: 1,
          lightBg: false,
          lightText: true,
          lightTextDesc: true,
          topLine: "React Native",
          headline: "McDonalds Clone",
          description:
            "Simple Menu",
          buttonLabel: "SOURCE CODE",
          imgStart: true,
          img: require("../../assets/images/2.png").default,
          alt: "Phone",
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
          headline: "Pending",
          description:
            "Landing Page",
          buttonLabel: "SOURCE CODE",
          imgStart: false,
          img: require("../../assets/images/3.png").default,
          alt: "Phone",
          dark: false,
          primary: false,
          darkText: true,
        }
      ] 
    }
  }

    componentDidMount() {
      this.props.fetchHero();
    }

    render() {

      const Home = () => {
        return (
          <HomePage
                title={this.props.hero.hero.title}
                subTitle={this.props.hero.hero.subTitle}
                // hero={this.props.hero.hero.filter((hero) => hero.assign)[0]}
                heroLoading={this.props.hero.isLoading}
                heroErrMess={this.props.hero.errMess} 
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
      }

      const Web = () => {
        return (
          <WebPage
            title={this.state.web.title}
            subTitle={this.state.web.subTitle}
            webApp={this.state.webapp}
          />
        );
      }

      const Mobile = () => {
        return (
          <MobilePage
            title={this.state.mobile.title}
            subTitle={this.state.mobile.subTitle}
            mobObj={this.state.mobObj}
          />
        );
      }

      const Design = () => {
        return (
          <DesignPage
            title={this.state.design.title}
            subTitle={this.state.design.subTitle}
          />
        );
      }

      const Contact = () => {
        return (
          <ContactPage
            title={this.state.contact.title}
            subTitle={this.state.contact.subTitle}
          />
        );
      }
      
        return (
            <div>
                <Navbar title={this.state.title}/>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/web" component={Web} />
                    <Route exact path="/mobile" component={Mobile} />
                    <Route exact path="/design" component={Design} />
                    <Route exact path="/contact" component={Contact} />
                  </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));