import React, { useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import globalStyles from '../styles'
const Filtro = ({ filtro, setFiltro, gastos, setGastosFiltrados }) => {

    useEffect(() => {
        if (filtro === '') {
            setGastosFiltrados([])
            return
        }
        const gastosFiltrados = gastos.filter(gasto => gasto.categoria === filtro)
        setGastosFiltrados(gastosFiltrados)
    }, [filtro])
    return (
        <View style={styles.contenedor}>
            <Text style={styles.label}>Filtrar Gastos</Text>


            <Picker
                selectedValue={filtro}
                onValueChange={(valor) => {
                    setFiltro(valor)
                }}
            >
                <Picker.Item label="-- Seleccione --" value="" />
                <Picker.Item label="Comida" value="comida" />
                <Picker.Item label="Ahorro" value="ahorro" />
                <Picker.Item label="Ocio" value="ocio" />
                <Picker.Item label="Salud" value="salud" />
                <Picker.Item label="Membresia" value="membresia" />

            </Picker>
        </View>
    )
}
const styles = StyleSheet.create({
    contenedor: {
        ...globalStyles.contenedor,
        transform: [{ translateY: 0 }],
        marginTop: 60,
        paddingVertical: 30
    },
    label: {
        fontSize: 22,
        fontWeight: '700',
        color: '#5A7A8A'
    }
})
export default Filtro