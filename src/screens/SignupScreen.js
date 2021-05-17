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

export default function SignupScreen({navigation, route}) {
    //console.disableYellowBox = true;
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [spinnerEnabled, setSpinnerEnabled] = useState(false);

    return (
        <View style={{flex:1, backgroundColor: '#fff'}}>
            <Spinner
                visible={spinnerEnabled}
                textContent={'Loading ...'}
                textStyle={{color: '#000'}}
            />
            <View style={{flex: 0.4, width: width-20, alignItems: 'center', alignSelf: 'center'}}>
                <ImageBackground source={require('../../resources/images/login_back.png')} 
                    style={{width: '100%', height: '90%',justifyContent: 'flex-end', alignItems: 'center'}} 
                    imageStyle={{resizeMode: 'stretch'}}>
                    {/* <Entypo name="cross" size={45} color="#fff" style={{margin: 10}} onPress={()=> navigation.navigate("Landing", {screen: 'Home'})}/> */}
                    <Text style={{color: '#ff748e', fontSize: 30, fontWeight: '700', }}>Signup</Text>
                </ImageBackground>
                
            </View>
            <View style={styles.main_conatiner}>
                <View style={{width: '90%',alignItems: 'center'}}>
                    <FloatingLabelInput
                        label="Patient name"
                        value={name}
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
                            setName(value)
                        }}
                    /> 
                </View>
                <View style={{width: '90%',alignItems: 'center', marginTop: 10}}>
                    <FloatingLabelInput
                        label="Email ID"
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
                <View style={{width: '90%',alignItems: 'center', marginTop: 10}}>
                    <FloatingLabelInput
                        label="Mobile number"
                        value={mobile}
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
                            setMobile(value)
                        }}
                    /> 
                </View>

                <View style={{width: '90%',alignItems: 'center', marginTop: 10}}>
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
                <View style={{width: '90%',alignItems: 'center', marginTop: 10}}>
                    <FloatingLabelInput
                        label="Confirm Password"
                        value={cpassword}
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
                            setCpassword(value)
                        }}
                        isPassword
                        customShowPasswordComponent={<Ionicons name="eye" size={20} color="gray" />}
                        customHidePasswordComponent={<Ionicons name="eye-off" size={20} color="gray" />}
                    /> 
                </View>
            
                <LinearGradient colors={['#ed446c','#f75178', '#feae96']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} 
                    style={{width: '90%', borderRadius: 10 , height: 50,marginTop: 10}}>
                    <TouchableOpacity style={styles.signin_container} onPress={()=> navigation.navigate("dashboard")}>
                        <Text style={{fontSize: 18, color: '#fff'}}>Sign In</Text>
                    </TouchableOpacity>
                </LinearGradient>
                
                <Text style={{color: '#000000', marginTop: 10}}>Click here to  <Text style={styles.signup_text} onPress={()=> navigation.navigate("login")}>Login</Text></Text>
            </View>
        </View>
    );
}

const styles= StyleSheet.create({
    main_conatiner: {
        flex: 0.6,
        //height: height - (height/3),
        marginTop: 10, 
        //justifyContent: 'center', 
        alignItems: 'center',
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
        marginTop: 10, 
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