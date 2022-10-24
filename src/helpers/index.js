export const formatearCantidad = cantidad => {

    return Number(cantidad).toLocaleString('es-CL', {
        style: 'currency',
        currency:'CLP'
    })
}

export const formatearFecha = fecha => {
    const fechaNueva = new Date(fecha)
    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }
    return fechaNueva.toLocaleDateString('es-ES', opciones)
}

export const generarId = () => {
    const random = Math.random().toString(36).substring(2, 7)
    const fecha = Date.now().toString(36)
    return random + fecha
}