import { Search } from '@mui/icons-material'
import React from 'react'
import "./searchbtn.css"
function SearchButton() {
  return (
    <div>
     <span > <input type="text" /> <button><Search/></button></span>
    </div>
  )
}

export default SearchButton
