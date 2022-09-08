import React from 'react';
import { Text, View, StyleSheet } from 'react-native'

function Titulo(props) {

    return (
        <View style={[styles.Container]}>
            <Text style={styles.Principal}>{props.principal}</Text>
            <Text style={styles.Secundario}>
                {props.secundario ? props.secundario: ''}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#fff',
        paddingBottom: 5,
        paddingTop: 10
    },
    Principal: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 22,
        textAlign: 'center'
    },
    Secundario: {
        color: '#535251',
        fontSize: 16,
        textAlign: 'center'
    }
})

export default Titulo