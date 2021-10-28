import React from 'react'
import estilos from './playlist.module.css'

console.log('hola')
export function Playlist({name='nombre generico'}){
	return <h2 className={estilos.estilo}>{name}</h2>
}