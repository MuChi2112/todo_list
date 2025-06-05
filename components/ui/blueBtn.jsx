import React from 'react';

const styles = {
  Button: {
    cursor: 'pointer',
    top: '618px',
    left: '144px',
    width: '73px',
    height: '36px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '4px',
    backgroundColor: '#5596f6',
    color: '#ffffff',
    fontSize: '14px',
    fontFamily: 'Roboto Condensed',
    fontWeight: 700,
    lineHeight: '20px',
    textTransform: 'uppercase',
    outline: 'none',
  },
};

const defaultProps = {
  label: 'Add',
};

const Button = (props) => {
  return (
    <button style={styles.Button}>
      {props.label ?? defaultProps.label}
    </button>
  );
};

export default Button;