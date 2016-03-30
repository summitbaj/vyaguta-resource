/**
 * Created by
 * Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 3/30/16.
 */

;(function () {
    'use strict';

    //constants
    var actionTypeConstant = require('../constants/actionTypeConstant');

    /**
     * Contract CRUD actions inside of Create Project
     */

    var contractActions = {
        addContract: function() {
            return {
                type: actionTypeConstant.ADD_CONTRACT
            }
        },

        handleContractChange: function(index, key, value) {
            return {
                type: actionTypeConstant.HANDLE_CONTRACT_CHANGE,
                index: index,
                key: key,
                value: value
            }
        }

    }

    module.exports = contractActions;
})();