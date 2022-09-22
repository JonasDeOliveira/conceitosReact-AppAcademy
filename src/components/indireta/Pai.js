import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native'
import Filho from './Filho'

function PaiIndireto(props) {

    const [texto, setTexto] = useState('');
    const [num, setNum] = useState(0);

    function exibirValor(texto, numero) {
        setTexto(texto);
        setNum(numero);
    }

    return (
        <View style={[styles.Container]}>
            <Text>
                {texto} {num}
            </Text>
           <Filho funcao={exibirValor}/>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#fff'
    }
})

export default PaiIndireto