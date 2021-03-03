import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import { FiCalendar } from 'react-icons/fi';

import 'react-datepicker/dist/react-datepicker.css';
import './style.scss';

function DateInput(props) {
  const dateRef = useRef();

  useEffect(() => {
    dateRef.current.input.readOnly = true;
  }, []);

  const { containerStyle, label, value, dateFormat, onChange } = props;

  return (
    <div className="common-date-input bc-text-secondary" style={containerStyle}>
      {label && <label htmlFor="date-input">{label}</label>}
      <div className="date-input-container">
        <FiCalendar className="icon" />
        <DatePicker
          className="date-input"
          id="date-input"
          name="startDate"
          selected={value}
          dateFormat={dateFormat}
          todayButton="Today"
          ref={dateRef}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

DateInput.propTypes = {
  label: PropTypes.string,
  containerStyle: PropTypes.object,
  value: PropTypes.object,
  dateFormat: PropTypes.string,
  onChange: PropTypes.func,
};

DateInput.defaultProps = {
  label: '',
  containerStyle: {},
  value: new Date(),
  dateFormat: 'dd MMM yyyy',
  onChange: () => null,
};

export default DateInput;
