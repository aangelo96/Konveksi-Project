import React from 'react';
import { View, Text, Image } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from './src/screens/HomeScreen';
import TrackingScreen from './src/screens/TrackingScreen';
import HistoryScreen from './src/screens/HistoryScreen';
import RequestScreen from './src/screens/RequestScreen';
import RequestDetailScreen from './src/screens/RequestDetailScreen';
import OngoingScreen from './src/screens/OngoingScreen';
import LoginScreen from './src/screens/LoginScreen';
import Icon from './src/components/Icon';

const homeNavigator = createStackNavigator({
  Home : HomeScreen
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'Konveksiin Aja'
  }
});

const requestNavigator = createStackNavigator({
  RequestDetail: RequestDetailScreen,
  Request: RequestScreen
}, {
  initialRouteName: 'Request',
  defaultNavigationOptions: {
    title: 'Request Clothing'
  }
});

const trackingNavigator = createStackNavigator({
  Tracking : TrackingScreen,
  Ongoing : OngoingScreen
}, {
  initialRouteName: 'Tracking',
  defaultNavigationOptions: {
    title: 'Track Clothing'
  }
});

const historyNavigator = createStackNavigator({
  History : HistoryScreen
}, {
  initialRouteName: 'History',
  defaultNavigationOptions: {
    title: 'My History'
  }
});

const tabNav = createBottomTabNavigator({
  Home: {
    screen:homeNavigator,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => <Icon name="home" color={tintColor} />
    }
  },
  Request: {
    screen:requestNavigator,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => <Icon name="plus-circle" color={tintColor} />
    }
  },
  Tracking: {
    screen:trackingNavigator,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => <Icon name="crosshairs" color={tintColor} />
    }
  },
  History: {
    screen:historyNavigator,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => <Icon name="book" color={tintColor} />
    }
  }
},
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: 'rgb(32,101,145)',
      inactiveTintColor: "#4F4F4F"
    }
  }
);

const switchNav = createSwitchNavigator({
  Login:{screen: LoginScreen},
  Home:{screen: tabNav}
},
{
  initialRouteName:'Login'
});

export default createAppContainer(switchNav);
