import React from 'react'
import grid from '../grid.module.css'
import {Cosa} from  '../componetes/opciones'
import {Biblioteca} from  '../componetes/tuBiblioteca'
import {Playlist} from '../componetes/playlist'


export function ItemA (){
    
	return(
		<div className={grid.itema}>
			<Cosa icono="😄" name="inicio"/>
			<Cosa icono="😄" name="exploraar"/>
			<Cosa icono="😄" name="radio"/>
			<h3>Biblioteca</h3>
			<Biblioteca name="especialmente para ti"/>
			<Biblioteca name="Escuchado recientemente"/>
			<Biblioteca name="canciones faboritas"/>
			<Biblioteca name="Albunes"/>
			<Biblioteca name="Artistas"/>
			<Biblioteca name="Podcasts"/>
			<h3>Playlist</h3>
			<Playlist name="mas na"/>
		</div>
	)
}