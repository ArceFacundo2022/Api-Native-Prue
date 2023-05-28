import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useReducer, useState } from 'react'
import { PjReducer } from '../reducers/pjReducers'

const Personajes = () =>{
    const dataObjetos = [
        { campeon: 'Annie', linea: 'MID' },
        { campeon: 'Cassiopeia', linea: 'MID' },
        { campeon: 'Darius', linea: 'TOP' },
        { campeon: 'Draven', linea: 'ADC' },
        { campeon: 'Eveling', linea: 'JG' },
        { campeon: 'Fiddlesticks', linea: 'JG' },
        { campeon: 'Gnar', linea: 'TOP' },
        { campeon: 'Hecarim', linea: 'JG' },
        { campeon: 'Illaoi', linea: 'TOP' },
        { campeon: 'KogMaw', linea: 'ADC' },
        { campeon: 'Lulu', linea: 'SUP' },
        { campeon: 'Lux', linea: 'SUP' },
        { campeon: 'Lee sin', linea: 'JUNGLA' },
        { campeon: 'Mordekaiser', linea: 'TOP' },
        { campeon: 'Nami', linea: 'SUP' },
        { campeon: 'Olaf', linea: 'JG' },
        { campeon: 'Pantheon', linea: 'JG' },
        { campeon: 'Quinn', linea: 'ADC' },
        { campeon: 'Rakan', linea: 'SUP' },
        { campeon: 'Soraka', linea: 'SUP' },
        { campeon: 'Taric', linea: 'SUP' },
        { campeon: 'Teemo', linea: 'TOP' },
        { campeon: 'Twisted Fate', linea: 'MID' },
        { campeon: 'Udir', linea: 'JG' },
        { campeon: 'Victor', linea: 'MID' },
        { campeon: 'Warwick', linea: 'JG' },
        { campeon: 'Xayah', linea: 'ADC' },
        { campeon: 'Yasuo', linea: 'MID' },
        { campeon: 'Zilean', linea: 'SUP' },
    ]
    const [campeones, dispatchCampeones] = useReducer(PjReducer,dataObjetos)

    return({campeones,dispatchCampeones,dataObjetos})
}

export default Personajes