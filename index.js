/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {enableScreens} from 'react-native-screens';
import App from './App';
import {name as appName} from './app.json';

// Improve memory usage and performance for react-navigation native-stack
enableScreens();

AppRegistry.registerComponent(appName, () => App);
