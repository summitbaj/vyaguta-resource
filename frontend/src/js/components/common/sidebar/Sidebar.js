;(function () {
    'use strict';

    var React = require('react'),
        ReactDOM = require('react-dom'),
        ReactRouter = require('react-router'),
        Link = ReactRouter.Link;

    //constants
    var urlConstant = require('../../../constants/urlConstant');

    var Sidebar = React.createClass({
        render: function () {
            return (
                <div id="sidebar">
                    <div className="sidebar-scroll">
                        <div className="sidebar-content">
                            <h1><Link to="/" className="sidebar-brand">Leapfrog Management System</Link> </h1>
                            <ul className="sidebar-nav">
                                <li> <Link to="/" className="sidebar-nav-menu"><i className="fa fa-dashboard fa-fw"></i><span className="xn-text">Dashboard</span> </Link></li>
                                <li> <Link to={urlConstant.BUDGET_TYPES.INDEX} className="sidebar-nav-menu"><i className="fa fa-dashboard fa-fw"></i><span className="xn-text">Budget Types</span> </Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
    });

    module.exports = Sidebar
})();
