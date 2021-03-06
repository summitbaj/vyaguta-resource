/**
 * Created by
 * Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 2/15/16.
 */

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
    var crudActions = require('../../actions/crudActions');
    var apiActions = require('../../actions/apiActions');

    //libraries
    var _ = require('lodash');
    var Toastr = require('toastr');

    var BudgetTypeForm = React.createClass({
        getInitialState: function () {
            return {
                autoFocus: true
            }
        },

        componentWillMount: function () {
            //fill form with data for editing
            if (this.props.params.id) {
                this.setState({autoFocus: false});
                this.props.actions.fetchById(resourceConstants.BUDGET_TYPES, this.props.params.id);
            }
        },

        componentWillUnmount: function () {
            this.props.actions.clearSelectedItem(resourceConstants.BUDGET_TYPES);
            this.props.actions.apiClearState();
        },

        //call when form is submitted
        saveBudgetType: function (event) {
            event.preventDefault();

            var requiredField = {
                title: this.refs.budgetType.value
            }

            if (formValidator.isValid(requiredField)) {
                this.props.actions.submitForm(resourceConstants.BUDGET_TYPES, this.props.selectedItem.budgetTypes, this.props.params.id);
            } else {
                Toastr.error(messageConstants.FORM_INVALID_SUBMISSION_MESSAGE, messageConstants.TOASTR_INVALID_HEADER);
            }
        },

        //handle change over every key press in the input fields
        handleChange: function (event) {
            var key = event.target.name;
            var value = event.target.value;

            this.props.actions.updateSelectedItem(resourceConstants.BUDGET_TYPES, key, value);
        },

        render: function () {
            return (
                <div>
                    <EntityHeader header={(this.props.params.id) ? 'Edit Budget Type' : 'Add Budget Type'}
                                  routes={this.props.routes}
                                  title={this.props.selectedItem.budgetTypes.title || 'Budget Type'}
                                  apiState={this.props.apiState}/>
                    <div className="block">
                        <div
                            className="block-title-border">Budget Type Details
                        </div>
                        <form className="form-bordered" method="post" onSubmit={this.saveBudgetType}>
                            <fieldset disabled={this.props.apiState.isRequesting}>
                                <div className="form-group">
                                    <label>Budget Type *</label>
                                    <input name="title" type="text" ref="budgetType" placeholder="Budget Type"
                                           className="form-control"
                                           value={this.props.selectedItem.budgetTypes.title}
                                           id="title"
                                           onBlur={formValidator.validateField}
                                           onFocus={formValidator.removeFeedback.bind(null, 'title')}
                                           onChange={this.handleChange}
                                           autoFocus={this.state.autoFocus}
                                    />
                                    <span className="help-block"></span>
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
            )
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

    module.exports = connect(mapStateToProps, mapDispatchToProps)(BudgetTypeForm);

})();