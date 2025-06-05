import React from 'react';

const styles = {
  Input: {
    top: '99px',
    left: '24px',
    width: '328px',
    height: '38px',
    padding: '0px 8px',
    border: '0.793651px solid #e3e9f0',
    boxSizing: 'border-box',
    borderRadius: '13px',
    backgroundColor: '#f1f1f1',
    color: '#94a3b8',
    fontSize: '14px',
    fontFamily: 'Roboto Condensed',
    fontWeight: 300,
    lineHeight: '37.574405670166016px',
    outline: 'none',
  },
};

const defaultProps = {
  text: 'Enter task title',
};

const InputField = (props) => {
  return (
    <input style={styles.Input} placeholder={props.text ?? defaultProps.text} />
  );
};

export default InputField;