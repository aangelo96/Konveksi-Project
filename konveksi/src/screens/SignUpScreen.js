import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignUpScreen = ({navigation}) => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext);

    return (
        <View>
            <NavigationEvents onWillFocus={clearErrorMessage} />
            <AuthForm
              errorMessage={state.errorMessage}
              onSubmit={signup}
              submitButtonText="Sign Up"
            />
            <NavLink
              routeName="Login"
              text="Already have an account?"
              routeText="Log in"
            />
        </View>
    )
};

const styles = StyleSheet.create({});

export default SignUpScreen;