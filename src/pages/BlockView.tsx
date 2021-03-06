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
  { id: "title", label: "Title", minWidth: 300 },
  { id: "status", label: "Status", minWidth: 200 },
  { id: "stats", label: "Stats", minWidth: 200 },
  { id: "add", label: "Add new", minWidth: 70 },
];

function createData(title, status, stats, add) {
  return { title, status, stats, add };
}

const rows = [
  createData(
    {
      main: "Design: A Survival Guide for Beginners",
      sub: "Posted 3 days ago",
    },
    "Published",
    120,
    "/images/more-horizontal.png"
  ),
  createData(
    {
      main: "Design: A Survival Guide for Beginners",
      sub: "Posted 3 days ago",
    },
    "Draft",
    "00",
    "/images/more-horizontal.png"
  ),
  createData(
    {
      main: "Design: A Survival Guide for Beginners",
      sub: "Posted 3 days ago",
    },
    "Published",
    20,
    "/images/more-horizontal.png"
  ),
  createData(
    {
      main: "Design: A Survival Guide for Beginners",
      sub: "Posted 3 days ago",
    },
    "Scheduled",
    "00",
    "/images/more-horizontal.png"
  ),
  createData(
    {
      main: "Design: A Survival Guide for Beginners",
      sub: "Posted 3 days ago",
    },
    "Published",
    30,
    "/images/more-horizontal.png"
  ),
  createData(
    {
      main: "Design: A Survival Guide for Beginners",
      sub: "Posted 3 days ago",
    },
    "Published",
    120,
    "/images/more-horizontal.png"
  ),
  createData(
    {
      main: "Design: A Survival Guide for Beginners",
      sub: "Posted 3 days ago",
    },
    "Published",
    120,
    "/images/more-horizontal.png"
  ),
  createData(
    {
      main: "Design: A Survival Guide for Beginners",
      sub: "Posted 3 days ago",
    },
    "Published",
    80,
    "/images/more-horizontal.png"
  ),
  createData(
    {
      main: "Design: A Survival Guide for Beginners",
      sub: "Posted 3 days ago",
    },
    "Draft",
    "00",
    "/images/more-horizontal.png"
  ),
  createData(
    {
      main: "Design: A Survival Guide for Beginners",
      sub: "Posted 3 days ago",
    },
    "Published",
    120,
    "/images/more-horizontal.png"
  ),
  createData(
    {
      main: "Design: A Survival Guide for Beginners",
      sub: "Posted 3 days ago",
    },
    "Published",
    120,
    "/images/more-horizontal.png"
  ),
  createData(
    {
      main: "Design: A Survival Guide for Beginners",
      sub: "Posted 3 days ago",
    },
    "Published",
    120,
    "/images/more-horizontal.png"
  ),
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
              src="/images/pen-tool.png"
            ></img>
            <span style={{ marginLeft: "30px" }}>{column.label}</span>
          </button>
        ) : (
          column.label
        )}
      </TableCell>
    );
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
                  <div
                    style={{
                      border: "1px solid",
                      color:
                        value == "Published"
                          ? "#9AE6B4"
                          : value == "Draft"
                          ? "#FC8181"
                          : value == "Scheduled"
                          ? "#FBD38D"
                          : null,
                      width: "fit-content",
                      paddingLeft: "20px",
                      paddingRight: "20px",
                      paddingTop: "2px",
                      paddingBottom: "2px",
                      borderRadius: "50px",
                      marginTop: "18px",
                    }}
                  >
                    {value}
                  </div>
                ) : index == 0 ? (
                  <div style={{ paddingTop: "10px" }}>
                    <span style={{ fontSize: "18px", color: "#2A4365" }}>
                      {value.main}
                    </span>
                    <br />
                    <small style={{ fontSize: "14px", color: "#A0AEC0" }}>
                      {value.sub}
                    </small>
                  </div>
                ) : index == 2 ? (
                  <div style={{ marginTop: "22px" }}>
                    <Box sx={{ flexGrow: 1 }}>
                      <Grid
                        container
                        spacing={5}
                        style={{ alignItems: "center" }}
                      >
                        <Grid item xs={1}>
                          <strong
                            style={{ color: "#2A4365", fontSize: "20px" }}
                          >
                            {value}{" "}
                          </strong>
                        </Grid>
                        <Grid item xs={1}>
                          <span style={{ fontSize: "14px", color: "#A0AEC0" }}>
                            view
                          </span>
                        </Grid>
                        {value > 0 ? (
                          <Grid item xs={2}>
                            <img src="/images/arrow-up-circle.png"></img>
                          </Grid>
                        ) : null}
                      </Grid>
                    </Box>
                  </div>
                ) : (
                  <div style={{ marginTop: "14px", textAlign: "center" }}>
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
  const generateListItem = (page, rowsPerPage) => {
    return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
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
