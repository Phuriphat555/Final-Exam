import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function MonsterCard({ monster, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: monster.img }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{monster.name}</Text>
        <Text style={styles.type}>{monster.type}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 10,
    marginVertical: 8,
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  info: {
    marginLeft: 15,
    flex: 1,
  },
  name: {
    fontSize: 18,
    color: '#FFD700',
    fontWeight: 'bold',
  },
  type: {
    fontSize: 14,
    color: '#ccc',
  },
});
