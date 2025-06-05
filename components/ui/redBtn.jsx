import React from 'react';

const styles = {
  Button: {
    cursor: 'pointer',
    top: '503px',
    left: '43px',
    width: '60px',
    height: '32px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '4px',
    backgroundColor: '#e85e23',
    color: '#ffffff',
    fontSize: '14px',
    fontFamily: 'Roboto Condensed',
    fontWeight: 700,
    lineHeight: '20px',
    outline: 'none',
  },
};

const defaultProps = {
  label: 'Delete',
};

const Button = (props) => {
  return (
    <button style={styles.Button}>
      {props.label ?? defaultProps.label}
    </button>
  );
};

export default Button;