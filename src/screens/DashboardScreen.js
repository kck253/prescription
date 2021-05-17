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

export default function DashboardScreen({navigation, route}) {
    const [email, setEmail] = useState("");
  
    return (
        <View style={{flex:1, backgroundColor: '#fff', paddingTop: 10}}>
            <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>Welcome <Text style={{color: '#ed446c'}}>Koushal</Text></Text>
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity style={styles.box} onPress={()=> navigation.navigate("question")}>
                    <FontAwesome name="question-circle" size={30} color="#f46687" />
                    <Text style={styles.boxText}>Questionnaire</Text>
                </TouchableOpacity> 
                <TouchableOpacity style={{...styles.box, marginTop: 20}} onPress={()=> navigation.navigate("upload")}>
                    <Entypo name="upload" size={30} color="#f46687" />
                    <Text style={styles.boxText}>Share your thoughts</Text>
                </TouchableOpacity> 
                <TouchableOpacity style={{...styles.box, marginTop: 20}}>
                    <MaterialCommunityIcons name="drawing" size={30} color="#f46687" />
                    <Text style={styles.boxText}>Upload drawing</Text>
                </TouchableOpacity> 
            </View>
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