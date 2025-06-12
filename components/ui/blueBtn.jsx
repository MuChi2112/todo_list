import React from 'react';

const baseStyle = {
  cursor: 'pointer',
  padding: '0 8px',
  width: 90,
  height: 36,
  border: 0,
  borderRadius: 4,
  backgroundColor: '#5596f6',
  color: '#ffffff',
  fontSize: 14,
  fontFamily: 'Roboto Condensed',
  fontWeight: 700,
  lineHeight: '20px',
  textTransform: 'uppercase',
  outline: 'none',
};

const BlueBtn = ({
  children = 'ADD', // 若沒給就預設 ADD
  style = {},
  ...rest
}) => {
  return (
    <button style={{ ...baseStyle, ...style }} {...rest}>
      {children}
    </button>
  );
};

export default BlueBtn;
