import { useRef, useState } from "react"

export const useCalculadora=()=>{
    const [numeroAnterior, setNumeroAnterior] = useState('0')
    const [numero, setNumero] = useState('0')

    const ultimaOperacion = useRef()

    const porcentaje=()=>{
        setNumeroAnterior((Number(numero)/100).toString())
        setNumero((Number(numero)/100).toString())
    }

    const limpiar = () => {
        setNumero('0')
        setNumeroAnterior('0')
    }

    const armarNumero = (numeroTexto) => {
        if (numero.includes('.') && numeroTexto === '.') return
        if (numero.startsWith('0') || numero.startsWith('-0')) {
            if (numeroTexto === '.') {
                setNumero(numero + numeroTexto)
            } else if (numeroTexto === '0' && numero.includes('.')) {
                setNumero(numero + numeroTexto)
            } else if (numeroTexto !== '0' && !numero.includes('.')) {
                setNumero(numeroTexto)
            } else if (numeroTexto === '0' && !numero.includes('.')) {
                setNumero(numero)
            } else {
                setNumero(numero + numeroTexto)
            }

        } else {

            setNumero( numero + numeroTexto)
        }

    }
    const positivoNegativo = () => {
        if (numero.includes('-')) {
            setNumero(numero.replace('-', ''))
        } else {
            setNumero('-' + numero)
        }
    }
    const cambiarNumeroPorAnterior = () => {
        if (numero.endsWith('.')) {
            setNumeroAnterior(numero.slice(0, -1))
        } else {
            setNumeroAnterior(numero)
        }
        setNumeroAnterior(numero)
        setNumero('0')
    }

    const btnDividir = () => {
        cambiarNumeroPorAnterior()
        ultimaOperacion.current = 'dividir'
    }
    const btnMultiplicar = () => {
        cambiarNumeroPorAnterior()
        ultimaOperacion.current = 'multiplicar'
    }
    const btnRestar = () => {
        cambiarNumeroPorAnterior()
        ultimaOperacion.current = 'restar'
    }
    const btnSumar = () => {
        cambiarNumeroPorAnterior()
        ultimaOperacion.current = 'sumar'
    }
    const calcular = () => {
        const num1 = Number(numero)
        const num2 = Number(numeroAnterior)
        switch (ultimaOperacion.current) {
            case 'sumar':
                setNumero(`${num1 + num2}`)
                break;
            case 'restar':
                setNumero(`${num2 - num1}`)
                break;
            case 'multiplicar':
                setNumero(`${num1 * num2}`)
                break;

            case 'dividir':
                setNumero(`${num2 / num1}`)
                break;

            default:
                break;
        }
        setNumeroAnterior('0')
    }
    
return{
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
}
}