;(function () {
    'use strict';

    //constants
    var actionTypeConstants = require('../constants/actionTypeConstants');

    //libraries
    var _ = require('lodash');

    var initialState = {
        project: []
    };

    var historyReducer = function (state, action) {
        state = state || initialState;

        switch (action.type) {
            case actionTypeConstants.LIST_HISTORY:
                var newState = _.cloneDeep(state);
                newState.project = _.cloneDeep(action.data);
                return newState;

            case actionTypeConstants.CLEAR_HISTORY:
                var newState = _.cloneDeep(state);
                newState.project = [];

                return newState;

            default:
                return state;
        }
    };

    module.exports = historyReducer;

})();