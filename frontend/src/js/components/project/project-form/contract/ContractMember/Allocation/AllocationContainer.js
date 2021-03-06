/**
 * Created by
 * Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 4/1/16.
 */

;(function () {

    //React and redux dependencies
    var React = require('react');

    //components
    var Allocation = require('./Allocation');

    var AllocationContainer = React.createClass({
        renderAllocation: function (key) {
            return (
                <Allocation key={key}
                            index={key}
                            allocation={this.props.allocations[key]}
                            actions={this.props.actions}
                            projectRoles={this.props.projectRoles}
                            totalAllocations={this.props.allocations.length}
                            memberIndex={this.props.memberIndex}/>
            );
        },

        addAllocation: function (event) {
            event.preventDefault();
            this.props.actions.addAllocation();
        },

        render: function () {
            return (
                <div className="panel-group custom-accordion" id="accordion" role="tablist"
                     aria-multiselectable="true">

                    {this.props.allocations && Object.keys(this.props.allocations).map(this.renderAllocation)}

                    <div className="btn-block padding-v-10 clearfix">
                        <a className="btn btn-xs btn-default"
                           href="#"
                           onClick={this.addAllocation}>
                            <i className="fa fa-plus"></i>Add Another Allocation
                        </a>
                    </div>
                </div>
            );
        }
    });

    module.exports = AllocationContainer;

})();