import { View,Text, StyleSheet, Button } from "react-native";
import TailLine from "../components/TailLine";
import { FlatList } from "react-native-gesture-handler";
import pillinpo from './Pillinpo' ;
import { useState } from "react";

function Favorites() {

    const [favorites,setfavorites] = useState([]);

    function addGoalHandler(goaltext) {
        setfavorites(currentCourseGoals => 
        [...favorites, {text: goaltext, id: Math.random().toString()}]);
        
    };

    return (
        <View style={styles.appContainer}>
            <View style={styles.favorite}>
            <Text >즐겨찾기 목록</Text>
            </View>
            <FlatList 
            data={favorites} renderItem={itemData => {
                return (
                <View>
                    <Text>{itemData.item.text}</Text>
                </View>
                )
            }
            }
            keyExtractor={item => {item.id}}
            />
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
    favorite: {
        flex: 1,
        width: '90%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 10,
        
    }
}) 

export default Favorites;