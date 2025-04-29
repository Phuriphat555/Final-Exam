"use client"
import {
  StyleSheet,
  Image,
  ScrollView,
  View,
  TouchableOpacity,
  StatusBar,
  type ViewStyle,
  type ImageStyle,
  type TextStyle,
} from "react-native"
import { useLocalSearchParams, useRouter } from "expo-router"
import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import { LinearGradient } from "expo-linear-gradient"

interface Weapon {
  id: number
  name: string
  type: string
  attack: number
  element: string | null
  rarity: number
  imageUrl: string
  difficulty: string
}

export default function WeaponDetailScreen() {
  const params = useLocalSearchParams()
  const router = useRouter()
  const weapon: Weapon = JSON.parse(params.weapon as string)

  // Weapon descriptions - in a real app, this would come from your data
  const descriptions: Record<number, string> = {
    1: "A basic Great Sword made of iron. Simple yet effective for beginners.",
    2: "A standard Long Sword forged from iron. Its balanced design makes it suitable for most hunts.",
    3: "A simple Bow crafted for hunters. Its versatility allows for various coatings to be applied.",
    4: "A Switch Axe made from monster bones. Transforms between axe and sword modes for versatile attacks.",
    5: "A basic Sword & Shield made of iron. Offers good mobility and the ability to use items while drawn.",
    6: "Dual Blades forged from matched materials. Allows for rapid attacks and high mobility.",
    7: "A basic Lance made of iron. Offers excellent defensive capabilities with its large shield.",
    8: "An iron Gunlance that combines a lance with a built-in cannon. Allows for powerful shelling attacks.",
    9: "A heavy Iron Hammer. Delivers devastating blunt damage to monster heads.",
    10: "A Hunting Horn made from metal. Produces melodies that can buff hunters in various ways.",
    11: "A Charge Blade made from alloy. Can transform between sword & shield and axe modes.",
    12: "An Insect Glaive made from iron. Allows for aerial attacks and comes with a Kinsect companion.",
    13: "A Light Bowgun made from iron. Offers mobility and rapid-fire capabilities.",
    14: "A Heavy Bowgun made from iron. Sacrifices mobility for high damage output.",
    15: "A Great Sword imbued with fire element. Effective against ice-based monsters.",
    16: "A Long Sword charged with thunder element. Effective against water-based monsters.",
    17: "A Bow that fires ice-element arrows. Effective against fire-based monsters.",
    18: "A Switch Axe imbued with dragon element. Effective against elder dragons.",
    19: "A Sword & Shield with water element. Effective against fire-based monsters.",
    20: "Dual Blades that inflict poison status. Gradually damages monsters over time.",
  }

  // Special abilities - in a real app, this would come from your data
  const specialAbilities: Record<number, string[]> = {
    1: ["Charged Slash", "Tackle", "True Charged Slash"],
    2: ["Spirit Blade", "Foresight Slash", "Helm Breaker"],
    3: ["Power Shot", "Dragon Piercer", "Quick Shot"],
    4: ["Wild Swing", "Element Discharge", "Zero Sum Discharge"],
    5: ["Perfect Rush", "Advancing Slash", "Shield Bash"],
    6: ["Demon Mode", "Blade Dance", "Demon Flurry Rush"],
    7: ["Power Guard", "Counter Thrust", "Dash Attack"],
    8: ["Wyrmstake Cannon", "Wyvern's Fire", "Full Burst"],
    9: ["Big Bang Combo", "Spinning Attack", "Charged Attack"],
    10: ["Performance", "Encore", "Sonic Waves"],
    11: ["Element Discharge", "Guard Point", "Super Amped Element Discharge"],
    12: ["Vault", "Aerial Attack", "Descending Thrust"],
    13: ["Rapid Fire", "Wyvernblast", "Sliding Reload"],
    14: ["Wyvernsnipe", "Wyvernheart", "Special Ammo"],
    15: ["Fire Damage", "Charged Slash", "True Charged Slash"],
    16: ["Thunder Damage", "Spirit Blade", "Helm Breaker"],
    17: ["Ice Damage", "Power Shot", "Dragon Piercer"],
    18: ["Dragon Damage", "Element Discharge", "Zero Sum Discharge"],
    19: ["Water Damage", "Perfect Rush", "Shield Bash"],
    20: ["Poison Status", "Demon Mode", "Blade Dance"],
  }

  return (
    <ThemedView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Image
        source={{
          uri: "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-weapons-banner.jpg",
        }}
        style={styles.backgroundImage}
      />
      <LinearGradient colors={["rgba(0,0,0,0.9)", "rgba(0,0,0,0.85)"]} style={styles.overlay}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <ThemedText style={styles.backButtonText}>← Back</ThemedText>
        </TouchableOpacity>

        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <View style={styles.imageContainer}>
              <Image 
                source={require("@/assets/weapons/placeholder-weapon.png")} 
                defaultSource={require("@/assets/weapons/placeholder-weapon.png")}
                style={styles.weaponImage} 
              />
            </View>
            <ThemedText type="title" style={styles.weaponName}>{weapon.name}</ThemedText>
            <View style={styles.typeContainer}>
              <ThemedText style={styles.weaponType}>{weapon.type}</ThemedText>
              <View style={[styles.badge, styles[weapon.difficulty.toLowerCase() as keyof typeof styles]]}>
                <ThemedText style={styles.badgeText}>{weapon.difficulty}</ThemedText>
              </View>
            </View>
          </View>

          <View style={styles.content}>
            <View style={styles.section}>
              <ThemedText style={styles.sectionTitle}>Description</ThemedText>
              <View style={styles.contentBox}>
                <ThemedText style={styles.description}>
                  {descriptions[weapon.id] || "No description available for this weapon."}
                </ThemedText>
              </View>
            </View>

            <View style={styles.section}>
              <ThemedText style={styles.sectionTitle}>Stats</ThemedText>
              <View style={styles.contentBox}>
                <View style={styles.statRow}>
                  <ThemedText style={styles.statLabel}>Attack:</ThemedText>
                  <ThemedText style={styles.statValue}>{weapon.attack}</ThemedText>
                </View>
                <View style={styles.statRow}>
                  <ThemedText style={styles.statLabel}>Element:</ThemedText>
                  <ThemedText style={styles.statValue}>{weapon.element || "None"}</ThemedText>
                </View>
                <View style={styles.statRow}>
                  <ThemedText style={styles.statLabel}>Rarity:</ThemedText>
                  <ThemedText style={styles.statValue}>★{weapon.rarity}</ThemedText>
                </View>
                <View style={styles.statRow}>
                  <ThemedText style={styles.statLabel}>Sharpness:</ThemedText>
                  <View style={styles.sharpnessBar}>
                    <View style={[styles.sharpnessSegment, styles.sharpnessRed]} />
                    <View style={[styles.sharpnessSegment, styles.sharpnessOrange]} />
                    <View style={[styles.sharpnessSegment, styles.sharpnessYellow]} />
                    <View style={[styles.sharpnessSegment, styles.sharpnessGreen]} />
                    <View
                      style={[styles.sharpnessSegment, styles.sharpnessBlue, { width: weapon.rarity > 2 ? 30 : 0 }]}
                    />
                    <View
                      style={[styles.sharpnessSegment, styles.sharpnessWhite, { width: weapon.rarity > 4 ? 20 : 0 }]}
                    />
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.section}>
              <ThemedText style={styles.sectionTitle}>Special Abilities</ThemedText>
              <View style={styles.contentBox}>
                <View style={styles.abilitiesContainer}>
                  {specialAbilities[weapon.id]?.map((ability, index) => (
                    <View key={index} style={styles.abilityItem}>
                      <View style={styles.bulletPoint} />
                      <ThemedText style={styles.abilityText}>{ability}</ThemedText>
                    </View>
                  ))}
                </View>
              </View>
            </View>

            <View style={styles.section}>
              <ThemedText style={styles.sectionTitle}>Upgrade Materials</ThemedText>
              <View style={styles.contentBox}>
                <ThemedText style={styles.description}>• Iron Ore x5</ThemedText>
                <ThemedText style={styles.description}>• Monster Bone S x3</ThemedText>
                <ThemedText style={styles.description}>• Earth Crystal x2</ThemedText>
                {weapon.rarity > 3 && <ThemedText style={styles.description}>• Dragonite Ore x1</ThemedText>}
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
  } as ViewStyle,
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0.2,
  } as ImageStyle,
  overlay: {
    width: "100%",
    height: "100%",
  } as ViewStyle,
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 10,
  } as ViewStyle,
  backButtonText: {
    color: "#FFD700",
    fontSize: 18,
    fontWeight: "600",
  } as TextStyle,
  scrollView: {
    flex: 1,
    marginTop: 80,
  } as ViewStyle,
  header: {
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 20,
  } as ViewStyle,
  imageContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: "#FFD700",
    overflow: "hidden",
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1A1A1A",
  } as ViewStyle,
  weaponImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
  } as ImageStyle,
  weaponName: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFD700",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    letterSpacing: 0.5,
  } as TextStyle,
  typeContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 5,
  } as ViewStyle,
  weaponType: {
    fontSize: 18,
    color: "#BDB76B",
  } as TextStyle,
  content: {
    padding: 20,
  } as ViewStyle,
  section: {
    marginBottom: 25,
  } as ViewStyle,
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFD700",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 215, 0, 0.3)",
    paddingBottom: 5,
  } as TextStyle,
  contentBox: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: "rgba(255, 215, 0, 0.3)",
  } as ViewStyle,
  description: {
    fontSize: 16,
    color: "#E6E6E6",
    lineHeight: 24,
  } as TextStyle,
  statsContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: "rgba(255, 215, 0, 0.3)",
  } as ViewStyle,
  statRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  } as ViewStyle,
  statLabel: {
    fontSize: 16,
    color: "#FFD700",
    fontWeight: "600",
  } as TextStyle,
  statValue: {
    fontSize: 16,
    color: "#E6E6E6",
  } as TextStyle,
  sharpnessBar: {
    flexDirection: "row",
    height: 12,
    width: 150,
    borderRadius: 6,
    overflow: "hidden",
    backgroundColor: "#333",
  } as ViewStyle,
  sharpnessSegment: {
    height: "100%",
  } as ViewStyle,
  sharpnessRed: {
    backgroundColor: "#FF5252",
    width: 30,
  } as ViewStyle,
  sharpnessOrange: {
    backgroundColor: "#FF9800",
    width: 30,
  } as ViewStyle,
  sharpnessYellow: {
    backgroundColor: "#FFEB3B",
    width: 30,
  } as ViewStyle,
  sharpnessGreen: {
    backgroundColor: "#4CAF50",
    width: 30,
  } as ViewStyle,
  sharpnessBlue: {
    backgroundColor: "#2196F3",
  } as ViewStyle,
  sharpnessWhite: {
    backgroundColor: "#FFFFFF",
  } as ViewStyle,
  abilitiesContainer: {
    marginTop: 5,
  } as ViewStyle,
  abilityItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  } as ViewStyle,
  bulletPoint: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#FFD700",
    marginRight: 10,
  } as ViewStyle,
  abilityText: {
    fontSize: 16,
    color: "#E6E6E6",
  } as TextStyle,
  materialsContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: "rgba(255, 215, 0, 0.3)",
  } as ViewStyle,
  badge: {
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 12,
    borderWidth: 1,
  } as ViewStyle,
  beginner: {
    backgroundColor: "rgba(40, 167, 69, 0.2)",
    borderColor: "#28a745",
  } as ViewStyle,
  intermediate: {
    backgroundColor: "rgba(255, 193, 7, 0.2)",
    borderColor: "#ffc107",
  } as ViewStyle,
  advanced: {
    backgroundColor: "rgba(220, 53, 69, 0.2)",
    borderColor: "#dc3545",
  } as ViewStyle,
  badgeText: {
    fontSize: 12,
    color: "#E6E6E6",
  } as TextStyle,
})
