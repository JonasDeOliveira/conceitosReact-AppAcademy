import React from 'react';
import { Text } from 'react-native'
import { If } from './index'

function UsuarioLogado(props) {
    
    const usuario = props.usuario || {}

    return (
        <>
        <If test={usuario && usuario.nome && usuario.email}>
            <Text>Usuário Logado</Text>
            <Text>{usuario.nome} - {usuario.email}</Text>
        </If>
        <If test={!usuario || !usuario.nome || !usuario.email}>
            <Text>Olá, faça seu Login</Text>
        </If>                
        </>
    )
}

export default UsuarioLogado