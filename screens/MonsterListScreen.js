import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Image, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';

export default function MonsterListScreen({ navigation }) {
  const [search, setSearch] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMonsters = async () => {
      try {
        const response = await axios.get('https://mhw-db.com/monsters');
        setMonsters(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load monsters');
        setLoading(false);
      }
    };

    fetchMonsters();
  }, []);

  const filteredMonsters = monsters.filter(monster =>
    monster.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#FF5722" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

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
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.card} 
            onPress={() => navigation.navigate('MonsterDetail', { monster: item })}
          >
            <Image 
              source={{ uri: item.icon }} 
              style={styles.image}
              defaultSource={require('../assets/images/placeholder.png')}
            />
            <View style={styles.infoContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.type}>{item.type}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#121212', 
    padding: 10 
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212'
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212'
  },
  errorText: {
    color: '#FF5722',
    fontSize: 16
  },
  search: {
    backgroundColor: '#222',
    padding: 15,
    borderRadius: 10,
    color: '#fff',
    marginBottom: 10,
    fontSize: 16
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#2e2e2e',
    marginBottom: 10,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: { 
    width: 60, 
    height: 60, 
    borderRadius: 30, 
    marginRight: 15,
    backgroundColor: '#3e3e3e'
  },
  infoContainer: {
    flex: 1
  },
  name: { 
    fontSize: 18, 
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 5
  },
  type: {
    fontSize: 14,
    color: '#aaa'
  }
});
