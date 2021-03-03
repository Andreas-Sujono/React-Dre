import React from 'react';
import PropTypes from 'prop-types';
import PhoneInput from 'react-phone-input-2';
import { Container } from './Style';
import 'react-phone-input-2/lib/style.css';
import './style.scoped.scss';

function PasswordInput(props) {
  let addRequiredIcon = false;
  if (props.label && props.required && props.label.slice(-1) !== '*') {
    addRequiredIcon = true;
  }
  return (
    <Container style={props.containerStyle} dropdownStyle={props.dropdownStyle}>
      {props.label && (
        <label>
          <span style={{ ...props.labelStyle }}>{props.label}</span>
          {addRequiredIcon && <span className="required-icon">*</span>}
        </label>
      )}
      <div className="text-input-container">
        <PhoneInput
          country="id"
          value={props.value}
          onChange={props.disabled ? () => null : props.onChange}
          className={`${props.disabledColor ? 'disabled-input' : ''}`}
          disabled={props.disabled}
          required={props.required}
          inputStyle={{ ...props.inputStyle }}
          placeholder={props.placeholder}
          {...props}
        />
      </div>
    </Container>
  );
}

PasswordInput.propTypes = {
  label: PropTypes.string,
  containerStyle: PropTypes.object,
  inputStyle: PropTypes.object,
  labelStyle: PropTypes.object,
  onChange: PropTypes.func,
  value: PropTypes.any,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,

  // optional
  disabledColor: PropTypes.bool,
};

PasswordInput.defaultProps = {
  label: '',
  containerStyle: {},
  inputStyle: {},
  labelStyle: {},
  onChange: () => null,
  value: '',
  placeholder: '',
  disabled: false,
  required: false,

  // optional
  disabledColor: false,
};

export default PasswordInput;
