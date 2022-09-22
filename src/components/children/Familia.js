import React from 'react';
import { Text, View, StyleSheet } from 'react-native'

function Familia(props) {

    return (
        <View style={[styles.Container]}>
            <Text>[Inicio] Membros da família:</Text>
            {props.children}
            <Text>[fim] Membros da família.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#fff'
    }
})

export default Familia