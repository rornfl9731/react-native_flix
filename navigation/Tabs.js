import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import Movies from "../screens/Movie";
import Search from "../screens/Search";
import Tv from "../screens/Tv";
import { useColorScheme } from "react-native";
import { YELLOW_COLOR,BLACK_COLOR } from "../colors";
import {Ionicons} from '@expo/vector-icons'
import Stack from "./Stack";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    const isDark = useColorScheme() === "dark";

    return (
        <Tab.Navigator 
        screenOptions={{
            tabBarStyle:{
            backgroundColor: isDark ? BLACK_COLOR : "white",
        },
        tabBarActiveTintColor: isDark ? YELLOW_COLOR : BLACK_COLOR,
        tabBarInactiveTintColor : isDark ? "#d2dae2" : "#808e9b",
        headerStyle:{
            backgroundColor: isDark ? BLACK_COLOR: "white",
        },
        headerTitleStyle:{
            color: isDark ? "white" : BLACK_COLOR,
        },
        tabBarLabelStyle:{
            marginTop:-5,
            fontSize: 12,
            fontWeight: "600"
        }
        }}>
        <Tab.Screen name="Movies" component={Movies} 
            options={{
            tabBarIcon:({focused,color,size})=>( <Ionicons name="ios-film" size={size} color={color} />
            ),
        }} />
        <Tab.Screen name="TV" component={Tv} options={{
            tabBarIcon:({focused,color,size})=>( <Ionicons name="ios-tv-outline" size={size} color={color} />
            ),
        }}  />
        <Tab.Screen name="Search" component={Search} options={{
            tabBarIcon:({focused,color,size})=>( <Ionicons name={focused ? "search-circle" : "search-circle-outline"} size={size} color={color} />
            ),
        }} />
    </Tab.Navigator>
    )
}
    

export default Tabs;