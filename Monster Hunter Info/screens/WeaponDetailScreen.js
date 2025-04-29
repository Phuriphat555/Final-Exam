import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function WeaponDetailScreen({ route }) {
  const { weapon } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: weapon.image }} style={styles.image} />
      <Text style={styles.name}>{weapon.name}</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Type</Text>
        <Text style={styles.sectionText}>{weapon.type}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Element</Text>
        <Text style={styles.sectionText}>{weapon.element}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Attack Power</Text>
        <Text style={styles.sectionText}>{weapon.attack}</Text>
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
    color: '#00BFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
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
