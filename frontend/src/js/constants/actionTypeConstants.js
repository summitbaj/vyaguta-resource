;(function () {
    var actionTypeConstants = {
        //crud Actions
        LIST: 'LIST',
        DELETE: 'DELETE',
        ERROR: 'ERROR',
        ADD: 'ADD',
        UPDATE: 'UPDATE',
        SELECT_ITEM: 'SELECT_ITEM',
        UPDATE_SELECTED_ITEM: 'UPDATE_SELECTED_ITEM',
        PAGINATION_INDEX: 'PAGINATION_INDEX',
        CLEAR_SELECTED_ITEM: 'CLEAR_SELECTED_ITEM',
        HANDLE_SELECT_OPTION_CHANGE: 'HANDLE_SELECT_OPTION_CHANGE',
        CLEAR_LIST: 'CLEAR_LIST',
        HANDLE_AUTOCOMPLETE_CHANGE: 'HANDLE_AUTOCOMPLETE_CHANGE',

        //History Actions
        LIST_HISTORY: 'LIST_HISTORY',
        CLEAR_HISTORY: 'CLEAR_HISTORY',

        //Dashboard Actions
        LIST_BY_CRITERIA: 'LIST_BY_CRITERIA',
        SHOW_RESOURCES: 'SHOW_RESOURCES',

        //Contract Actions
        ADD_CONTRACT: 'ADD_CONTRACT',
        HANDLE_CONTRACT_CHANGE: 'HANDLE_CONTRACT_CHANGE',
        HANDLE_CONTRACT_SELECT_OPTION_CHANGE: 'HANDLE_CONTRACT_SELECT_OPTION_CHANGE',
        DELETE_CONTRACT: 'DELETE_CONTRACT',
        CLEAR_CONTRACTS: 'CLEAR_CONTRACTS',

        //Contract Member Actions
        ADD_CONTRACT_MEMBER: 'ADD_CONTRACT_MEMBER',
        UPDATE_CONTRACT_MEMBER: 'UPDATE_CONTRACT_MEMBER',
        INITIALIZE_CONTRACT_MEMBER: 'INITIALIZE_CONTRACT_MEMBER',
        CLEAR_CONTRACT_MEMBER: 'CLEAR_CONTRACT_MEMBER',
        SELECT_CONTRACT_MEMBER: 'SELECT_CONTRACT_MEMBER',
        HANDLE_CONTRACT_MEMBER_SELECT_OPTION_CHANGE: 'HANDLE_CONTRACT_MEMBER_SELECT_OPTION_CHANGE',
        DELETE_CONTRACT_MEMBER: 'DELETE_CONTRACT_MEMBER',

        //Allocation Actions
        ADD_ALLOCATION : 'ADD_ALLOCATION',
        LIST_ALLOCATIONS: 'LIST_ALLOCATIONS',
        CLEAR_ALLOCATIONS: 'CLEAR_ALLOCATIONS',
        HANDLE_ALLOCATION_SELECT_OPTION_CHANGE: 'HANDLE_ALLOCATION_SELECT_OPTION_CHANGE',
        HANDLE_ALLOCATION_INPUT_CHANGE: 'HANDLE_ALLOCATION_INPUT_CHANGE',
        DELETE_ALLOCATION: 'DELETE_ALLOCATION',

        //Team Member actions
        ADD_TEAM_MEMBER: 'ADD_TEAM_MEMBER',
        DELETE_TEAM_MEMBER: 'DELETE_TEAM_MEMBER',
        EDIT_TEAM_MEMBER: 'EDIT_TEAM_MEMBER',
        CLEAR_MEMBER_INDEX: 'CLEAR_MEMBER_INDEX',
        CLEAR_MEMBER_STATE: 'CLEAR_MEMBER_STATE',
        EDIT_TEAM_MEMBER_INDEX_IN_MODAL: 'EDIT_TEAM_MEMBER_INDEX_IN_MODAL',

        //API actions
        API_REQUEST: 'API_REQUEST',
        API_RESPONSE: 'API_RESPONSE',
        API_CLEAR_STATE: 'API_CLEAR_STATE'
    };

    module.exports = actionTypeConstants;

})();