import React, {useState, useEffect} from 'react'
import axios from 'axios'
import UserForm from './components/userForm'
import BeerGrid from './components/Beers/BeerGrid'
import Search from './components/Search'

function App() {
  const [params, setParams] = useState({})
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)

  useEffect(() => {
    const fetchItems = async () => {
      ///// search string below but access blocked 
    // const result = await axios(`https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/beers/?key=b4fc0639b9093553c11a95a7d0641dbf?name=${query}`) 
    const result = await axios(`https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/beers/?key=b4fc0639b9093553c11a95a7d0641dbf`)
    setItems(result.data.data)
      console.log(result.data.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])

  return (
    <div>
      <h1> Beer List </h1>
      {/* <Search getQuery={(value) => setQuery(value)}/> */}
      {/* <UserForm /> */}
      <BeerGrid isLoading={isLoading} items={items} />
    </div>
  )
}

export default App;
