import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native'

function Forms(props) {

    const [nome, setNome] = useState('')

    return (
        <View style={[styles.Container]}>
            <Text>NomeComp</Text>
            <TextInput style={[styles.Input]} 
                placeholder="Digite seu Nome"
                value={nome}
                onChangeText={value => {
                    setNome(value)
                }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#fff'
    },
    Input: {
        borderWidth: 1,
        borderColor: "#000",
    }
})

export default Forms