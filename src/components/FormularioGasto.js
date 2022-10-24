import React, {useState, useEffect} from 'react'
import { Text, SafeAreaView, View, Pressable, TextInput, StyleSheet, ScrollView } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import globalStyles from '../styles'
const FormularioGasto = ({
    setModal,
    handleGasto,
    gasto,
    setGasto,
    eliminarGasto}) => {

    const [ nombre, setNombre] = useState('')
    const [ cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] = useState('')
    const [id, setId] = useState('')
    const [fecha, setFecha] = useState('')
    useEffect(() => {
        if (gasto?.nombre) {
            setNombre(gasto.nombre)
            setCantidad(gasto.cantidad)
            setCategoria(gasto.categoria)
            setId(gasto.id)
            setFecha(gasto.fecha)
            return
        }



    },[gasto])

    return (
        <SafeAreaView style={styles.contenedor}>
            <View style={styles.contenedorBotones}>
                <Pressable
                    style={styles.btnCancelar}
                    onLongPress={() => {
                        setModal(false)
                        setGasto({})
                    }}
                >
                    <Text style={styles.btnCancelarTexto}>Cancelar</Text>
                </Pressable>

                <Pressable
                    style={styles.btnEliminar}
                    onLongPress={() => {
                        eliminarGasto(id)
                    }}
                >
                    <Text style={styles.btnEliminarTexto}>Eliminar</Text>
                </Pressable>
            </View>
            <View style={styles.formulario}>
                <Text style={styles.titulo}>{ gasto?.nombre ? 'Editar Gasto' : 'Nuevo Gasto' }</Text>

                <View style={styles.campo}>
                    <Text style={styles.label}>Nombre Gasto</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Nombre del gasto. ej. Salud'
                        value={nombre}
                        onChangeText={setNombre}
                    />
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Cantidad Gasto</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Cantidad del gasto. ej. 50000'
                        keyboardType='numeric'
                        value={cantidad}
                        onChangeText={setCantidad}
                    />
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Categoria Gasto</Text>
                    <Picker
                        selectedValue={categoria}
                        onValueChange={(value) => {
                            setCategoria(value)
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
                <Pressable style={styles.submitBtn} onPress={() => handleGasto({nombre, cantidad, categoria, id, fecha})}>
                    <Text style={styles.submitBtnTexto}>{ gasto?.nombre ? 'Guardar Cambios Gasto' : 'Agregar Gasto' }</Text>
                </Pressable>
                </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: '#1E40EF',
        flex: 1
    },
    titulo: {
        textAlign: 'center',
        fontSize: 30,
        marginBottom: 20,
        color: '#64748B'
    },
    formulario: {
        ...globalStyles.contenedor
    },
    label: {
        color: '#64748B',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 15
    },
    input: {
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        padding: 15,
        marginTop: 10,
        marginBottom: 10,
    },
    submitBtn:{
        backgroundColor: '#3B82F5',
        padding: 15,
        marginTop: 20,
        borderRadius: 10
    },
    submitBtnTexto: {
        textAlign: 'center',
        fontSize: 15,
        color: '#FFF',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    btnCancelar: {
        backgroundColor: '#DB2777',
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
        marginHorizontal: 10
    },
    btnCancelarTexto: {
        textAlign: 'center',
        fontSize: 15,
        color: '#FFF',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    btnEliminar: {
        backgroundColor: '#FF0333',
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
        marginHorizontal: 10
    },
    btnEliminarTexto: {
        textAlign: 'center',
        fontSize: 15,
        color: '#FFF',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    contenedorBotones: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})

export default FormularioGasto