import React, {useState, useEffect} from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    TouchableOpacity, 
    Dimensions, 
    Image,
    ImageBackground,
    KeyboardAvoidingView,
    AsyncStorage
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { useSelector, useDispatch } from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Spinner from 'react-native-loading-spinner-overlay';

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function UserListScreen({navigation, route}) {
    
    return (
        <View style={{flex:1, backgroundColor: '#fff', paddingTop: 10}}>
            
        </View>
    );
}

const styles= StyleSheet.create({
    box:{
        flexDirection: 'row',
        width: width-100, 
        height: 120, 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderWidth: 2, 
        borderColor: '#f46687', 
        borderRadius: 10,
    },
    boxText: {
        color: '#f46687', 
        fontSize: 20, 
        fontWeight: 'bold',
        paddingLeft: 10
    }
});