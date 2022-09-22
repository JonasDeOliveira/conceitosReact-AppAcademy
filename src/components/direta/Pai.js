import React from 'react';
import { Text, View, StyleSheet } from 'react-native'
import Filho from './Filho'

function PaiDireto(props) {

    let x = 10;
    let y = 30;

    return (
        <View style={[styles.Container]}>
           <Filho a={x} b={y}/>
           <Filho a={x + 40} b={y + 220}/>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#fff'
    }
})

export default PaiDireto