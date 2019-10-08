import React, { Component } from "react";
import Button from "./Button";

class ListTask extends Component {
  render() {
    const { id, task, onDelete } = this.props;
    return (
      <li>
        id {id}
        {task}
        <Button onEvent={onDelete}>Delete</Button>
      </li>
    );
  }
}

export default ListTask;
