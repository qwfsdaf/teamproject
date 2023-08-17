import { View, Text,StyleSheet, Image, Pressable, } from 'react-native';
import { useNavigation } from '@react-navigation/native';


function HeadLine() {

    const navigation = useNavigation();
    return (
        <View style={styles.headline}>
            <View style={styles.headLineBar}>
                <Image style={styles.Image} source={require('../assets/Images/menuicon2.png')} />
                <Text style={styles.headText}>Medi-Eye</Text>
                <Pressable android_ripple={{color: '#ccc'}} 
                onPress={ () => navigation.navigate('Mypage')}
                >
                <Image style={styles.Image} source={require('../assets/Images/mypage.png')} />
                </Pressable>
            </View>
        </View>
    )
};

export default HeadLine;

const styles = StyleSheet.create({
    headline: {
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1E90FF',
        marginBottom: 10,
    },
    headLineBar: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        paddingTop: 20
    },
    headText: {
        color: 'white',
    },
    Image: {
        width: 30,
        height: 30,
    },
    
    }

)