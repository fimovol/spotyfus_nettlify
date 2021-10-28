import React from 'react'
import {ThemeContext,OtroContext} from './context'
import {useContext, useEffect,useReducer } from 'react'


const initialState = {count: 0}

function reducer(state, action) {
	switch (action.type) {
	case 'increment':
		return {count: state.count + 1}
	case 'decrement':
		return {count: state.count - 1}
	default:
		throw new Error()
	}
}

export default function ThemedButton() {
	const theme = useContext(ThemeContext)//usas el contexto que creaste
	const otro = useContext(OtroContext)
	const [state, dispatch] = useReducer(reducer, initialState)

	useEffect(() => {
		// Actualiza el título del documento usando la Browser API
		document.title = ` ${state.count} usando usereducer`
	})

	return (
		<>
			<button  style={{ background: theme.background, color: theme.foreground }}>
				{otro}
			</button>
      		caramelo para javier: {state.count}
			<button className="bg-purple-700" onClick={() => dispatch({type: 'decrement'})}>-asdasd</button>
			<button onClick={() => dispatch({type: 'increment'})}>+</button>
		</>
	)
}