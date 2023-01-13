import {FC} from 'react'
import {ITableProps} from '../../types/ITable'
import styles from './Table.module.css'
import {TableColumn} from '../TableColumn'
import {TableRow} from '../TableRow'


export const Table: FC<ITableProps> = ({data}) => {
    console.log('data', data)

    const columns = [
        {
            label: 'FullName',
            key: 'full_name'

        },
        {
            label: 'Age',
            key: 'age'

        },
        {
            label: 'Email',
            key: 'email'

        },
    ]

    return (
        <table className="table">
            <thead>
            <tr>
                {
                    columns.map(column => {
                        return (
                            <TableColumn
                                key={column.key}
                                label={column.label}
                            />
                        )
                    })
                }
            </tr>
            </thead>
            <tbody>
            {
                data.map(item => {
                    return (
                        <TableRow
                            key={item.id}
                            {...item}
                        />
                    )
                })
            }
            </tbody>
        </table>
    )
}