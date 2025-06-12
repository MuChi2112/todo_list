import React from 'react';

const styles = {
  base: {
    fontSize: '16px',
    fontFamily: 'Roboto Condensed',
    lineHeight: '24px',
    textAlign: 'center',
    flex: 1,
    padding: '12px 0',
    cursor: 'pointer',
  },
  active: {
    color: '#000000',
    borderBottom: '2px solid #000000',
  },
  inactive: {
    color: '#999999',
  },
};

const TabButton = ({ text, isActive, onClick }) => {
  const style = {
    ...styles.base,
    ...(isActive ? styles.active : styles.inactive),
  };

  return (
    <div style={style} onClick={onClick}>
      {text}
    </div>
  );
};

export default TabButton;
