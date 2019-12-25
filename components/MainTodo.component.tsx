import React, {Component} from 'react';
import TaskList from './TaskList.component';

class MainTodo extends Component {
  constructor(props: any, context: any) {
    super(props, context);
    this.state = {
      todos: [
        {
          task: 'Learn React Native',
        },
      ],
    };
  }
  render() {
    return <TaskList />;
  }
}

export default MainTodo;
