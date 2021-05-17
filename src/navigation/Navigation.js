import React from 'react';
import {
    StyleSheet, 
    Text, 
    View,
    Button,
    AsyncStorage
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import DashboardScreen from '../screens/DashboardScreen';
import LinearGradient from 'react-native-linear-gradient';
import QuestionScreen from '../screens/QuestionScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import UploadScreen from '../screens/UploadScreen';
import AdmiHomeScreen from '../screens/AdminHome';


const Stack = createStackNavigator();

export default function AppContainer({navigation}){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="login">
                <Stack.Screen 
                name="login" component={LoginScreen} 
                options={({navigation})=>({
                    headerShown: false,
                })}/>
                <Stack.Screen 
                name="signup" component={SignupScreen} 
                options={({navigation})=>({
                    headerShown: false,
                })}/>
                <Stack.Screen 
                name="dashboard" component={DashboardScreen} 
                options={({navigation})=>({
                    headerShown: true,
                    headerTitle: "DASHBOARD",
                    headerTitleStyle: { color: '#fff' },
                    headerBackground: () => (
                      <LinearGradient
                        colors={['#ed446c','#f46687', '#f4a4b4']}
                        style={{ flex: 1 }}
                      />
                    ),
                    headerTitleAlign: 'center',
                    headerLeft: null,
                    headerRight: (props)=> {
                        return(
                            <View style={{paddingRight: 5}}>
                                <MaterialCommunityIcons name="logout" size={30} color="#ffffff" />
                            </View>
                        )
                    }
                })}/>

                <Stack.Screen 
                name="question" component={QuestionScreen} 
                options={({navigation})=>({
                    headerShown: true,
                    headerTitle: "Questionnaire",
                    headerTitleStyle: { color: '#fff' },
                    headerBackground: () => (
                      <LinearGradient
                        colors={['#ed446c','#f46687', '#f4a4b4']}
                        style={{ flex: 1 }}
                      />
                    ),
                    headerTitleAlign: 'center',
                    headerRight: null,
                    headerLeft: (props)=>{
                        return (
                            <TouchableOpacity style={{paddingLeft: 5}} onPress={()=> navigation.goBack()}>
                                <MaterialCommunityIcons name="keyboard-backspace" size={30} color="#ffffff" />
                            </TouchableOpacity>
                        )
                    }
                })}/>
                <Stack.Screen 
                name="upload" component={UploadScreen} 
                options={({navigation})=>({
                    headerShown: true,
                    headerTitle: "Upload File",
                    headerTitleStyle: { color: '#fff' },
                    headerBackground: () => (
                      <LinearGradient
                        colors={['#ed446c','#f46687', '#f4a4b4']}
                        style={{ flex: 1 }}
                      />
                    ),
                    headerTitleAlign: 'center',
                    headerRight: null,
                    headerLeft: (props)=>{
                        return (
                            <TouchableOpacity style={{paddingLeft: 5}} onPress={()=> navigation.goBack()}>
                                <MaterialCommunityIcons name="keyboard-backspace" size={30} color="#ffffff" />
                            </TouchableOpacity>
                        )
                    }
                })}/>

                <Stack.Screen 
                name="adminhome" component={AdmiHomeScreen} 
                options={({navigation})=>({
                    headerShown: true,
                    headerTitle: "Admin Dashboard",
                    headerTitleStyle: { color: '#fff' },
                    headerBackground: () => (
                      <LinearGradient
                        colors={['#ed446c','#f46687', '#f4a4b4']}
                        style={{ flex: 1 }}
                      />
                    ),
                    headerTitleAlign: 'center',
                    headerLeft: null,
                    headerRight: (props)=> {
                        return(
                            <View style={{paddingRight: 5}}>
                                <MaterialCommunityIcons name="logout" size={30} color="#ffffff" />
                            </View>
                        )
                    }
                })}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

