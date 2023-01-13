import {IUser} from './IUsers'

export interface ITableProps {
    data: IUser[]
}

export interface ITableColumnProps {
    key: string,
    label: string,
}
