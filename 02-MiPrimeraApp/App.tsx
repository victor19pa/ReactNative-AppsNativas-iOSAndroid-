import React from "react";
import { SafeAreaView } from "react-native";
// import Flex from "./src/screens/Flex.screen";
import Tarea from "./src/screens/Tarea.screen";
//import BoxObjectModel from "./src/screens/BoxObjectModel.screen";
//import Dimensiones from "./src/screens/Dimensiones.screen";
//import ContadorScreen from "./src/screens/Contador.screen";
//import HolaMundo from "./src/screens/HolaMundo.screen";
//import Position from './src/screens/Position.screen';

const App = () => {
  return (
    <>
      <SafeAreaView style={{flex: 1,}}>
        {/* <ContadorScreen /> */}
        {/* <Position /> */}
        <Tarea />
      </SafeAreaView>
    </>
  )
}

export default App;