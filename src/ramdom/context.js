import React from 'react'
import {createContext} from 'react'
import Toolbar from './Toolbar'

const themes = {
	light: {
		foreground: '#000000',
		background: '#eeeeee'
	},
	dark: {
		foreground: '#ffffff',
		background: '#222222'
	}
}

export const ThemeContext = createContext(themes.light)
export const OtroContext = createContext('')


export default function App() {
	return (
		<OtroContext.Provider value={'hola esto pasara por todos la mama de la mama'}>
			<ThemeContext.Provider value={themes.dark}>
				<Toolbar />
			</ThemeContext.Provider>
		</OtroContext.Provider>
	)
}
