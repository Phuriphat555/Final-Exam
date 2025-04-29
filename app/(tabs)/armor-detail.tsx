"use client"
import { StyleSheet, Image, ScrollView, View, TouchableOpacity, StatusBar } from "react-native"
import { useLocalSearchParams, useRouter } from "expo-router"
import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import { LinearGradient } from "expo-linear-gradient"

interface ArmorSet {
  id: number
  name: string
  type: string
  rarity: number
  defense: number
  resistance: {
    fire: number
    water: number
    thunder: number
    ice: number
    dragon: number
  }
  imageUrl: any
  description?: string
}

export default function ArmorDetailScreen() {
  const params = useLocalSearchParams()
  const router = useRouter()
  const armor: ArmorSet = JSON.parse(params.armor as string)

  return (
    <ThemedView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Image
        source={{
          uri: "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-armor-banner.jpg",
        }}
        style={styles.backgroundImage}
      />
      <LinearGradient colors={["rgba(0,0,0,0.9)", "rgba(0,0,0,0.85)"]} style={styles.overlay}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.replace("/(tabs)/armorsets")}>
          <ThemedText style={styles.backButtonText}>← Back</ThemedText>
        </TouchableOpacity>

        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <View style={styles.imageContainer}>
              <Image
                source={typeof armor.imageUrl === "string" ? { uri: armor.imageUrl } : armor.imageUrl}
                style={styles.armorImage}
                resizeMode="contain"
              />
            </View>
            <ThemedText type="title" style={styles.armorName}>
              {armor.name}
            </ThemedText>
            <View style={styles.typeContainer}>
              <ThemedText style={styles.armorType}>{armor.type}</ThemedText>
              <View style={styles.rarityContainer}>
                <ThemedText style={styles.rarityText}>★{armor.rarity}</ThemedText>
              </View>
            </View>
          </View>

          <View style={styles.content}>
            <View style={styles.section}>
              <ThemedText style={styles.sectionTitle}>Description</ThemedText>
              <View style={styles.contentBox}>
                <ThemedText style={styles.description}>
                  {armor.description || "No description available for this armor set."}
                </ThemedText>
              </View>
            </View>

            <View style={styles.section}>
              <ThemedText style={styles.sectionTitle}>Stats</ThemedText>
              <View style={styles.contentBox}>
                <View style={styles.statRow}>
                  <ThemedText style={styles.statLabel}>Defense:</ThemedText>
                  <ThemedText style={styles.statValue}>{armor.defense}</ThemedText>
                </View>
                <View style={styles.statRow}>
                  <ThemedText style={styles.statLabel}>Type:</ThemedText>
                  <ThemedText style={styles.statValue}>{armor.type}</ThemedText>
                </View>
                <View style={styles.statRow}>
                  <ThemedText style={styles.statLabel}>Rarity:</ThemedText>
                  <ThemedText style={styles.statValue}>★{armor.rarity}</ThemedText>
                </View>
              </View>
            </View>

            <View style={styles.section}>
              <ThemedText style={styles.sectionTitle}>Elemental Resistances</ThemedText>
              <View style={styles.contentBox}>
                <View style={styles.resistanceGrid}>
                  {Object.entries(armor.resistance).map(([element, value], index) => (
                    <View key={index} style={styles.resistanceItem}>
                      <ThemedText style={styles.elementName}>
                        {element.charAt(0).toUpperCase() + element.slice(1)}
                      </ThemedText>
                      <ThemedText
                        style={[
                          styles.resistanceValue,
                          value > 0 ? styles.positiveResistance : value < 0 ? styles.negativeResistance : null,
                        ]}
                      >
                        {value > 0 ? "+" : ""}
                        {value}
                      </ThemedText>
                    </View>
                  ))}
                </View>
              </View>
            </View>

            <View style={styles.section}>
              <ThemedText style={styles.sectionTitle}>Recommended Weapons</ThemedText>
              <View style={styles.contentBox}>
                <ThemedText style={styles.description}>
                  Based on this armor's resistances and type, the following weapons are recommended:
                </ThemedText>
                <View style={styles.recommendationList}>
                  {armor.type === "Light" && (
                    <>
                      <ThemedText style={styles.bulletPoint}>• Dual Blades</ThemedText>
                      <ThemedText style={styles.bulletPoint}>• Bow</ThemedText>
                      <ThemedText style={styles.bulletPoint}>• Insect Glaive</ThemedText>
                    </>
                  )}
                  {armor.type === "Medium" && (
                    <>
                      <ThemedText style={styles.bulletPoint}>• Long Sword</ThemedText>
                      <ThemedText style={styles.bulletPoint}>• Sword and Shield</ThemedText>
                      <ThemedText style={styles.bulletPoint}>• Switch Axe</ThemedText>
                    </>
                  )}
                  {armor.type === "Heavy" && (
                    <>
                      <ThemedText style={styles.bulletPoint}>• Great Sword</ThemedText>
                      <ThemedText style={styles.bulletPoint}>• Hammer</ThemedText>
                      <ThemedText style={styles.bulletPoint}>• Lance</ThemedText>
                    </>
                  )}
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D1117",
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0.2,
  },
  overlay: {
    width: "100%",
    height: "100%",
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 10,
  },
  scrollView: {
    flex: 1,
    marginTop: 80,
  },
  backButtonText: {
    color: "#FFD700",
    fontSize: 18,
    fontWeight: "600",
  },
  header: {
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 20,
  },
  imageContainer: {
    width: 150,
    height: 150,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#FFD700",
    overflow: "hidden",
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2A2A2A",
  },
  armorImage: {
    width: 140,
    height: 140,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#FFD700",
    backgroundColor: "#2A2A2A",
  },
  armorName: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFD700",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    letterSpacing: 0.5,
  },
  typeContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 5,
  },
  armorType: {
    fontSize: 18,
    color: "#BDB76B",
  },
  rarityContainer: {
    backgroundColor: "rgba(255, 215, 0, 0.2)",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#FFD700",
  },
  rarityText: {
    fontSize: 14,
    color: "#FFD700",
  },
  content: {
    padding: 20,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFD700",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 215, 0, 0.3)",
    paddingBottom: 5,
  },
  contentBox: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: "rgba(255, 215, 0, 0.3)",
  },
  description: {
    fontSize: 16,
    color: "#E6E6E6",
    lineHeight: 24,
  },
  statRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  statLabel: {
    fontSize: 16,
    color: "#FFD700",
    fontWeight: "600",
  },
  statValue: {
    fontSize: 16,
    color: "#E6E6E6",
  },
  resistanceGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  resistanceItem: {
    width: "48%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: 8,
  },
  elementName: {
    fontSize: 16,
    color: "#E6E6E6",
  },
  resistanceValue: {
    fontSize: 16,
    color: "#E6E6E6",
    fontWeight: "bold",
  },
  positiveResistance: {
    color: "#4CAF50",
  },
  negativeResistance: {
    color: "#F44336",
  },
  recommendationList: {
    marginTop: 10,
  },
  bulletPoint: {
    fontSize: 16,
    color: "#E6E6E6",
    marginBottom: 5,
  },
})
