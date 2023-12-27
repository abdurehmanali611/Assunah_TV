import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Home from "./Constants/Home";
import AboutUs from "./Constants/AboutUs";
import Contacts from "./Constants/Contacts";
import AssunahFolder from "./Constants/AssunahFolder";
import AssunahKids from "./Constants/AssunahKids";
import AdditionalExtra from "./Constants/AdditionalExtra";
import Qiratcenter from "./Constants/Qiratcenter";
import AmharicPrograms from './Programs/AmharicPrograms'
import ArabicPrograms from './Programs/ArabicPrograms'
import AffanOromo from './Programs/AffanOromo'
import Afar from './Programs/Afar'
import Ethio_Somali from './Programs/Ethio_Somali'
import Gumuz from './Programs/Gumuz'
import Hadere from './Programs/Hadere'
import Halaba from './Programs/Halaba'
import Tigrigna from './Programs/Tigrigna'
import LoginQirat from "./Assunah_Qirat_Center/LoginQirat";
import LoginQirat2 from "./Assunah_Qirat_Center/LoginQirat2";
import Logged from "./Assunah_Qirat_Center/Logged";
import Afarlink from "./Program_Links/Afarlink";
import AffanOromolink from "./Program_Links/AffanOromolink";
import Amhariclink from "./Program_Links/Amhariclink";
import Arabiclink from "./Program_Links/Arabiclink";
import EthioSomalilink from "./Program_Links/EthioSomalilink";
import Gumuzlink from "./Program_Links/Gumuzlink";
import Haderelink from "./Program_Links/Haderelink";
import Halabalink from "./Program_Links/Halabalink";
import Tigraylink from "./Program_Links/Tigraylink";
import Support from "./Additional/Support";
import Help from "./Additional/Help";
import Rate from "./Additional/Rate";
import Amhariclink_2 from "./Program_Links/Amhariclink_2";
import Amhariclink_3 from "./Program_Links/Amhariclink_3";
import Amhariclink_4 from "./Program_Links/Amhariclink_4";
import Amhariclink_5 from "./Program_Links/Amhariclink_5";
import AffanOromolink_2 from "./Program_Links/AffanOromolink_2";
import Siltgnalink from "./Program_Links/Siltgnalink";
import Siltgna from "./Programs/Siltgna";

const stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Log" >
         <stack.Screen name="Log" component={Login} options={{title: 'Assunah TV-Login'}}/>
         <stack.Screen name="Sign" component={SignUp} options={{title: 'Assunah TV-SignUp'}}/>
         <stack.Screen name="Home" component={Home} options={{title: 'Assunah TV'}}/>
         <stack.Screen name="Qirat" component={Qiratcenter} options={{title: 'Assunah TV'}}/>
         <stack.Screen name="About" component={AboutUs} options={{title: 'Assunah TV'}}/>
         <stack.Screen name="Contact" component={Contacts} options={{title: 'Assunah TV'}}/>
         <stack.Screen name="Assunah" component={AssunahFolder} options={{title: 'Assunah TV'}}/>
         <stack.Screen name="Kids" component={AssunahKids} options={{title: 'Assunah TV'}}/>
         <stack.Screen name="Extra" component={AdditionalExtra} options={{title: 'Assunah TV'}}/>
         <stack.Screen name="Amharic" component={AmharicPrograms} options={{title: 'Assunah TV'}}/>
         <stack.Screen name="Arabic" component={ArabicPrograms} options={{title: 'Assunah TV'}}/>
         <stack.Screen name="Oromo" component={AffanOromo} options={{title: 'Assunah TV'}}/>
         <stack.Screen name="Afar" component={Afar} options={{title: 'Assunah TV'}}/>
         <stack.Screen name="Somali" component={Ethio_Somali} options={{title: 'Assunah TV'}}/>
         <stack.Screen name="Gumuz" component={Gumuz} options={{title: 'Assunah TV'}}/>
         <stack.Screen name="siltgna" component={Siltgna} options={{title: 'Assunah TV'}}/>
         <stack.Screen name="Halaba" component={Halaba} options={{title: 'Assunah TV'}}/>
         <stack.Screen name="Tigray" component={Tigrigna} options={{title: 'Assunah TV'}}/>
         <stack.Screen name="hadere" component={Hadere} options={{title: 'Assunah TV'}}/>
         <stack.Screen name="Login" component={LoginQirat} options={{title: 'Assunah TV'}}/>
         <stack.Screen name="Login2" component={LoginQirat2} options={{title: 'Assunah TV'}}/>
         <stack.Screen name="Logged" component={Logged} options={{title: 'Assunah TV'}}/>
         <stack.Screen name="Afarlink" component={Afarlink} options={{title: 'Assunah TV'}}/>
         <stack.Screen name="Oromolink" component={AffanOromolink} options={{title: 'Assunah TV'}}/>
         <stack.Screen name="Oromolink2" component={AffanOromolink_2} options={{title: 'Assunah TV'}}/>
         <stack.Screen name="Amhariclink" component={Amhariclink} options={{title: 'Assunah TV'}}/>
         <stack.Screen name="Amhariclink2" component={Amhariclink_2} options={{title: 'Assunah TV'}}/>
         <stack.Screen name="Amhariclink3" component={Amhariclink_3} options={{title: 'Assunah TV'}}/>
         <stack.Screen name="Amhariclink4" component={Amhariclink_4} options={{title: 'Assunah TV'}}/>
         <stack.Screen name="Amhariclink5" component={Amhariclink_5} options={{title: 'Assunah TV'}}/>
         <stack.Screen name="Arabiclink" component={Arabiclink} options={{title: 'Assunah TV'}}/>
         <stack.Screen name="EthioSomalilink" component={EthioSomalilink} options={{title: 'Assunah TV'}}/>
         <stack.Screen name="Gumuzlink" component={Gumuzlink} options={{title: 'Assunah TV'}}/>
         <stack.Screen name="siltgnalink" component={Siltgnalink} options={{title: 'Assunah TV'}}/>
         <stack.Screen name="Halabalink" component={Halabalink} options={{title: 'Assunah TV'}}/>
         <stack.Screen name="Haderelink" component={Haderelink} options={{title: 'Assunah TV'}}/>
         <stack.Screen name="Tigraylink" component={Tigraylink} options={{title: 'Assunah TV'}}/>
         <stack.Screen name="support" component={Support} options={{title: 'Assunah TV'}}/>
         <stack.Screen name="help" component={Help} options={{title: 'Assunah TV'}}/>
         <stack.Screen name="rate" component={Rate} options={{title: 'Assunah TV'}}/>
      </stack.Navigator>
    </NavigationContainer>
    
  )
};

export default App;