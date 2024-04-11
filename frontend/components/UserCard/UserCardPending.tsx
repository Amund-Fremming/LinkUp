import { View, Image, Text, Pressable } from "react-native";
import styles from "./UserCardStyles";
import { Feather } from "@expo/vector-icons";

// For search in People Screen
interface UserCardInfo {
  firstname: string;
  lastname: string;
  age: number;
  // image: string; SENERE, LEGGE INN MOCK DATA
}

interface UserCardProps {
  userCardInfo: UserCardInfo;
}

export function UserCardPending({ userCardInfo }: UserCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/cbum.jpg")}
          style={styles.image}
        ></Image>
        <View style={styles.detailsContainer}>
          <View style={styles.iconContainer}>
            <Feather name="user" style={styles.icon}></Feather>
            <Text style={styles.textName}>{userCardInfo.firstname}</Text>
            <Text style={styles.textName}>{userCardInfo.lastname}</Text>
          </View>
          <Text style={styles.textAge}>
            {userCardInfo.age} <Text style={styles.textAge}>år</Text>
          </Text>
          <View style={styles.buttonContainer}>
            <Pressable style={styles.buttonPending}>
              <Text style={styles.buttonTextPending}>Venter på svar</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}