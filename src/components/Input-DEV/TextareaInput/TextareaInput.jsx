import React from 'react';
import PropTypes from 'prop-types';

import './style.scoped.scss';

function TextareaInput(props) {
  let addRequiredIcon = false;
  if (props.label && props.required && props.label.slice(-1) !== '*') {
    addRequiredIcon = true;
  }
  return (
    <div className="common-textarea-input" style={props.containerStyle}>
      {props.label && (
        <label>
          {props.label}
          {addRequiredIcon && <span className="required-icon">*</span>}
        </label>
      )}
      <textarea
        value={props.value}
        placeholder={props.placeholder}
        disabled={props.disabled}
        onChange={props.disabled ? () => null : props.onChange}
        style={props.inputStyle}
        required={props.required}
        {...(props.rows && { rows: props.rows })}
        {...(props.cols && { cols: props.cols })}
      />
    </div>
  );
}

TextareaInput.propTypes = {
  label: PropTypes.string,
  containerStyle: PropTypes.object,
  inputStyle: PropTypes.object,
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
};

TextareaInput.defaultProps = {
  label: '',
  containerStyle: {},
  inputStyle: {},
  onChange: () => null,
  value: '',
  placeholder: '',
  disabled: false,
  required: false,
};

export default TextareaInput;
