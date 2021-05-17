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
import ImagePicker from 'react-native-image-picker';

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function UploadScreen({navigation, route}) {

    launchCamera = () => {
        // let options = {
        //   storageOptions: {
        //     skipBackup: true,
        //     path: 'images',
        //   },
        // };
        // ImagePicker.launchCamera(options, (response) => {
        //   console.log('Response = ', response);
    
        //   if (response.didCancel) {
        //     console.log('User cancelled image picker');
        //   } else if (response.error) {
        //     console.log('ImagePicker Error: ', response.error);
        //   } else if (response.customButton) {
        //     console.log('User tapped custom button: ', response.customButton);
        //     alert(response.customButton);
        //   } else {
        //     const source = { uri: response.uri };
        //     console.log('response', JSON.stringify(response));
        //     this.setState({
        //       filePath: response,
        //       fileData: response.data,
        //       fileUri: response.uri
        //     });
        //   }
        // });
    
      }
    
    return (
        <View style={{flex:1, backgroundColor: '#fff', paddingTop: 10}}>
           <View style={{flex: 1, alignItems: 'center', margin: 10}}>
                <Text style={styles.textHead} onPress={()=> launchCamera()}>Upload paragraph</Text>
                
            </View>
        </View>
    );
}

const styles= StyleSheet.create({
    textHead: {
        textAlign: 'center', 
        margin: 10, 
        fontSize: 22, 
        color: '#f46687', 
        fontWeight: 'bold', 
        textDecorationLine: 'underline'
    }
});