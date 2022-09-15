import React from 'react';
import {
  SafeAreaView
} from 'react-native';
import { 
  Primeiro, Padrao, 
  Component1, Component2,
  Estilos, MinMax, Titulo,
  Botao, Contador 
} from './src/components'
import Calculator from './src/screens/Calculator'

const App = () => { 

  return (
    <SafeAreaView>
      <Calculator />
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