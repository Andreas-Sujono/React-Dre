import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

import './style.scoped.scss'

const LeftNodeDiv = styled.div`
    ${ props => props.isOverlap && `
        position: absolute;
        top:0;
        left:0;
        height:100%;
    `}
`

function TextInput(props) {
    let addRequiredIcon = false
    if(props.label && props.required && props.label.slice(-1) !== '*'){
        addRequiredIcon = true
    }
    return (
        <div className="common-text-input" style={props.containerStyle}>
            {props.label && <label>{props.label}{addRequiredIcon && <span className="required-icon">*</span>}</label>}
            <div className="text-input-container">
                {
                    props.leftnode && 
                    <LeftNodeDiv isOverlap={props.isLeftNodeOverlap}>
                        {props.leftnode}
                    </LeftNodeDiv>
                }
                <input 
                    style={{...props.inputStyle, ...(props.paddingleft && {paddingLeft: props.paddingleft})}}
                    value={props.value}
                    placeholder={props.placeholder}
                    disabled={props.disabled}
                    onChange={props.disabled ? () => null : props.onChange}
                    type={props.type}
                    className={`${props.disabledColor ? 'disabled-input' : ''}`}
                    min={props.min}
                    required={props.required}
                />
            </div>
        </div>
    );
}

TextInput.propTypes = {
    label: PropTypes.string.isRequired,
    containerStyle: PropTypes.object,
    inputStyle: PropTypes.object,
    onChange: PropTypes.func,
    value: PropTypes.any,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    type: PropTypes.string,
    required: PropTypes.bool,

    //optional
    leftnode: PropTypes.node,
    paddingleft:PropTypes.string,
    isLeftNodeOverlap: PropTypes.bool,
    disabledColor: PropTypes.bool,
};

TextInput.defaultProps = {
    label: '',
    containerStyle: {},
    inputStyle: {},
    onChange: () => null,
    value: '',
    placeholder: '',
    disabled: false,
    required: false,

    //optional
    leftnode: null,
    paddingleft: null,
    type: 'text',
    isLeftNodeOverlap: true,
    disabledColor: false,
};

export default TextInput;