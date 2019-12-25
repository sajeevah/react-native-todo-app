import React, {Component} from 'react';
import {StyleSheet, View, ListView, Text} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
  },
});

class TaskList extends Component {
  constructor(props: any, context: any) {
    super(props, context);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.state = {
      dataSource: ds.cloneWithRows(props.todos),
    };
  }

  renderRow(todo: any) {
    return <Text>{todo.task}</Text>;
  }
  render() {
    return (
      <View style={styles.container}>
        <ListView
          key={this.props.todos}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
        />
      </View>
    );
  }
}

// TaskList.propTypes = {
//   todo: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
// };

export default TaskList;
