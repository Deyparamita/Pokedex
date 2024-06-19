import React from 'react'
import './Search.css'
import useDebounce from '../Hooks/useDebounce'

const Search = ({uploadSearchTerm}) => {
  const debounceUpdateSearch = useDebounce((e) => uploadSearchTerm(e.target.value))
  return (
    <div>
      <input id='search-pokemon' type="text" placeholder='Search your pokemon' onChange={debounceUpdateSearch} />
    </div>
  )
}

export default Search

