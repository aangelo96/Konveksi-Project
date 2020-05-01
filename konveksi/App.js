import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from './src/screens/HomeScreen';
import TrackingScreen from './src/screens/TrackingScreen';
import HistoryScreen from './src/screens/HistoryScreen';
import RequestScreen from './src/screens/RequestScreen';
import RequestDetailScreen from './src/screens/RequestDetailScreen';
import OngoingScreen from './src/screens/OngoingScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import LoginScreen from './src/screens/LoginScreen';
import GetStartedScreen from './src/screens/GetStartedScreen';
import LoadingScreen from './src/screens/LoadingScreen';
import AccountScreen from './src/screens/AccountScreen';
import Icon from './src/components/Icon';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';

const loginNavigator = createStackNavigator({
  Loading: LoadingScreen,
  Signup : SignUpScreen,
  Login : LoginScreen
  },{
  initialRouteName:'Loading',
  defaultNavigationOptions:{
    headerShown:false
  }
});

const homeNavigator = createStackNavigator({
  Home : HomeScreen,
  GetStarted : GetStartedScreen
}, {
  initialRouteName: 'Home'
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

const accountNavigator = createStackNavigator({
  Account: AccountScreen
}, {
  initialRouteName: 'Account'
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
  },
  Account: {
    screen: accountNavigator,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => <Icon name="user" color={tintColor} />
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
  Login:{screen: loginNavigator},
  Home:{screen: tabNav}
},
{
  initialRouteName:'Login'
});

const App = createAppContainer(switchNav);

export default () => {
  return (
    <AuthProvider>
      <App ref={(navigator) => { setNavigator(navigator) }}/>
    </AuthProvider>
  );
};
