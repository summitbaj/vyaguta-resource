;(function () {
    'use strict';

    //React Dependencies
    var React = require('react');
    var Link = require('react-router').Link;

    //constants
    var urlConstant = require('../../constants/urlConstant');

    var InProgressProjectRow = React.createClass({
        render: function () {
            var project = this.props.project;
            var id = project.id;

            var style = {
                background: project.projectStatus && project.projectStatus.color
            };

            return (
                <tr>
                    <td>{this.props.index}</td>
                    <td><Link
                        to={urlConstant.PROJECTS.INDEX + '/' + id +  urlConstant.PROJECTS.VIEW}>{project.title}</Link>
                    </td>
                    <td>{project.projectType && project.projectType.title}</td>
                    <td><span className="label text-uppercase"
                              style={style}>{project.projectStatus && project.projectStatus.title}</span></td>
                    <td className="text-center">
                        <div className="btn-group"><Link to={urlConstant.PROJECTS.INDEX + '/' + id}
                                                         data-toggle="tooltip"
                                                         title="Edit"
                                                         className="btn btn-sm btn-default"><i
                            className="fa fa-pencil"></i></Link>
                            <Link to={urlConstant.PROJECTS.INDEX + '/' + id +  urlConstant.PROJECTS.VIEW}
                                  data-toggle="tooltip"
                                  title="View Details"
                                  className="btn btn-sm btn-default"><i
                                className="glyphicon glyphicon-list-alt"></i></Link>
                        </div>
                    </td>
                </tr>
            );
        }
    });
    module.exports = InProgressProjectRow;
})();