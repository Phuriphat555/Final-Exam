import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function ArmorDetailScreen({ route }) {
  const { armor } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: armor.image }} style={styles.image} />
      <Text style={styles.name}>{armor.name}</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Type</Text>
        <Text style={styles.sectionText}>{armor.type}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Defense</Text>
        <Text style={styles.sectionText}>{armor.defense}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <Text style={styles.sectionText}>{armor.skills.join(', ')}</Text>
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
    color: '#ADFF2F',
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
