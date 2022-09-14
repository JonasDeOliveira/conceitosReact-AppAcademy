import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native'
import Botao from '../../components/Calculadora/Botao'
import Display from '../../components/Calculadora/Display'

function Calculadora(props) {

    const [numeros, setNumeros] = useState([0, 0]);
    const [operacao, setOperacao] = useState("");
    const [posicao, setPosicao] = useState(0);
    const [display, setDisplay] = useState(0);

    const addDigito = (digito) => {
        let num = numeros;
        num[posicao] = digito;
        setNumeros(num);
        setDisplay(num[posicao]);
    }

    const addOperacao = (oper) => {
        setOperacao(oper);
        setPosicao(1);
        setDisplay(oper);
    }

    const setResultado = () => {
        setPosicao(0);
        let resultado = 0
        if (operacao == "+") resultado = parseInt(numeros[0]) + parseInt(numeros[1]);
        if (operacao == "-") resultado = parseInt(numeros[0]) - parseInt(numeros[1]);
        if (operacao == "*") resultado = parseInt(numeros[0]) * parseInt(numeros[1]);
        if (operacao == "/") resultado = parseInt(numeros[0]) / parseInt(numeros[1]);

        setDisplay(resultado);
    }

    const reset = () => {
        setNumeros([0, 0]);
        setOperacao("");
        setPosicao(0);
        setDisplay(0);
    }

    return (
        <View style={[styles.Container]}>
            <Text>Calculadora</Text>
            <Display value={display}/>
            <View style={[styles.Buttons]}>
                <Botao label="AC" funcao={reset}/>
                <Botao label="1" funcao={addDigito}/>
                <Botao label="2" funcao={addDigito}/>
                <Botao label="3" funcao={addDigito}/>
                <Botao label="4" funcao={addDigito}/>
                <Botao label="5" funcao={addDigito}/>
                <Botao label="6" funcao={addDigito}/>
                <Botao label="7" funcao={addDigito}/>
                <Botao label="8" funcao={addDigito}/>
                <Botao label="9" funcao={addDigito}/>
                <Botao label="+" funcao={addOperacao}/>
                <Botao label="-" funcao={addOperacao}/>
                <Botao label="*" funcao={addOperacao}/>
                <Botao label="/" funcao={addOperacao}/>
                <Botao label="=" funcao={setResultado}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#fff'
    },
    Buttons: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
})

export default Calculadora