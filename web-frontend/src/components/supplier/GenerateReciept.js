import React, { useState } from "react";
import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import SideNav from "../common/SideNav";
import Header from "../common/Header";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

const recieptDetails = {
  orderId: "",
  invoiceId: "",
  item: "",
  quantity: "",
  amount: "",
  date: "",
};

function GenerateReciept() {
  const [reciept, setReciept] = useState(recieptDetails);

  const handleChange = (prop) => (event) => {
    setReciept({ ...reciept, [prop]: event.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(reciept);
  };

  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1">
        <SideNav />
      </div>
      <div className="col-span-4 bg-yellow-100">
        <Header />
        <div className="flex p-5">
          <div className="flex flex-col w-3/4 mx-auto mt-5 p-5 shadow-lg rounded-md bg-white">
            <h5 className="text-2xl font-semibold">Generate Reciept</h5>
            <div className="form-row">
              <div className="w-1/2 mr-3">
                <TextField
                  fullWidth
                  id="orderId"
                  label="Order ID"
                  variant="outlined"
                  value={reciept.orderId}
                  onChange={handleChange("orderId")}
                />
              </div>
              <div className="w-1/2">
                <TextField
                  fullWidth
                  id="invoiceId"
                  label="Invoice ID"
                  variant="outlined"
                  value={reciept.invoiceId}
                  onChange={handleChange("invoiceId")}
                />
              </div>
            </div>
            <div className="form-row">
              <TextField
                fullWidth
                id="item"
                label="Item"
                variant="outlined"
                value={reciept.item}
                onChange={handleChange("item")}
              />
            </div>
            <div className="form-row">
              <TextField
                fullWidth
                id="quantity"
                label="Quantity"
                variant="outlined"
                type="number"
                value={reciept.quantity}
                onChange={handleChange("quantity")}
              />
            </div>
            <div className="form-row">
              <FormControl fullWidth>
                <InputLabel htmlFor="outlined-adornment-amount">
                  Price
                </InputLabel>
                <OutlinedInput
                  fullWidth
                  type="number"
                  id="outlined-adornment-amount"
                  value={reciept.price}
                  onChange={handleChange("price")}
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                  label="Price"
                />
              </FormControl>
            </div>
            <div className="form-row items-center">
              <div className="w-2/3 mr-5">
                <TextField
                  fullWidth
                  id="date"
                  label="Date"
                  type="date"
                  value={reciept.date}
                  onChange={handleChange("date")}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
              <div className="w-1/3">
                <PDFDownloadLink
                  document={<Reciept data={reciept} />}
                  fileName={`R-${new Date().toLocaleDateString()}-${
                    reciept.orderId
                  }.pdf`}
                >
                  {({ blob, url, loading, error }) =>
                    loading ? (
                      "Loading document..."
                    ) : (
                      <Button
                        fullWidth
                        variant="contained"
                        color="warning"
                        size="large"
                      >
                        Generate Reciept
                      </Button>
                    )
                  }
                </PDFDownloadLink>
              </div>
            </div>
            <div className="form-row"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Reciept = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.header}>Reciept No.</Text>
        <Text style={styles.titleText}>Order ID</Text>
        <Text style={styles.titleText}>Invoice ID</Text>
        <Text style={styles.titleText}>Item</Text>
        <Text style={styles.titleText}>Quantity</Text>
        <Text style={styles.titleText}>Price</Text>
        <Text style={styles.titleText}>Date</Text>
      </View>
      <View style={styles.secondSection}>
        <Text style={styles.header}>
          R-{new Date().toLocaleDateString()}-{data.orderId}
        </Text>
        <Text style={styles.content}>{data.orderId}</Text>
        <Text style={styles.content}>{data.invoiceId}</Text>
        <Text style={styles.content}>{data.item}</Text>
        <Text style={styles.content}>{data.quantity}</Text>
        <Text style={styles.content}>Rs. {data.price}</Text>
        <Text style={styles.content}>{data.date}</Text>
      </View>
    </Page>
  </Document>
);

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
    justifyContent: "center",
  },
  section: {
    margin: 10,
    marginRight: 0,
    padding: 10,
    flexDirection: "column",
  },
  secondSection: {
    padding: 10,
    marginTop: 10,
    flexDirection: "column",
  },
  header: {
    marginBottom: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 18,
    borderBottom: 1,
    borderBottomColor: "white",
    backgroundColor: "#4662bd",
    color: "white",
    padding: 15,
  },
  content: {
    fontSize: 18,
    padding: 15,
    borderBottom: 1,
    borderBottomColor: "black",
  },
});

export default GenerateReciept;
