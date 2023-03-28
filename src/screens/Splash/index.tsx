import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../libs/Colors';
import {useDispatch, useSelector} from 'react-redux';

interface SplashProps {
  navigation: any;
}

const SplashScreen: React.FC<SplashProps> = ({navigation}) => {
  useEffect(() => {
    handlingSplash();
  }, []);

  // Getting Go to Screen
  const goToScreen = async () => {
    return 'Home';
  };

  // Handling Splash Screen
  const handlingSplash = () => {
    setTimeout(async () => {
      navigation.reset({
        index: 0,
        routes: [
          {
            name: await goToScreen(),
          },
        ],
      });
    }, 2500);
  };

  return (
    <View style={styles.centered}>
      <Text style={styles.title}>Word Quiz</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.whiteColor,
  },
  title: {
    fontSize: 38,
    color: Colors.primaryColor,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 2,
  },
});

export default SplashScreen;
