import React, { Component } from 'react';
import logo from '../assets/header_logo.png';

class Dashboard extends Component {
    constructor () {
        super();
        this.state = {
            userInput: ''
        }
    }

    render () {
        return (
            <div className="dashboard">
              <div className="header">
                <div className="header-wrapper panel2">
                  <div><img src={logo} alt="logo"/></div>
                  <div><div className="title"><strong>Houser</strong> Dashboard</div></div>
                  <button className="logout">Logout</button>
                </div>
              </div>
              <div className="main-content panel2">
                <div>
                  <button className="add-new-property-button">Add new property</button>
                  <div className="list-properties">List properties with "desired rent" greater than: $ 
                      <input />
                      <button className="filter-button">Filter</button>
                      <button className="reset-button">Reset</button>
                  </div>
                  <div className="home-listings">
                    <h3>Home Listings</h3>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}

export default Dashboard;