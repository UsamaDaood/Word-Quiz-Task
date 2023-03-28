import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, StyleSheet, Image} from 'react-native';
import CustomText from '../common/Components/CustomText';
import Color from '../libs/Colors';
import {useSelector} from 'react-redux';
import {PRIMARY_FONT_REGULAR} from '../constants/fonts';
import {responsiveFontSize} from '../libs/responsiveFont';
// Screens Importing
import SplashScreen from '../screens/Splash';
import HomeScreen from '../screens/Home';
import QuizScreen from '../screens/QuizScreen';
import LeaderBoard from '../screens/LeaderBoard';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Quiz" component={QuizScreen} />
      <Stack.Screen name="LeaderBoard" component={LeaderBoard} />
    </Stack.Navigator>
  );
}

export default () => <AppNavigator />;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: responsiveFontSize(20),
    fontWeight: 'bold',
    color: Color.black,
  },
});
