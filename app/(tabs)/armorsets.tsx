"use client"
import { StyleSheet, Image, FlatList, Pressable, View } from "react-native"
import { ThemedText } from "@/components/ThemedText"
import { LinearGradient } from "expo-linear-gradient"
import { useRouter } from "expo-router"

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

const armorData: ArmorSet[] = [
  {
    id: 1,
    name: "Leather Armor",
    type: "Light",
    rarity: 1,
    defense: 67,
    resistance: {
      fire: 2,
      water: 2,
      thunder: 2,
      ice: 2,
      dragon: 2,
    },
    imageUrl: require("../../assets/images/armors/leather_armor_set_mhw_small_11zon.png"),
    description:
      "Basic armor made from tanned monster hide. Offers minimal but reliable protection for novice hunters.",
  },
  {
    id: 2,
    name: "Chainmail Armor",
    type: "Medium",
    rarity: 1,
    defense: 72,
    resistance: {
      fire: 0,
      water: 0,
      thunder: 1,
      ice: 0,
      dragon: 0,
    },
    imageUrl: require("../../assets/images/armors/bone_armor_set_mhw_small_11zon.png"),
    description:
      "Standard-issue armor made from interlocking metal rings. Provides balanced protection against various threats.",
  },
  {
    id: 3,
    name: "Hunter's Armor",
    type: "Medium",
    rarity: 2,
    defense: 78,
    resistance: {
      fire: 2,
      water: 0,
      thunder: 0,
      ice: 0,
      dragon: 0,
    },
    imageUrl: require("../../assets/images/armors/jagras_armor_set_mhw_small_11zon.png"),
    description: "Armor crafted for experienced hunters. Offers improved protection and mobility for extended hunts.",
  },
  {
    id: 4,
    name: "Bone Armor",
    type: "Medium",
    rarity: 1,
    defense: 74,
    resistance: {
      fire: 2,
      water: -2,
      thunder: 0,
      ice: -2,
      dragon: 0,
    },
    imageUrl: require("../../assets/images/armors/bone_armor_set_mhw_small_11zon.png"),
    description:
      "Primitive but effective armor crafted from monster bones. Provides good protection against physical attacks.",
  },
  {
    id: 5,
    name: "Alloy Armor",
    type: "Medium",
    rarity: 2,
    defense: 82,
    resistance: {
      fire: 1,
      water: 1,
      thunder: 1,
      ice: 1,
      dragon: 1,
    },
    imageUrl: require("../../assets/images/armors/baan_armor_set_mhw_small.png"),
    description: "Armor forged from refined ore. Offers balanced elemental resistance and solid physical protection.",
  },
  {
    id: 6,
    name: "Kulu Armor",
    type: "Light",
    rarity: 2,
    defense: 76,
    resistance: {
      fire: 0,
      water: 0,
      thunder: 0,
      ice: 0,
      dragon: 0,
    },
    imageUrl: require("../../assets/images/armors/kadachi_armor_set_mhw_small.png"),
    description: "Armor crafted from Kulu-Ya-Ku materials. Lightweight and allows for quick movement during hunts.",
  },
  {
    id: 7,
    name: "Pukei Armor",
    type: "Light",
    rarity: 2,
    defense: 78,
    resistance: {
      fire: -2,
      water: 2,
      thunder: 0,
      ice: 0,
      dragon: 0,
    },
    imageUrl: require("../../assets/images/armors/lumu_armor_set_mhw_small.png"),
    description: "Armor made from Pukei-Pukei parts. Offers resistance to water and poison-related effects.",
  },
  {
    id: 8,
    name: "Barroth Armor",
    type: "Heavy",
    rarity: 2,
    defense: 88,
    resistance: {
      fire: -2,
      water: 2,
      thunder: 0,
      ice: 0,
      dragon: 0,
    },
    imageUrl: require("../../assets/images/armors/baan_armor_set_mhw_small.png"),
    description:
      "Heavy armor crafted from Barroth materials. Provides excellent physical protection but is weak to fire.",
  },
  {
    id: 9,
    name: "Jyuratodus Armor",
    type: "Medium",
    rarity: 2,
    defense: 84,
    resistance: {
      fire: 0,
      water: 3,
      thunder: 0,
      ice: 0,
      dragon: 0,
    },
    imageUrl: require("../../assets/images/armors/jyura_armor_set_mhw_small.png"),
    description:
      "Armor made from Jyuratodus parts. Excellent water resistance and good protection in muddy environments.",
  },
  {
    id: 10,
    name: "Tobi-Kadachi Armor",
    type: "Light",
    rarity: 2,
    defense: 80,
    resistance: {
      fire: 0,
      water: 0,
      thunder: 3,
      ice: 0,
      dragon: 0,
    },
    imageUrl: require("../../assets/images/armors/kadachi_armor_set_mhw_small.png"),
    description:
      "Sleek armor made from Tobi-Kadachi materials. Provides excellent thunder resistance and enhances mobility.",
  },
  {
    id: 11,
    name: "Anjanath Armor",
    type: "Heavy",
    rarity: 3,
    defense: 92,
    resistance: {
      fire: 3,
      water: -2,
      thunder: 0,
      ice: 0,
      dragon: 0,
    },
    imageUrl: require("../../assets/images/armors/anja_armor_set_mhw_small.png"),
    description:
      "Powerful armor crafted from Anjanath parts. Excellent fire resistance but vulnerable to water attacks.",
  },
  {
    id: 12,
    name: "Rathian Armor",
    type: "Medium",
    rarity: 3,
    defense: 86,
    resistance: {
      fire: 2,
      water: 0,
      thunder: 0,
      ice: 0,
      dragon: 2,
    },
    imageUrl: require("../../assets/images/armors/rathalos_armor_set_mhw_small.png"),
    description: "Elegant armor crafted from Rathian parts. Good resistance to fire and dragon elements.",
  },
  {
    id: 13,
    name: "Tzitzi Armor",
    type: "Light",
    rarity: 2,
    defense: 82,
    resistance: {
      fire: 0,
      water: 0,
      thunder: 2,
      ice: 0,
      dragon: 0,
    },
    imageUrl: require("../../assets/images/armors/kirin_armor_set_mhw_small.png"),
    description:
      "Armor made from Tzitzi-Ya-Ku parts. Provides resistance to blinding effects and good thunder protection.",
  },
  {
    id: 14,
    name: "Paolumu Armor",
    type: "Light",
    rarity: 2,
    defense: 80,
    resistance: {
      fire: 0,
      water: 0,
      thunder: 0,
      ice: 2,
      dragon: 0,
    },
    imageUrl: require("../../assets/images/armors/lumu_armor_set_mhw_small.png"),
    description:
      "Fluffy armor made from Paolumu parts. Provides good ice resistance and protection against wind pressure.",
  },
  {
    id: 15,
    name: "Legiana Armor",
    type: "Medium",
    rarity: 3,
    defense: 88,
    resistance: {
      fire: 0,
      water: 0,
      thunder: 0,
      ice: 3,
      dragon: 0,
    },
    imageUrl: require("../../assets/images/armors/legiana_armor_set_mhw_small.png"),
    description:
      "Elegant armor crafted from Legiana parts. Excellent ice resistance and enhances gathering capabilities.",
  },
  {
    id: 16,
    name: "Odogaron Armor",
    type: "Medium",
    rarity: 3,
    defense: 86,
    resistance: {
      fire: 0,
      water: 0,
      thunder: 0,
      ice: 0,
      dragon: 2,
    },
    imageUrl: require("../../assets/images/armors/odogaron_armor_set_mhw_small.png"),
    description:
      "Sleek, crimson armor made from Odogaron parts. Enhances critical hit capabilities and provides bleeding resistance.",
  },
  {
    id: 17,
    name: "Rathalos Armor",
    type: "Heavy",
    rarity: 3,
    defense: 90,
    resistance: {
      fire: 3,
      water: 0,
      thunder: 0,
      ice: 0,
      dragon: 2,
    },
    imageUrl: require("../../assets/images/armors/rathalos_armor_set_mhw_small.png"),
    description: "Iconic red armor crafted from Rathalos parts. Excellent fire resistance and enhances attack power.",
  },
  {
    id: 18,
    name: "Diablos Armor",
    type: "Heavy",
    rarity: 3,
    defense: 94,
    resistance: {
      fire: 0,
      water: 0,
      thunder: 0,
      ice: 0,
      dragon: 0,
    },
    imageUrl: require("../../assets/images/armors/diablos_armor_set_mhw_small.png"),
    description:
      "Imposing armor crafted from Diablos parts. Provides excellent physical defense and enhances raw attack power.",
  },
  {
    id: 19,
    name: "Zorah Armor",
    type: "Heavy",
    rarity: 4,
    defense: 96,
    resistance: {
      fire: 2,
      water: 0,
      thunder: 0,
      ice: 0,
      dragon: 3,
    },
    imageUrl: require("../../assets/images/armors/uragaan_alpha_armor_set_mhw_small.png"),
    description:
      "Massive armor crafted from Zorah Magdaros parts. Excellent fire and dragon resistance with blast protection.",
  },
  {
    id: 20,
    name: "Nergigante Armor",
    type: "Heavy",
    rarity: 4,
    defense: 98,
    resistance: {
      fire: 0,
      water: 0,
      thunder: 0,
      ice: 0,
      dragon: 3,
    },
    imageUrl: require("../../assets/images/armors/nergigante_alpha_armor_set_mhw_small_11zon.png"),
    description:
      "Fearsome armor crafted from Nergigante parts. Provides excellent dragon resistance and health regeneration capabilities.",
  },
]

const armorTypes = ["Light", "Medium", "Heavy"]

export default function ArmorSetsScreen() {
  const router = useRouter()

  const renderArmorItem = ({ item }: { item: ArmorSet }) => (
    <Pressable
      style={styles.armorCard}
      onPress={() =>
        router.push({
          pathname: "/(tabs)/armor-detail",
          params: { armor: JSON.stringify(item) },
        })
      }
    >
      <LinearGradient colors={["rgba(30, 30, 30, 0.95)", "rgba(20, 20, 20, 0.95)"]} style={styles.cardGradient}>
        <View style={styles.imageContainer}>
          <Image
            source={typeof item.imageUrl === "string" ? { uri: item.imageUrl } : item.imageUrl}
            style={styles.armorImage}
            resizeMode="contain"
          />
        </View>
        <View style={styles.armorInfo}>
          <ThemedText style={styles.armorName}>{item.name}</ThemedText>
          <View style={styles.armorDetails}>
            <View style={styles.typeContainer}>
              <ThemedText style={styles.label}>Type:</ThemedText>
              <ThemedText style={styles.armorType}>{item.type}</ThemedText>
            </View>
            <View style={styles.statsContainer}>
              <ThemedText style={styles.label}>Defense:</ThemedText>
              <ThemedText style={styles.statValue}>{item.defense}</ThemedText>
            </View>
            <View style={styles.resistanceContainer}>
              <ThemedText style={styles.label}>Resistances:</ThemedText>
              <View style={styles.resistanceBadges}>
                {Object.entries(item.resistance).map(([element, value], index) => (
                  <View key={index} style={styles.badge}>
                    <ThemedText style={styles.badgeText}>
                      {element.charAt(0).toUpperCase() + element.slice(1)}: {value > 0 ? "+" : ""}
                      {value}
                    </ThemedText>
                  </View>
                ))}
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
        source={{
          uri: "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-armor-banner.jpg",
        }}
        style={styles.backgroundImage}
      />
      <LinearGradient colors={["rgba(13, 17, 23, 0.95)", "rgba(13, 17, 23, 0.85)"]} style={styles.overlay} />

      <View style={styles.header}>
        <ThemedText type="title" style={styles.title}>
          Armor Sets
        </ThemedText>
        <ThemedText style={styles.subtitle}>Forge Your Defense</ThemedText>
      </View>

      <FlatList
        data={armorData}
        renderItem={renderArmorItem}
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
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0.3,
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  header: {
    padding: 20,
    paddingTop: 60,
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFD700",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    letterSpacing: 0.5,
  },
  subtitle: {
    marginTop: 5,
    fontSize: 18,
    color: "#BDB76B",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  listContainer: {
    padding: 15,
    paddingTop: 5,
  },
  armorCard: {
    marginBottom: 15,
    borderRadius: 15,
    overflow: "hidden",
    elevation: 5,
  },
  cardGradient: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
  },
  imageContainer: {
    width: 110,
    height: 110,
    backgroundColor: "#2A2A2A",
    borderWidth: 2,
    borderColor: "#FFD700",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  armorImage: {
    width: 100,
    height: 100,
  },
  armorInfo: {
    flex: 1,
    marginLeft: 15,
    backgroundColor: "transparent",
  },
  armorName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFD700",
    marginBottom: 8,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  armorDetails: {
    gap: 8,
  },
  typeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  statsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  resistanceContainer: {
    flexDirection: "column",
  },
  resistanceBadges: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
    marginTop: 5,
  },
  label: {
    fontSize: 16,
    color: "#FFD700",
    marginRight: 8,
    fontWeight: "600",
  },
  armorType: {
    fontSize: 16,
    color: "#E6E6E6",
  },
  statValue: {
    fontSize: 16,
    color: "#E6E6E6",
  },
  badge: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#FFD700",
  },
  badgeText: {
    color: "#E6E6E6",
    fontSize: 12,
  },
})
