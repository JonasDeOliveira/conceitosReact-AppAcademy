import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput, Button, ScrollView } from 'react-native'
import { MaskedTextInput } from "react-native-mask-text";
import { Titulo } from './index'

function Forms(props) {

    const [usuario, setUsuario] = useState({
        nome_completo: '',
        email: '',
        cpf: '',
        telefone: '',
        data_nascimento: ''
    })
    const [cont, setCont] = useState(0);

    //componentDidMount
    // useEffect(() => {
    //     console.log(cont)
    //     setCont(cont + 1)
    // }, [])

    //componentDidUpdate
    useEffect(() => {
        console.log(cont)
        setCont(cont + 1)
    }, [usuario])

    const cadastrar = () => {
        console.log(usuario);
    }

    return (
        <ScrollView style={[styles.Container]}>
            <Titulo principal="Cadastro"/>
            <View style={[styles.WrapperInput]}>
                <Text style={[styles.Label]}>Nome completo:</Text>
                <TextInput style={[styles.Input]} 
                    placeholder="Digite seu nome" 
                    value={usuario.nome_completo}
                    onChangeText={(value) => setUsuario({...usuario, nome_completo: value})} />
            </View>
            <View style={[styles.WrapperInput]}>
                <Text style={[styles.Label]}>Email:</Text>
                <TextInput style={[styles.Input]} 
                    placeholder="Digite seu e-mail" 
                    value={usuario.email}
                    onChangeText={(value) => setUsuario({...usuario, email: value})} />
            </View>
            <View style={[styles.WrapperInput]}>
                <Text style={[styles.Label]}>CPF:</Text>
                <MaskedTextInput style={[styles.Input]} 
                    mask="999.999.999-99"
                    keyboardType="numeric"
                    placeholder="Digite seu CPF" 
                    value={usuario.cpf}
                    onChangeText={(value) => setUsuario({...usuario, cpf: value})} />
            </View>
            <View style={[styles.WrapperInput]}>
                <Text style={[styles.Label]}>Telefone:</Text>
                <MaskedTextInput style={[styles.Input]} 
                    mask="(99) 99999-9999"
                    keyboardType='numeric'
                    placeholder="Digite seu telefone" 
                    value={usuario.telefone}
                    onChangeText={(value) => setUsuario({...usuario, telefone: value})} />
            </View>
            <View style={[styles.WrapperInput]}>
                <Text style={[styles.Label]}>Data de Nascimento:</Text>
                <MaskedTextInput style={[styles.Input]} 
                    mask="99/99/9999"
                    keyboardType="numeric"
                    placeholder="Digite sua data de nascimento" 
                    value={usuario.data_nascimento}
                    onChangeText={(value) => setUsuario({...usuario, data_nascimento: value})} />
            </View>
            
            <Button title="Cadastrar" onPress={cadastrar}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#fff'
    },
    WrapperInput: {
        marginBottom: 20
    },
    Input: {
        borderWidth: 1,
        borderColor: '#000',
        paddingLeft: 10
    },
    Label: {
        fontWeight: 'bold',
        paddingLeft: 5
    }
})

export default Forms