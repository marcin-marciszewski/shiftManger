import React, { useReducer } from 'react';
import uuid from 'uuid';
import organizationReducer from './organizationReducer';
import OrganizationContext from './organizationContext';
import {
  ADD_ORGANIZATION,
  DELETE_ORGANIZATION,
  SET_CURRENT,
  CLEAR_CURRENT,
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
    ]
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

  // Clear Current Organization

  // Update Organization

  // Filter Organizations

  // Clear Filter

  return (
    <OrganizationContext.Provider
      value={{
        organizations: state.organizations,
        addOrganization,
        deleteOrganization
      }}
    >
      {' '}
      {props.children}{' '}
    </OrganizationContext.Provider>
  );
};

export default OrganizationState;