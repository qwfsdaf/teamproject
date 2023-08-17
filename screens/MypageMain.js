import { FlatList, Pressable, StyleSheet, View,Image,Text } from "react-native";
import TailLine from "../components/TailLine";
import { useNavigation } from "@react-navigation/native";


function MypageMain() {
    const navigation = useNavigation();

    return (
        <View style={styles.appContainer}>
            <View style={styles.ProfillContainer}>
                <Image style={styles.Profillicons} source={require('../assets/Images/mypage.png')} />
            </View>
            <View style={styles.userinpoButton}>
                <Pressable style={styles.Text}>
                    <Text>회원정보</Text>
                </Pressable>
                <Pressable 
                onPress={() => navigation.navigate('userinpo')}
                style={styles.Text}>
                    <Text>회원정보수정</Text>
                </Pressable>
            </View>
            <View style={styles.userinpoContainer}>
                <FlatList />
            </View>
            <View style={styles.userinpos}>
                <View style={styles.userinpoBox}>
                <Text style={styles.Text}>내 지병 정보</Text>
                <Pressable onPress={() => navigation.navigate('Healthinpomation')}>
                <Image style={styles.Image} source={require('../assets/Images/right.png')} />
                </Pressable>
                </View>
            </View>
            <View style={styles.userinpos}>
                <View style={styles.userinpoBox}>
                <Text>내 가족력 정보</Text>
                <Image style={styles.Image} source={require('../assets/Images/right.png')} />
                </View>
            </View>
            <View style={styles.userinpos}>
                <View style={styles.userinpoBox}>
                <Text>현재 복용 중인 약물 정보</Text>
                <Pressable onPress={() => navigation.navigate('EatingPillinpo')}>
                <Image style={styles.Image} source={require('../assets/Images/right.png')} />
                </Pressable>
                </View>
            </View>
            <View style={styles.tailContainer}>
            </View>
            <TailLine />
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    ProfillContainer: {
        flex: 0.5,
        justifyContent: 'space-around',
        alignItems: "center"
    },
    Profillicons: {
        width: 90,
        height: 90,
    },
    userinpoButton: {
        flex: 0.1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: 'black',
        padding: 5,
    },
    Text: {
        fontSize: 15,
    },
    userinpoContainer: {
        flex: 0.5,
        borderBottomWidth: 1,
        borderColor: 'black',
    },
    userinpos: {
        flex: 0.25,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: 'black',
    },
    userinpoBox: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    Image: {
        width: 30,
        height: 30,
    },
    tailContainer: {
        flex: 1,
    },
    
})

export default MypageMain;