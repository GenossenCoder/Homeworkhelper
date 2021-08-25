import React from 'react'
import Logo from '../Images/SVG/Black logo - no background.svg'
import "../styles/Header.css"
import '../styles/Searchbar.css'
import { BsSearch } from 'react-icons/bs';
import { MdAccountCircle } from 'react-icons/md';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import { BsNewspaper } from 'react-icons/bs';

const Header = () => {
    return (
        <nav className="Header">
            <img src={Logo} className="Logo" alt=""/>
            <input className="Input" placeholder="Search"/><button className="Button"><BsSearch/></button>
            <ul>
                <li className="Item"><MdAccountCircle size={60}/></li>
                <li className="Item"><AiOutlinePlusSquare size={60}/></li>
                <li className="Item"><BsNewspaper size={60}/></li>
            </ul>
        </nav>
    )

}

export default Header
