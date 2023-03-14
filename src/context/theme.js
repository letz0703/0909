import {createContext, useState, useContext} from 'react'

const ThemeContext = createContext()
const ThemeUpdateContext = createContext()

export function useTheme(){ return useContext(ThemeContext)}
export function useThemeUpdate(){ return useContext(ThemeContext)}

export function ThemeProvider({children}) {
	const [Theme, setTheme] = useState('');
	const [dman, setDman] = useState(false)
	const toggleTheme = () => {
		setTheme(prev => !prev)
	}

	return (
		<ThemeContext.Provider value={theme}>
			<ThemeUpdateContext.Provider value={toggleTheme}>
				{children}
			</ThemeUpdateContext.Provider>
		</ThemeContext.Provider>
	)
/**
 * 사용하는 곳에서
 * import {useTheme, useThemeUpdate} from '' 하고
 * const darkTheme = useTheme()
 * const  toggleTheme = useThemeUpdate() 해주면 끝
 */
}