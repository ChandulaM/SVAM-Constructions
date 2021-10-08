import React from "react";
import { useState, useContext } from "react";
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
import { Link } from "react-router-dom";
import { InvoiceContext } from "../../../contexts/Order-reqests/InvoiceContext";

const ViewInvoice = (props) => {
  const { items, setItems } = useContext(InvoiceContext);
  const itemId = props.match.params.id;
  const itemList = items.find((item) => item.id === itemId);
  const itemListIndex = items.findIndex((item) => item.id === itemId);

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

  function createData(id, name, qty, ePrice) {
    return { id, name, qty, ePrice };
  }

  const rows = [
    itemList.items.map((item) =>
      createData(item.id, item.name, item.quantity, item.price)
    ),
  ];
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
              <TableRow>
                <StyledTableCell style={{ fontSize: 20 }}>
                  Invoice No: {itemList.id}
                </StyledTableCell>
                <StyledTableCell align="right" style={{ fontSize: 20 }}>
                  Date: {itemList.curDate}
                </StyledTableCell>
                <StyledTableCell align="right" style={{ fontSize: 20 }}>
                  Issued By: {itemList.issued}
                </StyledTableCell>
              </TableRow>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Item Name</StyledTableCell>
                      <StyledTableCell align="right">Quantity</StyledTableCell>
                      <StyledTableCell align="right">
                        Estimated Price
                      </StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows[0].map((row) => (
                      <StyledTableRow key={row.name}>
                        <StyledTableCell component="th" scope="row">
                          {row.name}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.qty}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.ePrice}
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <div className="flex w-80 my-3 mx-8 justify-center ">
                <Link to="/procurement/invoices">
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
                </Link>
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
