import {FC} from 'react'
import {ITableColumnProps} from '../../types/ITable'
import styles from './TableColumn.module.css'

export const TableColumn: FC<ITableColumnProps> = ({label}) => {

    return (
        <td className={styles.columHead}>
            {label}
        </td>
    )
}