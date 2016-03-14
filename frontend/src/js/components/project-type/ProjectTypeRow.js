;(function () {

    //React dependencies
    var React = require('react');
    var Link = require('react-router').Link;

    //constants
    var urlConstant = require('../../constants/urlConstant');

    var ProjectTypeRow = React.createClass({
        render: function () {
            var id = this.props.projectType.id;
            return (
                <tr>
                    <td>{++this.props.index}</td>
                    <td>{this.props.projectType.title}</td>
                    <td className="text-center">
                        <div className="btn-group"><Link to={urlConstant.PROJECT_TYPES.EDIT + id} data-toggle="tooltip"
                                                         title="Edit"
                                                         className="btn btn-sm btn-default"><i
                            className="fa fa-pencil"></i></Link>
                            <button
                                onClick={this.props.deleteProjectType.bind(null, id)} data-toggle="tooltip"
                                title="Delete"
                                className="btn btn-sm btn-default"><i className="glyphicon glyphicon-trash"></i>
                            </button>
                        </div>
                    </td>
                </tr>
            );
        }
    });

    module.exports = ProjectTypeRow;

})();