import React from 'react';
import PropTypes from 'prop-types';

const OrganizationItem = ({ organization }) => {
  const { id, name, rate } = organization;
  return (
    <div className='card bg-light'>
      <h3 className='text-left'>
        {' '}
        {name}{' '}
        <span
          style={{
            float: 'right'
          }}
          className={'badge badge-success'}
        >
          <i className='fas fa-dollar-sign'> </i> {rate}{' '}
        </span>{' '}
      </h3>{' '}
      <br />
      <br />
      <p>
        <button className='btn btn-success'> Join </button>{' '}
        <button className='btn btn-dark '> Edit </button>{' '}
        <button className='btn btn-danger'> Delete </button>{' '}
      </p>{' '}
    </div>
  );
};

OrganizationItem.propTypes = {
  organization: PropTypes.object.isRequired
};

export default OrganizationItem;
