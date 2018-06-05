import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image } from 'react-native';
import { BackgroundImage } from '../components/BackgroundImage';
import s  from '../styles/LoginContainer';
import { CustomTextInput } from '../components/CustomTextInput';
import { CustomButton } from '../components/CustomButton';
import firebase from 'firebase';
import { loginUser, registerUser} from '../redux/actions/Authentication';
import { search } from '../redux/actions/Wikipedia';

class Authentication extends Component {
  state = {
    email: 'rafa@test.com',
    password: '789123',
    isAuthentication: true,
  };

  onRegistrationPressed = () => {
    this.setState({ isAuthentication: false });
  }

  onLoginRegistrationPressed = () => {
    const { email, password } = this.state;
    if (this.state.isAuthentication) {
      this.props.loginUser(email, password)
      .then((response) => {
        this.props.navigation.navigate('Tabs');
      });
    } else {
      this.props.registerUser(email, password)
      .then((response) => {
        this.props.navigation.navigate('Tabs');
      }).catch((error) => {
        // TODO: handle error
      });
    }
  }

  render() {
    return (
      <View style={s.root}>
        <BackgroundImage />
        <View style={s.headerImageWrapper}>
          <Image
            source={require('./../assets/wikipedia_splash_white.png')}
            style={s.headerImage}
          />
        </View>
        <View style={s.loginWrapper}>
          <View style={s.regularLogin}>
            <CustomTextInput
              placeholder="email"
              onChangeText={(email) => this.setState({ email })}
            />
          </View>
            <CustomTextInput
              placeholder="password"
              onChangeText={(password) => this.setState({ password })}
              secureTextEntry
            />
            <CustomButton
              onPress={this.onLoginRegistrationPressed}
              title={this.state.isAuthentication ? 'sign in' : 'sign up'}
            />
            {
              this.state.isAuthentication && (
                <CustomButton
                  onPress={this.onRegistrationPressed}
                  title="Register now"
                />
              )
            }
          <View style={s.facebookLogin}>
          </View>
        </View>
      </View>
    );
  }
}

export default connect(null, {
  loginUser,
  registerUser,
  search,
})(Authentication);