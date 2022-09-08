import React from 'react';
import { Text, StyleSheet, View } from 'react-native'

function Estilos() {

    return (
        <View style={styles.Container}>
            <Text style={[styles.App, styles.App2]}>Estilos</Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#61dafb',
        height: 200
    },
    App: {
        color: '#61dafb'
    },
    App2: {
        backgroundColor: '#f44336',
        fontSize: 30
    }
})

export default Estilos