;(function () {

    //React dependencies
    var React = require('react');
    var Link = require('react-router').Link;

    //components
    var urlConstants = require('../../constants/urlConstants');

    var ProjectStatusRow = React.createClass({
        render: function () {
            var id = this.props.projectStatus.id;

            var style = {
                background: this.props.projectStatus.color
            };

            return (
                <tr>
                    <td>{this.props.index}</td>
                    <td>{this.props.projectStatus.title}</td>
                    <td className="text-center"><span
                        className="label text-uppercase"
                        style={style}>{this.props.projectStatus.title}</span>
                    </td>
                    <td className="text-center">
                        <div className="btn-group"><Link to={urlConstants.PROJECT_STATUS.INDEX + '/' + id} data-toggle="tooltip"
                                                         title="Edit"
                                                         className="btn btn-sm btn-default"><i
                            className="fa fa-pencil"></i></Link>
                            <button
                                onClick={this.props.deleteProjectStatus.bind(null, id)} data-toggle="tooltip"
                                title="Delete"
                                className="btn btn-sm btn-default"><i className="glyphicon glyphicon-trash"></i>
                            </button>
                        </div>
                    </td>
                </tr>
            );
        }
    });

    module.exports = ProjectStatusRow;

})();