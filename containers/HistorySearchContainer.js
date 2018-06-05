import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { renderSearchedItems } from './WikiSearchContainer';
import { connect } from 'react-redux';
import { getHistorySearchedItems } from '../redux/actions/Wikipedia';

class HistorySearch extends Component {
  render() {
    return (
      <ScrollView style={{ flex: 1, paddingTop: 44 }}>
        {renderSearchedItems(this.props.items)}
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => ({
  items: getHistorySearchedItems(state),
});

export default connect(
  mapStateToProps,
  null,
)(HistorySearch);