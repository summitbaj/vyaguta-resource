/**
 * Created by
 * Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 3/30/16.
 */

;(function () {

    //constants
    var actionTypeConstants = require('../constants/actionTypeConstants');

    //util
    var convertContractHash = require('../services/convertContractHash');

    //libraries
    var _ = require('lodash');

    var initialState = {
        contracts: [{
            budgetType: null,
            startDate: null,
            endDate: null,
            resource: null,
            contractMembers: []
        }],
        contractsForView: [],
        allocations: [],
        selectedContractMember: {}
    };

    var contractReducer = function (state, action) {
        state = state || initialState;

        switch (action.type) {
            case actionTypeConstants.ADD_CONTRACT:
                var newState = _.cloneDeep(state);
                var emptyContractObject = {
                    budgetType: null,
                    startDate: null,
                    endDate: null,
                    resource: null,
                    contractMembers: []
                }
                newState.contracts.push(emptyContractObject);
                return newState;

            case actionTypeConstants.SELECT_ITEM:
                var newState = _.cloneDeep(state);
                if (action.entity == 'projects') {
                    newState.contracts = convertContractHash.toFrontEndHash(action.data.contracts);
                    newState.contractsForView = convertContractHash.toFrontEndHash(action.data.contracts);
                }
                return newState;

            case actionTypeConstants.HANDLE_CONTRACT_CHANGE:
                var newState = _.cloneDeep(state);
                newState.contracts[action.index][action.key] = action.value;
                return newState;

            case actionTypeConstants.HANDLE_CONTRACT_SELECT_OPTION_CHANGE:
                var newState = _.cloneDeep(state);
                newState.contracts[action.index][action.key] = (action.value == 0) ? null : {id: action.value};
                return newState;

            case actionTypeConstants.DELETE_CONTRACT:
                var newState = _.cloneDeep(state);
                newState.contracts.splice(action.index, 1);
                return newState;

            case actionTypeConstants.INITIALIZE_CONTRACT_MEMBER:
                var newState = _.cloneDeep(state);
                var emptyContractMemberObject = {
                    employee: null,
                    allocations: [{
                        role: null,
                        joinDate: null,
                        endDate: null,
                        allocation: null,
                        billed: false
                    }]
                };
                newState.selectedContractMember = emptyContractMemberObject;
                return newState;

            case actionTypeConstants.ADD_CONTRACT_MEMBER:
                var newState = _.cloneDeep(state);
                if (!newState.contracts[action.index].contractMembers) {
                    newState.contracts[action.index].contractMembers = [];
                }
                newState.contracts[action.index].contractMembers.push(action.data);
                return newState;

            case actionTypeConstants.UPDATE_CONTRACT_MEMBER:
                var newState = _.cloneDeep(state);
                newState.contracts[action.contractIndex].contractMembers[action.memberIndex] = action.data;
                return newState;

            case actionTypeConstants.DELETE_CONTRACT_MEMBER:
                var newState = _.cloneDeep(state);
                newState.contracts[action.contractIndex].contractMembers.splice(action.memberIndex, 1);

                return newState;

            case actionTypeConstants.ADD_ALLOCATION:
                var newState = _.cloneDeep(state);
                var emptyAllocationObject = {
                    role: null,
                    joinDate: null,
                    endDate: null,
                    allocation: null,
                    billed: false
                }
                newState.selectedContractMember.allocations.push(emptyAllocationObject);
                return newState;

            case actionTypeConstants.DELETE_ALLOCATION:
                var newState = _.cloneDeep(state);
                newState.selectedContractMember.allocations.splice(action.index, 1);
                return newState;

            case actionTypeConstants.SELECT_CONTRACT_MEMBER:
                var newState = _.cloneDeep(state);
                newState.selectedContractMember = action.contractMember;
                return newState;

            case actionTypeConstants.CLEAR_CONTRACTS:
                var newState = _.cloneDeep(state);
                newState.contracts = [{
                    budgetType: null,
                    startDate: null,
                    endDate: null,
                    resource: null,
                    contractMembers: []
                }];
                newState.contractsForView = [];

                return newState;

            case actionTypeConstants.CLEAR_CONTRACT_MEMBER:
                var newState = _.cloneDeep(state);
                newState.selectedContractMember = {};
                return newState;

            case actionTypeConstants.HANDLE_CONTRACT_MEMBER_SELECT_OPTION_CHANGE:
                var newState = _.cloneDeep(state);
                var employeeName = action.employeeFullName && action.employeeFullName.split(' ');

                if (!employeeName) {
                    newState.selectedContractMember[action.key] = {
                        id: action.employeeId,
                    };
                } else if (employeeName.length == 2) {
                    newState.selectedContractMember[action.key] = {
                        id: action.employeeId,
                        firstName: employeeName[0],
                        lastName: employeeName[1]
                    };
                } else {
                    newState.selectedContractMember[action.key] = {
                        id: action.employeeId,
                        firstName: employeeName[0],
                        middleName: employeeName[1],
                        lastName: employeeName[2]
                    };
                }
                return newState;

            case actionTypeConstants.HANDLE_ALLOCATION_SELECT_OPTION_CHANGE:
                var newState = _.cloneDeep(state);
                newState.selectedContractMember.allocations[action.index][action.key] = {id: action.value};
                return newState;

            case actionTypeConstants.HANDLE_ALLOCATION_INPUT_CHANGE:
                var newState = _.cloneDeep(state);
                newState.selectedContractMember.allocations[action.index][action.key] = action.value;
                return newState;

            default:
                return state;
        }
    }

    module.exports = contractReducer;

})();
