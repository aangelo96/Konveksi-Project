import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error' :
      return { ...state, errorMessage: action.payload };
    case 'signup' :
      return { token: action.payload, errorMessage: ''};
    case 'signin' :
      return { token: action.payload, errorMessage: ''};
    default :
      return state;
  }
};

const signup = (dispatch) => {
  return async ({email , password}) => {
    try {
      const response = await trackerApi.post('/signup', { email, password });
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({ type: 'signup', payload: response.data.token});
      //For getting the item :
      //await AsyncStorage.getItem('token');

      navigate('Home');

    } catch (err) {
      dispatch({ type: 'add_error', payload: 'Something went wrong with sign up'});
    }
  };
};

const signin = (dispatch) => {
  return async ({email , password}) => {
    try {
      const response = await trackerApi.post('/signin', { email, password });
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({ type: 'signin', payload: response.data.token});

      navigate('Home');
      
    } catch (err) {
      dispatch({ type: 'add_error', payload: 'Something went wrong with login'});
    }
  };
};

const signout = (dispatch) => {
  return () => {

  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { token: null, errorMessage: '' }
);
