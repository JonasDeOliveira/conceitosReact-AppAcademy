import React from 'react';
import { Text, View, StyleSheet, 
    TouchableOpacity } from 'react-native'

function Botao(props) {

    return (
        <View style={[styles.Container]}>
            <TouchableOpacity style={[styles.button]} onPress={() => props.funcao(props.label)}>
                <Text>{props.label}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#fff'
    },
    button: {
        width: 50,
        height: 50,
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderWidth: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

})

export default Botao