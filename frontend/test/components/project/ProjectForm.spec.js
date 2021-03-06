///**
// * Created by
// * Pratish Shrestha <pratishshrestha@lftechnology.com>
// * on 4/19/16.
// */
//
//
////libraries
//import React from 'react';
//import expect from 'expect';
//import {shallow, mount} from 'enzyme';
//import {Provider} from 'react-redux';
//import jsdom from 'jsdom';
//
////components
//import {WrappedComponent} from '../../../src/js/components/project/ProjectForm';
//import ProjectRow from '../../../src/js/components/project/ProjectRow';
//import store from '../../storeMock';
//
//function setup(params) {
//    var props = {
//        selectedItem: store.getState().crudReducer.selectedItem,
//        budgetTypes:  store.getState().crudReducer.budgetTypes,
//        projectTypes:  store.getState().crudReducer.projectTypes,
//        projectStatus:  store.getState().crudReducer.projectStatus,
//        projectRoles:  store.getState().crudReducer.projectRoles,
//        clients:  store.getState().crudReducer.clients,
//        contracts:  store.getState().contractReducer.contracts,
//        apiState: {isRequesting: false, noOfRequests: 0},
//        params: params,
//        actions: {
//            fetchById: expect.createSpy(),
//            clearSelectedItem: expect.createSpy(),
//            apiClearState: expect.createSpy(),
//            updateSelectedItem: expect.createSpy(),
//            addItem: expect.createSpy(),
//            updateItem: expect.createSpy()
//        }
//    }
//
//    var ProjectForm = WrappedComponent;
//    var component = mount(<Provider store={store}><ProjectForm {...props}/></Provider>);
//
//    return {
//        component: component,
//        actions: props.actions,
//        props: props
//    }
//}
//
//describe('ProjectForm component', () => {
//    describe('componentDidMount', () => {
//        it('dispatches fetchById if id is present in the params', () => {
//            var {actions} = setup({id: 123});
//            expect(actions.fetchById).toHaveBeenCalled();
//        });
//
//        it('doesnot dispatch fetchById if id is not present in the params', () => {
//            var {actions} = setup({});
//            expect(actions.fetchById).toNotHaveBeenCalled();
//        });
//    });
//
//    describe('componentWillUnMount', () => {
//        it('dispatches clearSelectedItem when component unmounts', () => {
//            var {component, actions} = setup({});
//            component.unmount();
//            expect(actions.clearSelectedItem).toHaveBeenCalled();
//        });
//
//        it('dispatches apiClearState when component unmounts', () => {
//            var {component, actions} = setup({});
//            component.unmount();
//            expect(actions.apiClearState).toHaveBeenCalled();
//        });
//    });
//
//    describe('handleChange', () => {
//        it('dispatches updateSelectedItem when any changes are made to the input field', () => {
//            var {component, actions} = setup({});
//            var inputField = component.find('#title');
//            inputField.simulate('change');
//            expect(actions.updateSelectedItem).toHaveBeenCalled();
//        });
//    });
//
//    describe('saveProject', () => {
//        it('does not dispatch any action if form is not valid', () => {
//            var {component, actions} = setup({});
//            var form = component.find('form');
//            form.simulate('submit');
//            expect(actions.addItem).toNotHaveBeenCalled();
//            expect(actions.updateItem).toNotHaveBeenCalled();
//        });
//
//        it('dispatches addItem if form is valid and id is not present', () => {
//            var {component, actions, props} = setup({});
//            var form = component.find('form');
//            props.selectedItem.projects.title = 'Some Project';
//            component.update();
//            form.simulate('submit');
//            expect(actions.addItem).toHaveBeenCalled();
//        });
//
//        it('dispatches updateItem if form is valid and id is present', () => {
//            var {component, actions, props} = setup({id: 123});
//            var form = component.find('form');
//            props.selectedItem.projects.title = 'Some Project';
//            component.update();
//            form.simulate('submit');
//            expect(actions.updateItem).toHaveBeenCalled();
//        });
//
//    });
//})