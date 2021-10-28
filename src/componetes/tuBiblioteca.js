import React from 'react'
import estilos from './tuBiblioteca.module.css'

export function Biblioteca({name='javier por defecto'}) {
	return <h3 className={estilos.estilo}>{name}</h3>
}