import { useEffect } from 'react'
import dogService from './services/dogs'

function App() {
  useEffect(() => {
    dogService.getAll().then((response) => {
      console.log(response.data)
    })
  }, [])

  return <h1>Brownie</h1>
}

export default App
