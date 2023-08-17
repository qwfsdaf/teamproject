import { FlatList, Image, Pressable, StyleSheet, Text, TextInput, View, } from "react-native";
import TailLine from "../components/TailLine";
import { useState } from "react";
import Healthitem from "../components/Healthitem";

function Healthinpo() {

    const [Goaltext, setGoaltext] = useState('');
    const [courseGoals, setCourseGoals] = useState([]);
    const [pilltext, setpilltext] = useState('');
    const [pillzero, setpillzero] = useState([]);

    function addGoalHandler() {
        setCourseGoals(currentCourseGoals => 
        [...courseGoals, {text: Goaltext, id: Math.random().toString()}]);
        setGoaltext('');
    };

    function addpillzero() {
        setpillzero(currentCourseGoals => 
        [...pillzero, {text: pilltext, id: Math.random().toString()}]);
        setpilltext('');
        
    };

    function deleteGoalHandler(id) {
        setCourseGoals(currentCourseGoals => {
        return currentCourseGoals.filter((goal) => goal.id !== id);
        });
    }

    function deletepillzero(id) {
        setpillzero(currentCourseGoals => {
        return currentCourseGoals.filter((goal) => goal.id !== id);
        });
    }


    return (
    <View style={styles.appContainer}>
        <View style={styles.listsetup}>
            <Text>내 질병 목록</Text>
            <View style={styles.listset}>
                <TextInput 
                placeholder="가지고 계신 질병을 입력하시오."
                onChangeText={setGoaltext}
                value={Goaltext}
                />
            </View>
            <View>
            <FlatList 
            data={courseGoals} renderItem={itemData => {
                return (
                <Healthitem 
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
                />
                )}}
                keyExtractor={item => item.id}
            />
            </View>
            <View style={styles.Images}>
            <Pressable onPress={addGoalHandler}>
            <Image style={styles.Image} source={require('../assets/Images/add.png')}/>
            </Pressable>
            </View>
        </View>
        <View style={styles.listsetup}>
            <Text>내 약물 알레르기 목록</Text>
            <View style={styles.listset}>
                <TextInput 
                placeholder="가지고 계신 약물 알레르기를 입력하시오."
                onChangeText={setpilltext}
                value={pilltext}
                />
            </View>
            <View>
            <FlatList 
            data={pillzero} renderItem={itemData => {
                return (
                <Healthitem 
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deletepillzero}
                />
                )}}
                keyExtractor={item => item.id}
            />
            </View>
            <View style={styles.Images}>
            <Pressable onPress={addpillzero}>
            <Image style={styles.Image} source={require('../assets/Images/add.png')}/>
            </Pressable>
            </View>
        </View>
        <TailLine />
    </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    listsetup: {
        flex: 1,
        width: '90%',
        margin: 10,
    },
    listset: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderColor: 'black',
        borderBottomWidth: 1,
        marginBottom: 5,
    },
    Images: {
        width: '100%',
        alignItems: "center",
        justifyContent: 'center'
    },
    Image: {
        width: 20,
        height: 20,
    },
    Text: {
        fontSize: 20,
    },
})

export default Healthinpo;

