import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

const armors = [
  {
    id: '1',
    name: 'Bone Armor',
    type: 'Low Rank',
    defense: 16,
    skills: ['Health Boost'],
    image: 'https://example.com/bone_armor.png',
  },
  {
    id: '2',
    name: 'Leather Armor',
    type: 'Low Rank',
    defense: 12,
    skills: ['Gathering'],
    image: 'https://example.com/leather_armor.png',
  },
];

export default function ArmorListScreen({ navigation }) {
  const [search, setSearch] = useState('');

  const filteredArmors = armors.filter(armor =>
    armor.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.search}
        placeholder="Search Armor..."
        placeholderTextColor="#aaa"
        onChangeText={setSearch}
        value={search}
      />
      <FlatList
        data={filteredArmors}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ArmorDetail', { armor: item })}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 10 },
  search: {
    backgroundColor: '#222',
    padding: 10,
    borderRadius: 10,
    color: '#fff',
    marginBottom: 10,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#2e2e2e',
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  image: { width: 60, height: 60, borderRadius: 30, marginRight: 10 },
  name: { fontSize: 18, color: '#fff' },
});
