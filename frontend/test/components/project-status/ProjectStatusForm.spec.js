/**
 * Created by
 * Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 4/19/16.
 */


//libraries
import React from 'react';
import expect from 'expect';
import {shallow, mount} from 'enzyme';
import {Provider} from 'react-redux';
import jsdom from 'jsdom';

//components
import {WrappedComponent} from '../../../src/js/components/project-status/ProjectStatusForm';
import ProjectStatusRow from '../../../src/js/components/project-status/ProjectStatusRow';
import store from '../../storeMock';

function setup(params) {
    var props = {
        selectedItem: store.getState().crudReducer.selectedItem,
        apiState: {isRequesting: false, noOfRequests: 0},
        params: params,
        actions: {
            fetchById: expect.createSpy(),
            clearSelectedItem: expect.createSpy(),
            apiClearState: expect.createSpy(),
            updateSelectedItem: expect.createSpy(),
            addItem: expect.createSpy(),
            updateItem: expect.createSpy()
        }
    }

    var ProjectStatusForm = WrappedComponent;
    var component = mount(<Provider store={store}><ProjectStatusForm {...props}/></Provider>);

    return {
        component: component,
        actions: props.actions,
        props: props
    }
}

describe('ProjectStatusForm component', () => {
    describe('componentDidMount', () => {
        it('dispatches fetchById if id is present in the params', () => {
            var {component, actions} = setup({id: 123});
            expect(actions.fetchById).toHaveBeenCalled();
        });

        it('doesnot dispatch fetchById if id is not present in the params', () => {
            var {component, actions} = setup({});
            expect(actions.fetchById).toNotHaveBeenCalled();
        });
    });

    describe('componentWillUnMount', () => {
        it('dispatches clearSelectedItem when component unmounts', () => {
            var {component, actions} = setup({});
            component.unmount();
            expect(actions.clearSelectedItem).toHaveBeenCalled();
        });

        it('dispatches apiClearState when component unmounts', () => {
            var {component, actions} = setup({});
            component.unmount();
            expect(actions.apiClearState).toHaveBeenCalled();
        });
    });

    describe('handleChange', () => {
        it('dispatches updateSelectedItem when any changes are made to the input field', () => {
            var {component, actions} = setup({});
            var inputField = component.find('#title');
            inputField.simulate('change');
            expect(actions.updateSelectedItem).toHaveBeenCalled();
        });
    });

    describe('saveProjectStatus', () => {
        it('does not dispatch any action if form is not valid', () => {
            var {component, actions} = setup({});
            var form = component.find('form');
            form.simulate('submit');
            expect(actions.addItem).toNotHaveBeenCalled();
            expect(actions.updateItem).toNotHaveBeenCalled();
        });

        it('dispatches addItem if form is valid and id is not present', () => {
            var {component, actions, props} = setup({});
            var form = component.find('form');
            props.selectedItem.projectStatus.title = 'Some ProjectStatus';
            component.update();
            form.simulate('submit');
            expect(actions.addItem).toHaveBeenCalled();
        });

        it('dispatches updateItem if form is valid and id is present', () => {
            var {component, actions, props} = setup({id: 123});
            var form = component.find('form');
            props.selectedItem.projectStatus.title = 'Some ProjectStatus';
            component.update();
            form.simulate('submit');
            expect(actions.updateItem).toHaveBeenCalled();
        });

    });
})