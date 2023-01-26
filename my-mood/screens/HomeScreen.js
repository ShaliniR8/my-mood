import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const HomeScreen = () => {
     return (
       <View className="flex-1 items-center justify-center bg-white">
         <Text>Home!</Text>
         <StatusBar style="auto" />
       </View>
     );
   }

export default HomeScreen;