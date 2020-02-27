import React from "react";
import { Text } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

const Icon = ({ name, color, style, ...props }) => {
  return <FontAwesome style={[{ fontSize: 26, color }, style]} name={name}/>;
};

export default Icon;
