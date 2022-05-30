import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const columns = [
  { id: "title", label: "Page title", minWidth: 300 },
  { id: "created", label: "Created", minWidth: 200 },
  { id: "status", label: "Status", minWidth: 200 },
  { id: "author", label: "Author", minWidth: 200 },
  { id: "add", label: "Add new", minWidth: 70 },
];

function createData(title, created, status, author, add) {
  return { title, created, status, author, add };
}

const rows = [
  createData(
    { main: "Home_page" },
    "Updated 3 weeks ago",
    "Published",
    "Joe Bloggs",
    "/images/more-horizontal.png"
  ),
  createData(
    { main: "Home_page" },
    "Updated 3 weeks ago",
    "Published",
    "Joe Bloggs",
    "/images/more-horizontal.png"
  ),
  createData(
    { main: "Home_page" },
    "Updated 3 weeks ago",
    "Published",
    "Joe Bloggs",
    "/images/more-horizontal.png"
  ),
  createData(
    { main: "Home_page" },
    "Updated 3 weeks ago",
    "Published",
    "Joe Bloggs",
    "/images/more-horizontal.png"
  ),
  createData(
    { main: "Home_page" },
    "Updated 3 weeks ago",
    "Published",
    "Joe Bloggs",
    "/images/more-horizontal.png"
  ),
  createData(
    { main: "Home_page" },
    "Updated 3 weeks ago",
    "Published",
    "Joe Bloggs",
    "/images/more-horizontal.png"
  ),
  createData(
    { main: "Home_page" },
    "Updated 3 weeks ago",
    "Published",
    "Joe Bloggs",
    "/images/more-horizontal.png"
  ),
  createData(
    { main: "Home_page" },
    "Updated 3 weeks ago",
    "Published",
    "Joe Bloggs",
    "/images/more-horizontal.png"
  ),
];
export default function CreatePage() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

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
                    {value}
                  </div>
                ) : index == 0 ? (
                  <div style={{ paddingTop: "20px" }}>
                    <strong style={{ fontSize: "18px", color: "#2A4365" }}>
                      {value.main}
                    </strong>
                  </div>
                ) : index == 2 ? (
                  <div
                    style={{
                      border: "1px solid",
                      color: "#ffffff",
                      backgroundColor: "#9AE6B4",
                      width: "fit-content",
                      paddingLeft: "20px",
                      paddingRight: "20px",
                      paddingTop: "2px",
                      paddingBottom: "2px",
                      borderRadius: "50px",
                      marginTop: "24px",
                    }}
                  >
                    {value}
                  </div>
                ) : index == 3 ? (
                  <div style={{ marginTop: "24px" }}>
                    <span style={{ color: "#2A4365" }}>{value} </span>{" "}
                    <span
                      style={{
                        border: "1px solid",
                        color: "#ffffff",
                        backgroundColor: "#2C5282",
                        width: "fit-content",
                        paddingLeft: "20px",
                        paddingRight: "20px",
                        paddingTop: "2px",
                        paddingBottom: "2px",
                        borderRadius: "50px",
                        marginTop: "18px",
                      }}
                    >
                      Admin
                    </span>
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
      <TableContainer sx={{ maxHeight: 740 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column, i) => renderColumnCell(columns, column, i))}
            </TableRow>
          </TableHead>
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
