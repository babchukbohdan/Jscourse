import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';
// import style from './App.module.css';
import styled from 'styled-components';

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;

// const StyledAppBlock = styled(AppBlock)`
//   background-color: grey;
// `

export default class App extends Component {

  state = {
    data: [
      {
        label: 'Going to learn React', important: true, id: '1'
      },
      {
        label: 'Going to learn Webpack', important: false, id: '2'
      },
      {
        label: 'Going to learn GIT', important: false, id: '3'
      },
    ]
  }
  maxId = 4
  
  deleteItem = (id) => {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);

      const before = data.slice(0, index);
      const after = data.slice(index + 1);

      const newData = [...before, ...after];

      return {
        data: newData
      }
    });
  }

  addItem = (body) => {
    const newItem = {
      label: body,
      important: false,
      id: this.maxId++
    }
    this.setState(({data}) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    })
  }
  
  render() {
    const {data} = this.state;
    return (
      <AppBlock>
        <AppHeader/>
        <div className="search-panel d-flex">
            <SearchPanel/>
            <PostStatusFilter/>
        </div>
        <PostList 
          posts={data}
          onDelete={this.deleteItem} />
        <PostAddForm
        onAdd={this.addItem} />
      </AppBlock>
    )
  }
}