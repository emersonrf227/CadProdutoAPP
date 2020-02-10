import React, { Component } from 'react';
import { StyleSheet, TextInput, View, SafeAreaView, Image } from 'react-native'
import { Container, Header, Button, Icon, Text, Input, Item, Content, Form, FooterTab, Footer, Textarea } from 'native-base';
export default class Caditem extends React.Component {

    static navigationOptions = { title: "Cadastro de  Produtos" }
    state = { codB: '', nProduto: '', valProduto: '', desItem: '', errorMessage: null };



    salvaItem = () => {


    var arrayProd = {
        codigo: this.state.codB,
        produto: this.state.nProduto,
        valor: this.state.valProduto,
        descricaoItem: this.state.desItem,
      };

        if (this.state.codB == '') {
            alert('Campo código de barras esta vazio');
            return;
        }
        else if (this.state.nProduto == '') {
            alert('Campo nome do produto esta vazio');
            return;
        }

        else if (this.state.valProduto == '') {
            alert('Campo Valor esta vazio');
            return;
        }

        else if (this.state.desItem == '') {
            alert('Campo descriçao do produto esta vazio');
            return;
        } else {

           var dados = JSON.stringify(arrayProd);
            alert('Produto Salvo '+ dados);






        }


    };
    render() {
        return (
            <SafeAreaView>
                <Text style={{ fontSize: 30, textAlign: "center" }}>Cadastro de Produtos </Text>
                <Form>
                    <Item floatingLabel>
                        <Input placeholder="Código de Barras"
                            keyboardType="number-pad"
                            autoCapitalize="none"
                            onChangeText={codB => this.setState({ codB })}
                            value={this.state.codB}
                        />
                    </Item>
                    <Item floatingLabel last>
                        <Input placeholder="Nome do Produto"
                            onChangeText={nProduto => this.setState({ nProduto })}
                            value={this.state.nProduto}
                        />
                    </Item>
                    <Item floatingLabel last>
                        <Input placeholder="Valor"
                            onChangeText={valProduto => this.setState({ valProduto })}
                            value={this.state.valProduto}
                        />
                    </Item>
                    <Textarea style={{ marginTop: 30 }} floatingLabel last rowSpan={5} bordered placeholder="Descriçao do Produto"
                        onChangeText={desItem => this.setState({ desItem })}
                        value={this.state.desItem}
                    />

                    <Button onPress={this.salvaItem} full success>
                        <Text > Cadastra Item  </Text>
                    </Button>

                </Form>


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