import { View, Text } from 'react-native'
import React, { useState, useRef } from 'react'
import { styles } from '../theme/appTheme'
import Boton from '../components/Boton'
import { useCalculadora } from '../hooks/useCalculadora'

export default function CalculadoraScreen() {
    const {
        numeroAnterior,
        numero,
        limpiar,
        positivoNegativo,
        btnDividir,
        btnRestar,
        btnSumar,
        btnMultiplicar,
        calcular,
        armarNumero,
        porcentaje
    } = useCalculadora()
    
    return (
        <View style={styles.calculadoraContainer}>
            {
                (numeroAnterior !== '0') &&
                (
                    <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
                )
            }
            <Text
                style={styles.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit={true}
            >
                {numero}
            </Text>

            <View style={styles.fila}>
                <Boton text='AC' color="#9b9b9b" accion={limpiar} />
                <Boton text='+/-' color="#9b9b9b" accion={positivoNegativo} />
                <Boton text='%' color="#9b9b9b" accion={porcentaje} />
                <Boton text='÷' color="#ff9427" accion={btnDividir} />
            </View>
            <View style={styles.fila}>
                <Boton text='7' accion={() => armarNumero('7')} />
                <Boton text='8' accion={() => armarNumero('8')} />
                <Boton text='9' accion={() => armarNumero('9')} />
                <Boton text='x' color="#ff9427" accion={btnMultiplicar} />
            </View>
            <View style={styles.fila}>
                <Boton text='4' accion={() => armarNumero('4')} />
                <Boton text='5' accion={() => armarNumero('5')} />
                <Boton text='6' accion={() => armarNumero('6')} />
                <Boton text='–' color="#ff9427" accion={btnRestar} />
            </View>
            <View style={styles.fila}>
                <Boton text='1' accion={() => armarNumero('1')} />
                <Boton text='2' accion={() => armarNumero('2')} />
                <Boton text='3' accion={() => armarNumero('3')} />
                <Boton text='+' color="#ff9427" accion={btnSumar} />
            </View>
            <View style={styles.fila}>
                <Boton text='0' ancho accion={() => armarNumero('0')} />

                <Boton text='.' accion={() => armarNumero('.')} />
                <Boton text='=' color="#ff9427" accion={calcular} />
            </View>

        </View>
    )
}