import React, {useState, useEffect, useRef, forwardRef} from 'react';
import PropTypes from 'prop-types';
import {AiOutlineClose} from 'react-icons/ai'

import './style.scoped.scss'

//need ref as props
const FileImageInput = forwardRef((props, ref) => {
    const [image, setImage] = useState(props.imageUrl || '')
    const [fileValue, setFileValue] = useState('')
    if(!ref)
        ref = useRef()

    useEffect(() => {
        setImage(props.imageUrl)
    }, [props.imageUrl])

    const handleChange = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]))
        setFileValue('')
        // handle change
        props.handleChange(e.target.files[0])
    }

    const handleResetImage = () => {
        setImage('')
        props.handleDelete()
    }

    return (
        <div className="common-file-image-input" style={props.containerStyle}>
            {props.label && <label>{props.label}</label>}
            <div className="input-container" style={{height: props.height}}>
                <div className="placeholder-container">
                    { props.placeholder }
                </div>
                <div 
                    className="file-input" 
                    onClick={() => ref.current.click()}
                    style={{height: props.height, ...props.inputStyle}}
                />
                
                <input  
                    type="file"
                    style={{height: props.height, ...props.inputStyle}}
                    onChange={e => handleChange(e)}
                    value={fileValue}
                    onFocus={() => {
                        ref?.current && (ref.current.value = '')
                    }}
                    onBlur={() => {
                        ref?.current && (ref.current.value = '')
                    }}
                    ref={ref}
                />
                {
                    image?.trim() &&
                    <>
                        <div className="img-container" onClick={() => {ref?.current?.click()}}>
                            <img src={image} className="img-preview" onClick={  () => ref?.current?.click()}/>
                        </div>
                        {
                            props.enableDelete &&
                            <div className="reset-button" onClick={() => handleResetImage()}>
                                <AiOutlineClose className="icon"/>
                            </div>
                        }
                    </>
                }
                
            </div>
            
        </div>
    );
})

FileImageInput.propTypes = {
    label: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    enableDelete: PropTypes.bool,
    placeholder: PropTypes.node.isRequired,
    height: PropTypes.string,
    containerStyle: PropTypes.object,
    inputStyle: PropTypes.object,
};

FileImageInput.defaultProps = {
    label: '',
    imageUrl: '', //optional
    handleChange: () => null,
    handleDelete: () => null,
    placeholder: <div>Placeholder goes here</div>,
    height: '200px',
    enableDelete: false,
    containerStyle: {},
    inputStyle: {},
};

export default FileImageInput;