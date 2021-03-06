import React from "react";
import {Link} from 'react-router-dom'

 const navbar = ({title})=>
 {
     
         return (
           <nav className='navbar bg-dark'>
               <h1>
                   <i className="fab fa-github" />
                   {title}</h1>
                <ul>
                        <li>
                                <Link to='/'>Home</Link>
                        </li>
                        
                        <li>
                                <Link to='/about'>About</Link>
                        </li>
                </ul>
           </nav>
         );

 };



 export default navbar;