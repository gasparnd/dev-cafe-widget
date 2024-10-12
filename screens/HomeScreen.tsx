import { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { api } from 'api';

import Input from 'components/Input';
import { Button } from '../components/Button';
import { GHUser, RootStackParamList } from '../navigation';

type OverviewScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
  const navigation = useNavigation<OverviewScreenNavigationProps>();
  const [userName, setUserName] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  async function handleSubmit() {
    setLoading(true);
    const response = await api.get<GHUser>(`/users/${userName}`);
    if (response.status === 404) {
      setLoading(false);
      Alert.alert('User not found');
      return;
    }
    const data = response.data;
    navigation.navigate('Details', data as GHUser);
    setLoading(false);
    setUserName('');
  }

  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 70 }}>
        <Input
          handleChange={(str) => setUserName(str.toLowerCase())}
          placeholder="GitHub user name"
          onSumit={handleSubmit}
          value={userName}
        />
      </View>

      <Button loading={loading} onPress={handleSubmit} disabled={!userName} title="Show Details" />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
