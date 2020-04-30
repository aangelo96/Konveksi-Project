import React, { useContext } from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
// import { Text, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const AccountScreen = () => {
    const { signout } = useContext(AuthContext);

    return (
        <View>
            <Spacer>
                <Button title="Sign Out" onPress={signout} />
            </Spacer>
        </View>
    );
};

AccountScreen.NavigationOptions = () => {
    return {
        title: "Account",
        headerShown: true
    }
};

const styles = StyleSheet.create({});

export default AccountScreen;