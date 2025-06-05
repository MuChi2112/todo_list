import React from 'react';

const styles = {
  Text: {
    color: '#333333',
    fontSize: '14px',
    fontFamily: 'Roboto Condensed',
    fontWeight: 300,
    lineHeight: '20px',
    textAlign: 'center',
  },
};

const defaultProps = {
  text: 'No items. Press ‘Add’ to add tasks.',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;