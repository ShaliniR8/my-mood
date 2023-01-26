import React, {useLayoutEffect} from 'react';

import { StatusBar } from 'expo-status-bar';
import { Text, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
     const nav = useNavigation();
     useLayoutEffect(() => {
          nav.setOptions({ 
               headerShown: false,
          })
     }, [])

     return (
       <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <Text> Home! In Safe Area. </Text>
         <StatusBar style="auto" />
       </SafeAreaView>
     );
   }

export default HomeScreen;