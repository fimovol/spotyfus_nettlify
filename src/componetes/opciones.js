import React from 'react'
import estilos from './opciones.module.css'

export function Cosa({icono='hola',name='sd'}) {
	return <h3 className={estilos.estilo}>hola esto no deberia estar aqui {icono}, {name}</h3>
}