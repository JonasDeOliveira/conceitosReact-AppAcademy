import React from 'react';
import { Text, View, StyleSheet, Button, 
    TouchableOpacity, TouchableWithoutFeedback } from 'react-native'

function Botao(props) {

    function cadastrar(componente) {
        console.warn(`${componente}`);
    }

    return (
        <View style={[styles.Container]}>
            <TouchableOpacity onPress={() => cadastrar("TouchableOpacity")}>
                <Text>TouchableOpacity</Text>
                <Text>TouchableOpacity</Text>
                <Text>TouchableOpacity</Text>
                <Text>TouchableOpacity</Text>
            </TouchableOpacity>
            <TouchableWithoutFeedback onPress={() => cadastrar("TouchableWithoutFeedback")}>
                <View style={styles.TouchableWithoutFeedback}>
                    <Text>TouchableWithoutFeedback</Text>
                    <Text>TouchableWithoutFeedback</Text>
                    <Text>TouchableWithoutFeedback</Text>
                    <Text>TouchableWithoutFeedback</Text>
                </View>
            </TouchableWithoutFeedback>
            <Button title='Cadastrar'
                onPress={() => cadastrar("Button")}
                color="#841584"/>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#fff'
    }

})

export default Botao