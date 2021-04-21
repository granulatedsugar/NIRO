import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from '../Navbar';
import Hero from '../Hero';

export class Main  extends Component {

    constructor(props) {
        super(props);
        this.state = {
          isNavOpen: false,
        };
        this.toggleNav = this.toggleNav.bind(this);
      }
    
      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen,
        });
      }

    render() {
        return (
            <div>
                <Navbar />
                <Hero />
            </div>
        )
    }
}

export default Main;