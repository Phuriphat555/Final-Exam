import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import axios from 'axios';

export default function MonsterDetailScreen({ route }) {
  const { monster } = route.params;
  const [monsterDetails, setMonsterDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMonsterDetails = async () => {
      try {
        const response = await axios.get(`https://mhw-db.com/monsters/${monster.id}`);
        setMonsterDetails(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load monster details');
        setLoading(false);
      }
    };

    fetchMonsterDetails();
  }, [monster.id]);

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

  if (!monsterDetails) {
    return null;
  }

  return (
    <ScrollView style={styles.container}>
      <Image 
        source={{ uri: monsterDetails.icon }} 
        style={styles.image}
        defaultSource={require('../assets/images/placeholder.png')}
      />
      <Text style={styles.name}>{monsterDetails.name}</Text>
      <Text style={styles.type}>{monsterDetails.type}</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Weaknesses</Text>
        <View style={styles.weaknessContainer}>
          {monsterDetails.weaknesses.map((weakness, index) => (
            <View key={index} style={styles.weaknessItem}>
              <Text style={styles.weaknessElement}>{weakness.element}</Text>
              <Text style={styles.weaknessStars}>{'★'.repeat(weakness.stars)}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Habitats</Text>
        <View style={styles.habitatContainer}>
          {monsterDetails.habitats.map((habitat, index) => (
            <Text key={index} style={styles.habitatText}>{habitat.name}</Text>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.sectionText}>{monsterDetails.description}</Text>
      </View>

      {monsterDetails.rewards && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Common Rewards</Text>
          <View style={styles.rewardsContainer}>
            {monsterDetails.rewards.map((reward, index) => (
              <View key={index} style={styles.rewardItem}>
                <Text style={styles.rewardName}>{reward.name}</Text>
                <Text style={styles.rewardChance}>{reward.chance}%</Text>
              </View>
            ))}
          </View>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1B1B',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1B1B1B'
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1B1B1B'
  },
  errorText: {
    color: '#FF5722',
    fontSize: 16
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
    backgroundColor: '#2e2e2e'
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
    backgroundColor: '#2e2e2e',
    padding: 15,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  sectionTitle: {
    fontSize: 20,
    color: '#F5F5F5',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  sectionText: {
    fontSize: 16,
    color: '#DDD',
    lineHeight: 24,
  },
  weaknessContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  weaknessItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3e3e3e',
    padding: 8,
    borderRadius: 5,
    minWidth: 100,
  },
  weaknessElement: {
    color: '#fff',
    marginRight: 5,
  },
  weaknessStars: {
    color: '#FFD700',
  },
  habitatContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  habitatText: {
    color: '#DDD',
    backgroundColor: '#3e3e3e',
    padding: 8,
    borderRadius: 5,
  },
  rewardsContainer: {
    gap: 10,
  },
  rewardItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#3e3e3e',
    padding: 10,
    borderRadius: 5,
  },
  rewardName: {
    color: '#DDD',
    flex: 1,
  },
  rewardChance: {
    color: '#FFD700',
    fontWeight: 'bold',
  },
});
