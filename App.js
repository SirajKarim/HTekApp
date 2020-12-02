import React,{Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import BottomTabNavigator from "./navigation/bottomtabnavigator";
import { NavigationContainer } from "@react-navigation/native";
import LoginForm from "./screens/loginscreen"

class App extends Component {
  constructor(){
    super();
    this.state = {
      isVisible: true,
    }
  }

  Hide_Splash_Screen = () => {
    this.setState({
      isVisible: false
    });
  }

  componentDidMount() {
    var that = this;
    setTimeout(function(){
      that.Hide_Splash_Screen();
    },4000);
  }
  
  render() { 
    let Splash_Screen = (  
      <View style={styles.SplashScreen_RootView}>  
          <View style={styles.SplashScreen_ChildView}>  
                <Image source={require('./assets/spl.png')}  
             style={{width:'100%', height: '100%', resizeMode: 'contain'}} />  
         </View>  
      </View> )  
    return (
      // <View style = { styles.MainContainer }>  
      // <Text style={{textAlign: 'center'}}> Splash Screen Example</Text>  
      //  {  
      //   (this.state.isVisible === true) ? Splash_Screen : null  
      // }  
      // </View>   
      <NavigationContainer>
        <LoginForm />
        {  
        (this.state.isVisible === true) ? Splash_Screen : null  
        }  
         {/* <BottomTabNavigator /> */}
      </NavigationContainer>
     );
  }
}
 

const styles = StyleSheet.create(  
  {  
      MainContainer:  
      {  
          flex: 1,  
          justifyContent: 'center',  
          alignItems: 'center',  
          paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0  
      },  
     
      SplashScreen_RootView:  
      {  
          justifyContent: 'center',  
          flex:1,  
          // margin: 10,  
          position: 'absolute',  
          width: '100%',  
          height: '100%',  
        },  
     
      SplashScreen_ChildView:  
      {  
          justifyContent: 'center',  
          alignItems: 'center',  
          backgroundColor: '#000000',  
          flex:1,  
      },  
  });  

export default App;



// export default function App() {
 
//   return (
//     <NavigationContainer>
//     <BottomTabNavigator />
//   </NavigationContainer>
//   );
// }