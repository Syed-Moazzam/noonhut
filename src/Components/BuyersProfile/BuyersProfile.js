import React, { useEffect, useState } from 'react'
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from '@mui/material';
import "./BuyersProfile.css";
import { auth } from '../../Firebase';
import { onAuthStateChanged } from 'firebase/auth';

export default function BuyersProfile() {
  const [loggedInBuyer, setLoggedInBuyer] = useState();

  let headerArray = ["Buyer ID", "Email", "Time-stamp Of Account Creation", "Time-stamp Of Account Suspension", "Buyer Name", "Buyer Location", "Buyer Coordinates", "Buyer City", "Phone Number"];

  useEffect(() => {
    onAuthStateChanged(auth, (currentBuyer) => {
      setLoggedInBuyer(currentBuyer);
    });
  })

  return (
    <>
      <div style={{position: "relative"}}>
        <h2 id='heading-of-my-profile'>My Profile</h2>
        <button id='edit-details-btn-of-buyers-profile'>
            <span>EDIT DETAILS</span>
            <i className="fa-sharp fa-solid fa-pen-to-square"></i>
        </button>
      </div>
      <TableContainer className='table-container-of-buyers-profile'>
        <div>
          <h5>My Profile</h5>
        </div>
        <Table className='table-of-buyers-profile'>
          <TableHead>
            <TableRow className="columns-of-table-buyers-profile">
              {headerArray.map((item1, key) => {
                return <TableCell key={key}>{item1}</TableCell>
              })}
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              {
                loggedInBuyer ? 
                <>
                  <TableCell>{loggedInBuyer.uid}</TableCell>
                  <TableCell>{loggedInBuyer.email}</TableCell>
                  <TableCell>{loggedInBuyer.metadata.creationTime}</TableCell>
                </>
                : ""
              }
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
