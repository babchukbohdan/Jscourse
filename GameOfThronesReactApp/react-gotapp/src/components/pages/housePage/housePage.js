import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import ItemList from '../../itemList';
import ItemDetails, {Field} from '../../itemDetails';
import ErrorMessage from '../../errorMessage';
import GOTService from '../../../services/gotService';
import RowBlock from '../../rowBlock';



export default class HousePage extends Component {
  gotService = new GOTService();
  state = {
    selectedHouse: 1,
    error: false
  }

  onItemSelected = (id) => {
    this.setState({
        selectedHouse: id
    })
  }

  componentDidCatch() {
    this.setState({
        error: true
    })
}

  render() {

    if (this.state.error) {
      return <ErrorMessage/>
    }

    const itemList = (
      <ItemList 
        onItemSelected={this.onItemSelected}
        getData={this.gotService.getAllHouses}
        renderItem={({name}) => `${name}`} />
    )

    const charDetails = (
      <ItemDetails 
        itemId={this.state.selectedHouse}
        getData={this.gotService.getHouse} >
          <Field field='region' label='region' />
          <Field field='words' label='words' />
          <Field field='titles' label='titles' />
          <Field field='overlord' label='overlord' />
          <Field field='ancestralWeapons' label='ancestralWeapons' />
      </ItemDetails>
    
    )

    return (
      <RowBlock
      left={itemList}
      right={charDetails} />
    )
  }
}