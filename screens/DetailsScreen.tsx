import { Image, StyleSheet, Text, ScrollView, Linking } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

import Container from 'components/Container';
import { Button } from 'components/Button';
import { RootStackParamList } from '../navigation';

type DetailsSreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

export default function DetailsScreen() {
  const params = useRoute<DetailsSreenRouteProp>().params;

  function handleAddWidget() {}

  function openUrl(url: string) {
    Linking.canOpenURL(url).then((res) => Linking.openURL(url));
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} bounces={false} style={styles.container}>
      <Image
        source={{ uri: params.avatar_url, cache: 'force-cache' }}
        width={140}
        height={140}
        style={styles.avatar}
      />
      <Text style={styles.userName}>{`@${params.login}`}</Text>
      <Text style={styles.bio}>{params.bio}</Text>
      <AntDesign
        onPress={() => openUrl(`https://x.com/${params.twitter_username}`)}
        name="twitter"
        size={24}
        color="#1D9BF0"
        style={{ marginBottom: 30 }}
      />
      <Container spacer={5}>
        <Text>{`Followers: ${params.followers}`}</Text>
      </Container>
      <Container spacer={5}>
        <Text>{`Following: ${params.following}`}</Text>
      </Container>
      <Container spacer={30}>
        <Text>{`Public repositories: ${params.public_repos}`}</Text>
      </Container>

      <Button onPress={handleAddWidget} title="Add to Widget" />
    </ScrollView>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  avatar: {
    borderRadius: 100,
    alignSelf: 'center',
  },
  userName: {
    fontSize: 29,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 20,
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
});
