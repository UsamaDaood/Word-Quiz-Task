// Global loader for whole application //

import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ViewStyle,
  TouchableOpacityProps,
  TextStyle,
} from 'react-native';
import Colors from '../../libs/Colors';
import Color from '../../libs/Colors';

interface ButtonProps {
  btnString: string;
  onClick: any;
  viewStyle: ViewStyle;
  btnStyle: ViewStyle;
  textStyle: TextStyle;
}

const CustomButton = ({
  btnString,
  onClick,
  viewStyle,
  btnStyle,
  textStyle,
}: ButtonProps) => {
  return (
    <View style={viewStyle}>
      <TouchableOpacity style={[styles.btnStyle, btnStyle]} onPress={onClick}>
        <Text style={[styles.btnTextStyle, textStyle]}>{btnString}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    color: Colors.whiteColor,
    fontSize: 15,
  },
  btnStyle: {
    backgroundColor: Color.primaryColor,
    padding: 10,
    borderRadius: 7,
  },
  btnTextStyle: {
    color: Color.whiteColor,
    alignSelf: 'center',
  },
});

export default CustomButton;
