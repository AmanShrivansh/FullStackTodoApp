export default function ListTodosComponent(){
    const today = new Date();
    const targetDate = new Date(today.getFullYear()+1 , today.getMonth(), today.getDay())

    const todos = [
                    {id:1,description:'Learn AWS', done: false, targetDate:targetDate},
                    {id:2,description:'Learn Full stack dev', done: false, targetDate:targetDate},
                    {id:3,description:'Learn AWS', done: false, targetDate:targetDate}
                ]
    return (
        <div className="container">
            <h1>Things you want to do</h1>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Description</td>
                            <td>Is Done?</td>
                            <td>Target Date</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todos => (
                                    <tr key={todos.id}>
                                        <td>{todos.id}</td>
                                        <td>{todos.description}</td>
                                        <td>{todos.done.toString()}</td>
                                        <td>{todos.targetDate.toDateString()}</td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
