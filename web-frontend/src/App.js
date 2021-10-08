import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  withRouter,
} from "react-router-dom";
import Login from "./components/Login";
import Orders from "./components/orders/Orders";
import Quotations from "./components/quotations/Quotations";
import Items from "./components/item-list/Items";
import AddUser from "./components/AddUser";
import OrderRequest from "./components/procurement/order-request/OrderRequests";
import QuotationsP from "./components/procurement/quotaions/Quotations";
import Invoices from "./components/procurement/invoices/Invoices";
import OrdersP from "./components/procurement/orders/Orders";
import SetPrice from "./components/procurement/set-price/SetPrice";
import AddQuotation from "./components/quotations/AddQuotation";
import CreateInvoice from "./components/supplier/CreateInvoice";
import GenerateReciept from "./components/supplier/GenerateReciept";
import ViewOrderRequest from "./components/procurement/order-request/ViewRequest";
import ViewInvoice from "./components/procurement/invoices/ViewInvoice";
import ViewOrders from "./components/procurement/orders/ViewOrder";
import ViewQuotation from "./components/procurement/quotaions/ViewQuotation";
import ItemListTable from "./components/item-list/ItemListTable";
import ItemContextProvider from "./contexts/Items/ItemContext";
import QuotationContextProvider from "./contexts/Quotations/QuotationContext";
import { UserContextProvider } from "./contexts/User/UserContext";
import { OrderContextProvider } from "./contexts/Orders/OrderContext";

function App() {
  return (
    <Router>
      <UserContextProvider>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/add-user" exact component={AddUser} />

          <Route
            path="/procurement/order-request"
            exact
            component={OrderRequest}
          />
          <Route path="/procurement/quotations" exact component={QuotationsP} />
          <Route path="/procurement/invoices" exact component={Invoices} />
          <Route path="/procurement/orders" exact component={OrdersP} />
          <Route path="/procurement/set-price" exact component={SetPrice} />
          <Route
            path="/procurement/view-order-requests"
            exact
            component={ViewOrderRequest}
          />
          <Route
            path="/procurement/view-invoice"
            exact
            component={ViewInvoice}
          />
          <Route path="/procurement/view-orders" exact component={ViewOrders} />
          <Route
            path="/procurement/view-quotations"
            exact
            component={ViewQuotation}
          />
          <Route path="/add-invoice" exact component={CreateInvoice} />
          <Route path="/generate-reciept" exact component={GenerateReciept} />
          <OrderContextProvider>
            <QuotationContextProvider>
              <ItemContextProvider>
                <Route path="/orders" exact component={Orders} />
                <Route path="/quotations" exact component={Quotations} />
                <Route path="/add-quotation" exact component={AddQuotation} />
                <Route path="/list-items" exact component={Items} />
                <Route path="/list-items/:id" exact component={ItemListTable} />
              </ItemContextProvider>
            </QuotationContextProvider>
          </OrderContextProvider>
        </Switch>
      </UserContextProvider>
    </Router>
  );
}

export default App;
