import {usersApi} from './store'
import {Table} from './components/Table'
import {Toolbox} from './components/Toolbox'

function App() {

    const {data, isLoading} = usersApi.useGetUsersQuery('')
    const users = data ? data.users : []

    if (isLoading) return <div>Loading...</div>

    return (
        <div className="App">
            <Toolbox/>
            <Table data={users}/>
        </div>
    )
}

export default App
