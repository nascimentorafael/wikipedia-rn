import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { resetState } from '../redux/actions/Authentication';
import { connect } from 'react-redux';

class Profile extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center'}}>
        <Button
          onPress={this.props.resetState}
          title={'Reset States'}
          color="blue"
        />
      </View>
    );
  }
}

export default connect(
  null,
  {
    resetState,
  },
)(Profile);