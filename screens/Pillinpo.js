import { FlatList, Image, Pressable, Text, View, StyleSheet, Linking } from "react-native";
import SearchLine from "../components/SearchLine";
import { useState } from "react";

function Mypage ({route}) {

    const [goaltext,setgoaltext] = useState('');

    function goalinputHandler() {
        setgoaltext(fromPillid);
    }

    const pillinpourl = () => {
        Linking.openURL("https://www.health.kr/")
    }

    const { fromPillid } = route.params;


    return (

        <View style={styles.AppContainer}>
            <View style={styles.pillImage}>
                <Image >
                    
                </Image>
            </View>
            <View style={styles.Pilltype}>
                <Text style={styles.Pilltypetext}>{fromPillid}</Text>
            </View>
            <View style={styles.Pillinpo}>
                <Text>asdasd</Text>
                <FlatList>
                </FlatList>
            </View>
            <View style={styles.pillwarning}>
                <Pressable>
                </Pressable>
            </View>
            <View style={styles.tailbar}>
                <View style={styles.tailbar1}>
                <Pressable style={styles.tailicon}>
                    <Text>복용중인 약물에 추가</Text>
                </Pressable>
                <Pressable style={styles.tailicon} 
                onPress={() => pillinpourl()}
                >
                        <Text>약학정보원에서 자세히보기</Text>
                </Pressable>
                </View>
                <Pressable style={styles.tailfind} 
                android_ripple={{color: 'dddddd'}}
                onPress={goalinputHandler}  
                >
                    <Text>즐겨{"\n"}찾기</Text>
                </Pressable>
            </View>


        </View>
    );

}

export default Mypage;

const styles = StyleSheet.create({
    AppContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    pillImage: {
        flex: 1,
        width: '90%',
        marginBottom: 10,
    },
    Pilltype: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        backgroundColor: '#9DC2F9',
        borderRadius: 20,
        marginBottom: 10,
    },
    Pilltypetext: {
        fontSize: 20,
    },
    Pillinpo: {
        width: '90%',
        flex: 0.7
    },
    pillwarning: {
        width: '90%',
        flex: 0.5
    },
    tailbar: {
        width: '90%',
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tailicon: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '95%',
        height: '30%',
        backgroundColor: '#9DC2F9',
        borderRadius: 15,
        marginBottom: 5,
    },
    tailbar1: {
        width: '80%'
    },
    tailfind: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '15%',
        height: '50%',
        backgroundColor: '#FFDE67',
        borderRadius: 10,
    }
})