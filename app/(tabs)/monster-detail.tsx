"use client"
import { StyleSheet, Image, ScrollView, View, TouchableOpacity, StatusBar } from "react-native"
import { useLocalSearchParams, useRouter } from "expo-router"
import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import { LinearGradient } from "expo-linear-gradient"
import { useState } from "react"

interface Monster {
  id: number
  name: string
  type: string
  weaknesses: string[]
  imageUrl: string | any
}

const monsterImages: Record<string, any> = {
  "Great Jagras": require("../../assets/images/monsters/MHW_Great_Jagras_Icon_11zon.png"),
  "Kulu-Ya-Ku": require("../../assets/images/monsters/MHW_Kulu-Ya-Ku_Icon_11zon.png"),
  "Pukei-Pukei": require("../../assets/images/monsters/MHW_Pukei-Pukei_Icon_11zon.png"),
  Barroth: require("../../assets/images/monsters/MHW_Barroth_Icon_11zon.png"),
  Jyuratodus: require("../../assets/images/monsters/MHW_Jyuratodus_Icon_11zon.png"),
  "Tobi-Kadachi": require("../../assets/images/monsters/MHW_Tobi-Kadachi_Icon_11zon.png"),
  Anjanath: require("../../assets/images/monsters/MHW_Anjanath_Icon_11zon.png"),
  Rathian: require("../../assets/images/monsters/MHW_Rathian_Icon_11zon.png"),
  "Tzitzi-Ya-Ku": require("../../assets/images/monsters/MHW_Tzitzi-Ya-Ku_Icon_11zon.png"),
  Paolumu: require("../../assets/images/monsters/MHW_Paolumu_Icon_11zon.png"),
  Legiana: require("../../assets/images/monsters/MHW_Legiana_Icon_11zon.png"),
  Odogaron: require("../../assets/images/monsters/MHW_Odogaron_Icon_11zon.png"),
  Rathalos: require("../../assets/images/monsters/MHW_Rathalos_Icon_11zon.png"),
  Diablos: require("../../assets/images/monsters/MHW_Diablos_Icon_11zon.png"),
  Kirin: require("../../assets/images/monsters/MHW_Kirin_Icon_11zon.png"),
  "Zorah Magdaros": require("../../assets/images/monsters/MHW_Zorah_Magdaros_Icon_11zon.png"),
  Nergigante: require("../../assets/images/monsters/MHW_Nergigante_Icon_11zon.jpeg"),
  Teostra: require("../../assets/images/monsters/MHW_Teostra_Icon_11zon.png"),
  "Kushala Daora": require("../../assets/images/monsters/MHW_Kushala_Daora_Icon_11zon.png"),
  "Vaal Hazak": require("../../assets/images/monsters/MHW_Vaal_Hazak_Icon_11zon.png"),
  "Xeno'jiiva": require("../../assets/images/monsters/MHW_Xeno_jiiva_Icon_11zon.png"),
  Deviljho: require("../../assets/images/monsters/MHW_Deviljho_Icon_11zon.png"),
  "Kulve Taroth": require("../../assets/images/monsters/MHW_Kulve_Taroth_Icon_11zon.png"),
  Lunastra: require("../../assets/images/monsters/MHW_Lunastra_Icon_11zon.png"),
  Behemoth: require("../../assets/images/monsters/MHW_Behemoth_Icon_11zon.png"),
  Leshen: require("../../assets/images/monsters/MHW_Leshen_Icon_11zon.png"),
  "Ancient Leshen": require("../../assets/images/monsters/MHW_Ancient_Leshen_Icon_11zon.png"),
  Beotodus: require("../../assets/images/monsters/MHWI_Beotodus_Icon_11zon.png"),
  Banbaro: require("../../assets/images/monsters/MHWI_Banbaro_Icon_11zon.png"),
  Velkhana: require("../../assets/images/monsters/MHWI_Velkhana_Icon_11zon.png"),
}

// Helper function to safely get monster image
const getMonsterImage = (monsterName: string) => {
  try {
    return monsterImages[monsterName]
  } catch (error) {
    console.log(`Error loading image for ${monsterName}:`, error)
    return require("../../assets/images/monsters/MHW_Great_Jagras_Icon_11zon.png")
  }
}

export default function MonsterDetailScreen() {
  const params = useLocalSearchParams()
  const router = useRouter()
  const monster: Monster = JSON.parse(params.monster as string)

  // Monster descriptions - in a real app, this would come from your data
  const descriptions: Record<number, string> = {
    1: "The Great Jagras is known to swallow its prey whole. When it does, its stomach expands, making it slow and vulnerable to attacks.",
    2: "The Kulu-Ya-Ku is an intelligent bird wyvern that uses tools to fight. It's known to pick up rocks to defend itself from attackers.",
    3: "The Pukei-Pukei uses its long tongue to gather poison from plants, which it stores in its sac-like throat pouch. It can spray this poison at threats.",
    4: "The Barroth covers itself in mud to regulate its body temperature and for protection. When the mud dries, it becomes armor-like.",
    5: "The Jyuratodus dwells in the mud of the Wildspire Waste. The mud coating its body acts as armor and a weapon.",
    6: "The Tobi-Kadachi stores electricity in its fur. When threatened, it can release this electricity in devastating attacks.",
    7: "The Anjanath is a fire-breathing brute wyvern. When angered, a sail-like appendage on its back extends, and its nose swells.",
    8: "The Rathian is the female counterpart to the Rathalos. Known as the 'Queen of the Land,' she fiercely defends her territory and young.",
    9: "The Tzitzi-Ya-Ku can emit a blinding flash from the organs on its head, stunning prey and predators alike.",
    10: "The Paolumu can inflate its neck sac to float and maneuver in the air. It can also exhale powerful gusts of wind to keep threats at bay.",
    11: "The Legiana is the queen of the Coral Highlands, using its mastery over ice to freeze and shatter its prey.",
    12: "The Odogaron is an incredibly aggressive fanged wyvern that moves with frightening speed and ferocity.",
    13: "The Rathalos, known as the 'King of the Skies,' is a fearsome flying wyvern that rules the Ancient Forest from above.",
    14: "The Diablos is a terrifying horned wyvern that burrows through the desert sands, ambushing prey from below.",
    15: "The Kirin is a mysterious elder dragon that harnesses the power of lightning, its body crackling with electricity.",
    16: "Zorah Magdaros is a colossal elder dragon, its body a walking volcano that threatens the very ecosystem.",
    17: "The Nergigante is an aggressive elder dragon that feeds on other elder dragons, its spikes regenerating as it fights.",
    18: "Teostra is a flame-wreathed elder dragon that can control fire and explosive powder with devastating effect.",
    19: "The Kushala Daora is an elder dragon with mastery over wind, surrounding itself with powerful storms.",
    20: "Vaal Hazak is an elder dragon that commands the power of effluvium, using it to drain the life from its prey.",
    21: "Xeno'jiiva is a mysterious elder dragon discovered in the depths of the Elder's Recess, possessing incredible power.",
    22: "The Deviljho is a nomadic brute wyvern that is constantly hunting due to its insatiable hunger.",
    23: "Kulve Taroth is a magnificent elder dragon covered in golden scales, ruling over a vast network of caverns.",
    24: "Lunastra, the female counterpart to Teostra, controls blue flames and can create devastating heat waves.",
    25: "The Behemoth is a powerful creature from another world, wielding control over lightning and meteor strikes.",
    26: "The Leshen is a mysterious creature from another realm that controls nature and woodland creatures.",
    27: "The Ancient Leshen is an even more powerful variant of the Leshen, with stronger control over nature.",
    28: "Beotodus is a piscine wyvern that swims through deep snow, using its fins to cut through the frozen terrain.",
    29: "The Banbaro is a massive brute wyvern that uses its horns to uproot trees and create powerful charging attacks.",
    30: "Velkhana is an elder dragon with absolute control over ice, capable of flash-freezing anything in its path.",
  }

  // Habitats - in a real app, this would come from your data
  const habitats: Record<number, string> = {
    1: "Ancient Forest",
    2: "Ancient Forest",
    3: "Ancient Forest",
    4: "Wildspire Waste",
    5: "Wildspire Waste",
    6: "Ancient Forest",
    7: "Ancient Forest",
    8: "Ancient Forest",
    9: "Coral Highlands",
    10: "Coral Highlands",
    11: "Coral Highlands",
    12: "Rotten Vale",
    13: "Ancient Forest",
    14: "Wildspire Waste",
    15: "Coral Highlands",
    16: "Various Locations",
    17: "Elder's Recess",
    18: "Elder's Recess",
    19: "Elder's Recess",
    20: "Rotten Vale",
    21: "Elder's Recess",
    22: "Various Locations",
    23: "Caverns of El Dorado",
    24: "Elder's Recess",
    25: "Special Arena",
    26: "Ancient Forest",
    27: "Ancient Forest",
    28: "Hoarfrost Reach",
    29: "Hoarfrost Reach",
    30: "Hoarfrost Reach",
  }

  return (
    <ThemedView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Image
        source={{
          uri: "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-background.jpg",
        }}
        style={styles.backgroundImage}
      />
      <LinearGradient colors={["rgba(0,0,0,0.9)", "rgba(0,0,0,0.85)"]} style={styles.overlay}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.replace("/(tabs)/explore")}>
          <ThemedText style={styles.backButtonText}>← Back</ThemedText>
        </TouchableOpacity>

        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <View style={styles.imageContainer}>
              <Image
                source={getMonsterImage(monster.name)}
                style={styles.monsterImage}
                resizeMode="contain"
              />
            </View>
            <ThemedText type="title" style={styles.monsterName}>
              {monster.name}
            </ThemedText>
            <View style={styles.typeContainer}>
              <ThemedText style={styles.monsterType}>{monster.type}</ThemedText>
            </View>
          </View>

          <View style={styles.content}>
            <View style={styles.section}>
              <ThemedText style={styles.sectionTitle}>Description</ThemedText>
              <View style={styles.contentBox}>
                <ThemedText style={styles.description}>
                  {descriptions[monster.id] || "No description available for this monster."}
                </ThemedText>
              </View>
            </View>

            <View style={styles.section}>
              <ThemedText style={styles.sectionTitle}>Weaknesses</ThemedText>
              <View style={styles.contentBox}>
                <View style={styles.weaknessBadges}>
                  {monster.weaknesses.map((weakness, index) => (
                    <View key={index} style={styles.badge}>
                      <ThemedText style={styles.badgeText}>{weakness}</ThemedText>
                    </View>
                  ))}
                </View>
              </View>
            </View>

            <View style={styles.section}>
              <ThemedText style={styles.sectionTitle}>Habitat</ThemedText>
              <View style={styles.contentBox}>
                <ThemedText style={styles.description}>{habitats[monster.id] || "Unknown"}</ThemedText>
              </View>
            </View>

            <View style={styles.section}>
              <ThemedText style={styles.sectionTitle}>Hunting Tips</ThemedText>
              <View style={styles.contentBox}>
                <ThemedText style={styles.description}>
                  • Target the monster's weak points for maximum damage
                </ThemedText>
                <ThemedText style={styles.description}>
                  • Use weapons that exploit the monster's elemental weaknesses
                </ThemedText>
                <ThemedText style={styles.description}>
                  • Watch for tell-tale signs before the monster's special attacks
                </ThemedText>
                <ThemedText style={styles.description}>
                  • Bring appropriate items to counter the monster's abilities
                </ThemedText>
              </View>
            </View>

            <View style={styles.section}>
              <ThemedText style={styles.sectionTitle}>Rewards</ThemedText>
              <View style={styles.contentBox}>
                <ThemedText style={styles.description}>
                  • Monster-specific materials for crafting weapons and armor
                </ThemedText>
                <ThemedText style={styles.description}>• Research points and Hunter Rank experience</ThemedText>
                <ThemedText style={styles.description}>• Rare gems and plates (low drop rate)</ThemedText>
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
    position: 'relative',
  },
  monsterImage: {
    width: '100%',
    height: '100%',
  },
  monsterName: {
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
  monsterType: {
    fontSize: 18,
    color: "#BDB76B",
  },
  content: {
    padding: 20,
    backgroundColor: "transparent",
  },
  section: {
    marginBottom: 25,
    backgroundColor: "transparent",
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
  weaknessBadges: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    backgroundColor: "transparent",
  },
  badge: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#FFD700",
  },
  badgeText: {
    color: "#E6E6E6",
    fontSize: 14,
    fontWeight: "600",
  },
})
