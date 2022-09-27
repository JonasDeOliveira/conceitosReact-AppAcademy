import React from 'react';
import { Text, View, StyleSheet } from 'react-native'
import ItemProduto from './ItemProduto'
import Produtos from '../mock/produtos'
import { Titulo } from './index'

function ListaProdutos(props) {

    return (
        <View style={[styles.Container]}>
           <Titulo principal="Lista com map()"/>
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