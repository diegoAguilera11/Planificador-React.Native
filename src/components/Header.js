import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

const Header = () => {
    return (
        <SafeAreaView>
            <Text style={styles.texto}>Planificador Gastos Mensual</Text>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    texto: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFF',
        textTransform: 'uppercase',
        paddingVertical: 20
    }
});

export default Header