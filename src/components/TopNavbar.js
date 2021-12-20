import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai';
import {BiAnchor} from 'react-icons/bi'
import {AiOutlineStar} from 'react-icons/ai'
import * as aiIcons from 'react-icons/ai'
import './TopNavbar.css'
import { Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';

function TopNavbar(props) {
    
    console.log(props.sidebarid)
    return (
        <div className='topnavbar'>
            <div className='topnavbar-left'>
                    <Link to="" className='topnav-icons'  >
                        {props.menu}
                    </Link>
                    
                <h2>India</h2>
            </div>
            <div className='topnavbar-right'>
                <p>India</p>
                <p>Welcome Admin</p>
                <Link to="" className='topnav-icons'  >
                        <BiAnchor  />
                </Link>
                <Link to="" className='topnav-icons'  >
                    <AiOutlineStar  />
                </Link>
            </div>
        </div>
    )
}

export default TopNavbar
