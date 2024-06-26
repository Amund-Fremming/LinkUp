export interface IToken {
  token: string;
  userID: string;
}

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface IRegistrationRequest {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  bornDate: string;
  gender: string;
}

export interface IUser {
  userID: string;
  firstname: string;
  lastname: string;
  dateBorn: string;
  phone?: string;
  relationshipStatus?: number;
  gender?: string;
  description?: string;
  email: string;
  profileImage?: string;
  password?: string;
  salt?: string;
  eventsCreated?: number;
  eventsJoined?: number;
  eventBails?: number;
  role: number;
  userRelationsAsFirst?: [];
  userRelationsAsSecond?: [];
  eventRelations?: [];
}

export interface IEvent {
  eventID: number;
  eventName: string;
  eventDescription: string;
  eventDateTimeStart: string;
  eventDateTimeEnd: string;
  visibility: number;
  inviteURL: string;
  frontImage?: string;
  minCapacity?: number;
  maxCapacity?: number;
  locationID?: number;
  location: ILocation;
  eventRelations?: [];
}

export interface IEventDTO {
  eventID?: number;
  eventName: string;
  eventDescription: string;
  eventDateTimeStart: string;
  eventDateTimeEnd: string;
  visibility: number;
  inviteURL: string;
  frontImage?: string;
  minCapacity?: string;
  maxCapacity?: string;
  locationID?: number;
  location?: ILocation;
}

export interface ILocation {
  locationID?: number;
  address?: string;
  postalcode?: string;
  city: string;
  country: string;
}

export interface IUserRelation {
  userRelationID: number;
  user_first_ID: string;
  user_fisrt?: IUser;
  user_second_ID: string;
  user_second?: IUser;
  type?: number;
}

export interface IEventRelations {
  eventRelationID: number;
  eventID: number;
  event: IEvent;
  userID: string;
  user: IUser | undefined;
  eventRelationParticipation: number;
  eventRole: number;
}

export enum UserRelationType {
  PENDING_FIRST_SECOND,
  PENDING_SECOND_FIRST,
  FRIENDS,
  BLOCKED_FIRST_SECOND,
  BLOCKED_SECOND_FIRST,
}

export interface IUserRelationDTO {
  userId: string;
  otherUserId: string;
  type: UserRelationType;
}

export interface IEventRelationDTO {
  eventId: number | undefined;
  userId: string;
  participation: number;
  eventRole: number;
}

export interface IUserWithEventParticipationDTO {
  userID: string;
  imageUrl: string;
  firstname: string;
  lastname: string;
  dateBorn: Date;
  participation: EventRelationParticipation;
  role: EventRole;
  profileImage: string;
}

export enum EventRelationParticipation {
  JOINED,
  DECLINED,
  PENDING,
  BAILED,
}

export enum EventRole {
  CREATOR,
  HOST,
  PARTICIPANT,
}
