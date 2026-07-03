const List1 = () => {
    const todo = [
        { id: 1, title: "todo1", completed: false, createdAt: "2026-01-29" },
        { id: 2, title: "todo2", completed: true, createdAt: "2026-01-29" },
        { id: 3, title: "todo3", completed: false, createdAt: "2026-01-29" },
    ];
   

    return (
        <div>
            <h1>All todo list of 2026-29-01</h1>
            {todo.map(
                ({ id, title, completed, createdAt },index) => (
                <div key={`{id}${index}`}>
                    <p>Id: {id}</p>
                    <p>Title: {title}</p>
                    <p>Completed: {completed ? "Yes" : "No"}</p>
                    <p>CreatedAt: {createdAt}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
};
export default List1;