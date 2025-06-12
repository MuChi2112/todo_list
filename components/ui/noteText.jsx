import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';

const NoteText = ({ children }) => {
  return (
    <RNText style={styles.text}>
      {children ?? 'No items. Press ‘Add’ to add tasks.'}
    </RNText>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#333333',
    fontSize: 14,
    fontFamily: 'Roboto Condensed',
    fontWeight: '300',
    lineHeight: 20,
    textAlign: 'center',
  },
});

export default NoteText;
