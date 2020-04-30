import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const LoginScreen = ({navigation}) => {
    const { state, signin, clearErrorMessage } = useContext(AuthContext);

      return (
          <View>
              <NavigationEvents onWillFocus={clearErrorMessage} />
              <AuthForm
                errorMessage={state.errorMessage}
                onSubmit={signin}
                submitButtonText="Login"
              />
              <NavLink
                routeName="Signup"
                text="Don't have an account?"
                routeText="Sign up"
              />
          </View>
      )
};

const styles = StyleSheet.create({});

export default LoginScreen;