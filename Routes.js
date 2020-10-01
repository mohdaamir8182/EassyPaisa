import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home';
import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer';
import CustomDrawer from './src/components/CustomDrawer';
import DrawerHome from './src/screens/drawer/DrawerHome';
import Rewards from './src/screens/drawer/Rewards';
import {AntDesign} from '@expo/vector-icons';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default MyStack = () => {
  return (
   <NavigationContainer>   
      <Stack.Navigator
          headerMode="none"
      >
        <Stack.Screen name="Home" component={Home} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export const DrawerNavigator = () => {

  return (
      <Drawer.Navigator
          initialRouteName="Home" 
          drawerContent={props => CustomDrawer(props)}
          drawerStyle={{
          backgroundColor: '#fff',
          width: 280,
          }}
          drawerContentOptions={{
            activeTintColor: 'black',
            inactiveTintColor: '#bbbbbb',
            itemStyle: { marginTop: 3, borderRadius: 20, marginHorizontal: 30, },
            //labelStyle: {color: 'red'}
          }} 
    
      >
      <Drawer.Screen 
        name="Home" component={DrawerHome} 
        options = {{
          drawerIcon: ({focused}) => <AntDesign name= "home" size={24} color={focused ? "black" : "#bbbbbb"} />
          
        }}
      />
      <Drawer.Screen 
        name="Goals & Rewards"  component={Rewards} 
        options = {{
          drawerIcon: ({focused}) => <AntDesign name= "staro" size={24} color={focused ? "black" : "#bbbbbb"} />
          
        }}
      />
      <Drawer.Screen 
        name="My Favorites" component={DrawerHome}  
        options = {{
          drawerIcon: ({focused}) => <AntDesign name= "staro" size={24} color={focused ? "black" : "#bbbbbb"} />
          
        }}  
      />
      <Drawer.Screen 
        name="My Approvals" component={DrawerHome}  
        options = {{
          drawerIcon: ({focused}) => <AntDesign name= "staro" size={24} color={focused ? "black" : "#bbbbbb"} />
          
        }}
      />
      <Drawer.Screen 
        name="Scheduled Transactions" component={DrawerHome}  
        options = {{
          drawerIcon: ({focused}) => <AntDesign name= "staro" size={24} color={focused ? "black" : "#bbbbbb"} />
          
        }}
      />
      <Drawer.Screen 
        name="Transactions Hostory" component={DrawerHome}  
        options = {{
          drawerIcon: ({focused}) => <AntDesign name= "staro" size={24} color={focused ? "black" : "#bbbbbb"} />
          
        }}
      />
      <Drawer.Screen 
        name="Promotions" component={DrawerHome}  
        options = {{
          drawerIcon: ({focused}) => <AntDesign name= "staro" size={24} color={focused ? "black" : "#bbbbbb"} />
          
        }}
      />
      <Drawer.Screen 
        name="Fee Details" component={DrawerHome}  
        options = {{
          drawerIcon: ({focused}) => <AntDesign name= "staro" size={24} color={focused ? "black" : "#bbbbbb"} />
          
        }}
      />
      <Drawer.Screen 
        name="Help/FAQ" component={DrawerHome}  
        options = {{
          drawerIcon: ({focused}) => <AntDesign name= "staro" size={24} color={focused ? "black" : "#bbbbbb"} />
          
        }}  
      />

    </Drawer.Navigator>
  );
}

  //export default NavigationContainer(MyStack);