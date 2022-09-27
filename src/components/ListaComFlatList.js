import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native'
import ItemProduto from './ItemProduto'
import Produtos from '../mock/produtos'
import { Titulo } from './index'

function ListaComFlatList(props) {

    const renderProduto = ({item}) => {
        return <ItemProduto produto={item}/>
    }

    return (
        <View style={[styles.Container]}>
            <Titulo principal="FlatList"/>
            <FlatList 
                data={Produtos} 
                keyExtractor={item => `${item.id}`}
                renderItem={renderProduto}/>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#fff'
    }
})

export default ListaComFlatList