import React, { useState, useEffect} from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import globalStyles from '../styles';
import { formatearCantidad } from '../helpers';



const ControlPresupuesto = ({ presupuesto, gastos }) => {

    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)

    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto) => Number(gasto.cantidad) + total, 0)
        setGastado(totalGastado)


        const totalDisponible = presupuesto - totalGastado

        setGastado(totalGastado)
        setDisponible(totalDisponible)
    }, [gastos])

    return (
        <View style={styles.contenedor}>
            
            <View style={styles.centrarGrafica}>
                <Image style={styles.imagen} source={require('../img/grafico.jpg')} />
            </View>

            <View style={styles.contenedorTexto}>
                <Text style={styles.valor}>
                    <Text style={styles.label}>Presupuesto: {''}</Text>
                    {formatearCantidad(presupuesto)}
                </Text>

                <Text style={styles.valor}>
                    <Text style={styles.label}>Disponible: {''}</Text>
                    {formatearCantidad(disponible)}
                </Text>

                <Text style={styles.valor}>
                    <Text style={styles.label}>Gastado: {''}</Text>
                    {formatearCantidad(gastado)}
                </Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    contenedor: {
        ...globalStyles.contenedor
    },
    centrarGrafica: {
        alignItems: 'center'
    },
    imagen: {
        height: 250,
        width: 250
    },
    contenedorTexto: {
        marginTop: 60
    },
    valor: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom:10
    },
    label: {
        fontWeight: '500',
        color: '#07A8EF'
    }
});
export default ControlPresupuesto