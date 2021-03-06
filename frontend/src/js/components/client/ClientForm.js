;(function () {
    'use strict';

    //React and Redux dependencies
    var React = require('react');
    var browserHistory = require('react-router').browserHistory;
    var connect = require('react-redux').connect;
    var bindActionCreators = require('redux').bindActionCreators;

    //constants
    var resourceConstants = require('../../constants/resourceConstants');
    var urlConstants = require('../../constants/urlConstants');
    var messageConstants = require('../../constants/messageConstants');

    //components
    var EntityHeader = require('../common/header/EntityHeader');

    //utils
    var formValidator = require('../../utils/formValidator');

    //actions
    var apiActions = require('../../actions/apiActions');
    var crudActions = require('../../actions/crudActions');

    //libraries
    var _ = require('lodash');
    var Toastr = require('toastr');

    var ClientForm = React.createClass({
        getInitialState: function () {
            return {
                autoFocus: true
            }
        },

        componentWillMount: function () {
            if (this.props.params.id) {
                this.setState({autoFocus: false});
                this.props.actions.fetchById(resourceConstants.CLIENTS, this.props.params.id);
            }
        },

        componentWillUnmount: function () {
            this.props.actions.clearSelectedItem(resourceConstants.CLIENTS);
            this.props.actions.apiClearState();
        },

        //called when form is submitted
        saveClient: function (event) {
            event.preventDefault();

            var requiredFields = {
                name: this.refs.name.value,
                email: this.refs.email.value
            };

            if (formValidator.isValid(requiredFields)) {
                this.props.actions.submitForm(resourceConstants.CLIENTS, this.props.selectedItem.clients, this.props.params.id);
            } else {
                Toastr.error(messageConstants.FORM_INVALID_SUBMISSION_MESSAGE, messageConstants.TOASTR_INVALID_HEADER);
            }
        },

        handleChange: function (event) {
            var key = event.target.name;
            var value = event.target.value;

            this.props.actions.updateSelectedItem(resourceConstants.CLIENTS, key, value);
        },

        render: function () {
            return (
                <div>
                    <EntityHeader header={(this.props.params.id)?'Edit Client':'Add Client'}
                                  routes={this.props.routes}
                                  title={this.props.selectedItem.clients.name || 'Client'}
                                  apiState={this.props.apiState}/>
                    <div className="block">
                        <div className="block-title-border">Client Details</div>
                        <form className="form-bordered" method="post" onSubmit={this.saveClient}>
                            <fieldset disabled={this.props.apiState.isRequesting}>
                                <div className="form-group">
                                    <label>Name *</label>
                                    <input type="text" ref="name" name="name"
                                           value={this.props.selectedItem.clients.name}
                                           onChange={this.handleChange}
                                           onBlur={formValidator.validateField}
                                           onFocus={formValidator.removeFeedback.bind(null, 'name')}
                                           placeholder="Client Name"
                                           className="form-control"
                                           id="name"
                                           autoFocus={this.state.autoFocus}
                                    />
                                    <span className="help-block"></span>
                                </div>
                                <div className="form-group clearfix">
                                    <div className="row multiple-element">
                                        <div className="col-md-6 col-lg-4 element">
                                            <label className="control-label">Email Address *</label>
                                            <div>
                                                <input type="text" ref="email" name="email"
                                                       value={this.props.selectedItem.clients.email}
                                                       onChange={this.handleChange}
                                                       onBlur={formValidator.validateField}
                                                       onFocus={formValidator.removeFeedback.bind(null, 'email')}
                                                       placeholder="Email Address"
                                                       className="form-control"
                                                       id="email"
                                                />
                                                <span className="help-block" ref="availableMessage"></span>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 element">
                                            <label className="control-label">Phone Number</label>
                                            <div>
                                                <input type="text" ref="phone" name="phoneNo"
                                                       value={this.props.selectedItem.clients.phoneNo}
                                                       onChange={this.handleChange}
                                                       placeholder="Phone Number"
                                                       className="form-control"
                                                       id="phoneNo"
                                                />
                                            </div>
                                            <span className="help-block" ref="availableMessage"></span>
                                        </div>
                                        <div className="col-md-6 col-lg-4 element">
                                            <label className="control-label">Skype Id</label>
                                            <div>
                                                <input type="text" ref="skype" name="skype"
                                                       value={this.props.selectedItem.clients.skype}
                                                       onChange={this.handleChange}
                                                       placeholder="Skype Id"
                                                       className="form-control"
                                                       id="skype"
                                                />
                                            </div>
                                            <span className="help-block" ref="availableMessage"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Address</label>
                                    <input type="text" ref="address" name="address"
                                           value={this.props.selectedItem.clients.address}
                                           onChange={this.handleChange}
                                           placeholder="Address"
                                           className="form-control"
                                           id="address"
                                    />
                                    <span className="help-block" ref="availableMessage"></span>
                                </div>
                                <div className="form-group">
                                    <label>Description</label>
                                    <textarea name="description" ref="description"
                                              value={this.props.selectedItem.clients.description}
                                              placeholder="Short description about the client."
                                              onChange={this.handleChange}
                                              className="form-control" rows="4" id="description"
                                    ></textarea>
                                    <span className="help-block" ref="availableMessage"></span>

                                </div>
                                <div className="form-group form-actions clearfix">
                                    <div className="pull-right">
                                        <button className="btn btn-sm btn-success"
                                                type="submit"
                                                id="save-btn">

                                            <i className="fa fa-check"></i>{(this.props.params.id) ? 'Update' : 'Save'}
                                        </button>
                                        <button className="btn btn-sm btn-danger"
                                                type="button"
                                                onClick={browserHistory.goBack}>

                                            <i className="fa fa-remove"></i>Cancel
                                        </button>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            );
        }
    });

    var mapStateToProps = function (state) {
        return {
            selectedItem: state.crudReducer.selectedItem,
            apiState: state.apiReducer
        }
    };

    var mapDispatchToProps = function (dispatch) {
        return {
            actions: bindActionCreators(_.assign({}, crudActions, apiActions), dispatch)
        }
    };

    module.exports = connect(mapStateToProps, mapDispatchToProps)(ClientForm);

})();