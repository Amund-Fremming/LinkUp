import {
  ActivityIndicator,
  Alert,
  RefreshControl,
  ScrollView,
  Text,
  View,
} from "react-native";
import { styles } from "./JoinedFeedStyles";
import { getHostForEvent, getUserJoinedEvents } from "../../../../api/EventAPI";
import {
  getEventRelation,
  removeFromEvent,
} from "../../../../api/EventRelationAPI";
import { useEffect, useState } from "react";
import {
  IEvent,
  IEventRelations,
} from "../../../../interfaces/ModelInterfaces";
import { useTokenProvider } from "../../../../providers/TokenProvider";
import EventCardJoined from "../EventCardJoined/EventCardJoined";

export default function JoinedFeed() {
  const [events, setEvents] = useState<IEvent[] | undefined>([]);
  const [eventRelations, setEventRelations] = useState<{
    [eventId: string]: IEventRelations | undefined;
  }>({});
  const [hostNames, setHostNames] = useState<{ [eventId: string]: string }>({});
  const { token } = useTokenProvider();
  const [fetchingEvents, setFetchingEvents] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const [edit, setEdit] = useState<boolean>(false);

  useEffect(() => {
    fetchEvents();
  }, [edit]);

  const fetchEvents = async () => {
    try {
      const eventsData: IEvent[] | undefined = await getUserJoinedEvents(token);
      setEvents(eventsData);

      const hostNamesObj: { [eventId: string]: string } = {};
      const eventRelationsObj: {
        [eventId: string]: IEventRelations | undefined;
      } = {};

      const promises = eventsData?.map(async (event) => {
        const host = await getHostForEvent(token, event.eventID);
        hostNamesObj[event.eventID] = `${host?.firstname} ${host?.lastname}`;

        const eventRelationsData = await getEventRelation(token, event.eventID);
        eventRelationsObj[event.eventID] = eventRelationsData;
      });

      await Promise.all(promises || []);
      setHostNames(hostNamesObj);
      setEventRelations(eventRelationsObj);
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setFetchingEvents(false);
      setRefreshing(false);
    }
  };

  const onRefresh = async () => {
    setFetchingEvents(true);
    setRefreshing(true);
    await fetchEvents();
  };

  const formatDate = (startDate: string, endDate?: string) => {
    const startDateTemp = new Date(startDate);
    const endDateTemp = endDate ? new Date(endDate) : null;

    const startDateTime = new Date(
      startDateTemp.setHours(startDateTemp.getHours())
    );
    const endDateTime = endDateTemp
      ? new Date(endDateTemp.setHours(endDateTemp.getHours()))
      : null;

    const formatDateTime = (dateTime: Date) => {
      const month = dateTime.toLocaleString("default", { month: "short" });
      const day = dateTime.getDate();
      const hours = dateTime.getHours().toLocaleString();
      const minutes = dateTime.getMinutes();
      return `${day}. ${month} ${hours}:${minutes.toString().padStart(2, "0")}`;
    };

    if (endDate) {
      const sameDay =
        startDateTime.toDateString() === endDateTime!.toDateString();
      if (sameDay) {
        return `${formatDateTime(startDateTime)} - ${formatDateTime(
          endDateTime!
        ).substring(7, 14)}`;
      } else {
        return `${formatDateTime(startDateTime)} - ${formatDateTime(
          endDateTime!
        )}`;
      }
    } else {
      return formatDateTime(startDateTime);
    }
  };

  const formatCapacityRange = (minCapacity?: string, maxCapacity?: string) => {
    if (minCapacity && maxCapacity) {
      return `${minCapacity} - ${maxCapacity}`;
    } else if (minCapacity) {
      return `>  ${minCapacity}`;
    } else if (maxCapacity) {
      return `<  ${maxCapacity}`;
    } else {
      return "0 - 1000";
    }
  };

  const isHost = (eventRelation: IEventRelations | undefined) => {
    if (!eventRelation) {
      throw new Error(
        "Error in the eventrelation for the event: " + eventRelations
      );
    }
    if (eventRelation.eventRole == 0 || eventRelation.eventRole == 1) {
      return true;
    }
    return false;
  };

  const handleButtonPress = async (
    eventRelation: IEventRelations | undefined
  ) => {
    Alert.alert("Advarsel", "Er du sikker på at du vil forlate", [
      {
        text: "Tilbake",
        style: "cancel",
      },
      {
        text: "Ja",
        onPress: () => leaveEvent(eventRelation),
      },
    ]);
  };

  const leaveEvent = async (eventRelation: IEventRelations | undefined) => {
    if (!eventRelation) {
      throw new Error(
        "Error in the eventrelation for the event: " + eventRelations
      );
    }
    try {
      if (isHost(eventRelation)) {
      } else {
        await removeFromEvent(token, eventRelation.eventID, "");
        setEvents((prevEvents) =>
          prevEvents?.filter((event) => event.eventID !== eventRelation.eventID)
        );
      }
    } catch (error) {
      console.error("Error joining event:", error);
    }
  };
  return (
    <ScrollView
      style={styles.scrollView}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {fetchingEvents ? (
        <View style={styles.midscreenMessages}>
          <ActivityIndicator size="large" color="#5A5DF0" />
          <Text style={styles.midscreenMessagesText}>
            Henter dine eventer...
          </Text>
        </View>
      ) : (
        <View style={styles.wrapper}>
          {events && events.length > 0 ? (
            events?.map((event) => (
              <EventCardJoined
                edit={edit}
                setEdit={setEdit}
                key={event.eventID}
                numberOfPeople={formatCapacityRange(
                  event.minCapacity?.toString(),
                  event.maxCapacity?.toString()
                )}
                dateTime={formatDate(
                  event.eventDateTimeStart,
                  event.eventDateTimeEnd
                )}
                title={event.eventName}
                hostName={hostNames[event.eventID] || ""}
                bio={event.eventDescription}
                address={`${
                  event.location.postalcode === null
                    ? ""
                    : event.location.postalcode + ", "
                } ${event.location.city}`}
                imageSource={event.frontImage}
                onButtonPress={() =>
                  handleButtonPress(eventRelations[event.eventID])
                }
                leaveEvent={() => leaveEvent(eventRelations[event.eventID])}
                host={isHost(eventRelations[event.eventID])}
                event={event}
              />
            ))
          ) : (
            <View style={styles.midscreenMessages}>
              <Text style={styles.midscreenMessagesText}>
                Du er for tiden ikke med i noen eventer!
              </Text>
            </View>
          )}
        </View>
      )}
    </ScrollView>
  );
}
