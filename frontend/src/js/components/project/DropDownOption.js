/**
 * Created by
 * Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 2/25/16.
 */

;(function () {
    var React = require('react');

    var DropDownOption = React.createClass({
        render: function () {
            return (
                <option value={this.props.entity.title}>{this.props.entity.title}</option>
            )
        }
    });

    module.exports = DropDownOption;
})();