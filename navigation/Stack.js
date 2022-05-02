import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {View,Text,TouchableOpacity} from 'react-native';
import { YELLOW_COLOR } from '../colors';

const ScreenOne = ({navigation:{navigate}}) => <TouchableOpacity 
    onPress={()=>navigate('ScreenTwo')}
    style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Screen One</Text>
    </TouchableOpacity>
const ScreenTwo = ({navigation:{navigate}}) => <TouchableOpacity 
    onPress={()=>navigate('ScreenThree')}
    style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Text>Screen Two</Text>
</TouchableOpacity>
const ScreenThree = ({navigation:{setOptions}}) => <TouchableOpacity 
    onPress={()=>setOptions({title:'hello'})}
    style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Text>Chage title</Text>
</TouchableOpacity>

const NativeStack = createNativeStackNavigator();

const Stack = () => <NativeStack.Navigator 
        screenOptions={{ 
            headerBackTitleVisible:false,
            headerTintColor: YELLOW_COLOR,
          
         }}
        >
    <NativeStack.Screen name="ScreenOne" component={ScreenOne} />
    <NativeStack.Screen name="ScreenTwo" component={ScreenTwo} />
    <NativeStack.Screen name="ScreenThree" component={ScreenThree} />

</NativeStack.Navigator>
export default Stack;