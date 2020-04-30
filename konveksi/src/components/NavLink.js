import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

const NavLink = ({ navigation, text, routeName, routeText }) => {
    return (
        <TouchableOpacity
            onPress={() => {
            navigation.navigate(routeName);
            }}>
            <Text style={styles.signin}> {text} <Text style={{color:'rgb(32,101,145)', fontWeight:'bold'}}>{routeText}</Text> instead </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    signin: {
        textAlign:'center'
    }
});

export default withNavigation(NavLink);