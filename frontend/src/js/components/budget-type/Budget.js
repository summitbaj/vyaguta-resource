/**
 * Created by pratishshr on 2/15/16.
 */

var React = require('react');
var Link = require('react-router').Link;
var Budget = React.createClass({
    render: function () {
        return (
            <tr>
                <td>{this.props.budgetType.title}</td>
                <td className="text-center">
                    <div className="btn-group"><Link to={'/budgetTypes/edit/'+ this.props.budgetType.id}
                                                     data-toggle="tooltip"
                                                     title="Edit"
                                                     className="btn btn-sm btn-default"><i
                        className="fa fa-pencil"></i></Link>
                        <button
                            className="btn btn-sm btn-default"
                            onClick={this.props.deleteBudgetType.bind(null, this.props.budgetType.id)}><i
                            className="glyphicon glyphicon-trash"></i></button>
                    </div>
                </td>
            </tr>
        )
    }
});

module.exports = Budget;