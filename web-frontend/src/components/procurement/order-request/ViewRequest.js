import React from "react";
import { useState, useContext } from "react";
import { Button } from "@mui/material";
import Header from "../../common/Header";
import SideNavP from "../../common/SideNavP";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { OrderRequestContext } from "../../../contexts/Order-reqests/OrderRequestContext";
import { render } from "@testing-library/react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const ViewOrderRequest = (props) => {
  const { items, setItems } = useContext(OrderRequestContext);
  const itemId = props.match.params.id;
  const itemList = items.find((item) => item.id === itemId);
  const itemListIndex = items.findIndex((item) => item.id === itemId);
  const [addSuccess, setaddSuccess] = useState(false);
  const [approval, setApproval] = useState(false);

  const [open, setOpen] = React.useState(false);
  const [openWarnig, setOpenWarnig] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const warning = () => {
    setOpenWarnig(true);
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

  const cancel = () => {
    setOpenWarnig(false);
  };
  const ok = () => {
    setOpenWarnig(false);
    setApproval(true);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setaddSuccess(true);
  };

  const TAX_RATE = 0.07;

  function ccyFormat(num) {
    return `${num ? num.toFixed(2) : null}`;
  }

  function priceRow(qty, unit) {
    return qty * unit;
  }

  function createRow(id, desc, qty, unit) {
    const price = priceRow(qty, unit);
    return { id, desc, qty, unit, price };
  }

  function subtotal(items) {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
  }

  const rows = [
    itemList.items.map((item) =>
      createRow(item.id, item.name, item.quantity, item.price)
    ),
    // createRow("cement", 100, 860),
    // createRow("Iron Bars", 200, 45.99),
    // createRow("Waste Basket", 2, 17.99),
  ];

  const invoiceSubtotal = subtotal(rows[0]);
  // const invoiceTaxes = TAX_RATE * invoiceSubtotal;
  const invoiceTotal = invoiceSubtotal;

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
            Order Request Confirmed
          </Alert>
        ) : (
          ""
        )}
        {approval ? (
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            Sent to manager approval
          </Alert>
        ) : (
          ""
        )}
        <div className="flex w-3/4 mx-auto mt-10 ">
          <Card className="flex-1 p-5">
            <CardContent className="flex-1">
              <div style={{ fontSize: 20, textAlign: "center" }}>
                View Order Request
              </div>
              <TableRow>
                <TableCell style={{ fontSize: 18 }}>
                  Order Request ID: {itemList.id}
                </TableCell>
                <TableCell style={{ fontSize: 18 }} align="right">
                  Date: {itemList.curDate}
                </TableCell>
                <TableCell style={{ fontSize: 18 }} align="right">
                  Site: {itemList.site}
                </TableCell>
              </TableRow>

              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                  <TableHead>
                    <TableRow
                      style={{ backgroundColor: "gray", color: "white" }}
                    >
                      <TableCell>Item</TableCell>
                      <TableCell align="right">Qty.</TableCell>
                      <TableCell align="right">Unit Price (Rs.)</TableCell>
                      <TableCell align="right">Sum (Rs.)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows[0].map(
                      (row) => (
                        console.log(rows),
                        (
                          <TableRow key={row.id}>
                            <TableCell>{row.desc}</TableCell>
                            <TableCell align="right">{row.qty}</TableCell>
                            <TableCell align="right">{row.unit}</TableCell>
                            <TableCell align="right">
                              {ccyFormat(row.price)}
                            </TableCell>
                          </TableRow>
                        )
                      )
                    )}

                    <TableRow>
                      <TableCell rowSpan={3} />
                      <TableCell colSpan={2}></TableCell>
                      <TableCell align="right"></TableCell>
                    </TableRow>
                    {/* <TableRow>
                      <TableCell>Tax</TableCell>
                      <TableCell align="right">{`${(TAX_RATE * 100).toFixed(
                        0
                      )} %`}</TableCell>
                      <TableCell align="right">
                        Rs.{ccyFormat(invoiceTaxes)}
                      </TableCell>
                    </TableRow> */}
                    <TableRow
                      style={{ backgroundColor: "orange", color: "white" }}
                    >
                      <TableCell colSpan={2}>Total</TableCell>
                      <TableCell align="right">
                        Rs.{ccyFormat(invoiceTotal)}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              <div className="flex my-3 mx-8 justify-center ">
                <Link to="/procurement/order-request">
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
                    backgroundColor: "green",
                    borderRadius: 25,
                  }}
                  onClick={invoiceTotal > 100000 ? warning : handleClickOpen}
                >
                  Open Quotes
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
      <Dialog
        open={openWarnig}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Alert!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This order is above the order limit. Please pass this for manager
            approval.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={cancel} style={{ color: "red" }}>
            Cancel
          </Button>
          <Button onClick={ok} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ViewOrderRequest;
