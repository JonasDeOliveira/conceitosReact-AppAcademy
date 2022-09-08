import React from 'react';
import { Text, StyleSheet, View } from 'react-native'

function MinMax(props) {

    // console.warn(props.min)
    // console.warn(props.max)
    // console.warn(props.label)

    const soma = () => {
        let resultado = props.min + props.max;

        return (
            <Text>
                A Soma é: {resultado}
            </Text>
        )
    }

    return (
        <View>
            {soma()}
            <Text style={styles.text}>
                O valor {props.max} é maior  que o valor {props.min}​ 
            </Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 22,
        color:"#000"
    }
})

export default MinMax