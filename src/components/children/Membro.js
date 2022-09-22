import React from 'react';
import { Text, View, StyleSheet } from 'react-native'

function Membro(props) {

    return (
        <View style={[styles.Container]}>
            <Text>
                {props.nome} {props.sobrenome}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#fff'
    }
})

export default Membro