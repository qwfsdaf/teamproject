import { StyleSheet, View, TextInput,Image, Pressable ,Text, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';


function SearchLine () {

    const navigation = useNavigation();
    const [enteredPill, setEnteredPill] = useState('');

    return (
        <View style={styles.searchline}>
            <View style={styles.searchBox}>
            <TextInput style={styles.textInput} 
            placeholder="검색할 내용을 입력하시오..."  
            onChangeText={setEnteredPill}
            value={enteredPill}
            />
            <Pressable android_ripple={{color: '#ccc'}} 
                onPress={ () => navigation.navigate('Pillinpomation',{
                    fromPillid: enteredPill
                })}
                >
            <Image style={styles.Image} source={require('../assets/Images/search.png')}/>
            </Pressable>
            </View>
        </View>
        )
}

export default SearchLine;

const styles = StyleSheet.create({
    searchBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 40,
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 5,
        width: '90%',
        padding: 8,
        marginBottom: 20,
    },
    searchline: {
        flex: 0.4,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 10,
        borderBottomWidth: 1,
        borderColor: '#cccccc'
    },
    Image: {
        width: 25,
        height: 25,
    }
});