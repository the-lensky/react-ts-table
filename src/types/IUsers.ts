export interface IUsersData {
    limit: number,
    skip: number,
    total: number,
    users: IUser[]
}

export interface IUser {
    id: number,
    firstName: string,
    lastName: string,
    gender: 'male' | 'female',
    age: number,
    email: string,
}


export interface IUserGender {
    gender: IUser['gender']
}