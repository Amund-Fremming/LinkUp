import { Image, Text, View, TouchableOpacity } from "react-native";
import { styles } from "./EventCardFeedStyles";
import { Feather } from "@expo/vector-icons";

interface EventCardFeedProps {
  numberOfPeople: string | undefined;
  dateTime: string;
  title: string;
  hostName: string;
  bio: string;
  address: string;
  imageSource: any;
  onJoinPress: () => void;
}
const EventCardFeed = ({
  numberOfPeople,
  dateTime,
  title,
  hostName,
  bio,
  address,
  imageSource,
  onJoinPress,
}: EventCardFeedProps) => {
  const MAX_LETTERS_DESCRIPTION = 70;
  const MAX_LETTERS_TITLE = 16;

  const truncateDescription = (text: string, maxLetters: number) => {
    const processedText = text.replace(/\n/g, " ");
    let truncatedText = processedText;
    if (processedText.length > maxLetters && maxLetters != MAX_LETTERS_TITLE) {
      truncatedText = processedText.substring(0, maxLetters) + "...";
    }
    return text.substring(0, maxLetters);
  };

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.iconTextWrapper}>
          <Feather name="users" style={styles.headerIcon} />
          <Text style={styles.headerText}> {numberOfPeople}</Text>
        </View>
        <Text style={styles.headerText}>{dateTime.toLocaleString()}</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.leftSide}>
          <View style={styles.upperLeftSide}>
            <Text style={styles.title}>
              {truncateDescription(title, MAX_LETTERS_TITLE)}
            </Text>
            <View style={styles.iconTextWrapper}>
              <Feather name="user" style={styles.hostIcon} />
              <Text style={styles.hostText}>{hostName}</Text>
            </View>
            <View style={styles.descriptionWrapper}>
              <Text style={styles.text}>
                {truncateDescription(bio, MAX_LETTERS_DESCRIPTION)}
              </Text>
            </View>
          </View>
          <View style={styles.lowerLeftSide}>
            <Text style={styles.addressText}>{address}</Text>
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.button}
              onPress={() => onJoinPress()}
            >
              <Text style={styles.buttonText}>Bli med</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.rightSide}>
          <Image source={{ uri: imageSource }} style={styles.image} />
        </View>
      </View>
    </View>
  );
};

export default EventCardFeed;
