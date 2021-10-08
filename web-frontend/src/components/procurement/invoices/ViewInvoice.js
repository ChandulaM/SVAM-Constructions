import React from "react";
import { useState } from "react";
import Header from "../../common/Header";
import SideNavP from "../../common/SideNavP";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const ViewInvoice = (params) => {
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1">
        <SideNavP />
      </div>
      <div className="col-span-4 bg-yellow-100">
        <Header />
        <div className="flex w-3/4 mx-auto mt-10 ">
          <Card className="flex-1 p-5">
            <CardContent className="flex-1">
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                      <StyledTableCell align="right">Calories</StyledTableCell>
                      <StyledTableCell align="right">
                        Fat&nbsp;(g)
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        Carbs&nbsp;(g)
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        Protein&nbsp;(g)
                      </StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <StyledTableRow key={row.name}>
                        <StyledTableCell component="th" scope="row">
                          {row.name}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.calories}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.fat}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.carbs}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.protein}
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <div className="flex w-80 my-3 mx-8 justify-center ">
                <Button
                  fullWidth
                  variant="contained"
                  size="small"
                  style={{
                    backgroundColor: "gray",
                    borderRadius: 25,
                  }}
                >
                  Back
                </Button>
                <Button
                  fullWidth
                  variant="contained"
                  size="small"
                  style={{
                    backgroundColor: "green",
                    borderRadius: 25,
                  }}
                >
                  Send to accounts
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ViewInvoice;
