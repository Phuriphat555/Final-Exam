"use client"
import { StyleSheet, Image, FlatList, Pressable, View, TextInput } from "react-native"
import { ThemedText } from "@/components/ThemedText"
import { LinearGradient } from "expo-linear-gradient"
import { useRouter } from "expo-router"
import { useState, useEffect } from "react"

interface Monster {
  id: number
  name: string
  type: string
  weaknesses: string[]
  imageUrl?: any
}

const monstersData: Monster[] = [
  {
    id: 1,
    name: "Great Jagras",
    type: "Fanged Wyvern",
    weaknesses: ["Fire", "Thunder"],
  },
  {
    id: 2,
    name: "Kulu-Ya-Ku",
    type: "Bird Wyvern",
    weaknesses: ["Water"],
  },
  {
    id: 3,
    name: "Pukei-Pukei",
    type: "Bird Wyvern",
    weaknesses: ["Thunder", "Ice"],
  },
  {
    id: 4,
    name: "Barroth",
    type: "Brute Wyvern",
    weaknesses: ["Fire", "Water"],
  },
  {
    id: 5,
    name: "Jyuratodus",
    type: "Piscine Wyvern",
    weaknesses: ["Thunder"],
  },
  {
    id: 6,
    name: "Tobi-Kadachi",
    type: "Fanged Wyvern",
    weaknesses: ["Water"],
  },
  {
    id: 7,
    name: "Anjanath",
    type: "Brute Wyvern",
    weaknesses: ["Water", "Ice"],
  },
  {
    id: 8,
    name: "Rathian",
    type: "Flying Wyvern",
    weaknesses: ["Dragon", "Thunder"],
  },
  {
    id: 9,
    name: "Tzitzi-Ya-Ku",
    type: "Bird Wyvern",
    weaknesses: ["Water", "Ice"],
  },
  {
    id: 10,
    name: "Paolumu",
    type: "Flying Wyvern",
    weaknesses: ["Fire"],
  },
  {
    id: 11,
    name: "Legiana",
    type: "Flying Wyvern",
    weaknesses: ["Thunder", "Fire"],
  },
  {
    id: 12,
    name: "Odogaron",
    type: "Fanged Wyvern",
    weaknesses: ["Ice", "Thunder"],
  },
  {
    id: 13,
    name: "Rathalos",
    type: "Flying Wyvern",
    weaknesses: ["Dragon", "Thunder"],
  },
  {
    id: 14,
    name: "Diablos",
    type: "Flying Wyvern",
    weaknesses: ["Ice", "Water"],
  },
  {
    id: 15,
    name: "Kirin",
    type: "Elder Dragon",
    weaknesses: ["Fire", "Water"],
  },
  {
    id: 16,
    name: "Zorah Magdaros",
    type: "Elder Dragon",
    weaknesses: ["Water", "Ice"],
  },
  {
    id: 17,
    name: "Nergigante",
    type: "Elder Dragon",
    weaknesses: ["Thunder", "Dragon"],
  },
  {
    id: 18,
    name: "Teostra",
    type: "Elder Dragon",
    weaknesses: ["Water", "Ice"],
  },
  {
    id: 19,
    name: "Kushala Daora",
    type: "Elder Dragon",
    weaknesses: ["Thunder", "Dragon"],
  },
  {
    id: 20,
    name: "Vaal Hazak",
    type: "Elder Dragon",
    weaknesses: ["Fire", "Dragon"],
  },
  {
    id: 21,
    name: "Xeno'jiiva",
    type: "Elder Dragon",
    weaknesses: ["Dragon", "Poison"],
  },
  {
    id: 22,
    name: "Deviljho",
    type: "Brute Wyvern",
    weaknesses: ["Dragon", "Thunder"],
  },
  {
    id: 23,
    name: "Kulve Taroth",
    type: "Elder Dragon",
    weaknesses: ["Ice", "Thunder"],
  },
  {
    id: 24,
    name: "Lunastra",
    type: "Elder Dragon",
    weaknesses: ["Ice", "Dragon"],
  },
  {
    id: 25,
    name: "Behemoth",
    type: "Elder Dragon",
    weaknesses: ["Dragon", "Water"],
  },
  {
    id: 26,
    name: "Leshen",
    type: "Relict",
    weaknesses: ["Fire", "Dragon"],
  },
  {
    id: 27,
    name: "Ancient Leshen",
    type: "Relict",
    weaknesses: ["Fire", "Dragon"],
  },
  {
    id: 28,
    name: "Beotodus",
    type: "Piscine Wyvern",
    weaknesses: ["Fire", "Thunder"],
  },
  {
    id: 29,
    name: "Banbaro",
    type: "Brute Wyvern",
    weaknesses: ["Fire", "Dragon"],
  },
  {
    id: 30,
    name: "Velkhana",
    type: "Elder Dragon",
    weaknesses: ["Fire", "Dragon"],
  },
]

const monsterImages: Record<string, any> = {
  "Great Jagras": require("../../assets/images/monsters/MHW_Great_Jagras_Icon_11zon.png"),
  "Kulu-Ya-Ku": require("../../assets/images/monsters/MHW_Kulu-Ya-Ku_Icon_11zon.png"),
  "Pukei-Pukei": require("../../assets/images/monsters/MHW_Pukei-Pukei_Icon_11zon.png"),
  "Barroth": require("../../assets/images/monsters/MHW_Barroth_Icon_11zon.png"),
  "Jyuratodus": require("../../assets/images/monsters/MHW_Jyuratodus_Icon_11zon.png"),
  "Tobi-Kadachi": require("../../assets/images/monsters/MHW_Tobi-Kadachi_Icon_11zon.png"),
  "Anjanath": require("../../assets/images/monsters/MHW_Anjanath_Icon_11zon.png"),
  "Rathian": require("../../assets/images/monsters/MHW_Rathian_Icon_11zon.png"),
  "Tzitzi-Ya-Ku": require("../../assets/images/monsters/MHW_Tzitzi-Ya-Ku_Icon_11zon.png"),
  "Paolumu": require("../../assets/images/monsters/MHW_Paolumu_Icon_11zon.png"),
  "Legiana": require("../../assets/images/monsters/MHW_Legiana_Icon_11zon.png"),
  "Odogaron": require("../../assets/images/monsters/MHW_Odogaron_Icon_11zon.png"),
  "Rathalos": require("../../assets/images/monsters/MHW_Rathalos_Icon_11zon.png"),
  "Diablos": require("../../assets/images/monsters/MHW_Diablos_Icon_11zon.png"),
  "Kirin": require("../../assets/images/monsters/MHW_Kirin_Icon_11zon.png"),
  "Zorah Magdaros": require("../../assets/images/monsters/MHW_Zorah_Magdaros_Icon_11zon.png"),
  "Nergigante": require("../../assets/images/monsters/MHW_Nergigante_Icon_11zon.jpeg"),
  "Teostra": require("../../assets/images/monsters/MHW_Teostra_Icon_11zon.png"),
  "Kushala Daora": require("../../assets/images/monsters/MHW_Kushala_Daora_Icon_11zon.png"),
  "Vaal Hazak": require("../../assets/images/monsters/MHW_Vaal_Hazak_Icon_11zon.png"),
  //   "Xeno'jiiva": require("../../assets/images/monsters/MHW_Xeno%27jiiva_Icon_11zon.png"),
  "Deviljho": require("../../assets/images/monsters/MHW_Deviljho_Icon_11zon.png"),
  "Kulve Taroth": require("../../assets/images/monsters/MHW_Kulve_Taroth_Icon_11zon.png"),
  "Lunastra": require("../../assets/images/monsters/MHW_Lunastra_Icon_11zon.png"),
  "Behemoth": require("../../assets/images/monsters/MHW_Behemoth_Icon_11zon.png"),
  "Leshen": require("../../assets/images/monsters/MHW_Leshen_Icon_11zon.png"),
  "Ancient Leshen": require("../../assets/images/monsters/MHW_Ancient_Leshen_Icon_11zon.png"),
  "Beotodus": require("../../assets/images/monsters/MHWI_Beotodus_Icon_11zon.png"),
  "Banbaro": require("../../assets/images/monsters/MHWI_Banbaro_Icon_11zon.png"),
  "Velkhana": require("../../assets/images/monsters/MHWI_Velkhana_Icon_11zon.png"),
};

export default function ExploreScreen() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredMonsters, setFilteredMonsters] = useState(monstersData)

  // Filter monsters based on search query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredMonsters(monstersData)
    } else {
      const query = searchQuery.toLowerCase()
      const filtered = monstersData.filter(
        (monster) => monster.name.toLowerCase().includes(query) || monster.type.toLowerCase().includes(query),
      )
      setFilteredMonsters(filtered)
    }
  }, [searchQuery])

  // Simulate loading to ensure all assets are ready
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const renderMonsterItem = ({ item }: { item: Monster }) => (
    <Pressable
      style={styles.monsterCard}
      onPress={() =>
        router.push({
          pathname: "/(tabs)/monster-detail",
          params: { monster: JSON.stringify(item) },
        })
      }
    >
      <LinearGradient colors={["rgba(30, 30, 30, 0.95)", "rgba(20, 20, 20, 0.95)"]} style={styles.cardGradient}>
        <Image
          source={monsterImages[item.name]}
          style={styles.monsterImage}
          resizeMode="contain"
        />
        <View style={styles.monsterInfo}>
          <ThemedText style={styles.monsterName}>{item.name}</ThemedText>
          <View style={styles.monsterDetails}>
            <View style={styles.typeContainer}>
              <ThemedText style={styles.label}>Type:</ThemedText>
              <ThemedText style={styles.monsterType}>{item.type}</ThemedText>
            </View>
            <View style={styles.weaknessContainer}>
              <ThemedText style={styles.label}>Weaknesses:</ThemedText>
              <View style={styles.weaknessBadges}>
                {item.weaknesses.map((weakness, index) => (
                  <View key={index} style={styles.badge}>
                    <ThemedText style={styles.badgeText}>{weakness}</ThemedText>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>
    </Pressable>
  )

  if (isLoading) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <ThemedText style={styles.loadingText}>Loading monsters...</ThemedText>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-background.jpg" }}
        style={styles.backgroundImage}
      />
      <LinearGradient colors={["rgba(13, 17, 23, 0.95)", "rgba(13, 17, 23, 0.85)"]} style={styles.overlay} />

      <View style={styles.header}>
        <ThemedText type="title" style={styles.title}>Monsters Guide</ThemedText>
        <ThemedText style={styles.subtitle}>Hunt, Track, and Master</ThemedText>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search monsters by name or type..."
          placeholderTextColor="#A0A0A0"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <FlatList
        data={filteredMonsters}
        renderItem={renderMonsterItem}
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
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontSize: 18,
    color: "#FFD700",
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
  searchContainer: {
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  searchInput: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderWidth: 1,
    borderColor: "#FFD700",
    borderRadius: 25,
    padding: 15,
    color: "#FFFFFF",
    fontSize: 16,
  },
  listContainer: {
    padding: 15,
    paddingTop: 5,
  },
  monsterCard: {
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
  monsterImage: {
    width: 90,
    height: 90,
    backgroundColor: "#2A2A2A",
    borderWidth: 2,
    borderColor: "#FFD700",
    borderRadius: 10,
  },
  monsterInfo: {
    flex: 1,
    marginLeft: 15,
    backgroundColor: "transparent",
  },
  monsterName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFD700",
    marginBottom: 8,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  monsterDetails: {
    gap: 8,
  },
  typeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  weaknessContainer: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  label: {
    fontSize: 16,
    color: "#FFD700",
    marginRight: 8,
    fontWeight: "600",
  },
  monsterType: {
    fontSize: 16,
    color: "#E6E6E6",
  },
  weaknessBadges: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
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
