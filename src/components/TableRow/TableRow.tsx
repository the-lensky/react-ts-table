import {FC} from 'react'
import styles from './TableRow.module.css'
import {IUser} from '../../types/IUsers'
import {Gender} from '../Gender'

export const TableRow: FC<IUser> = ({
                                        id,
                                        firstName,
                                        lastName,
                                        gender,
                                        age,
                                        email
                                    }) => {

    return (
        <tr>
            <td>
                <div>
                    <Gender gender={gender}/>
                    <div>{firstName} {lastName}</div>
                </div>
            </td>
            <td>
                {age}
            </td>
            <td>
                {email}
            </td>
        </tr>

    )
}