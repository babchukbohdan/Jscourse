import React, { Component } from 'react';
import "./post-add-form.css";

export default class PostAddForm extends Component {

  state = {
    text: ''
  }
  
  onValueChange = (e) => {
    this.setState({
      text: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.text);
    this.setState({
      text: ''
    })
  }
  
  render() {
    // const {onAdd} = this.props;
    const {text} = this.state;
    return (
      <form 
        className="bottom-panel d-flex"
        onSubmit={this.onSubmit}
      >
        <input
          type="text"
          placeholder="Your thoughts"
          className="form-control new-post-label"
          onChange={this.onValueChange}
          value={text}
        />
        <button
          type="submit"
          className="btn btn-outline-secondary"
           >
          Добавить
        </button>
      </form>
    )
  }
}