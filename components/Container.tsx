import React, { PropsWithChildren } from 'react';
import { StyleSheet, Pressable, View } from 'react-native';

interface ContainerProps {
  spacer?: number;
  onPress?: () => void;
}

export default function Container({
  children,
  spacer = 0,
  onPress,
}: PropsWithChildren<ContainerProps>) {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      height: 38,
      borderRadius: 10,
      paddingVertical: 7,
      paddingHorizontal: 8,
      marginBottom: spacer,
      flexDirection: 'row',
      alignItems: 'center',
    },
  });

  function handlePress() {
    if (onPress) {
      onPress();
    }
  }
  return (
    <Pressable onPress={handlePress} style={styles.container}>
      <View>{children}</View>
    </Pressable>
  );
}
