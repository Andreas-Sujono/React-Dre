import React, {useEffect, useState, useRef} from 'react';
import PropTypes from 'prop-types';
import DatePicker from "react-datepicker";
import {FiCalendar} from 'react-icons/fi'
import TimePicker from 'rc-time-picker';
import moment from 'moment'

import 'rc-time-picker/assets/index.css';
import "react-datepicker/dist/react-datepicker.css";
import './style.scss'

import {denormalizedDate} from 'common/utils/format'

function DateTimeInput(props) {
    
    const dateRef = useRef()

    useEffect(() => {
        dateRef.current.input.readOnly = true
    }, [])

    return (
        <div className="common-date-time-input" style={props.containerStyle}>
            {props.label && <label>{props.label}</label>}
            <div className="input-container">
                <div className="date-input-container">
                    <FiCalendar className="icon"/>
                    <DatePicker 
                        className="date-input"
                        name="startDate"
                        selected={props.dateValue}
                        dateFormat={props.dateFormat}
                        todayButton="Today"
                        ref={dateRef}
                        onChange={date => props.dateOnChange((date))}
                        style={props.dateInputStyle}
                    />
                </div>
                <TimePicker
                    className="time-input"
                    showSecond={false}
                    value={(props.timeValue)}
                    onChange={time => props.timeOnChange((time))}
                    style={props.timeInputStyle}
                    allowEmpty={false}
                />
            </div>
            
        </div>
    );
}

DateTimeInput.propTypes = {
    label: PropTypes.string.isRequired,
    containerStyle: PropTypes.object,
    dateFormat: PropTypes.string,
    dateValue: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.object,
    ]),
    timeValue: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
    ]),
    dateOnChange: PropTypes.func,
    timeOnChange: PropTypes.func,
    dateInputStyle: PropTypes.object,
    timeInputStyle: PropTypes.object,
};

DateTimeInput.defaultProps = {
    label: '',
    containerStyle: {},
    dateFormat: 'dd MMM yyyy',
    dateValue: new Date(),
    timeValue: new moment(),
    dateOnChange: () => null,
    timeOnChange: () => null,
    dateInputStyle: {},
    timeInputStyle: {},
};

export default DateTimeInput;