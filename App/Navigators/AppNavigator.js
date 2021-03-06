import { createAppContainer, createStackNavigator } from 'react-navigation'

import GameScreen from 'App/Containers/GameScreen/GameScreen'
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'
import OnboardingScreen from 'App/Containers/OnboardingScreen/OnboardingScreen'

/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */
const StackNavigator = createStackNavigator(
  {
    // Create the application routes here (the key is the route name, the value is the target screen)
    // See https://reactnavigation.org/docs/en/stack-navigator.html#routeconfigs
    SplashScreen: SplashScreen,
    MainScreen: OnboardingScreen,
    GameScreen: GameScreen, 

  },
  {
    // By default the application will show the splash screen
    initialRouteName: 'SplashScreen',
    // See https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig
    headerMode: 'none',
  }
)

export default createAppContainer(StackNavigator)
