import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native'
import globalStyles from '../styles';

const NuevoPresupuesto = ({presupuesto , setPresupuesto, handleNuevoPresupuesto}) => {

    return (
        <View style={styles.contenedor}>
            <Text style={styles.label}>Definir Presupuesto</Text>
            <TextInput
                keyboardType='numeric'
                placeholder='Agrega tu presupuesto: Ejemplo. 75000'
                style={styles.input}
                
                onChangeText={setPresupuesto}
            />
            <Pressable style={styles.boton} onPress= {() => handleNuevoPresupuesto(presupuesto) } >
                <Text style={styles.botonTexto}>Agregar Presupuesto</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        ...globalStyles.contenedor
    },
    label: {
        textAlign: 'center',
        fontSize: 20,
        color: '#56B0FF',
    },
    input: {
        backgroundColor: '#F5F5F5',
        padding: 10,
        borderRadius: 10,
        textAlign: 'center',
        marginTop: 30
    },
    boton: {
        marginTop: 40,
        backgroundColor: '#245DEA',
        padding: 10,
        borderRadius: 10,

    },
    botonTexto: {
        color: '#FFF',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
});

export default NuevoPresupuesto