import {FC} from 'react'
import styles from './Gender.module.css'
import {IUserGender} from '../../types/IUsers'
import classnames from 'classnames'

export const Gender: FC<IUserGender> = ({gender}) => {

    return (
        <div
            className={classnames(styles.gender, {
                [styles.male]: gender == 'male',
                [styles.female]: gender == 'female'
            })}>
            {gender}
        </div>
    )
}