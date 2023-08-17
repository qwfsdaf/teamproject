import { Pressable, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Mypageicon() {

    const navigation = useNavigation();

    return (
        <Pressable android_ripple={{color: '#ccc'}} 
                onPress={ () => navigation.navigate('Mypage')}
                >
                <Image style={styles.Image} source={require('../assets/Images/mypage.png')} />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    Image: {
        width: 30,
        height: 30,
    },
}) 

export default Mypageicon;