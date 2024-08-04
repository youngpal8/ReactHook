import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeToggle = () => {
    const { toggleTheme } = useContext(ThemeContext);
    
    return ( 
        <button onClick={toggleTheme}>Toggle Theme Color</button>
     );
}
 
export default ThemeToggle;
