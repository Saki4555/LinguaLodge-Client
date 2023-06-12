import { createContext, useState } from 'react';

export const ThemeContext = createContext();


const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const changeTheme = {
        theme,
        toggleTheme,
    }
    return (
        <ThemeContext.Provider value={changeTheme}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;