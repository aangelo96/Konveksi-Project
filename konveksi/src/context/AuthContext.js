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
    case 'signout':
      return { token: null, errorMessage: ''};
    case 'clear_err_message':
      return { ...state, errorMessage: '' };
    default :
      return state;
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: 'clear_err_message' });
};

const tryLocalSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');

  if (token) {
      dispatch({ type: 'signin', payload: token });
      navigate('Home');
  } else {
      navigate('Signup');
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
  return async () => {
    
    // let the user sign out
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'signout' });
    navigate('Signup');

  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, tryLocalSignin, signout, clearErrorMessage },
  { token: null, errorMessage: '' }
);
