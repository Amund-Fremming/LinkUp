import { TextInput, View, ScrollView, Text } from "react-native";
import { UserCardSearch } from "../../../../components/UserCard/UserCardSearch";
import { UserCardFriends } from "../../../../components/UserCard/UserCardFriends";
import { UserCardPending } from "../../../../components/UserCard/UserCardPending";
import { UserCardBlocked } from "../../../../components/UserCard/UserCardBlocked";
import styles from "./SearchStyles";
import { Feather } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  SearchUsers,
  GetUserFriends,
  GetPendingFriendRequests,
  getUser,
  GetUserBlocks,
} from "../../../../api/UserAPI";
import {
  IUser,
  IUserRelation,
  UserRelationType,
} from "../../../../interfaces/ModelInterfaces";
import { useTokenProvider } from "../../../../providers/TokenProvider";
import {
  CreateUserRelation,
  GetUserRelation,
} from "../../../../api/UserRelationAPI";
import OtherProfile from "../../../OtherProfile/OtherProfile";
import { colors } from "../../../../styles/colors";

export default function SearchPeople() {
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState<IUser[] | undefined>([]);
  const [friends, setFriends] = useState<IUser[]>([]);
  const [pending, setPending] = useState<IUser[]>([]);
  const [blocked, setBlocked] = useState<IUser[]>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedProfile, setSelectedProfile] = useState<IUser | undefined>(
    undefined
  );
  const [relationType, setRelationType] = useState<IUserRelation>();
  const [profileRelationChanged, setProfileRelationChanged] =
    useState<boolean>(false);

  const calculateAge = (dateBorn: string) => {
    const birthDate = new Date(dateBorn);

    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();

    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }
    return age;
  };

  const { token, setToken, userID } = useTokenProvider();

  useEffect(() => {
    fetchFriends();
    fetchPending();
    fetchBlocked();
  }, [profileRelationChanged]);

  const fetchFriends = async () => {
    try {
      const friends: IUser[] = await GetUserFriends(token);
      setFriends(friends);
    } catch (error) {
      console.error("Error in fetching users friends (Search) " + error);
    }
  };

  const fetchPending = async () => {
    try {
      const pendings: IUser[] = await GetPendingFriendRequests(token);
      setPending(pendings);
    } catch (error) {
      console.error(
        "Error in fetching users pending friend requests from logged in user (Search) " +
          error
      );
    }
  };

  const fetchBlocked = async () => {
    try {
      const blocks: IUser[] = await GetUserBlocks(token);
      setBlocked(blocks);
    } catch (error) {
      console.error(
        "Error in fetching the blocked users blocked by the logged in user (Search) " +
          error
      );
    }
  };

  const handleSendFriendRequest = async (otherId: string) => {
    try {
      const ur: IUserRelation | undefined = await CreateUserRelation(token, {
        userId: "",
        otherUserId: otherId,
        type: UserRelationType.PENDING_FIRST_SECOND,
      });

      if (ur?.type === UserRelationType.PENDING_FIRST_SECOND) {
        const user = await getUser(token, ur.user_second_ID);
        setPending((prevState) => [...prevState, user]);
      }

      if (ur?.type === UserRelationType.FRIENDS) {
        const user = await getUser(token, ur.user_second_ID);
        setFriends((prevState) => [...prevState, user]);
      }
    } catch (error) {
      console.error("Error in sending a friendRequest (search) " + error);
    }
  };

  const clearSearchText = () => {
    setSearchText("");
    setSearchResult([]);
  };

  const handleSearch = async () => {
    try {
      if (searchText === "") {
        setSearchResult([]);
        return;
      }
      const results: IUser[] | undefined = await SearchUsers(searchText, token);

      if (results.some((id) => id.userID === userID)) {
        const filterLoggedInUser = results.filter(
          (user) => user.userID !== userID
        );
        setSearchResult(filterLoggedInUser);
      } else {
        const filtered: IUser[] | undefined = results.filter(
          (user) =>
            (user.firstname + " " + user.lastname)
              .toLowerCase()
              .startsWith(searchText.toLowerCase()) ||
            user.lastname.toLowerCase().startsWith(searchText.toLowerCase())
        );
        setSearchResult(filtered);
      }
    } catch (error) {
      setToken("");
      console.error("Error while searching users: " + error);
    }
  };

  const handleUserCardPressed = async (profile: IUser) => {
    const rel = await GetUserRelation(token, profile.userID);
    setRelationType(rel ? rel : undefined);
    setSelectedProfile(profile);
    setModalVisible(true);
  };

  const handleBack = async () => {
    setModalVisible(false);
    setProfileRelationChanged(!profileRelationChanged);
  };

  return (
    <>
      <OtherProfile
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        profile={selectedProfile!}
        userRelation={relationType!}
        handleBack={handleBack}
      ></OtherProfile>

      <ScrollView>
        <View style={styles.contentContainer}>
          <View style={styles.searchContainer}>
            <View style={styles.searchBar}>
              <Feather
                style={styles.feather}
                name="search"
                size={26}
                color={colors.grey}
              />
              <TextInput
                onChangeText={setSearchText}
                style={styles.searchInput}
                onSubmitEditing={handleSearch}
                value={searchText}
                placeholder="Søk ..."
              />
            </View>
            <Feather style={styles.icon} name="x" onPress={clearSearchText} />
          </View>

          {searchResult && searchResult.length > 0 ? (
            searchResult.map((user: IUser, index: number) => {
              const isFriend = friends.some(
                (friend) => friend.userID === user.userID
              );

              const isPendig = pending.some(
                (pending) => pending.userID === user.userID
              );

              const isBlocked = blocked.some(
                (block) => block.userID === user.userID
              );

              if (isFriend) {
                return (
                  <UserCardFriends
                    key={index}
                    userCardInfo={{
                      firstname: user.firstname,
                      lastname: user.lastname,
                      age: calculateAge(user.dateBorn),
                      profileImage: user.profileImage!,
                    }}
                    onPressCard={() => handleUserCardPressed(user)}
                  ></UserCardFriends>
                );
              } else if (isPendig) {
                return (
                  <UserCardPending
                    key={index}
                    userCardInfo={{
                      firstname: user.firstname,
                      lastname: user.lastname,
                      age: calculateAge(user.dateBorn),
                      profileImage: user.profileImage!,
                    }}
                    onPressCard={() => handleUserCardPressed(user)}
                  ></UserCardPending>
                );
              } else if (isBlocked) {
                return (
                  <UserCardBlocked
                    key={index}
                    userCardInfo={{
                      firstname: user.firstname,
                      lastname: user.lastname,
                      profileImage: user.profileImage!,
                    }}
                    onPressCard={() => handleUserCardPressed(user)}
                  ></UserCardBlocked>
                );
              } else {
                return (
                  <UserCardSearch
                    key={index}
                    userCardInfo={{
                      firstname: user.firstname,
                      lastname: user.lastname,
                      age: calculateAge(user.dateBorn),
                      profileImage: user.profileImage!,
                    }}
                    onPressButton={() => handleSendFriendRequest(user.userID)}
                    onPressCard={() => handleUserCardPressed(user)}
                  ></UserCardSearch>
                );
              }
            })
          ) : (
            <View style={styles.screenInfo}>
              <Text style={styles.screenInfoText}>
                Søk etter andre å knytte kontakt med!
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </>
  );
}
