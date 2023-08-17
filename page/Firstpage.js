import { StyleSheet, Text, View,Button } from 'react-native';

import SearchLine from '../components/SearchLine';
import TailLine from '../components/TailLine';

function Firstpage() {
return (
    <View style={styles.appContainer}>
            
    <SearchLine />
    <View style={styles.menuline}>
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
menuline: {
    flex: 2,
},
});

export default Firstpage;