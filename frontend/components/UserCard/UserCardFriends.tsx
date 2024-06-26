import { View, Image, Text, Pressable, TouchableOpacity } from "react-native";
import styles from "./UserCardStyles";
import { Feather } from "@expo/vector-icons";

// Legge inn Pressable --> sendes til Other Profile

// For search in People Screen
interface UserCardInfo {
    firstname: string;
    lastname: string;
    age: number;
    profileImage: string;
}

interface UserCardProps {
    userCardInfo: UserCardInfo;
    onPressCard: () => void;
}

export function UserCardFriends({ userCardInfo, onPressCard }: UserCardProps) {
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            style={styles.card}
            onPress={onPressCard}
        >
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: userCardInfo.profileImage }}
                    style={styles.image}
                ></Image>
                <View style={styles.detailsContainer}>
                    <View style={styles.iconContainer}>
                        <Feather name="user-check" style={styles.icon}></Feather>
                        <Text style={styles.textName}>{userCardInfo.firstname}</Text>
                        <Text style={styles.textName}>{userCardInfo.lastname}</Text>
                    </View>
                    <Text style={styles.textAge}>
                        {userCardInfo.age} <Text style={styles.textAge}>år</Text>
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}
