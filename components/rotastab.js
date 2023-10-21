import{createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import{MaterialCommunityIcons} from "@expo/vector-icons";

import Baki from "./Baki"
import Home from "./home"
import HxH from "./HxH"

const Tab = createBottomTabNavigator();

export default function Rotastab(){
  return(
    <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>

      <Tab.Screen name="Baki" component={Baki} />
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Hunter X Hunter" component={HxH}/>

    </Tab.Navigator>
  );
}

