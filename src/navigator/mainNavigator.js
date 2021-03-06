import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile117810Navigator from '../features/UserProfile117810/navigator';
import Tutorial117809Navigator from '../features/Tutorial117809/navigator';
import NotificationList117781Navigator from '../features/NotificationList117781/navigator';
import Settings117780Navigator from '../features/Settings117780/navigator';
import Settings117772Navigator from '../features/Settings117772/navigator';
import UserProfile117770Navigator from '../features/UserProfile117770/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile117810: { screen: UserProfile117810Navigator },
Tutorial117809: { screen: Tutorial117809Navigator },
NotificationList117781: { screen: NotificationList117781Navigator },
Settings117780: { screen: Settings117780Navigator },
Settings117772: { screen: Settings117772Navigator },
UserProfile117770: { screen: UserProfile117770Navigator },

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
