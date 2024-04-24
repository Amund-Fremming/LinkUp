import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { styles } from "./ProfileStyles";
import { getUser } from "../../api/UserAPI";
import { useTokenProvider } from "../../providers/TokenProvider";
import { useEffect, useState } from "react";
import { IUser } from "../../interfaces/ModelInterfaces";
import { Feather } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";
import { UpdateUser } from "../../api/UserAPI";
import { Picker } from "@react-native-picker/picker";
import { pickImage } from "../../util/imageHandler";
import { uploadImage } from "../../api/UploadImageAPI";

// TODO
// - Farge rundt border på de som er endret
// - Kun endre tlf, Status, Bio og Bilde
// - Shadow rundt profilbilde
// - VALIDATION of INPUT (red when edited and worng, green when correct)
// - Endre Picker

export default function Profile() {
  const { token } = useTokenProvider();
  const isFocused = useIsFocused();
  const [user, setProfile] = useState<IUser>();
  const [editMode, setEditMode] = useState(false);
  const [relStatus, setRelStatus] = useState<number>();
  const [updatedBio, setUpdatedBio] = useState<string>();
  const [updatedPhone, setUpdatedPhone] = useState<string>();
  const [profileImageUri, setProfileImageUri] = useState<string>(
    "https://t3.ftcdn.net/jpg/00/64/67/80/360_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.jpg"
  );

  useEffect(() => {
    fetchProfile();
  }, [isFocused]);

  const fetchProfile = async () => {
    const user = await getUser(token);
    setProfile(user);
    setRelStatus(user?.relationshipStatus);
    setUpdatedBio(user?.description ? user.description : "");
    setUpdatedPhone(user?.phone ? user.phone : "");

    if (user?.profileImage !== undefined) {
      setProfileImageUri(user?.profileImage);
    }
    setEditMode(false); //?? for å nullstille siden
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleImagePicker = async () => {
    const uri: any = await pickImage();
    if (uri === "EXIT") return;

    setProfileImageUri(uri);
  };

  const updateProfile = async () => {
    Alert.alert(
      "Bekreft endringer",
      "Er du sikker på at du vil lagre disse endringene?",
      [
        {
          text: "Nei",
          style: "cancel",
        },
        {
          text: "Ja",
          onPress: async () => await sendUpdate(),
        },
      ]
    );
  };

  const sendUpdate = async () => {
    try {
      const url: string | undefined = await uploadImage(profileImageUri, token);

      const updatedUser: IUser = {
        ...user!,
        profileImage: url,
        phone: updatedPhone,
        relationshipStatus: Number.parseInt(relStatus?.toString()!),
        description: updatedBio,
      };

      const newUser = await UpdateUser(updatedUser, token);

      setProfile(newUser);
      setEditMode(false);
    } catch (error) {
      console.error("Error in updating profile details: ", error);
    }
  };

  const handleRelationshipStatusChange = (status: number) => {
    setRelStatus(status);
    setProfile((prevState) => {
      if (!prevState) return undefined;
      return { ...prevState, relationshipStatus: status };
    });
  };

  const calculateAge = (dateBorn: string) => {
    if (dateBorn === undefined) {
    }
    const birthDate = new Date(dateBorn);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();

    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }
    return age.toString();
  };

  const relationshipStatuses = [
    { label: "Gift", value: 0 },
    { label: "Forhold", value: 1 },
    { label: "Singel", value: 2 },
    { label: "Komplisert", value: 3 },
  ];

  const defineRelationshipStatus = (relStatuses: string) => {
    switch (relStatuses) {
      case "0":
        return "Gift";
      case "1":
        return "Forhold";
      case "2":
        return "Singel";
      case "3":
        return "Komplisert";
      default:
        return "?";
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.imageContainer}>
        {editMode && (
          <Pressable onPress={handleImagePicker} style={styles.uploadContainer}>
            <Feather name="upload" size={16} color="white" />
          </Pressable>
        )}
        <Image style={styles.image} source={{ uri: profileImageUri }}></Image>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.stats}>
          <Text style={styles.statsText}>Opprettet</Text>
          <Text style={styles.statsText}>{user?.eventsCreated}</Text>
        </View>
        <View style={styles.stats}>
          <Text style={styles.statsText}>Deltatt</Text>
          <Text style={styles.statsText}>{user?.eventsJoined}</Text>
        </View>
        <View style={styles.stats}>
          <Text style={styles.statsText}>Bails</Text>
          <Text style={styles.statsText}>{user?.eventBails}</Text>
        </View>
      </View>

      <View style={styles.foregroundCard}>
        <View style={styles.legendContainer}>
          <Text style={styles.legendText}>Navn</Text>
          <View style={styles.inputBoxRegular}>
            <Text style={styles.inputText}>
              {user?.firstname + " " + user?.lastname}
            </Text>
          </View>
        </View>
        <View style={styles.legendContainer}>
          <Text style={styles.legendText}>Telefonnummer</Text>
          <View style={styles.inputBoxRegular}>
            {!editMode && <Text style={styles.inputText}>{user?.phone}</Text>}

            {editMode && (
              <TextInput
                style={styles.inputText}
                value={updatedPhone}
                onChangeText={(text) => setUpdatedPhone(text)}
              />
            )}
          </View>
        </View>
        <View style={styles.legendContainer}>
          <Text style={styles.legendText}>Mail</Text>
          <View style={styles.inputBoxRegular}>
            <Text style={styles.inputText}>{user?.email}</Text>
          </View>
        </View>

        <View style={styles.smallBoxesContainer}>
          <View style={styles.legendContainerSmallBox}>
            <Text style={styles.legendTextSmallBox}>Kjønn</Text>
            <View style={styles.inputBoxSmall}>
              <Text style={styles.inputText}>
                {user?.gender === "F"
                  ? "Kvinne"
                  : user?.gender === "M"
                    ? "Mann"
                    : "Annet"}
              </Text>
            </View>
          </View>

          <View style={styles.legendContainerSmallBox}>
            <Text style={styles.legendTextSmallBox}>Alder</Text>
            <View style={styles.inputBoxSmall}>
              <Text style={styles.inputText}>
                {calculateAge(user?.dateBorn ? user.dateBorn : "") + " år"}
              </Text>
            </View>
          </View>

          <View style={styles.legendContainerSmallBox}>
            <Text style={styles.legendTextSmallBox}>Sivilstatus</Text>
            <View style={styles.inputBoxSmall}>
              {!editMode && (
                <Text style={styles.inputText}>
                  {defineRelationshipStatus(
                    user?.relationshipStatus?.toString()
                      ? user.relationshipStatus.toString()
                      : ""
                  )}
                </Text>
              )}

              {editMode && (
                <Picker
                  selectedValue={relStatus}
                  onValueChange={(itemValue) =>
                    handleRelationshipStatusChange(itemValue)
                  }
                >
                  {relationshipStatuses.map((status, index) => (
                    <Picker.Item
                      key={index}
                      label={status.label}
                      value={status.value}
                    />
                  ))}
                </Picker>
              )}
            </View>
          </View>
        </View>

        <View style={styles.legendContainer}>
          <Text style={styles.legendText}>Bio</Text>
          <View style={styles.inputBoxBig}>
            {!editMode && (
              <Text style={styles.inputTextBig}>{user?.description}</Text>
            )}

            {editMode && (
              <TextInput
                style={styles.inputTextBig}
                value={updatedBio}
                onChangeText={(text) => setUpdatedBio(text)}
                multiline={true}
              />
            )}
          </View>
        </View>

        {!editMode && (
          <View style={styles.editButton}>
            <Pressable onPress={toggleEditMode}>
              <Text style={styles.editButtonText}>Rediger</Text>
            </Pressable>
          </View>
        )}

        {editMode && (
          <View style={styles.saveButton}>
            <Pressable onPress={updateProfile}>
              <Text style={styles.saveButtonText}>Lagre</Text>
            </Pressable>
          </View>
        )}
      </View>
    </KeyboardAvoidingView>
  );
}
