;(function () {
    'use strict';

    //React Dependencies
    var React = require('react');

    //component
    var BookedResourceItem = require('./BookedResourceItem');

    //util
    var dashboardUtil = require('../../../util/dashboardUtil');

    var BookedResource = React.createClass({
        renderResourceByProjectType: function (total, key) {
            return (<BookedResourceItem resource={this.props.resource[key]} key={key} total={total}/>);
        },

        render: function () {
            var totalResource = dashboardUtil.calculateTotalResource(this.props.resource);
            return (
                <div className="row">
                    <div className="col-lg-12">
                        <div className="widget">
                            <div className="widget-extra widget-custom">
                                <div className="widget-title">Booked Resources</div>
                            </div>
                            <div className="widget-extra-full">
                                <div className="row">
                                    {Object.keys(this.props.resource).map(this.renderResourceByProjectType.bind(null, totalResource))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    });
    module.exports = BookedResource;
})();