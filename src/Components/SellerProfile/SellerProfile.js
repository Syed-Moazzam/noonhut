import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuList } from '@mui/material';
import Dashboard from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import "./SellerProfile.css";
import SearchIcon from '@mui/icons-material/Search';

const SellerProfile = () => {
    const [dropDown, setDropDown] = useState(false);
    const toggleDropDown = () => {
        setDropDown((prevState) => !prevState);
    }

    const tableHead = [
        "Store ID",
        "Time-stamp Of Creation",
        "Time-Stamp Of Approval/Rejection",
        "Time-stamp Of Suspension",
        "Store Name",
        "Store Location",
        "Store Coordinates",
        "Store City",
        "Full Name Of Person",
        "Email",
        "Country",
        "Bank Name",
        "Bank City",
        "IBAN",
        "Swift Code",
        "Bank Account Name",
    ];

    const tableBody = [
        "Dakota Rice",
        "Niger",
        "Oud-Turnhout",
        "$36,738",
        "Minerva Hooper",
        "Curaçao",
        "Sinaai-Waas",
        "$23,789",
        "Minerva Hooper",
        "Curaçao",
        "Sinaai-Waas",
        "$23,789",
        "Minerva Hooper",
        "Curaçao",
        "Sinaai-Waas",
        "$23,789",
    ];
    return (
        <div className="container-of-seller-profile">
            <div className="navbar-of-seller-profile">
                <div className='name-of-component-profile'>
                    <p>My Profile</p>
                </div>

                <div className="div-for-dashboard-and-profile-icon-profile">
                    <div className="search-bar-div-profile">
                        <input type="text" placeholder='Search'/>
                        <SearchIcon/>
                    </div>
                    <div className="dashboard-icon">
                        <Link to="/" className='links-for-icons-of-navbar'>
                            <Dashboard />
                        </Link>
                    </div>
                    <div className="profile-icon">
                        <button onClick={toggleDropDown} className='links-for-icons-of-navbar'>
                            <PersonIcon />
                        </button>
                        {
                            dropDown &&
                            <MenuList id="menu-list-of-navbar-profile">
                                <Link to="/seller-console/seller-profile">Profile</Link>
                                <Link to="">Sign-out</Link>
                            </MenuList>
                        }
                    </div>
                </div>
            </div>

            <TableContainer className='mui-table-container-of-profile'>
                <div>
                    <h5>My Profile</h5>
                </div>
                <Table className='mui-table-of-profile'>
                    <TableHead>
                        <TableRow>
                            {tableHead.map((head) => {
                                return <TableCell>{head}</TableCell>
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            {tableBody.map((body) => {
                                return <TableCell>{body}</TableCell>
                            })}
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default SellerProfile;