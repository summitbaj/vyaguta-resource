;(function () {
    'use strict';

    //React Dependencies
    var React = require('react');
    var Link = require('react-router').Link;

    //constants
    var urlConstant = require('../../../constants/urlConstants');

    var FlaggedProjectRow = React.createClass({
        render: function () {
            var overdueProject = this.props.overdueProject;
            var style = {
                background: overdueProject.projectStatusColor
            };
            return (
                <li className="list-group-item">
                       <span className="list-group-project"><Link
                           to={urlConstant.PROJECTS.INDEX + '/'  +  overdueProject.projectId + urlConstant.PROJECTS.VIEW}>{overdueProject.projectTitle}</Link>
                    </span>
                    <span className="label text-uppercase"
                          style={style}>{overdueProject.projectStatus}</span>
                    <span>{overdueProject.endDate}</span>
                </li>
            );
        }
    });
    module.exports = FlaggedProjectRow;
})();