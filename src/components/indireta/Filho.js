import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native'

function Filho(props) {

    function gerarNumero() {
        return Math.random();
    }

    return (
        <Button 
            title="Executar"
            onPress={() => {
                const n = gerarNumero();
                props.funcao('O valor é:', n);
            }} />
    )
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#fff'
    }
})

export default Filho