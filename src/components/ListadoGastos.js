import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Gasto from './Gasto'

const ListadoGastos = ({ gastos, setModal, setGasto }) => {
    return (
        <View style={styles.contenedor}>
            <Text style={styles.titulo}>Gastos</Text>

            {gastos.length === 0 ? <Text style={styles.noGastos}>No hay Gastos</Text> :
                gastos.map(gasto => (
                    <Gasto
                        key={gasto.id}
                        gasto={gasto}
                        setModal={setModal}
                        setGasto={setGasto}
                    />
                )
                )}
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        marginVertical: 70
    },
    titulo: {
        color: '#FFF',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: '600',
    },
    noGastos: {
        marginVertical: 20,
        textAlign: 'center',
        fontSize: 20
    }
})
export default ListadoGastos