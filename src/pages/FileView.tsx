import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";

const columns = [
  { id: "title", label: "", minWidth: 300 },
  { id: "created", label: "", minWidth: 200 },
  { id: "status", label: "", minWidth: 200 },
  { id: "add", label: "", minWidth: 70 },
];

function createData(title, created, status, add) {
  return { title, created, status, add };
}
const listChip = [
  {
    id: "0",
    title: "Images",
  },
  {
    id: "1",
    title: "Files",
  },
  {
    id: "2",
    title: "Audio",
  },
  {
    id: "3",
    title: "Video",
  },
];

const rows = [
  createData(
    { image: "/images/image-file.png" },
    "Oceanic_view.jpg",
    "Uploaded 2 days ago",
    "/images/more-horizontal.png"
  ),
  createData(
    { image: "/images/image-file.png" },
    "Oceanic_view.jpg",
    "Uploaded 2 days ago",
    "/images/more-horizontal.png"
  ),
  createData(
    { image: "/images/image-file.png" },
    "Oceanic_view.jpg",
    "Uploaded 2 days ago",
    "/images/more-horizontal.png"
  ),
  createData(
    { image: "/images/image-file.png" },
    "Oceanic_view.jpg",
    "Uploaded 2 days ago",
    "/images/more-horizontal.png"
  ),
  createData(
    { image: "/images/image-file.png" },
    "Oceanic_view.jpg",
    "Uploaded 2 days ago",
    "/images/more-horizontal.png"
  ),
  createData(
    { image: "/images/image-file.png" },
    "Oceanic_view.jpg",
    "Uploaded 2 days ago",
    "/images/more-horizontal.png"
  ),
  createData(
    { image: "/images/image-file.png" },
    "Oceanic_view.jpg",
    "Uploaded 2 days ago",
    "/images/more-horizontal.png"
  ),
  createData(
    { image: "/images/image-file.png" },
    "Oceanic_view.jpg",
    "Uploaded 2 days ago",
    "/images/more-horizontal.png"
  ),
];
export default function FileView() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [isCheckFilter, setIsCheckFilter] = useState(0)

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const renderColumnCell = (columns, column, i) => {
    return (
      <TableCell key={column.id} style={{ minWidth: column.minWidth }}>
        {columns.length - 1 == i ? (
          <button
            style={{
              width: "135px",
              height: "42px",
              backgroundColor: "#2A4365",
              color: "#ffffff",
            }}
          >
            <img
              style={{
                width: "25px",
                position: "absolute",
                left: "30px",
                top: "25px",
              }}
              src="/images/file-plus.png"
            ></img>
            <span style={{ marginLeft: "30px" }}>{column.label}</span>
          </button>
        ) : (
          column.label
        )}
      </TableCell>
    );
  };

  const renderListChip = () => {
    return listChip.map((data, index) => {
      return (
        <Chip
          onClick={() => btnCheckFilter(data)}
          label={data.title}
          style={{
            backgroundColor:isCheckFilter == index ?  "#2C5282" : " #ffffff",
            color:isCheckFilter == index ?  "#ffffff" : " #2C5282",
            border:"1px solid #2C5282",
            width: "90px",
          }}
          component="a"
          href="#basic-chip"
          clickable
        />
      );
    });
  };
  const btnCheckFilter = (data) => {
    setIsCheckFilter(data.id)
  }
  const generateListItem = (page, rowsPerPage) => {
    return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  };
  const renderViewTable = (row) => {
    return (
      <TableRow tabIndex={-1}>
        {columns.map((column, index) => {
          const value = row[column.id];
          return (
            <TableCell
              key={column.id}
              style={{ border: "none", padding: "0", paddingTop: "20px" }}
            >
              <div
                style={{
                  backgroundColor: "#F7FAFC",
                  height: "100px",
                  padding: "16px",
                }}
              >
                {index == 1 ? (
                  // style={{border:"1px solid" , color:value == "Published" ? "#9AE6B4" : value == "Draft" ? "#FC8181" : value == "Scheduled" ? "#FBD38D" : null , width:"fit-content", paddingLeft:"20px", paddingRight:"20px", paddingTop:"2px", paddingBottom:"2px", borderRadius:"50px", marginTop:"18px"}}
                  <div
                    style={{
                      color: "#2A4365",
                      fontSize: "14px",
                      marginTop: "24px",
                    }}
                  >
                    <strong> {value}</strong>
                  </div>
                ) : index == 0 ? (
                  <div>
                    <img style={{ width: "100px" }} src={value.image}></img>
                  </div>
                ) : index == 2 ? (
                  <div
                    style={{
                      color: "#2A4365",
                      marginTop: "24px",
                    }}
                  >
                    {value}
                  </div>
                ) : (
                  <div style={{ marginTop: "10px", textAlign: "center" }}>
                    <img style={{ width: "50px" }} src={value}></img>
                  </div>
                )}
              </div>
            </TableCell>
          );
        })}
      </TableRow>
    );
  };
  return (
    <Paper sx={{ width: "100%", overflow: "hidden", boxShadow: "none" }}>
        <Box sx={{height:"153px", backgroundColor:"#F7FAFC", textAlign:"center", border:"1px solid #BEE3F8"}}>
            <Box sx={{marginTop:"40px"}}>
                <Button style={{backgroundColor:"#2C5282"}} variant="contained">click to upload</Button>
            </Box>
            <Box sx={{marginTop:"10px"}}>
                <a style={{color:'#2C5282'}}>Drag {"&"} drop multiple files to upload</a>
            </Box>
            
        </Box>
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              style={{ width: "250px" }}
              id="input-with-sx"
              label="Search for file"
              variant="standard"
            />
          </Box>
        </Grid>
        <Grid item xs={4}>
          
          <Stack
            direction="row"
            spacing={1}
            style={{ float: "right", marginTop: "24px" }}
          >
            <a style={{color:"#90CDF4", fontSize:"16px", marginTop:"5px", marginRight:"25px"}}>Filter</a>
            {renderListChip()}
          </Stack>
        </Grid>
      </Grid>

      <TableContainer sx={{ maxHeight: 740 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableBody style={{ borderSpacing: "none" }}>
            {generateListItem(page, rowsPerPage).map((row) =>
              renderViewTable(row)
            )}
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
  );
}
