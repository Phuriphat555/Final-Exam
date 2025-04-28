"use client"
import {
  StyleSheet,
  Image,
  FlatList,
  Pressable,
  View,
  type ViewStyle,
  type TextStyle,
  type ImageStyle,
} from "react-native"
import { useRouter } from "expo-router"
import { ThemedText } from "@/components/ThemedText"
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

const weaponsData: Weapon[] = [
  {
    id: 1,
    name: "Great Sword",
    type: "Melee",
    description: "A powerful weapon that focuses on charging attacks for massive damage.",
    playstyle: "Slow but powerful hits, requires good positioning and timing",
    difficulty: "Intermediate",
    imageUrl: "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-great_sword_icon.png",
  },
  {
    id: 2,
    name: "Long Sword",
    type: "Melee",
    description: "A versatile blade with good reach and flowing combos.",
    playstyle: "Fluid combos with counter attacks and spirit gauge management",
    difficulty: "Beginner",
    imageUrl: "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-long_sword_icon.png",
  },
  {
    id: 3,
    name: "Sword and Shield",
    type: "Melee",
    description: "Fast attacks with the ability to use items while weapon is drawn.",
    playstyle: "Quick attacks, versatile moves, and defensive options",
    difficulty: "Beginner",
    imageUrl: "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-sword_&_shield_icon.png",
  },
  {
    id: 4,
    name: "Dual Blades",
    type: "Melee",
    description: "Twin blades that allow for rapid attacks and high mobility.",
    playstyle: "Fast-paced attacks with demon mode management",
    difficulty: "Beginner",
    imageUrl: "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-dual_blades_icon.png",
  },
  {
    id: 5,
    name: "Hammer",
    type: "Melee",
    description: "A heavy weapon focused on KO damage and breaking monster parts.",
    playstyle: "Charged attacks targeting the head for stuns",
    difficulty: "Intermediate",
    imageUrl: "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-hammer_icon.png",
  },
  {
    id: 6,
    name: "Hunting Horn",
    type: "Melee",
    description: "A unique weapon that can buff the team while dealing damage.",
    playstyle: "Melodic combat with team support capabilities",
    difficulty: "Advanced",
    imageUrl: "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-hunting_horn_icon.png",
  },
  {
    id: 7,
    name: "Lance",
    type: "Melee",
    description: "A defensive weapon with powerful thrusting attacks.",
    playstyle: "Precise pokes with strong defensive capabilities",
    difficulty: "Intermediate",
    imageUrl: "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-lance_icon.png",
  },
  {
    id: 8,
    name: "Gunlance",
    type: "Melee",
    description: "Combines lance attacks with explosive shells.",
    playstyle: "Mix of melee attacks and shelling explosions",
    difficulty: "Advanced",
    imageUrl: "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-gunlance_icon.png",
  },
  {
    id: 9,
    name: "Switch Axe",
    type: "Melee",
    description: "Transforms between an axe and a sword for different attacks.",
    playstyle: "Morphing attacks with phial management",
    difficulty: "Intermediate",
    imageUrl: "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-switch_axe_icon.png",
  },
  {
    id: 10,
    name: "Charge Blade",
    type: "Melee",
    description: "Complex weapon that stores energy for powerful attacks.",
    playstyle: "Technical weapon with phial charging and guard points",
    difficulty: "Advanced",
    imageUrl: "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-charge_blade_icon.png",
  },
  {
    id: 11,
    name: "Insect Glaive",
    type: "Melee",
    description: "Aerial weapon with a Kinsect companion for extracts.",
    playstyle: "Aerial combat with extract management",
    difficulty: "Intermediate",
    imageUrl: "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-insect_glaive_icon.png",
  },
  {
    id: 12,
    name: "Light Bowgun",
    type: "Ranged",
    description: "Mobile ranged weapon with various ammo types.",
    playstyle: "Mobile shooting with status and elemental ammo",
    difficulty: "Intermediate",
    imageUrl: "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-light_bowgun_icon.png",
  },
  {
    id: 13,
    name: "Heavy Bowgun",
    type: "Ranged",
    description: "Powerful ranged weapon with high damage output.",
    playstyle: "Heavy hitting shots with special ammo types",
    difficulty: "Intermediate",
    imageUrl: "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-heavy_bowgun_icon.png",
  },
  {
    id: 14,
    name: "Bow",
    type: "Ranged",
    description: "Versatile ranged weapon with coating options.",
    playstyle: "Dynamic ranged combat with charge shots and coatings",
    difficulty: "Intermediate",
    imageUrl: "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-bow_icon.png",
  },
]

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
}

export default function WeaponsScreen() {
  const router = useRouter()

  const renderWeaponItem = ({ item }: { item: Weapon }) => (
    <Pressable
      style={styles.weaponCard}
      onPress={() =>
        router.push({
          pathname: "/(tabs)/weapon-detail",
          params: { weapon: JSON.stringify(item) },
        })
      }
    >
      <LinearGradient colors={["rgba(30, 30, 30, 0.95)", "rgba(20, 20, 20, 0.95)"]} style={styles.cardGradient}>
        <View style={styles.weaponImageContainer}>
          <Image
            source={
              weaponImages[item.name]
                ? weaponImages[item.name]
                : { uri: item.imageUrl }
            }
            style={styles.weaponImage}
            resizeMode="contain"
          />
        </View>
        <View style={styles.weaponInfo}>
          <ThemedText style={styles.weaponName}>{item.name}</ThemedText>
          <View style={styles.weaponDetails}>
            <View style={styles.typeContainer}>
              <ThemedText style={styles.label}>Type:</ThemedText>
              <ThemedText style={styles.weaponType}>{item.type}</ThemedText>
            </View>
            <View style={styles.difficultyContainer}>
              <ThemedText style={styles.label}>Difficulty:</ThemedText>
              <View style={[styles.badge, styles[item.difficulty.toLowerCase() as keyof typeof styles]]}>
                <ThemedText style={styles.badgeText}>{item.difficulty}</ThemedText>
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>
    </Pressable>
  )

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-background.jpg" }}
        style={styles.backgroundImage}
      />
      <LinearGradient colors={["rgba(13, 17, 23, 0.95)", "rgba(13, 17, 23, 0.85)"]} style={styles.overlay} />

      <View style={styles.header}>
        <ThemedText type="title" style={styles.title}>Weapon Types</ThemedText>
        <ThemedText style={styles.subtitle}>Master Your Arsenal</ThemedText>
      </View>

      <FlatList
        data={weaponsData}
        renderItem={renderWeaponItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
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
    opacity: 0.3,
  } as ImageStyle,
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
  } as ViewStyle,
  header: {
    padding: 20,
    paddingTop: 60,
    alignItems: "center",
    marginBottom: 10,
  } as ViewStyle,
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFD700",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    letterSpacing: 0.5,
  } as TextStyle,
  subtitle: {
    marginTop: 5,
    fontSize: 18,
    color: "#BDB76B",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  } as TextStyle,
  listContainer: {
    padding: 15,
    paddingTop: 5,
  } as ViewStyle,
  weaponCard: {
    marginBottom: 15,
    borderRadius: 15,
    overflow: "hidden",
    elevation: 5,
  } as ViewStyle,
  cardGradient: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
  } as ViewStyle,
  weaponImageContainer: {
    width: 90,
    height: 90,
    backgroundColor: "#2A2A2A",
    borderWidth: 2,
    borderColor: "#FFD700",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  } as ViewStyle,
  weaponImage: {
    width: 70,
    height: 70,
  } as ImageStyle,
  weaponInfo: {
    flex: 1,
    marginLeft: 15,
    backgroundColor: "transparent",
  } as ViewStyle,
  weaponName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFD700",
    marginBottom: 8,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  } as TextStyle,
  weaponDetails: {
    gap: 8,
  } as ViewStyle,
  typeContainer: {
    flexDirection: "row",
    alignItems: "center",
  } as ViewStyle,
  difficultyContainer: {
    flexDirection: "row",
    alignItems: "center",
  } as ViewStyle,
  label: {
    fontSize: 16,
    color: "#FFD700",
    marginRight: 8,
    fontWeight: "600",
  } as TextStyle,
  weaponType: {
    fontSize: 16,
    color: "#E6E6E6",
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
