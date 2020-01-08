import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ShiftContext from '../../context/shift/shiftContext';

const ShiftItem = ({ shift }) => {
  const shiftContext = useContext(ShiftContext);
  const { deleteShift } = shiftContext;

  const { id, user, name, startDate, startTime, endTime, rest } = shift;

  const onDelete = () => {
    deleteShift(id);
  };

  const getMinutes = val => {
    let t = val.split(':');
    let minutes = +t[0] * 60 + +t[1];

    return minutes;
  };

  let startMin = getMinutes(startTime);
  let endMin = getMinutes(endTime);
  let restMin = getMinutes(rest);

  const getPaid = (start, end, rest) => {
    const rate = 10;
    let pay = (end - start - rest) * (rate / 60);

    return Math.round(pay);
  };

  const workedHours = (start, end) => {
    let hours = (end - start) / 60;

    return hours.toFixed(2);
  };

  return (
    <tr>
      <td> {user} </td> <td> {startDate} </td> <td> {startTime} </td>{' '}
      <td> {endTime} </td> <td> {restMin} </td>{' '}
      <td> {workedHours(startMin, endMin)} </td>{' '}
      <td> {getPaid(startMin, endMin, restMin)} </td>{' '}
      <button className='btn btn-dark btn-sm'> Edit </button>{' '}
      <button className='btn btn-danger btn-sm' onClick={onDelete}>
        {' '}
        Delete{' '}
      </button>{' '}
    </tr>
  );
};

ShiftItem.propTypes = {
  shift: PropTypes.object.isRequired
};

export default ShiftItem;