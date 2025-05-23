import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <ThemedView style={styles.container}>
        <MaterialIcons name="home" size={64} color="#FFD700" style={{ marginBottom: 24 }} />
        {/* Using 'engineering' as a hat icon, since 'hard-hat' and 'chef-hat' are not available in MaterialIcons */}
        <MaterialIcons name="engineering" size={64} color="#FFD700" style={{ marginBottom: 24 }} />
        <ThemedText type="title">This screen doesn't exist.</ThemedText>
        <Link href="/" style={styles.link}>
          <ThemedText type="link">Go to home screen!</ThemedText>
        </Link>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
