import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/colors";
import SearchScreen from "../screens/SearchScreen";
import AvoScreen from "../screens/AvoScreen";
import AvoDetailScreen from "../screens/AvoDetailScreen";
import StatsScreen from "../screens/StatsScreen";

const defaultStackNavOptions = {
  headerTitleStyle: {
    fontFamily: "roboto-bold",
    fontSize: 35
  },
  headerBackTitleStyle: {
    fontFamily: "roboto-regular"
  },
  headerTintColor: Colors.brightGren,
  headerTitle: "AvoCheck"
};

const AvoNavigator = createStackNavigator(
  {
    Search: SearchScreen,
    Avo: AvoScreen,
    AvoDetail: AvoDetailScreen
  },
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const StatsNavigator = createStackNavigator(
  {
    Stats: StatsScreen
  },
  {}
);

const MainNavigator = createBottomTabNavigator(
  {
    // Search: {
    //   screen: SearchNavigator,
    //   navigationOptions: {
    //     tabBarIcon: (tabInfo) => {
    //       return <Ionicons name="ios-search" size={25} />;
    //     }
    //   }
    // },
    Avo: {
      screen: AvoNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name="ios-information-circle-outline"
              size={30}
              color={tabInfo.tintColor}
            />
          );
        },
        tabBarColor: Colors.brightGren
      }
    },
    Stats: {
      screen: StatsNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons name="stats-chart" size={30} color={tabInfo.tintColor} />
          );
        }
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.brightGren,
      showLabel: false
    }
  }
);

export default createAppContainer(MainNavigator);
