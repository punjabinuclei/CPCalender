/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { Notifications } from 'react-native-notifications';
import App from './App';
import { name as appName } from './app.json';
Notifications.registerRemoteNotifications();

AppRegistry.registerComponent(appName, () => App);
