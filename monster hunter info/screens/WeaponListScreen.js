import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import WeaponCard from '../components/WeaponCard';
import weapons from '../data/weapons.json';

export default function WeaponListScreen() {
  const router = useRouter();
  const [searchText, setSearchText] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const weaponTypes = [...new Set(weapons.map(w => w.type))];

  const filteredWeapons = weapons.filter(weapon => {
    const matchesSearch = weapon.name.toLowerCase().includes(searchText.toLowerCase());
    const matchesType = selectedType ? weapon.type === selectedType : true;
    return matchesSearch && matchesType;
  });

  const renderWeaponType = ({ item }) => (
    <TouchableOpacity 
      style={[
        styles.typeButton,
        selectedType === item && styles.selectedType
      ]}
      onPress={() => setSelectedType(selectedType === item ? '' : item)}
    >
      <Text style={[
        styles.typeText,
        selectedType === item && styles.selectedTypeText
      ]}>
        {item}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-weapons-banner.jpg' }}
        style={styles.backgroundImage}
      />
      <LinearGradient
        colors={['rgba(13, 17, 23, 0.95)', 'rgba(13, 17, 23, 0.85)']}
        style={styles.overlay}
      />

      <View style={styles.header}>
        <Text style={styles.title}>Weapon Arsenal</Text>
        <Text style={styles.subtitle}>Choose Your Combat Style</Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search weapons..."
          placeholderTextColor="#A0A0A0"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={weaponTypes}
        renderItem={renderWeaponType}
        keyExtractor={item => item}
        style={styles.typeList}
        contentContainerStyle={styles.typeListContent}
      />

      <FlatList
        data={filteredWeapons}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <WeaponCard
            weapon={item}
            onPress={() => router.push({
              pathname: '/weapon-detail',
              params: { weapon: JSON.stringify(item) }
            })}
          />
        )}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1117',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.3,
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  header: {
    padding: 20,
    paddingTop: 40,
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFD700',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    marginTop: 5,
    fontSize: 18,
    color: '#BDB76B',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  searchContainer: {
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  searchInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderColor: '#FFD700',
    borderRadius: 25,
    padding: 15,
    color: '#FFFFFF',
    fontSize: 16,
  },
  typeList: {
    maxHeight: 50,
    marginBottom: 10,
  },
  typeListContent: {
    paddingHorizontal: 20,
  },
  typeButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#FFD700',
  },
  selectedType: {
    backgroundColor: '#FFD700',
  },
  typeText: {
    color: '#FFD700',
    fontSize: 14,
    fontWeight: '600',
  },
  selectedTypeText: {
    color: '#000000',
  },
  listContainer: {
    padding: 15,
    paddingTop: 5,
  },
});
