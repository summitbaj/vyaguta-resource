;(function () {
    'use strict';

    //React dependencies
    var React = require('react');

    //utils
    var formValidator = require('../../../utils/formValidator');

    var ReasonModal = React.createClass({
        updateProject: function(){
            var reason = this.refs.reason.value;
            this.props.updateProject(reason);
        },

        render: function () {
            return (
                <div className="modal fade" id="addReason" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span
                                    aria-hidden="true">&times;</span></button>
                                <div className="modal-title">Please enter appropriate reason for editing this project *</div>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                        <textarea name="reason" ref="reason" id="reason"
                                                  placeholder=""
                                                  className="form-control" rows="4" onBlur={formValidator.validateField}
                                                  onFocus={formValidator.removeFeedback.bind(null, 'reason')}></textarea>
                                    <span className="help-block" ref="availableMessage"></span>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-sm btn-success" onClick={this.updateProject}
                                        id="save-btn"><i
                                    className="fa fa-angle-right"></i>Update
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    });

    module.exports = ReasonModal;

})();