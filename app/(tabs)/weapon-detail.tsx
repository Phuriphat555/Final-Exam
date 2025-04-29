"use client"
import {
  StyleSheet,
  Image,
  ScrollView,
  View,
  type TextStyle,
  type ViewStyle,
  type ImageStyle,
  TouchableOpacity,
  StatusBar,
} from "react-native"
import { useLocalSearchParams, useRouter } from "expo-router"
import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import { LinearGradient } from "expo-linear-gradient"

interface Weapon {
  id: number
  name: string
  type: string
  description: string
  playstyle: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  imageUrl: string
}

// Detailed weapon information
const weaponDetails: Record<
  string,
  {
    strengths: string[]
    weaknesses: string[]
    combos: string[]
    tips: string[]
  }
> = {
  "Great Sword": {
    strengths: [
      "Highest single-hit damage in the game",
      "Can block attacks in emergencies",
      "Great for breaking monster parts",
    ],
    weaknesses: ["Very slow movement speed while drawn", "Long attack animations", "Requires good positioning"],
    combos: [
      "Charged Slash → Strong Charged Slash → True Charged Slash",
      "Tackle → Strong Charged Slash",
      "Roll → Jumping Wide Slash",
    ],
    tips: [
      "Focus on predicting monster movements",
      "Use tackles to power through attacks",
      "Always aim for weak points",
    ],
  },
  "Long Sword": {
    strengths: [
      "Good reach and mobility",
      "Spirit Gauge system for increased damage",
      "Foresight Slash for countering",
    ],
    weaknesses: [
      "Can trip teammates in multiplayer",
      "Spirit Gauge management required",
      "Counter timing needs practice",
    ],
    combos: [
      "Spirit Blade combo to level up gauge",
      "Foresight Slash → Spirit Roundslash",
      "Fade Slash → Spirit Blade combo",
    ],
    tips: ["Maintain red Spirit Gauge level", "Practice Foresight Slash timing", "Use Fade Slash for positioning"],
  },
  "Sword and Shield": {
    strengths: [
      "Can use items with weapon drawn",
      "Fast attacks and good mobility",
      "Versatile with mounting attacks and shield bashes",
    ],
    weaknesses: ["Short reach", "Lower raw damage output", "Shield provides limited protection"],
    combos: ["Perfect Rush combo", "Shield Bash → Falling Bash", "Backstep → Charged Slash"],
    tips: ["Use items while weapon is drawn", "Utilize mounting attacks", "Perfect Rush is your highest damage combo"],
  },
  "Dual Blades": {
    strengths: ["Fastest attacking weapon", "Great mobility with Demon Mode", "Excellent for applying status effects"],
    weaknesses: ["Short reach", "Stamina management required", "Lower damage per hit"],
    combos: ["Demon Mode → Blade Dance", "Demon Flurry Rush", "Spinning Blade Dance"],
    tips: [
      "Manage stamina in Demon Mode",
      "Target weak spots for element/status buildup",
      "Use Archdemon Mode when low on stamina",
    ],
  },
  Hammer: {
    strengths: ["High KO damage", "Powerful charged attacks", "Good mobility when charged"],
    weaknesses: ["Short reach", "No defensive options", "Requires good positioning"],
    combos: ["Level 3 Charge → Big Bang combo", "Spinning Bludgeon → Brutal Big Bang", "Sliding attack for mounting"],
    tips: ["Always aim for the head", "Use slopes for spinning aerial attacks", "Charge while moving to reposition"],
  },
}

const weaponImages: Record<string, any> = {
  "Great Sword": require("../../assets/weapons/great_sword.png.png"),
  "Long Sword": require("../../assets/weapons/long_sword.png.png"),
  "Sword and Shield": require("../../assets/weapons/sword_shield.png.png"),
  "Dual Blades": require("../../assets/weapons/dual_blades.png.png"),
  "Hammer": require("../../assets/weapons/hammer.png.png"),
  "Hunting Horn": require("../../assets/weapons/hunting_horn.png.png"),
  "Lance": require("../../assets/weapons/lance.png.png"),
  "Gunlance": require("../../assets/weapons/gunlance.png.png"),
  "Switch Axe": require("../../assets/weapons/switch_axe.png.png"),
  "Charge Blade": require("../../assets/weapons/charge_blade.png.png"),
  "Insect Glaive": require("../../assets/weapons/insect_glaive.png.png"),
  "Light Bowgun": require("../../assets/weapons/light_bowgun.png.png"),
  "Heavy Bowgun": require("../../assets/weapons/heavy_bowgun.png.png"),
  "Bow": require("../../assets/weapons/bow.png.png"),
};

export default function WeaponDetailScreen() {
  const params = useLocalSearchParams()
  const router = useRouter()
  const weapon: Weapon = JSON.parse(params.weapon as string)
  const details = weaponDetails[weapon.name] || {
    strengths: [],
    weaknesses: [],
    combos: [],
    tips: [],
  }

  // Get the weapon image from the wiki
  const getWeaponDetailImage = (weaponName: string): string => {
    const weaponImages: Record<string, string> = {
      "Great Sword":
        "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/great-sword-weapon-mhw-wiki-guide.png",
      "Long Sword":
        "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/long-sword-weapon-mhw-wiki-guide.png",
      "Sword and Shield":
        "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/sword-&-shield-weapon-mhw-wiki-guide.png",
      "Dual Blades":
        "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/dual-blades-weapon-mhw-wiki-guide.png",
      Hammer:
        "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/hammer-weapon-mhw-wiki-guide.png",
      "Hunting Horn":
        "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/hunting-horn-weapon-mhw-wiki-guide.png",
      Lance: "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/lance-weapon-mhw-wiki-guide.png",
      Gunlance:
        "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/gunlance-weapon-mhw-wiki-guide.png",
      "Switch Axe":
        "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/switch-axe-weapon-mhw-wiki-guide.png",
      "Charge Blade":
        "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/charge-blade-weapon-mhw-wiki-guide.png",
      "Insect Glaive":
        "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/insect-glaive-weapon-mhw-wiki-guide.png",
      "Light Bowgun":
        "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/light-bowgun-weapon-mhw-wiki-guide.png",
      "Heavy Bowgun":
        "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/heavy-bowgun-weapon-mhw-wiki-guide.png",
      Bow: "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/bow-weapon-mhw-wiki-guide.png",
    }

    // If we don't have a specific image for this weapon name, use a default weapon image
    return (
      weaponImages[weaponName] ||
      "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-weapon_category_icon.png"
    )
  }

  const detailImageUrl = getWeaponDetailImage(weapon.name)

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
        <TouchableOpacity style={styles.backButton} onPress={() => router.replace('/(tabs)/weapons')}>
          <ThemedText style={styles.backButtonText}>← Back</ThemedText>
        </TouchableOpacity>

        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <View style={styles.imageContainer}>
              <Image
                source={weaponImages[weapon.name]}
                style={styles.weaponImage}
                resizeMode="contain"
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
                <ThemedText style={styles.description}>{weapon.description}</ThemedText>
              </View>
            </View>

            <View style={styles.section}>
              <ThemedText style={styles.sectionTitle}>Playstyle</ThemedText>
              <View style={styles.contentBox}>
                <ThemedText style={styles.description}>{weapon.playstyle}</ThemedText>
              </View>
            </View>

            <View style={styles.section}>
              <ThemedText style={styles.sectionTitle}>Strengths</ThemedText>
              <View style={styles.contentBox}>
                {details.strengths.map((strength, index) => (
                  <ThemedText key={index} style={styles.bulletPoint}>
                    • {strength}
                  </ThemedText>
                ))}
              </View>
            </View>

            <View style={styles.section}>
              <ThemedText style={styles.sectionTitle}>Weaknesses</ThemedText>
              <View style={styles.contentBox}>
                {details.weaknesses.map((weakness, index) => (
                  <ThemedText key={index} style={styles.bulletPoint}>
                    • {weakness}
                  </ThemedText>
                ))}
              </View>
            </View>

            <View style={styles.section}>
              <ThemedText style={styles.sectionTitle}>Key Combos</ThemedText>
              <View style={styles.contentBox}>
                {details.combos.map((combo, index) => (
                  <ThemedText key={index} style={styles.bulletPoint}>
                    • {combo}
                  </ThemedText>
                ))}
              </View>
            </View>

            <View style={styles.section}>
              <ThemedText style={styles.sectionTitle}>Pro Tips</ThemedText>
              <View style={styles.contentBox}>
                {details.tips.map((tip, index) => (
                  <ThemedText key={index} style={styles.bulletPoint}>
                    • {tip}
                  </ThemedText>
                ))}
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
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#FFD700",
    overflow: "hidden",
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2A2A2A",
  } as ViewStyle,
  weaponImage: {
    width: 140,
    height: 140,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#FFD700",
    backgroundColor: "#2A2A2A",
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
  bulletPoint: {
    fontSize: 16,
    color: "#E6E6E6",
    lineHeight: 24,
    marginBottom: 5,
  } as TextStyle,
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
