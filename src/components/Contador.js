import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native'

function Contador(props) {

    const [numero, setNumero] = useState(props.inicial) 
    const [nome, setNome] = useState("Jonas") 

    const inc = () => setNumero(numero + props.intervalo);
    const dec = () => setNumero(numero - props.intervalo);
    const mudarNome = () => setNome("Jorge");

    return (
        <View style={[styles.Container]}>
            <Button onPress={inc} title="+"/>
            <Text>{numero}</Text>
            <Button onPress={dec} title="-"/>
            <Text>{nome}</Text>
            <Button onPress={mudarNome} title="mudar nome"/>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#fff'
    }
})

export default Contador