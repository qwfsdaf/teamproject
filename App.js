import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Firstpage from './page/Firstpage';
import Pillinpo from './screens/Pillinpo';
import Mypageicon from './components/mypageicon';
import Menubar from './components/Menubar';
import MypageMain from './screens/MypageMain';
import Healthinpo from './screens/Healthinpo';
import Favorites from './screens/Favorites';
import Userinpo from './screens/Userinpo';
import EatingPillinpo from './screens/EatingPillinpo';

export default function App() {



  return (
  <>
  <StatusBar style='light' />
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Pages"
      component={Firstpage} 
      options={{
        title: 'Medi-Eye',
        headerStyle: {
          backgroundColor: '#1E90FF',
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 15,
        },
        headerTitleAlign: 'center',
        headerRight: () => (
          <Mypageicon />
        ),
        headerLeft: () => (
          <Menubar />
        )
      }}
      />
      <Stack.Screen 
      options={{
        title: '약물 정보',
        headerStyle: {
          backgroundColor: '#1E90FF'
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontSize: 30,
        },
        headerTitleAlign: 'center',
      }}
      name="Pillinpomation" component={Pillinpo}
      initialParams={{ fromPillid: "non-Search"}}
      />
      <Stack.Screen 
      options={{
        title: '마이페이지',
        headerStyle: {
          backgroundColor: '#1E90FF'
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontSize: 30,
        },
        headerTitleAlign: 'center',
      }}
      name="Mypage" component={MypageMain}/>
      <Stack.Screen 
      options={{
        title: '내 건강 정보',
        headerStyle: {
          backgroundColor: '#1E90FF'
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontSize: 30,
        },
        headerTitleAlign: 'center',
      }}
      name="Healthinpomation" component={Healthinpo} />
      <Stack.Screen 
      options={{
        title: '내 즐겨찾기',
        headerStyle: {
          backgroundColor: '#1E90FF'
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontSize: 30,
        },
        headerTitleAlign: 'center',
      }}
      name="Favoritesinpo" component={Favorites}
      />
      <Stack.Screen 
      options={{
        title: '내 정보 수정',
        headerStyle: {
          backgroundColor: '#1E90FF'
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontSize: 30,
        },
        headerTitleAlign: 'center',
      }}
      name="userinpo" component={Userinpo}
      />
      <Stack.Screen 
      options={{
        title: '복용 중인 약물 정보',
        headerStyle: {
          backgroundColor: '#1E90FF'
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontSize: 30,
        },
        headerTitleAlign: 'center',
      }}
      name="EatingPillinpo" component={EatingPillinpo}
      />
    </Stack.Navigator>
  </NavigationContainer>
  
  </>
  );
}


const styles = StyleSheet.create({
  Image: {
    width: 30,
    height: 30,
},
})