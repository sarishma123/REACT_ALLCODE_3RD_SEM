let Listinreact=()=>{
    let todo=["todo1","todo2","todo3","todo4"]
    return(
        <div>
            <h1>All todo list</h1>
            {
                todo.map((Ele,index)=>{
                    return(
                        <div key={index}>
                            <p>index:{index}</p>
                            <p>{Ele}</p>


                        </div>
                    )
                })
            }
        </div>
    )

}
export default Listinreact