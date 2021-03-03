import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

import {FiChevronDown} from 'react-icons/fi'

import './style.scoped.scss'

function SelectInput(props) {
    const selectRef = useRef()

    return (
        <div className="common-input-select" style={props.containerStyle}>
            {
                props.label && <label>{props.label}</label>
            }
            <div className="select-container">
                <FiChevronDown className="icon" onClick={() => {selectRef.current.focus()}}/>
                <select 
                    style={props.inputStyle}
                    ref={selectRef}
                    value={props.value}
                    disabled={props.disabled}
                    onChange={props.disabled ? () => null : props.onChange}
                > 
                    {
                        props.items && props.items.map( item => 
                            <option key={item.value} value={item.value}>
                                {item.label}
                            </option>
                        )
                    }
                </select>
            </div>
        </div>
    );
}

SelectInput.propTypes = {
    label: PropTypes.string.isRequired,
    containerStyle: PropTypes.object,
    inputStyle: PropTypes.object,
    onChange: PropTypes.func,
    value: PropTypes.any,
    disabled: PropTypes.bool,
    items: PropTypes.arrayOf(PropTypes.object).isRequired
};

SelectInput.defaultProps = {
    label: '',
    containerStyle: {},
    inputStyle: {},
    onChange: () => null,
    value: '',
    disabled: false,
    items: [],
};

export default SelectInput;