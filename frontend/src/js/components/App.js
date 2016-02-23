'use strict';
var $ = require('jquery'),
    React = require('react'),
    ReactDOM = require('react-dom'),
    Sidebar = require('./common/sidebar/Sidebar'),
    Header = require('./common/header/Header'),
    Footer = require('./common/footer/Footer'),
    routes = require('./../routes.js');

var App = React.createClass({
    render: function () {
        return (
            <div id="page-container" className="sidebar-partial sidebar-visible-lg">
                <Sidebar/>
                <div id="main-container">
                    <Header/>
                    {this.props.children}
                    <Footer/>
                </div>
            </div>
        )
    }
});

module.exports = App;