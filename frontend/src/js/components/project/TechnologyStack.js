;(function () {
    'use-strict';

    //React dependencies
    var React = require('react');

    //components
    var ApiUtil = require('../../util/ApiUtil');
    var Tagging = require('../common/tag/Tagging');
    var resourceConstant = require('../../constants/resourceConstant');

    var TechnologyStack = React.createClass({
        getInitialState: function () {
            return {
                tags: [],
                suggestions: []
            }
        },

        componentWillReceiveProps: function (nextProps) {
            this.setState({tags: this.getTitle(nextProps.technologyStack)});
        },

        getTitle: function (technologyStack) {
            var tagTitle = [];
            for (var i = 0; i < technologyStack.length; i++) {
                tagTitle[i] = technologyStack[i].title;
            }
            return tagTitle;
        },

        changeTagState: function (data) {
            var suggestionTitle = this.getTitle(data);
            this.setState({suggestions: suggestionTitle});
        },

        updateSuggestions: function (input) {
            this.setState({suggestions: []});
            ApiUtil.fetchByQuery(resourceConstant.TAGS, input, this.changeTagState, 'any');
        },

        render: function () {
            return (
                <Tagging tags={this.state.tags} suggestions={this.state.suggestions}
                         removeTag={this.props.removeTag} addNewTag={this.props.addNewTag}
                         updateSuggestions={this.updateSuggestions}/>
            );
        }
    });
    module.exports = TechnologyStack;
})();