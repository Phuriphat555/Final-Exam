import { StyleSheet, Image, Pressable, View, ScrollView } from "react-native"
import { Link } from "expo-router"
import { ThemedText } from "@/components/ThemedText"
import { LinearGradient } from "expo-linear-gradient"

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-background.jpg" }}
        style={styles.backgroundImage}
      />
      <LinearGradient colors={["rgba(13, 17, 23, 0.95)", "rgba(13, 17, 23, 0.85)"]} style={styles.overlay} />
      <ScrollView style={styles.content} contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.header}>
          <Image source={require("../assets/images/Icon MH.png")} style={styles.appIcon} />
          <ThemedText style={styles.welcome}>Welcome to the Monster Hunter World Companion App!</ThemedText>
          <ThemedText type="title" style={styles.title}>Monster Hunter Info</ThemedText>
          <ThemedText style={styles.subtitle}>Your ultimate guide to Monster Hunter World</ThemedText>
        </View>

        <View style={styles.section}>
          <ThemedText style={styles.sectionTitle}>EXPLORE THE WORLD</ThemedText>

          <Link href="/(tabs)/explore" asChild>
            <Pressable style={styles.navCard}>
              <LinearGradient colors={["rgba(30, 30, 30, 0.95)", "rgba(20, 20, 20, 0.95)"]} style={styles.cardGradient}>
                <Image
                  source={require("../assets/images/monsters/MHW_Rathalos_Icon_11zon.png")}
                  style={styles.cardIcon}
                />
                <View style={styles.cardContent}>
                  <ThemedText style={styles.cardTitle}>Monsters</ThemedText>
                  <ThemedText style={styles.cardDescription}>Explore all monsters and their details</ThemedText>
                </View>
              </LinearGradient>
            </Pressable>
          </Link>

          <Link href="/(tabs)/weapons" asChild>
            <Pressable style={styles.navCard}>
              <LinearGradient colors={["rgba(30, 30, 30, 0.95)", "rgba(20, 20, 20, 0.95)"]} style={styles.cardGradient}>
                <Image source={require("../assets/weapons/great_sword.png.png")} style={styles.cardIcon} />
                <View style={styles.cardContent}>
                  <ThemedText style={styles.cardTitle}>Weapons</ThemedText>
                  <ThemedText style={styles.cardDescription}>Browse weapon types and trees</ThemedText>
                </View>
              </LinearGradient>
            </Pressable>
          </Link>

          <Link href="/(tabs)/armorsets" asChild>
            <Pressable style={styles.navCard}>
              <LinearGradient colors={["rgba(30, 30, 30, 0.95)", "rgba(20, 20, 20, 0.95)"]} style={styles.cardGradient}>
                <Image source={require("../assets/images/armors/Helmet_Icon_White.png")} style={styles.cardIcon} />
                <View style={styles.cardContent}>
                  <ThemedText style={styles.cardTitle}>Armor Sets</ThemedText>
                  <ThemedText style={styles.cardDescription}>Discover armor sets and skills</ThemedText>
                </View>
              </LinearGradient>
            </Pressable>
          </Link>
        </View>

        <View style={styles.section}>
          <ThemedText style={styles.sectionTitle}>FEATURED MONSTER</ThemedText>
          <Pressable
            style={styles.featuredCard}
            onPress={() => {
              // Add navigation to Nergigante detail page
            }}
          >
            <LinearGradient
              colors={["rgba(30, 30, 30, 0.95)", "rgba(20, 20, 20, 0.95)"]}
              style={styles.featuredGradient}
            >
              <Image
                source={require("../assets/images/monsters/MHW_Nergigante_Icon_11zon.jpeg")}
                style={styles.featuredIcon}
              />
              <ThemedText style={styles.featuredTitle}>Nergigante</ThemedText>
              <ThemedText style={styles.featuredType}>Elder Dragon</ThemedText>
              <ThemedText style={styles.featuredDescription}>
                An elder dragon that appears when other elders are in the vicinity. Its penchant for destruction has earned it the moniker "Extinction Dragon."
              </ThemedText>
              <View style={styles.weaknessContainer}>
                <ThemedText style={styles.weaknessLabel}>Weaknesses:</ThemedText>
                <View style={styles.weaknessBadges}>
                  <View style={styles.badge}>
                    <ThemedText style={styles.badgeText}>Thunder</ThemedText>
                  </View>
                  <View style={styles.badge}>
                    <ThemedText style={styles.badgeText}>Dragon</ThemedText>
                  </View>
                </View>
              </View>
            </LinearGradient>
          </Pressable>
        </View>
      </ScrollView>
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
  content: {
    flex: 1,
    padding: 20,
  },
  header: {
    paddingTop: 40,
    alignItems: "center",
    marginBottom: 40,
  },
  welcome: {
    fontSize: 18,
    color: "#FFD700",
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "600",
  },
  appIcon: {
    width: 80,
    height: 80,
    marginBottom: 10,
    alignSelf: "center",
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
    fontSize: 16,
    color: "#BDB76B",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  section: {
    marginBottom: 40,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFD700",
    marginBottom: 15,
    letterSpacing: 1,
  },
  navCard: {
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
  cardIcon: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#2A2A2A",
    borderWidth: 2,
    borderColor: "#FFD700",
  },
  cardContent: {
    marginLeft: 15,
    flex: 1,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFD700",
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 14,
    color: "#E6E6E6",
  },
  featuredCard: {
    borderRadius: 15,
    overflow: "hidden",
    elevation: 5,
  },
  featuredGradient: {
    padding: 20,
    alignItems: "center",
  },
  featuredIcon: {
    width: 80,
    height: 80,
    borderRadius: 10,
    backgroundColor: "#2A2A2A",
    borderWidth: 2,
    borderColor: "#FFD700",
    marginBottom: 10,
  },
  featuredTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFD700",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  featuredType: {
    fontSize: 16,
    color: "#BDB76B",
    marginBottom: 10,
  },
  featuredDescription: {
    fontSize: 14,
    color: "#E6E6E6",
    textAlign: "center",
    marginBottom: 10,
  },
  weaknessContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  weaknessLabel: {
    color: "#FFD700",
    fontWeight: "bold",
    marginRight: 8,
  },
  weaknessBadges: {
    flexDirection: "row",
    gap: 8,
  },
  badge: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#FFD700",
    borderRadius: 15,
    paddingVertical: 4,
    paddingHorizontal: 12,
    marginRight: 8,
  },
  badgeText: {
    color: "#FFD700",
    fontSize: 14,
  },
})
