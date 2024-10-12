import { forwardRef } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

type ButtonProps = {
  title?: string;
  loading?: boolean;
} & TouchableOpacityProps;

export const Button = forwardRef<TouchableOpacity, ButtonProps>(
  ({ title, loading, ...touchableProps }, ref) => {
    return (
      <TouchableOpacity ref={ref} {...touchableProps} style={[styles.button, touchableProps.style]}>
        {loading ? (
          <ActivityIndicator color={'white'} />
        ) : (
          <Text style={styles.buttonText}>{title}</Text>
        )}
      </TouchableOpacity>
    );
  }
);

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#6366F1',
    borderRadius: 24,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});
