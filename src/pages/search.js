import React, { Component } from 'react';
import { StyleSheet, TextInput, View, SafeAreaView, Image } from 'react-native'
import { Container, Header, Button, Icon, Text, Input, Item, List, ListItem, Content, Right, Left } from 'native-base';
export default class Search extends Component {



  render() {
    return (
      <SafeAreaView>
           <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Busca" />
            <Icon name="ios-cart" />
          </Item>
          <Button transparent>
            <Text>Buscar</Text>
          </Button>

          
          </Header>
          
         
  
          <List style={{marginTop:30 }} > 
            <ListItem noIndent style={{ backgroundColor: "#cde1f9" }}>
              <Left>
                <Text>Produto 1</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem >
              <Left>
                <Text>Produto 2</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Produto 3</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
       
          <Button transparent>
            <Text onPress={() => this.props.navigation.navigate('Caditem')}> + Cadastrar Produto</Text>
          </Button>
    
      </SafeAreaView>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#03BB85',
  },
})