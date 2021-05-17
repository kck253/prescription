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
    AsyncStorage,
    Alert
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

export default function QuestionScreen({navigation, route}) {
    const [isInstruction, setIsInstruction] = useState(true);
    const [optionIndex, setOptionIndex] = useState(-1)
    const [qnumber, setQnumber] = useState(0)
    const [question, setQuestion] = useState([
        {"question":"I found it hard to wind down"},
        {"question":"I was aware of dryness of my mouth"},
        {"question":"I couldn’t seem to experience any positive feeling at all"},
        {"question":"I experienced breathing difficulty (e.g. excessively rapid breathing, breathlessness in the absence of physical exertion)"},
        {"question":"I found it difficult to work up the initiative to do things"}
    ])

    function updateQuestionBack(){
        if(qnumber!==0){
            setQnumber(qnumber-1)
            setOptionIndex(-1)
        }
    }

    function updateQuestionNext(){
        if(question.length!==qnumber+1){
            setQnumber(qnumber+1)
            setOptionIndex(-1)
        }
    }
  
    return (
        <View style={{flex:1, backgroundColor: '#fff', paddingTop: 10}}>
            {isInstruction?(
                <View style={{flex: 1, alignItems: 'center', margin: 10}}>
                    <Text style={styles.textHead}>DASS21</Text>
                    <Text style={{fontSize: 18, textAlign: 'center'}}>
                    Please read each statement and choose a number 0, 1, 2 or 3 which indicates how much the statement
applied to you <Text style={{color: '#f46687', fontWeight: 'bold'}}>over the past week.</Text> There are no right or wrong answers. Do not spend too much
time on any statement.
                    </Text>

                    <LinearGradient colors={['#ed446c','#f75178', '#feae96']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} 
                    style={{width: width-40, borderRadius: 10 , height: 60,marginTop: 50}}>
                        <TouchableOpacity style={styles.signin_container} onPress={()=> setIsInstruction(false)}>
                            <Text style={{fontSize: 20, color: '#fff'}}>Start</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            ):(<>
                <View style={{flex:1,alignItems: 'center'}}>
            <Text style={styles.textHead}>Question {qnumber+1}</Text>
                    <View style={{width: width-20, marginTop: 10}}>
                        <Text style={{fontSize: 18, textAlign: 'center'}}>
                            {question[qnumber].question}
                        </Text>
                    </View>
                    <View style={{alignItems: 'center', marginTop: 40}}>
                        <TouchableOpacity onPress={()=> setOptionIndex(0)} 
                            style={optionIndex==0?styles.optionStyleSelect:styles.optionStyle}>
                            <Text style={optionIndex==0?styles.optionTxtSelect:styles.optionTxt}>Did not apply to me at all</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> setOptionIndex(1)} 
                            style={optionIndex==1?styles.optionStyleSelect:styles.optionStyle}>
                            <Text style={optionIndex==1?styles.optionTxtSelect:styles.optionTxt}>Applied to me to some degree, or some of the time</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> setOptionIndex(2)} 
                            style={optionIndex==2?styles.optionStyleSelect:styles.optionStyle}>
                            <Text style={optionIndex==2?styles.optionTxtSelect:styles.optionTxt}>Applied to me to a considerable degree or a good part of time</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> setOptionIndex(3)} 
                            style={optionIndex==3?styles.optionStyleSelect:styles.optionStyle}>
                            <Text style={optionIndex==3?styles.optionTxtSelect:styles.optionTxt}>Applied to me very much or most of the time</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{alignItems: 'center'}}>
                    {question.length==qnumber+1?(
                        <View style={{width: width-10, flexDirection: 'row', paddingBottom: 10}}>
                            <TouchableOpacity style={styles.submitBtn} onPress={()=> {
                                Alert.alert(
                                    "Submission confirmation",
                                    "Are you sure, want to submit?",
                                    [
                                        {
                                            text: "Cancel",
                                            onPress: () => console.log("Cancel Pressed"),
                                            style: "cancel"
                                        },
                                        { text: "OK", onPress: () => {
                                            navigation.navigate("dashboard")
                                        } }
                                    ]
                                );
                            }}>
                                <Text style={{fontSize: 16, color: '#ffffff'}}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    ):null}
                    <View style={{width: width-10, flexDirection: 'row', paddingBottom: 10}}>
                        <TouchableOpacity style={styles.bottomBtn} onPress={()=> updateQuestionBack()}>
                            <Text style={{fontSize: 16, color: '#ffffff'}}>Back</Text>
                        </TouchableOpacity>
                        <View style={{width: '4%', height: 50}}/>
                        <TouchableOpacity style={styles.bottomBtn} onPress={()=> updateQuestionNext()}>
                            <Text style={{fontSize: 16, color: '#ffffff'}}>Next</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </>)}
        </View>
    );
}

const styles= StyleSheet.create({
    signin_container: {
        width: '100%', 
        borderRadius: 10 , 
        height: 60,  
        justifyContent: 'center', 
        alignItems: 'center'
    },
    textHead: {
        textAlign: 'center', 
        margin: 10, 
        fontSize: 22, 
        color: '#f46687', 
        fontWeight: 'bold', 
        textDecorationLine: 'underline'
    },
    optionStyle: {
        width: width-20, 
        height: 60, 
        marginTop: 10, 
        borderColor: '#ed446c', 
        borderWidth:2,
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 10
    },
    optionTxt: {
        fontSize: 15, 
        color: '#ed446c', 
        textAlign: 'center',
        width: '80%'
    },
    optionStyleSelect: {
        width: width-20, 
        height: 60, 
        marginTop: 10, 
        borderColor: '#ed446c', 
        borderWidth:2,
        backgroundColor: '#ed446c',
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 10
    },
    optionTxtSelect: {
        fontSize: 15, 
        color: '#ffffff', 
        textAlign: 'center',
        width: '80%'
    },
    bottomBtn: {
        width: '48%', 
        height: 50, 
        backgroundColor: '#ed446c', 
        borderRadius: 10, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    submitBtn: {
        width: '100%', 
        height: 50, 
        backgroundColor: '#ed446c', 
        borderRadius: 10, 
        alignItems: 'center', 
        justifyContent: 'center'
    }
});