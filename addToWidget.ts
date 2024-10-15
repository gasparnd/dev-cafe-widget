import { Alert, NativeModules } from 'react-native';

export interface ValueData {
  name: string;
  followers: number;
  following: number;
  reposCount: number;
}

const { RNSharedWidget } = NativeModules;

export function addToWidget(valueData: ValueData) {
  RNSharedWidget.setData('ghUser', JSON.stringify(valueData), (status: number | null) => {
    console.log('-------------------------------');
    console.log('Statues: ', status);
    Alert.alert('The widget has been updated');
    console.log('-------------------------------');
  });
}
