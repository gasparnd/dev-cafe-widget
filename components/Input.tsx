import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';

interface InputProps {
  placeholder: string;
  value: string;
  handleChange: (str: string) => void;
  onSumit: () => void;
}

export default function Input({
  placeholder,
  value,
  handleChange,
  onSumit,
}: InputProps): React.JSX.Element {
  const styles = StyleSheet.create({
    input: {
      backgroundColor: 'white',
      height: 38,
      borderRadius: 10,
      paddingVertical: 7,
      paddingHorizontal: 8,
    },
  });

  return (
    <TextInput
      returnKeyType="search"
      style={styles.input}
      value={value}
      placeholder={placeholder}
      autoCapitalize="none"
      autoComplete="username"
      onSubmitEditing={onSumit}
      onChangeText={handleChange}
    />
  );
}
