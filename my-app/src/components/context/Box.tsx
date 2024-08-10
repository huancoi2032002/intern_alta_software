import { useContext } from "react";
import {ThemeContext} from './ThemeConText';

export const Box = () => {
    const theme = useContext(ThemeContext)
    return (
        <div style={{backgroundColor: theme.primary.main, color: theme.primary.text}}>
            <h2>Box</h2>
        </div>
    )
}

