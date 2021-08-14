import React from 'react'
import '../styles/Searchbar.css'
import {BsSearch} from 'react-icons/bs';
const Searchbar = () => {
    return (
        <div className="SearchbarDIV">
            <input className="Input" placeholder="Search"/><button className="Button"><BsSearch/></button>
        </div>
    )
}

export default Searchbar
