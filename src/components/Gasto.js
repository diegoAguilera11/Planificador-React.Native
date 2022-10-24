import React from 'react'
import { View, StyleSheet, Text, Image, Pressable } from 'react-native'
import globalStyles from '../styles'
import { formatearCantidad, formatearFecha } from '../helpers'


const diccionarioIconos = {
    comida: require('../img/icono_comida.png'),
    ahorro: require('../img/icono_ahorro.png'),
    ocio: require('../img/icono_ocio.png'),
    salud: require('../img/icono_salud.png'),
    membresia: require('../img/icono_suscripciones.png')
}

const Gasto = ({ gasto, setModal, setGasto }) => {
    const { nombre, categoria, cantidad, id, fecha } = gasto

    const handleAcciones = () => {
        setModal(true)
        setGasto(gasto)
    }


    return (
        <Pressable onLongPress={handleAcciones}>
            <View style={styles.contenedor}>
                <View style={styles.contenido}>
                    <View style={styles.contenedorImagen}>
                        <Image
                            style={styles.imagen}
                            source={diccionarioIconos[categoria]} />
                        <View style={styles.contenedorTexto}>
                            <Text style={styles.idGasto}>{id}</Text>
                            <Text style={styles.categoria}>{categoria}</Text>
                            <Text style={styles.nombreGasto}>{nombre}</Text>
                            <Text style={styles.fechaGasto}>{formatearFecha(fecha)}</Text>
                        </View>
                    </View>
                    <Text style={styles.cantidad}>{formatearCantidad(cantidad)}</Text>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        ...globalStyles.contenedor,
        marginBottom: 20
    },
    contenido: {
        // backgroundColor: '#F11111'
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    contenedorImagen: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    imagen: {
        width: 80,
        height: 80,
        marginRight: 20
    },
    contenedorTexto: {
        flex: 1
    },
    idGasto: {
        color: '#796F6F',
        fontSize: 15,
        fontWeight: '700',
        textTransform: 'uppercase',
        marginBottom: 10

    },
    categoria: {
        color: '#94A3B8',
        fontSize: 15,
        fontWeight: '700',
        textTransform: 'uppercase',
        marginBottom: 5

    },
    nombreGasto: {
        fontSize: 20,
        color: '#64748b',
        marginBottom: 5
    },
    cantidad: {
        fontSize: 20,
        fontWeight: '700',
        color: '#000'
    },
    fechaGasto: {
        color: '#000',
        fontWeight: '700'
    }


})

export default Gasto