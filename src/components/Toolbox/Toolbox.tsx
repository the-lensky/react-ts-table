import {FC} from 'react'
import styles from './Toolbox.module.css'
import {BsFillSunFill, BsMoonFill} from 'react-icons/bs'
import {useTheme} from '../../hooks/useTheme'

export const Toolbox: FC = () => {

    const {theme, setTheme} = useTheme()

    const handleLightThemeClick = () => {
        setTheme('light')
    }
    const handleDarkThemeClick = () => {
        setTheme('dark')
    }

    return (
        <div className={styles.toolbox}>
            <button onClick={handleLightThemeClick}><BsFillSunFill/></button>
            <button onClick={handleDarkThemeClick}><BsMoonFill/></button>
        </div>
    )
}