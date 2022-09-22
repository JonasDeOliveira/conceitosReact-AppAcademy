import React from 'react';
import { Text, View, StyleSheet } from 'react-native'
import ItemProduto from './ItemProduto'
import Produtos from '../mock/produtos'

function ListaProdutos(props) {

    return (
        <View style={[styles.Container]}>
            <Text>Lista Produtos</Text>
            {
            Produtos.map((item) => {
                return (
                    <ItemProduto produto={item}/>
                )
            })
        }
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#fff'
    }
})

export default ListaProdutos