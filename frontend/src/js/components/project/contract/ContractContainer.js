/**
 * Created by
 * Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 3/30/16.
 */


;(function () {

    //React and Redux dependencies
    var React = require('react');
    var connect = require('react-redux').connect;
    var bindActionCreators = require('redux').bindActionCreators;

    //components
    var SelectOption = require('../SelectOption');
    var Contract = require('./Contract');
    var TeamMemberForm = require('../member/TeamMemberForm');

    //actions
    var crudActions = require('../../../actions/crudActions');
    var apiActions = require('../../../actions/apiActions');
    var teamMemberActions = require('../../../actions/teamMemberActions');
    var contractActions = require('../../../actions/contractActions')

    var ContractContainer = React.createClass({
        addContract: function(event) {
            event.preventDefault();
            this.props.actions.addContract();
        },

        renderContract: function (key) {
            return <Contract key={key}
                      index={key}
                      budgetTypes={this.props.budgetTypes}
                      selectedItem={this.props.selectedItem}
                      apiState={this.props.apiState}
                      teamMembers={this.props.teamMembers}
                      memberIndexInModal={this.props.memberIndexInModal}
            />
        },

        render: function () {
            return (
                <div className="block-chunk">
                    <div className="block-title-border">Contract Details
                        <div className="block-options"><a href="#"
                                                          className="btn btn-alt btn-sm btn-default"
                                                          onClick={this.addContract}>
                            <i className="fa fa-plus"></i></a></div>
                    </div>
                    <div className="form-group">
                        <div className="panel-group custom-accordion" id="contractAccordion" ro
                             aria-multiselectable="true">

                            {Object.keys(this.props.contracts).map(this.renderContract)}
                        </div>
                    </div>
                </div>
            )
        }
    });

    var mapStateToProps = function (state) {
        return {
            budgetTypes: state.crudReducer.budgetTypes,
            selectedItem: state.crudReducer.selectedItem,
            apiState: state.apiReducer,
            teamMembers: state.teamMemberReducer.teamMembers,
            memberIndexInModal: state.teamMemberReducer.memberIndexInModal,
            contracts: state.contractReducer.contracts
        }
    };

    var mapDispatchToProps = function (dispatch) {
        return {
            actions: bindActionCreators(_.assign({}, teamMemberActions, crudActions, apiActions, contractActions), dispatch)
        }
    };

    module.exports = connect(mapStateToProps, mapDispatchToProps)(ContractContainer);
})();