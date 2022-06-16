import React from 'react'
import './SearchBar.css'
import { InputBase } from '@mui/material';
// import SearchIcon from "@mui/icons-material/Search";
import {ReactComponent as SearchIcon} from "../../../images/search.svg";


interface props{
    palceholder:string
}

function SearchBar(props:props) {
  return (
    //materail ui search bar
    <div className='search'>
      <div className='frame1'>
          <SearchIcon/>
          <InputBase placeholder={props.palceholder}/>
      </div>
      <div className='vector1'></div>
      </div>
  )
}

export default SearchBar;
