import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const InputBox = ({ text = 'Enter task title', style = {}, ...rest }) => {
  return (
    <TextInput
      placeholder={text}
      style={[styles.input, style]} // ✅ 合併樣式
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#e3e9f0',
    borderRadius: 13,
    backgroundColor: '#f1f1f1',
    color: '#94a3b8',
    fontSize: 14,
    fontFamily: 'Roboto Condensed',
    fontWeight: '300',
  },
});

export default InputBox;
