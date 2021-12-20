import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {RiAdminFill} from 'react-icons/ri'
import {AiFillDashboard, AiFillSetting, AiOutlineMenu} from 'react-icons/ai'
import {IoMdArrowDropdown} from 'react-icons/io'

import './SideNavbar.css'
import { MdSpeakerNotes } from 'react-icons/md'
import { ImCross } from 'react-icons/im'
import { FaDatabase } from 'react-icons/fa'
import TopNavbar from './TopNavbar'
import Dashboard from './Dashboard'

function SideNavbar() {

    // let arrow = document.querySelectorAll(".arrow");
    

    

    
    useEffect(() => {
        let arrow = document.querySelectorAll(".arrow");
        console.log(arrow);
        for (var i = 0; i < arrow.length; i++) {
            arrow[i].addEventListener("click", (e)=>{
            let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
            arrowParent.classList.toggle("showMenu");
            });
        }
        let sidebar = document.querySelector(".sidebar");
        let sidebarBtn = document.querySelector(".menu");
        console.log(sidebarBtn);
        sidebarBtn.addEventListener("click", ()=>{
        sidebar.classList.toggle("close");
        });

    }, [])




    return (
        <>
        <div className='sidebar close'>
            <div className="logo-details">
                <RiAdminFill className='ri-logo' />
                <span className="logo_name">Admin</span>
            </div>
            <ul className='nav-links'>
                <li>
                    <a href="#">
                        <AiFillDashboard className="ri-icons"/>
                        <span className="link_name">Dashboard</span>
                    </a>
                    <ul className="sub-menu blank">
                        <li><a className="link_name" href="#">Dashboard</a></li>
                    </ul>
                </li>
                <li>
                    <div className="iocn-link">
                        <a href="#">
                            <AiFillSetting className="ri-icons"/>
                            <span className="link_name">Category</span>
                        </a>
                        <IoMdArrowDropdown className='arrow' />
                    </div>
                    <ul className="sub-menu">
                        <li><a className="link_name" href="#">Category</a></li>
                        <li><a href="#">HTML & CSS</a></li>
                        <li><a href="#">JavaScript</a></li>
                        <li><a href="#">PHP & MySQL</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">
                        <FaDatabase className="ri-icons"/>
                        <span className="link_name">Powerpay DB</span>
                    </a>
                    <ul className="sub-menu blank">
                        <li><a className="link_name" href="#">Powerpay DB</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">
                        <MdSpeakerNotes className="ri-icons" />
                        <span className="link_name">Utilization Statistics</span>
                    </a>
                    <ul className="sub-menu blank">
                        <li><a className="link_name" href="#">Utilization Statistics</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">
                        <ImCross className="ri-icons" />
                        <span className="link_name">Draft Send Date</span>
                    </a>
                    <ul className="sub-menu blank">
                        <li><a className="link_name" href="#">Draft Send Date</a></li>
                    </ul>
                </li>
            </ul>
        </div>
        <section className="home-section">
            <div className="home-content">
            {/* <i className='bx bx-menu' ></i>
            <span className="text">Drop Down Sidebar</span> */}
                <TopNavbar menu={<AiOutlineMenu className='menu'  />} />
            </div>
            <Dashboard />
        </section>
        </>
    )
}

export default SideNavbar;