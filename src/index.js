
import ReactDom from 'react-dom'
import React from 'react'
import '../tailwind/tailwind.css'
/*
import grid from './grid.module.css' 
import {ItemA} from './componentesmasimportantes/item-a.js'
import {Itemb} from './componentesmasimportantes/itemb'
import {Itemc} from './componentesmasimportantes/itemc'
import { useState, useEffect } from 'react'
*/
import Carlos from'./ramdom/context'

ReactDom.render(
	<Carlos/>,
	document.getElementById('root')
)


/*
function Contador() {
	// Declara una nueva variable de estado, que llamaremos "count".
	const [count, setCount] = useState(0)
	const [otro, cambiaotro] = useState(true)
	// Similar a componentDidMount y componentDidUpdate:
	useEffect(() => {
		// Actualiza el título del documento usando la Browser API
		document.title = ` ${count} jeej`
	},[otro])
	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>
        Click me
			</button>
			<p>actualizar</p>
			<button onClick={() => cambiaotro(!otro)}>
        Click me
			</button>
		</div>
	)
}
/*
function Example() {
  // Declara una nueva variable de estado, la cual llamaremos “count”
  const pendejada = {
    "name":{
      "mare":{
        pendejo:"svelte es mejor"
      }
    }
  }
  return (
    <div className={grid.container}>
      <ItemA/>
      <Itemb/>
      <Itemc/>
      <Contador/>
    </div>
  );
}*/



