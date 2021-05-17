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
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Spinner from 'react-native-loading-spinner-overlay';

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function LoginScreen({navigation, route}) {
    //console.disableYellowBox = true;
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [spinnerEnabled, setSpinnerEnabled] = useState(false);

    //const home = useSelector(state => state.home);
  
    return (
        <KeyboardAvoidingView style={{flex:1, backgroundColor: '#fff'}} 
            behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <Spinner
                visible={spinnerEnabled}
                textContent={'Loading ...'}
                textStyle={{color: '#000'}}
            />
            <View style={{height: height/3, width: width-20, alignItems: 'center', alignSelf: 'center'}}>
                <ImageBackground source={require('../../resources/images/login_back.png')} 
                    style={{width: '100%', height: '90%',}} 
                    imageStyle={{resizeMode: 'stretch'}}>
                    {/* <Entypo name="cross" size={45} color="#fff" style={{margin: 10}} onPress={()=> navigation.navigate("Landing", {screen: 'Home'})}/> */}
                </ImageBackground>
                <Text style={{color: '#ff748e', fontSize: 30, fontWeight: '700'}}>Login</Text>
            </View>
            <View style={styles.main_conatiner}>
                <View style={{width: '90%',alignItems: 'center'}}>
                    <FloatingLabelInput
                        label="Email ID or Mobile Number"
                        value={email}
                        staticLabel
                        hintTextColor={'#000'}
                        containerStyles={styles.float_container}
                        customLabelStyles={{
                            colorFocused: '#ff748e',
                            fontSizeFocused: 12,
                            color: '#000'
                        }}
                        labelStyles={styles.float_label}
                        inputStyles={styles.float_input}
                        onChangeText={(value) => {
                            setEmail(value)
                        }}
                    /> 
                </View>

                <View style={{width: '90%',alignItems: 'center', marginTop: 20}}>
                    <FloatingLabelInput
                        label="Password"
                        value={password}
                        staticLabel
                        hintTextColor={'#000'}
                        containerStyles={styles.float_container}
                        customLabelStyles={{
                            colorFocused: '#ff748e',
                            fontSizeFocused: 12,
                            color: '#000'
                        }}
                        labelStyles={styles.float_label}
                        inputStyles={styles.float_input}
                        onChangeText={(value) => {
                            setPassword(value)
                        }}
                        isPassword
                        customShowPasswordComponent={<Ionicons name="eye" size={20} color="gray" />}
                        customHidePasswordComponent={<Ionicons name="eye-off" size={20} color="gray" />}
                    /> 
                </View>
                <TouchableOpacity style={{marginTop: 10, alignSelf: 'flex-end', marginRight: 20}} 
                    onPress={()=> navigation.navigate("adminhome")}>
                    <Text>Forgot Password</Text>
                </TouchableOpacity>

                <LinearGradient colors={['#ed446c','#f75178', '#feae96']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} 
                    style={{width: '90%', borderRadius: 10 , height: 50,marginTop: 10}}>
                    <TouchableOpacity style={styles.signin_container} onPress={()=> navigation.navigate("dashboard")}>
                        <Text style={{fontSize: 18, color: '#fff'}}>Sign In</Text>
                    </TouchableOpacity>
                </LinearGradient>
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5, width: '90%'}}>
                    <View style={{flex: 1, height: 0.8, backgroundColor: '#DA7EB9'}} />
                    <View>
                        <Text style={{width: 50, textAlign: 'center'}}>or</Text>
                    </View>
                    <View style={{flex: 1, height: 0.8, backgroundColor: '#DA7EB9'}} />
                </View>
                
                <Text style={{marginTop: 10, fontSize: 15}}>Don't have an account?</Text>
                <Text style={styles.signup_text} onPress={()=> navigation.navigate("signup")}>Sign Up</Text>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles= StyleSheet.create({
    main_conatiner: {
        height: height/2,
        marginTop: 10, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        color: 'green',
        fontFamily: 'neosanspro_medium'
    },
    float_container:{
        borderWidth: 1,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        borderColor: '#ff748e',
        borderRadius: 8,
    },
    float_label:{
        backgroundColor: '#fff',
        paddingHorizontal: 5,
    },
    float_input: {
        paddingHorizontal: 10,
        width: '90%',
        height: 50
    },
    signup_text:{
        marginTop: 0, 
        fontSize: 16, 
        color: '#ff748e', 
        fontWeight: 'bold'
    },
    signin_container: {
        width: '100%', 
        borderRadius: 10 , 
        height: 50,  
        justifyContent: 'center', 
        alignItems: 'center'
    }
});