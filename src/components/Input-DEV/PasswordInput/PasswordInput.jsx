import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'

import './style.scoped.scss'

function PasswordInput(props) {
    const [showPassword, setShowPassword] = useState(props.showPassword)

    let addRequiredIcon = false
    if(props.label && props.required && props.label.slice(-1) !== '*'){
        addRequiredIcon = true
    }
    return (
        <div className="common-password-input" style={props.containerStyle}>
            {props.label && <label>{props.label}{addRequiredIcon && <span className="required-icon">*</span>}</label>}
            <div className="text-input-container">
                <input 
                    style={{...props.inputStyle}}
                    value={props.value}
                    placeholder={props.placeholder}
                    disabled={props.disabled}
                    onChange={props.disabled ? () => null : props.onChange}
                    type={showPassword ? 'text' : 'password'}
                    className={`${props.disabledColor ? 'disabled-input' : ''}`}
                    required={props.required}
                />
                {
                    props.showPasswordOption && 
                    <div className="show-password" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <AiOutlineEyeInvisible className="icon"/> : <AiOutlineEye className="icon"/>}
                    </div>
                }
                
            </div>
        </div>
    );
}

PasswordInput.propTypes = {
    label: PropTypes.string.isRequired,
    containerStyle: PropTypes.object,
    inputStyle: PropTypes.object,
    onChange: PropTypes.func,
    value: PropTypes.any,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    required: PropTypes.bool,

    //optional
    disabledColor: PropTypes.bool,
    showPasswordOption: PropTypes.bool,
    showPassword: PropTypes.bool
};

PasswordInput.defaultProps = {
    label: '',
    containerStyle: {},
    inputStyle: {},
    onChange: () => null,
    value: '',
    placeholder: '',
    disabled: false,
    required: false,

    //optional
    disabledColor: false,
    showPasswordOption: true,
    showPassword: false
};

export default PasswordInput;