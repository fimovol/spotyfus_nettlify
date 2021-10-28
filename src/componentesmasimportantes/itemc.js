import React from 'react'
import grid from './grid.module.css'

import {Flechas} from '../componetes/fechas'
import {Buscador} from '../componetes/buscador'
import {Mejorac} from '../componetes/mejoracuenta'

export function Itemc(){
	return(
		<div className={grid.itemc}>
			<Flechas/>
			<Flechas/>
			<Buscador/>
			<Mejorac/>
		</div>
        
	)
}