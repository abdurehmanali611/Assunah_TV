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
import Haderelink from "./Program_Links/Siltgnalink";
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

const stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Haderelink" >
         <stack.Screen name="Log" component={Login}/>
         <stack.Screen name="Sign" component={SignUp}/>
         <stack.Screen name="Home" component={Home}/>
         <stack.Screen name="Qirat" component={Qiratcenter}/>
         <stack.Screen name="About" component={AboutUs}/>
         <stack.Screen name="Contact" component={Contacts}/>
         <stack.Screen name="Assunah" component={AssunahFolder}/>
         <stack.Screen name="Kids" component={AssunahKids}/>
         <stack.Screen name="Extra" component={AdditionalExtra}/>
         <stack.Screen name="Amharic" component={AmharicPrograms}/>
         <stack.Screen name="Arabic" component={ArabicPrograms}/>
         <stack.Screen name="Oromo" component={AffanOromo}/>
         <stack.Screen name="Afar" component={Afar}/>
         <stack.Screen name="Somali" component={Ethio_Somali}/>
         <stack.Screen name="Gumuz" component={Gumuz}/>
         <stack.Screen name="Hadere" component={Hadere}/>
         <stack.Screen name="Halaba" component={Halaba}/>
         <stack.Screen name="Tigray" component={Tigrigna}/>
         <stack.Screen name="Login" component={LoginQirat}/>
         <stack.Screen name="Login2" component={LoginQirat2}/>
         <stack.Screen name="Logged" component={Logged}/>
         <stack.Screen name="Afarlink" component={Afarlink}/>
         <stack.Screen name="Oromolink" component={AffanOromolink}/>
         <stack.Screen name="Oromolink2" component={AffanOromolink_2}/>
         <stack.Screen name="Amhariclink" component={Amhariclink}/>
         <stack.Screen name="Amhariclink2" component={Amhariclink_2}/>
         <stack.Screen name="Amhariclink3" component={Amhariclink_3}/>
         <stack.Screen name="Amhariclink4" component={Amhariclink_4}/>
         <stack.Screen name="Amhariclink5" component={Amhariclink_5}/>
         <stack.Screen name="Arabiclink" component={Arabiclink}/>
         <stack.Screen name="EthioSomalilink" component={EthioSomalilink}/>
         <stack.Screen name="Gumuzlink" component={Gumuzlink}/>
         <stack.Screen name="siltgna" component={Siltgnalink}/>
         <stack.Screen name="Halabalink" component={Halabalink}/>
         <stack.Screen name="Tigraylink" component={Tigraylink}/>
         <stack.Screen name="support" component={Support}/>
         <stack.Screen name="help" component={Help}/>
         <stack.Screen name="rate" component={Rate}/>
      </stack.Navigator>
    </NavigationContainer>
    
  )
};

export default App;