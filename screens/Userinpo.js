import { Text, View,TextInput, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import TailLine from "../components/TailLine";
import { useState } from "react";


function Userinpo() {
    const [text, onChangeText] = useState('');

    return (
        <View style={styles.appContainer}>
            <View style={styles.layout}>
                <Text>기본 정보</Text>
            </View>
            <View style={styles.datainput}>
                <FlatList />
            </View>
            <View style={styles.layout}>
                <Text>비밀번호 변경</Text>
            </View>
            <View style={styles.datainput}>
                <View style={styles.searchBox}>
                    <TextInput style={styles.textInput} 
                    placeholder="현재 비밀번호를 입력해주세요"  
                    onChangeText={onChangeText}
                    value={text}
                    />
                </View>
                <View style={styles.searchBox}>
                    <TextInput style={styles.textInput} 
                    placeholder="새 비밀번호를 입력하세요."  
                    onChangeText={onChangeText}
                    value={text}
                    />
                </View>
                <View style={styles.searchBox}>
                    <TextInput style={styles.textInput} 
                    placeholder="새 비밀번호를 한번 더 입력하세요."  
                    onChangeText={onChangeText}
                    value={text}
                    />
                </View>
                <View style={styles.button}>
                    <Pressable>
                        <Text>비밀번호 변경</Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.layout}>
                <Text>회원 탈퇴</Text>
            </View>
            <View style={styles.userout}>
            <View style={styles.searchBox}>
                    <TextInput style={styles.textInput} 
                    placeholder="비밀번호를 입력하여 주세요."  
                    onChangeText={onChangeText}
                    value={text}
                    />
                </View>
                <View style={styles.button}>
                    <Pressable>
                        <Text>탈퇴하기</Text>
                    </Pressable>
                </View>
            </View>
            <TailLine />
        </View>
        
    )
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    layout: {
        width: '100%',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'ccc'
    },
    datainput: {
        width: '100%',
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    userout: {
        width: '100%',
        flex: 0.5, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 35,
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 5,
        width: '90%',
        padding: 8,
        marginBottom: 3,
    },
    searchline: {
        flex: 0.4,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 10,
        borderBottomWidth: 1,
        borderColor: '#cccccc'
    },
    textInput: {
        fontSize: 11,
    },
    button: {
        width: '30%',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#cccccc',
        marginTop: 10,
    }
});

export default Userinpo;