import {usersApi} from './store'
import {Table} from './components/Table'

function App() {

    const {data, isLoading} = usersApi.useGetUsersQuery('')
    const users = data ? data.users : []

    if (isLoading) return <div>Loading...</div>

    return (
        <div className="App">
            <Table data={users}/>
        </div>
    )
}

export default App
