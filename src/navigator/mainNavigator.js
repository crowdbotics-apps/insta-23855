import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps193553Navigator from '../features/Maps193553/navigator';
import Additem193552Navigator from '../features/Additem193552/navigator';
import Maps193548Navigator from '../features/Maps193548/navigator';
import UserProfile193544Navigator from '../features/UserProfile193544/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps193553: { screen: Maps193553Navigator },
Additem193552: { screen: Additem193552Navigator },
Maps193548: { screen: Maps193548Navigator },
UserProfile193544: { screen: UserProfile193544Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
