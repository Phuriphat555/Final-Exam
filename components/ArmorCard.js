import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ArmorCard({ armor, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <LinearGradient
        colors={['rgba(30, 30, 30, 0.95)', 'rgba(20, 20, 20, 0.95)']}
        style={styles.cardGradient}
      >
        <Image 
          source={{ uri: armor.img || 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-hunter-alpha-armor_render_001.png' }} 
          style={styles.image} 
        />
        <View style={styles.info}>
          <Text style={styles.name}>{armor.name}</Text>
          <View style={styles.details}>
            <Text style={styles.type}>{armor.type}</Text>
            <Text style={styles.defense}>Defense: {armor.defense || "?"}</Text>
            {armor.skills && (
              <View style={styles.skillsContainer}>
                {armor.skills.map((skill, index) => (
                  <View key={index} style={styles.skillBadge}>
                    <Text style={styles.skillText}>{skill}</Text>
                  </View>
                ))}
              </View>
            )}
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 15,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  cardGradient: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#2A2A2A',
    borderWidth: 2,
    borderColor: '#FFD700',
  },
  info: {
    flex: 1,
    marginLeft: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 5,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  details: {
    gap: 5,
  },
  type: {
    fontSize: 16,
    color: '#E6E6E6',
  },
  defense: {
    fontSize: 14,
    color: '#BDB76B',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
    marginTop: 3,
  },
  skillBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FFD700',
  },
  skillText: {
    fontSize: 12,
    color: '#E6E6E6',
  },
});
