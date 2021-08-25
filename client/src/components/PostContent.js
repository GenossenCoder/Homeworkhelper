import React from 'react'
import '../styles/PostContent.css'
import {HiPlusSm} from 'react-icons/hi'
import {AiOutlineUser} from 'react-icons/ai';
const PostContent = (props) => {
    return (
        <div>
            <p className="User"><AiOutlineUser/>{props.user}</p>
            <h1 className="PostHeader">{props.header}</h1>
            <div className="PostText">Gemeint ist mit der "Home Taste" die Taste Pos1 auf der Tastatur (Siehe Bild). Diese Taste befindet sich also zwischen dem Zehner-Tastenblock (Ziffernblock) und der ENTER-Taste. Nur im englischsprachigen Raum heißt diese Taste Home Key. Bei einigen Tastaturen steht aber auch direkt "Home" darauf.25.07.2013</div>
            <a href="http://localhost:3000/"className="More"> <HiPlusSm/> Show More</a>
        </div>       
    )
}

export default PostContent
