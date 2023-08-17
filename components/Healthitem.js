import { View,StyleSheet,Text,Image,Pressable } from "react-native";
let today = new Date();

    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDay();

function Healthitem(props) {

    return (
        <View style={styles.listset}>
            
        <Text style={styles.Text}>{props.text} (진단일: {year}년 {month}월 {day}일)</Text>
        <Pressable 
        android_ripple={{color: 'dddddd'}} 
        onPress={props.onDeleteItem.bind(this, props.id)}
        >
        <Image style={styles.Image} source={require('../assets/Images/delect.png')}/>
        </Pressable> 
    </View>
    )
}


export default Healthitem;

const styles = StyleSheet.create({
    listset: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderColor: 'black',
        borderBottomWidth: 1,
        marginBottom: 5,
    },
    Text: {
        fontSize: 20,
    },
    Image: {
        width: 20,
        height: 20,
    },
    pressedItem: {
        opacity: 0.5
    },
})