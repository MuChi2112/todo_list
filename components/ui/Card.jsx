import React from 'react';

const styles = {
  Card: {
    top: '325px',
    left: '148px',
    width: '80px',
    height: '80px',
    backgroundColor: 'rgba(0,0,0,0)',
    borderRadius: '9999px',
    border: '3.96825px solid #e85e23',
    boxSizing: 'border-box',
  },
};

const Card = (props) => {
  return (
    <div style={styles.Card}>
      {props.children}
    </div>
  );
};

export default Card;