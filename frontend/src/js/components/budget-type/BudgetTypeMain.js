/**
 * Created by
 * Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 2/15/16.
 */

;(function () {
    'use strict';

    //React dependencies
    var React = require('react');

    var BudgetTypeMain = React.createClass({
        render: function () {
            return (
                <div id="page-content" className="page-content">
                    {this.props.children}
                </div>
            );
        }
    });

    module.exports = BudgetTypeMain;

})();