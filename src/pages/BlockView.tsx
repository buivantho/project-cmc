import React, { useState, useEffect } from "react";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'title', label: 'Title', minWidth: 300 },
  { id: 'status', label: 'Status', minWidth: 200 },
  { id: 'stats', label: 'Stats', minWidth: 200 },
  { id: 'add', label: 'Add new', minWidth: 70 },

 
];

function createData(title, test ,status, stats, add) {
  return { title,test, status, stats, add };
}

const rows = [
  createData('Design: A Survival Guide for Beginners', "Posted 3 days ago" , 'IN', 1324171354, 3287263),
  
];
export default function BlockView() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (
        <Paper sx={{ width: '100%', overflow: 'hidden', boxShadow:"none" }} >
        <TableContainer sx={{ maxHeight: 740 }} >
          <Table stickyHeader aria-label="sticky table" >
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                   
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody style={{borderSpacing:"none"}}>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow  tabIndex={-1}  >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} style={{border:"none", padding:"0", paddingTop:"20px"}} >
                            <div style={{backgroundColor:"#F7FAFC",height:"100px",padding:"16px", paddingTop:"40px"}}>
                                <div>
                                    {value}
                                </div>
                            </div>
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
         
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      
    )
  }