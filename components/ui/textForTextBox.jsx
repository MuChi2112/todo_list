import React from 'react';

const styles = {
  Text: {
    color: '#333333',
    fontSize: '12px',
    fontFamily: 'Roboto Condensed',
    fontWeight: 600,
    lineHeight: '16px',
    textTransform: 'uppercase',
  },
};

const defaultProps = {
  text: 'Deadline',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;