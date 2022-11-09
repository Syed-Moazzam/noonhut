import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dashboard from '@mui/icons-material/Dashboard';
import { MenuList } from '@material-ui/core';
import PersonIcon from '@mui/icons-material/Person';
import "./MyStore.css";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, TableSortLabel } from '@material-ui/core';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import SearchIcon from '@mui/icons-material/Search';

const MyStore = () => {
    const [dropDown, setDropDown] = useState(false);
    const toggleDropDown = () => {
        setDropDown((prevState) => !prevState);
    }

    const tableHead = [
        "Store ID",
        "Store Name",
        "Store City",
        "Store Location",
        "Category",
        "Product Name",
        "Brand",
        "Packaging",
        "Quantity In Stock",
        "Price",
        "Barcode",
        "Details",
        "Ingredients",
        "Directions",
        "Product Picture",
        "Nutrition Picture",
    ]

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
        <div className="container-of-seller-my-store">
            <div className="navbar-of-seller-my-store">
                <div className='name-of-component-my-store'>
                    <p>My Store</p>
                </div>

                <div className="div-for-dashboard-and-profile-icon-my-store">
                    <div className="search-bar-div-my-store">
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
                            <MenuList id="menu-list-of-navbar-my-store">
                                <Link to="/seller-console/seller-profile">Profile</Link>
                                <Link to="">Sign-out</Link>
                            </MenuList>
                        }
                    </div>
                </div>
            </div>

            <TableContainer className='mui-table-container-of-my-store'>
                <div>
                    <h5>My Store</h5>
                </div>
                <Table className='mui-table-of-my-store'>
                    <TableHead>
                        <TableRow>
                            {tableHead.map((head) => {
                                return <TableCell>
                                    <TableSortLabel active={true}>{head}</TableSortLabel>
                                </TableCell>
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

            <div className="div-for-btns-of-my-store">
                <button className="upload-file-btn-of-my-store">
                    <span>UPLOAD FILE</span>
                    <CameraAltIcon/>
                </button>
                <button className='submit-btn-of-my-store'>SUBMIT</button>
            </div>
        </div>
    )
}

export default MyStore;