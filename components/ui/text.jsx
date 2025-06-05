import React from 'react';

const styles = {
  Text: {
    color: '#333333',
    fontSize: '16px',
    fontFamily: 'Roboto Condensed',
    lineHeight: '24px',
    textAlign: 'center',
  },
};

const defaultProps = {
  text: 'Pending',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;