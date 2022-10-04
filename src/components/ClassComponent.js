import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native'

class ClassComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nome: "Jonas"
        }
    }

    componentDidMount() {
        console.warn('inciou')
    }

    componentDidUpdate() {
        console.warn('atualizado')
    }
    
    //escopo do this com arrow functions é a classe
    alterarNome = () => {
        console.log("alterar")
        this.setState({nome: "Marcelo"})        
    }

    //escopo do this é a propria função
    // alterarNome() {
    //     console.log("alterar")
    //     this.setState({nome: "Marcelo"})        
    // }

    render() {
        return (
            <View style={[styles.Container]}>
                <Text>Nome: {this.state.nome}</Text>
                <Button title="Alterar" onPress={this.alterarNome}/>
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#fff'
    }
})

export default ClassComponent