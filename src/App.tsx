import {usersApi} from './store'

function App() {

    const {data = [], isLoading} = usersApi.useGetUsersQuery('')
    const {users} = data

    if (isLoading) return <div>Loading...</div>

    return (
        <div className="App">
            {
                users.map(user => {
                    return (
                        <li>{user.firstName}</li>
                    )
                })
            }
        </div>
    )
}

export default App
