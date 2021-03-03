import React from 'react';
import PropTypes from 'prop-types';
import TimePicker from 'rc-time-picker';

import moment from 'moment'

import 'rc-time-picker/assets/index.css';
import './style.scss'

function TimeInput(props) {
    return (
        <div className="common-time-input" style={props.containerStyle}>
            {props.label && <label>{props.label}</label>}
            <TimePicker
                className="time-input"
                showSecond={false}
                value={props.value}
                onChange={props.onChange}
                allowEmpty={false}
            />
        </div>
    );
}

TimeInput.propTypes = {
    label: PropTypes.string.isRequired,
    containerStyle: PropTypes.object,
    value: PropTypes.object, // moment object
    onChange: PropTypes.func
};

TimeInput.defaultProps = {
    label: '',
    containerStyle: {},
    value: new moment(),
    onChange: () => null
};

export default TimeInput;