import React from 'react';

const styles = {
  Screen: {
    backgroundColor: '#ffffff',
    height: "100vh",
  },
};

const Screen = (props) => {
  return (
    <div style={styles.Screen}>
      {props.children}
    </div>
  );
};

export default Screen;