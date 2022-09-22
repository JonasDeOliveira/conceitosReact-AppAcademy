import React from 'react';
import { Text, View, StyleSheet } from 'react-native'

function ItemProduto(props) {

    return (
        <View style={[styles.Container]}>
            <Text key={props.produto.id}>
                {props.produto.id} - {props.produto.nome} - R${props.produto.preco}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#fff'
    }
})

export default ItemProduto