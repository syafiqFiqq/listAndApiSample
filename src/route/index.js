import { StackNavigator } from "react-navigation";
import FirstScreen from "../screens/FirstScreen";
import SecondScreen from "../screens/SecondScreen";
import ThirdScreen from "../screens/ThirdScreen";

const AppRoute = StackNavigator(
    {
        FirstScreen: {
            path: '/first',
            screen: FirstScreen,
            navigationOptions: {
                title: 'First Page'
            }
        },
        SecondScreen: {
            path: '/second',
            screen: SecondScreen,
            navigationOptions: {
                title: 'Second Page'
            }
        },
        ThirdScreen: {
            path: '/third',
            screen: ThirdScreen,
            // navigationOptions: {
            //     title: 'Third Page'
            // }
        }
    }
)

export default AppRoute;