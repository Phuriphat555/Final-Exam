import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

const monsters = [
  {
    id: '1',
    name: 'Rathalos',
    image: 'https://example.com/rathalos.png',
    description: 'King of the Skies...',
    weaknesses: ['Dragon', 'Thunder'],
    habitat: 'Ancient Forest',
  },
  {
    id: '2',
    name: 'Anjanath',
    image: 'https://example.com/anjanath.png',
    description: 'Fierce predator...',
    weaknesses: ['Water', 'Thunder'],
    habitat: 'Ancient Forest',
  },
  // เพิ่มข้อมูลได้เรื่อย ๆ
];

export default function MonsterListScreen({ navigation }) {
  const [search, setSearch] = useState('');

  const filteredMonsters = monsters.filter(monster =>
    monster.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.search}
        placeholder="Search Monster..."
        placeholderTextColor="#aaa"
        onChangeText={setSearch}
        value={search}
      />
      <FlatList
        data={filteredMonsters}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('MonsterDetail', { monster: item })}>
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
