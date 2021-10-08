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

const ViewOrderRequest = (props) => {
  const { items, setItems } = useContext(OrderRequestContext);
  const itemId = props.match.params.id;
  const itemList = items.find((item) => item.id === itemId);
  const itemListIndex = items.findIndex((item) => item.id === itemId);

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
        <div className="flex w-3/4 mx-auto mt-10 ">
          <Card className="flex-1 p-5">
            <CardContent className="flex-1">
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
              <div className="flex w-80 my-3 mx-8 justify-center ">
                <Link to="/procurement/order-request">
                  <Button
                    fullWidth
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
                  fullWidth
                  variant="contained"
                  size="large"
                  style={{
                    backgroundColor: "green",
                    borderRadius: 25,
                  }}
                >
                  Open Quotes
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ViewOrderRequest;
