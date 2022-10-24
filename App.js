import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Alert,
  Pressable,
  Image,
  Modal,
} from 'react-native';

import Header from './src/components/Header';
import NuevoPresupuesto from './src/components/NuevoPresupuesto';
import FormularioGasto from './src/components/FormularioGasto';
import ControlPresupuesto from './src/components/ControlPresupuesto';
import ListadoGastos from './src/components/ListadoGastos';
import Filtro from './src/components/Filtro';
import { generarId } from './src/helpers';

// Planificador ZR


const App = () => {

  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  const [presupuesto, setPresupuesto] = useState(0)
  const [gastos, setGastos] = useState([])
  const [modal, setModal] = useState(false)
  const [gasto, setGasto] = useState({})
  const [filtro, setFiltro] = useState('')
  const [gastosFiltrados, setGastosFiltrados] = useState([])


  const handleNuevoPresupuesto = (presupuesto) => {
    if (Number(presupuesto) > 0) {
      setIsValidPresupuesto(true)
    } else {
      Alert.alert('Error', 'El Presupuesto no puede ser menor o igual a 0')
    }
  }

  const handleGasto = (gasto) => {

    if ([gasto.nombre, gasto.categoria, gasto.cantidad].includes('')) {
      Alert.alert(
        "Error",
        "Todos los campos son obligatorios"
      )
      return;
    }

    if (gasto.id) {
      const gastosActualizados = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState)
      setGastos(gastosActualizados)
    } else {
      // Añadir el gasto al state
      gasto.id = generarId()
      gasto.fecha = Date.now()
      setGastos([...gastos, gasto])
    }

    setModal(!modal)
  }

  const eliminarGasto = id => {
    Alert.alert(
      "¿Deseas eliminar el gasto?",
      "Este gasto no se podra recuperar",
      [
        {text: 'No', style: 'cancel' },
        {
          text: 'Si, Eliminar', onPress: () => {
            const gastosActualizados = gastos.filter(gastoState => gastoState.id !== id)
            
            setGastos(gastosActualizados)
            setModal(!modal)
            setGasto({})
        } }
      ]
    )
  }

  return (
    <View style={styles.contenedor}>
      <ScrollView>
        <View style={styles.header}>
          <Header />

          {isValidPresupuesto ? (<ControlPresupuesto
            presupuesto={presupuesto}
            gastos={gastos}
          />
          ) : (
            <NuevoPresupuesto
              presupuesto={presupuesto}
              setPresupuesto={setPresupuesto}
              handleNuevoPresupuesto={handleNuevoPresupuesto}
            />)
          }
        </View>

        {isValidPresupuesto && (
          <>
            <Filtro
              filtro={filtro}
              setFiltro={setFiltro}
              gastos={gastos}
              setGastosFiltrados={setGastosFiltrados}
            />
            <ListadoGastos
            gastos={gastos}
            setModal={setModal}
              setGasto={setGasto}
              filtro={filtro}
              gastosFiltrados={gastosFiltrados}
          />
          </>
        )}
      </ScrollView>

      {modal && (
        <Modal
          animationType='slide'
          visible={modal}
          onRequestClose={() => {
            setModal(!modal)
          }}
        >
          <FormularioGasto
            setModal={setModal}
            handleGasto={handleGasto}
            gasto={gasto}
            setGasto={setGasto}
            eliminarGasto={eliminarGasto}
          />
        </Modal>
      )}

      {isValidPresupuesto && (
        <Pressable style={styles.pressable} onPress={() => setModal(!modal)}>
          <Image style={styles.imagen} source={require('./src/img/nuevo-gasto.png')} />
        </Pressable>
      )}


    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#82A9B8',
    flex: 1
  },
  header: {
    backgroundColor: '#0097B6',
    minHeight: 500
  },
  imagen:
  {
    width: 70,
    height: 70,
  },
  pressable: {
    bottom: 40,
    right: 30,
    position: 'absolute',
  }
});

export default App;
