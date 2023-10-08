
import Chai from "./chai"

function App() {
  const username = "Mangesh"
  return (
    // only one element can we return so we wrap up all elements in fragment(<> </>)
    <>
       <Chai/>
       <h1>chai with react || Inside APP</h1>

      /* only evaluate expression will be there in {} not other such as conditions if else and etc */
       <h2>My Name is :: {username}</h2>
    </>
  
  )
}

export default App
