import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { connect } from 'react-redux';
import { fetchHero } from '../../redux/ActionCreators';
import HomePage from '../../pages/HomePage';
import AboutPage from '../../pages/AboutPage';
import WebPage from '../../pages/WebPage';


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
      title: 'Nikko Roque',
      // Navbar state
      headerlinks: [
        { title: 'About', path: '/' },
        { title: 'Contact', path: '/' }
      ],
      // Page Headers Info
      about: {
        title: 'A little something about ME.',
        background: '<about />'
      },
      web: {
        title: 'Web App',
        background: '<web />'
      }
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
          />
        );
      }

      const Web = () => {
        return (
          <WebPage
            background={this.state.web.background}
            title={this.state.web.title}
          />
        );
      }
      
        return (
            <div>
                <Navbar />
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/web" component={Web} />
                  </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));