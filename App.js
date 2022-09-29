import React, { useState } from 'react';
import {
  SafeAreaView, Text, Button, StyleSheet
} from 'react-native';
import { 
  Primeiro, Padrao, 
  Component1, Component2,
  Estilos, MinMax, Titulo,
  Botao, Contador, PaiDireto,
  PaiIndireto, Diferenciar,
  Familia, Membro, ParImpar,
  If, UsuarioLogado, ListaProdutos,
  ListaComFlatList, Forms, ClassComponent
} from './src/components'
import Calculator from './src/screens/Calculator'

const App = () => { 

  const [usuario, setUsuario] = useState({})
  

  const handleLogin = () => {
    setUsuario({nome:"jonas", email:"jonas@rd.com"})
  }

  return (
    <SafeAreaView>
      <ClassComponent/>
      {/* <Forms/> */}
      {/* <ListaComFlatList/>
      <ListaProdutos/> */}
      {/* <UsuarioLogado usuario={usuario} />

      <Button title="Fazer Login" onPress={handleLogin}/>
      <Button title="sair" onPress={() => setUsuario({})}/> */}
      {/* <ParImpar num={3}/>
      <ParImpar num={10}/> */}
      {/* <Familia>
        <Membro nome="Bia" sobrenome="Arruda"/>
        <Membro nome="Carlos" sobrenome="Arruda"/>
        <Membro nome="Roberto" sobrenome="Arruda"/>
        <Membro nome="Roberta" sobrenome="Arruda"/>
      </Familia>
      <Familia>
        <Text>Qualuer coisa</Text>
        <Membro nome="Bia" sobrenome="Silva"/>
        <Membro nome="Carlos" sobrenome="Silva"/>
        <Membro nome="Roberto" sobrenome="Silva"/>
        <Membro nome="Roberta" sobrenome="Silva"/>
      </Familia> */}
      {/* <Diferenciar/> */}
      {/* <PaiIndireto />
      <PaiIndireto /> */}
      {/* <PaiDireto/> */}
      {/* <Calculator /> */}
      {/* <Titulo principal="Contador"/>
      <Contador inicial={20} intervalo={10}/>
      <Contador inicial={0} intervalo={2}/>
      <Titulo principal="Botão, TouchableOpacity e TouchableWithoutFeedback"/>
      <Botao/>
      <Titulo principal="passando propriedade(props)"/>
      <MinMax min="2" max="10"/>
      <MinMax min="5" max="15" label="texto qualquer"/>
      <MinMax min={60} max={80} label="com numbers"/>
      <Titulo principal="adicionando css"/>
      <Estilos/>
      <Titulo principal="Componentes com export default e sem default"/>
      <Padrao />
      <Component1 />
      <Component2 />
      <Titulo principal="Primeiro componente"/>
      <Primeiro /> */}
    </SafeAreaView>
  );
};


export default App;