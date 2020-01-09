import React, { useReducer } from 'react';
import uuid from 'uuid';
import organizationReducer from './organizationReducer';
import OrganizationContext from './organizationContext';
import {
  ADD_ORGANIZATION,
  DELETE_ORGANIZATION,
  SET_CURRENT_ORGANIZATION,
  CLEAR_CURRENT_ORGANIZATION,
  UPDATE_ORGANIZATION,
  FILTER_ORGANIZATIONS,
  CLEAR_FILTER
} from '../types';

const OrganizationState = props => {
  const initialState = {
    organizations: [
      {
        id: 1,
        name: 'org1',
        rate: '10'
      },
      {
        id: 2,
        name: 'org2',
        rate: '20'
      },
      {
        id: 3,
        name: 'org3',
        rate: '30'
      }
    ],
    current: null
  };

  const [state, dispatch] = useReducer(organizationReducer, initialState);

  // Add Organization
  const addOrganization = organization => {
    organization.id = uuid.v4();
    dispatch({
      type: ADD_ORGANIZATION,
      payload: organization
    });
  };

  // Delete Organization

  const deleteOrganization = id => {
    dispatch({
      type: DELETE_ORGANIZATION,
      payload: id
    });
  };
  // Set Current Organization
  const setCurrentOrganization = organization => {
    dispatch({
      type: SET_CURRENT_ORGANIZATION,
      payload: organization
    });
  };

  // Clear Current Organization
  const clearCurrentOrganization = () => {
    dispatch({
      type: CLEAR_CURRENT_ORGANIZATION
    });
  };
  // Update Organization

  // Filter Organizations

  // Clear Filter

  return (
    <OrganizationContext.Provider
      value={{
        organizations: state.organizations,
        current: state.current,
        addOrganization,
        deleteOrganization,
        setCurrentOrganization,
        clearCurrentOrganization
      }}
    >
      {' '}
      {props.children}{' '}
    </OrganizationContext.Provider>
  );
};

export default OrganizationState;
