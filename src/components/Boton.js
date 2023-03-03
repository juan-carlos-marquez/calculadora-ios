import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../theme/appTheme'

export default function Boton({ text, color = '#2d2d2d', ancho = false ,accion }) {
    return (
        <TouchableOpacity onPress={accion}>
            <View style={{
                ...styles.boton,
                backgroundColor: color,
                width: (ancho) ? 180 : 80
            }}
            >
                <Text style={{
                    ...styles.botonTexto,
                    color: (color === '#9b9b9b') ? 'black' : 'white'
                }}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}