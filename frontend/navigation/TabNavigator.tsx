import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationTypeList } from "./NavigationTypes";
import { NavigationContainer } from "@react-navigation/native";
import CreateEvent from "../screens/CreateEvent/CreateEvent";
import Feed from "../screens/Feed/Feed";
import Profile from "../screens/Profile/Profile";
import Events from "../screens/Events/Events";
import People from "../screens/People/People";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationTypeList } from './NavigationTypes';
import { NavigationContainer } from '@react-navigation/native';
import CreateEvent from '../screens/CreateEvent/CreateEvent';
import Feed from '../screens/Feed/Feed';
import Profile from '../screens/Profile/Profile';
import Events from '../screens/Events/Events';
import Friends from '../screens/Friends/Friends';

const Tab = createBottomTabNavigator<NavigationTypeList>();

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          options={{ headerShown: false }}
          name="Feed"
          name='Feed'
          component={Feed}
        />
        <Tab.Screen
          options={{ headerShown: false }}
          name="Events"
          name='Events'
          component={Events}
        />
        <Tab.Screen
          options={{ headerShown: false }}
          name="Create"
          name='Create'
          component={CreateEvent}
        />
        <Tab.Screen
          options={{ headerShown: false }}
          name="People"
          component={People}
        />
        <Tab.Screen
          options={{ headerShown: false }}
          name="Profile"
          name='Friends'
          component={Friends}
        />
        <Tab.Screen
          options={{ headerShown: false }}
          name='Profile'
          component={Profile}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
