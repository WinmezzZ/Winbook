import type { RootStackParamList } from '../screens';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Button, StyleSheet, Text, View } from 'react-native';

export function NotFoundPage({ route, navigation }: NativeStackScreenProps<RootStackParamList, 'NotFound'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>404 Not Found ({route.path})</Text>
      <Button onPress={() => navigation.navigate('Home')} title="Go to home" />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  button: {
    margin: 24,
  },
});
