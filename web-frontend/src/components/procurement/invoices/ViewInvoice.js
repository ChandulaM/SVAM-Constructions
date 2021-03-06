import React from "react";
import { useState, useContext } from "react";
import Header from "../../common/Header";
import SideNavP from "../../common/SideNavP";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
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
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const ViewInvoice = (props) => {
  const { items, setItems } = useContext(InvoiceContext);
  const itemId = props.match.params.id;
  const itemList = items.find((item) => item.id === itemId);
  const itemListIndex = items.findIndex((item) => item.id === itemId);
  const [addSuccess, setaddSuccess] = useState(false);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const disAgree = () => {
    setOpen(false);
  };
  const agree = () => {
    setOpen(false);
    setaddSuccess(true);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setaddSuccess(true);
  };

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
        {addSuccess ? (
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            Estimates Prices Confirmed
          </Alert>
        ) : (
          ""
        )}
        <div className="flex w-3/4 mx-auto mt-10 ">
          <Card className="flex-1 p-5">
            <CardContent className="flex-1">
              <div style={{ fontSize: 25, textAlign: "center" }}>
                Estimated Prices
              </div>
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
              <div className="flex  my-3 mx-8 justify-center">
                <Link to="/procurement/invoices">
                  <Button
                    variant="contained"
                    size="large"
                    style={{
                      backgroundColor: "gray",
                      borderRadius: 25,
                    }}
                  >
                    Back
                  </Button>
                </Link>
                <Button
                  variant="contained"
                  size="large"
                  style={{
                    backgroundColor: "red",
                    borderRadius: 25,
                  }}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  style={{
                    backgroundColor: "green",
                    borderRadius: 25,
                  }}
                  // onClick={onSubmit}
                  onClick={handleClickOpen}
                >
                  Send to accounts
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Please Confirm Your Decision!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description"></DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={disAgree} style={{ color: "red" }}>
            Disagree
          </Button>
          <Button onClick={agree} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ViewInvoice;
