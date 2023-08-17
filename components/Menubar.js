import { Image, StyleSheet } from "react-native";

function menubar() {


    return (
    <Image style={styles.Image} source={require('../assets/Images/menuicon2.png')} />
    );
}


const styles = StyleSheet.create({
    Image: {
        width: 30,
        height: 30,
    },
})

export default menubar;
