import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function MonsterDetailScreen({ route }) {
  const { monster } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: monster.image }} style={styles.image} />
      <Text style={styles.name}>{monster.name}</Text>
      <Text style={styles.type}>{monster.type}</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Weakness</Text>
        <Text style={styles.sectionText}>{monster.weakness.join(', ')}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Habitat</Text>
        <Text style={styles.sectionText}>{monster.habitat.join(', ')}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.sectionText}>{monster.description}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1B1B',
  },
  image: {
    width: '100%',
    height: 250,
  },
  name: {
    fontSize: 28,
    color: '#FFD700',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  type: {
    fontSize: 18,
    color: '#FFA500',
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    color: '#F5F5F5',
    marginBottom: 5,
  },
  sectionText: {
    fontSize: 16,
    color: '#DDD',
  },
});
