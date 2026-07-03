
let Home = () => {
    return (
        //div is used instead of  fragment.  fragment can be used also
        <div >
            <h2>hello,this is the first demo</h2>
            <b>my name is sarishma ghimire</b>
            <Childone></Childone>
        </div>
    )
}
// never call a component like a function
export default Home


// make childone 
let Childone =()=>{
    return(
        <div>
            <h1>child one</h1>
        </div>
    )
}
// make child two
let Childtwo =() =>{
    return(
        <div>
            <h1> chid two</h1>
        </div>

    )
}

export  {Childtwo}
