import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Monster Hunter Info</Text>
      <Text style={styles.subtitle}>Your ultimate guide to Monster Hunter World.</Text>

      <Button
        title="Explore Monsters"
        onPress={() => navigation.navigate('MonsterList')}
      />

      <Button
        title="Explore Armors"
        onPress={() => navigation.navigate('ArmorList')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 40,
  },
});
