let fetchAllPosts =async()=>{
    try{
        console.log("fetching...")
        let response = await fetch ("https://jsonplaceholder.typicode.com/posts")
        let data = await response.json()
        console.log("data:",data)

    }   catch (error){
        console.log("error:", "something went wrong")

    } finally{
        console.log("done")
    }
}
fetchAllPosts()