import {View, StyleSheet, Image, Pressable, Modal} from 'react-native'
import React from "react";
import { useNavigation } from '@react-navigation/native';




function TailLine () {

    const navigation = useNavigation();
    return (
        <View style={styles.TailLine}>
            <View style={styles.TailBox}>
            <Pressable onPress={() => navigation.navigate('Favoritesinpo')}>
            <Image style={styles.Image} source={require('../assets/Images/star.png')} />
            </Pressable>
            <Image style={styles.Image} source={require('../assets/Images/camera.png')} />
            <Image style={styles.Image} source={require('../assets/Images/gallery.png')} />
            </View>
        </View>
    )
}

export default TailLine;

const styles = StyleSheet.create({
    TailLine: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F3F3F3',
    },
    TailBox: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
    },
    Image: {
        width: 30,
        height: 30,
    }
});