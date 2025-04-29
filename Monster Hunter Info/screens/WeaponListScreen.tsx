import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import WeaponCard from '../components/WeaponCard';

// Temporary mock data - replace with actual API call later
const mockWeapons = [
  {
    id: '1',
    name: 'Iron Sword',
    type: 'Great Sword',
    attack: 384,
    element: 'None',
    img: 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-iron_sword_icon.png'
  },
  {
    id: '2',
    name: 'Chrome Razor I',
    type: 'Great Sword',
    attack: 432,
    element: 'None',
    img: 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-chrome_razor_icon.png'
  },
];

export default function WeaponListScreen() {
  const router = useRouter();

  const handleWeaponPress = (weaponId: string) => {
    router.push({
      pathname: '/weapon-detail',
      params: { id: weaponId }
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={mockWeapons}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <WeaponCard
            weapon={item}
            onPress={() => handleWeaponPress(item.id)}
          />
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1117',
  },
  listContent: {
    padding: 16,
  },
}); 