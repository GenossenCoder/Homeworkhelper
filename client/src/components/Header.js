import React from 'react'
import Logo from '../Images/SVG/Black logo - no background.svg'
import "../styles/Header.css"
import { HiHome } from 'react-icons/hi';
import { MdAccountCircle } from 'react-icons/md';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import { BsNewspaper } from 'react-icons/bs';
const Header = () => {
    return (
        <header className="Header">
            <div className="HeaderItem"><img img src={Logo} alt="" className="Image"/></div>
            <div className="HeaderItem HeaderIcons"><button className="HeaderButton"><HiHome size={50}/></button></div>
            <div className="HeaderItem HeaderIcons"><button className="HeaderButton"><AiOutlinePlusSquare size={50}/></button></div>
            <div className="HeaderItem HeaderIcons"><button className="HeaderButton"><BsNewspaper size={50}/></button></div>
            <div className="HeaderItem HeaderIcons"><button className="HeaderButton"><MdAccountCircle size={50}/></button></div>
        </header>
    )
}

export default Header
