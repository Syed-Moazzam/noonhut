import React, { useState } from 'react';
import "./SalesAndOrder.css";
import { Link } from 'react-router-dom';
import { Dashboard } from '@material-ui/icons';
import PersonIcon from '@mui/icons-material/Person';
import { MenuList } from '@mui/material';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, TableSortLabel } from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';

const SalesAndOrder = () => {
  const [dropDown, setDropDown] = useState(false);
  const toggleDropDown = () => {
    setDropDown((prevState) => !prevState);
  }

  let tableHead = [
    "Order ID",
    "Rider ID",
    "Time-stamp of Preparing Basket",
    "Cart Sales Amount",
    "Total Items In Cart",
    "Category",
    "Itemized Product List",
    "Customer Name",
    "Rider Name",
    "Status Of Basket",
    "Receipt No",
    "Receipt Image",
  ];

  let tableBody = [
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
  ];

  return (
    <div className="container-of-seller-sales-and-order">
      <div className="navbar-of-seller-sales-and-order">
        <div className='name-of-component-sales-and-order'>
          <p>Sales and Order</p>
        </div>

        <div className="div-for-dashboard-and-profile-icon-sales-and-order">
          <div className="search-bar-div-sales-and-order">
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
              <MenuList id="menu-list-of-navbar-sales-and-order">
                <Link to="/seller-console/seller-profile">Profile</Link>
                <Link to="">Sign-out</Link>
              </MenuList>
            }
          </div>
        </div>
      </div>

      <div className="div-for-start-and-end-date-sales-and-order">
        <div className="start-date-sales-and-order">
          <label htmlFor="startDate">Start Date:</label>
          <input type="date" id="startDate" />
        </div>
        <div className="end-date-sales-and-order">
          <label htmlFor="endDate">End Date:</label>
          <input type="date" id="endDate" />
        </div>
      </div>

      <TableContainer className='mui-table-container'>
        <div>
          <h5>Sales and Order</h5>
        </div>
        <Table className='mui-table'>
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
    </div>
  )
}

export default SalesAndOrder;