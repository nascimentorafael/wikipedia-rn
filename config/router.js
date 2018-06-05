import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import WikiSearchContainer from '../containers/WikiSearchContainer';
import HistorySearchContainer from '../containers/HistorySearchContainer';
import ProfileContainer from '../containers/ProfileContainer';
import AuthenticationContainer from '../containers/AuthenticationContainer';
import SearchedItemDetailContainer from '../containers/SearchedItemDetailContainer';

export const WikiStack = StackNavigator({
  Wiki: {
    screen: WikiSearchContainer,
    navigationOptions: {
      title: 'Wiki',
    },
  },
  SearchedItemDetail: {
    screen: SearchedItemDetailContainer,
    navigationOptions: ({ navigation }) => ({
      title: 'title (replace it!!!)',
    }),
  },
});

export const Tabs = TabNavigator({
  Wiki: {
    screen: WikiStack,
    navigationOptions: {
      tabBarLabel: 'Wiki',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
    },
  },
  History: {
    screen: HistorySearchContainer,
    navigationOptions: {
      tabBarLabel: 'History',
      tabBarIcon: ({ tintColor }) => <Icon name="history" size={35} color={tintColor} />,
      title: 'History',
    },
  },
  Profile: {
    screen: ProfileContainer,
    navigationOptions: {
      tabBarLabel: 'Me',
      tabBarIcon: ({ tintColor }) => <Icon name="account-box" size={35} color={tintColor} />,
    },
  },
});

export const Root = StackNavigator({
  Tabs: {
    screen: Tabs,
  },
  AuthenticationContainer: {
    screen: AuthenticationContainer,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});
