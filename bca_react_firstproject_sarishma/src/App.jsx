let App = () => {
  return (
    //  {/* // return always return only one jsx element
    //      // fragment of react:tag without name */}

    <>
      <h1>hello ,this is my first project for react</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia inventore quia esse eveniet libero soluta explicabo eius, iure deleniti? Blanditiis numquam ab, fugiat distinctio voluptatibus aut voluptatum eveniet molestias commodi!</p>
      {/* never use capital letter for jsx element,because the capital letter  indicate component */}
      {/* class name is alternative for vlass attribute,since class is akeyword in js */}
      {/* always follow camelcase for attribute in jsx element */}
      <b className="boldText" onClick={()=>alert("hello")}>this is a bold text</b>
    </>
  )

}
export default App