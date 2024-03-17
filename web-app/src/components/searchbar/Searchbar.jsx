import React from 'react'
import { SearchBarContainer } from './styled'
import {SearchOutlined} from '@mui/icons-material'

const Searchbar = () => {
  return (
    <SearchBarContainer>
        <SearchOutlined/>
        <input style={{
            border:'none',
            outline:'none',
            width:"100%",
            color:"inherit",
            fontSize:'16px',
            background:'transparent'
        }}
        placeholder='Search images with prompt or name . . .'/>
    </SearchBarContainer>
  )
}

export default Searchbar
