import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import {
  createBottomTabNavigator,
  createTabNavigator
} from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";

import SearchScreen from "../screens/SearchScreen";
import AvoScreen from "../screens/AvoScreen";
import AvoDetailScreen from "../screens/AvoDetailScreen";
import StatsScreen from "../screens/StatsScreen";

const SearchNavigator = createStackNavigator({
  Search: SearchScreen
});

const AvoNavigator = createStackNavigator({
  Avo: AvoScreen,
  AvoDetail: AvoDetailScreen
});

const AvoDetailNavigator = createStackNavigator(
  {
    Stats: StatsScreen
  },
  {}
);

const MainNavigator = createBottomTabNavigator({
  Search: {
    screen: SearchNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-search" size={25} />;
      }
    }
  },
  Avo: {
    screen: AvoNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-information-circle-outline" size={25} />;
      }
    }
  },
  AvoDetail: {
    screen: AvoDetailNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="stats-chart" size={25} />;
      }
    }
  }
});

export default createAppContainer(MainNavigator);
