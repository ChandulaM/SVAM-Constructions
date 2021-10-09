import React, { useContext, useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { ItemContext } from "../../contexts/Items/ItemContext";

const style = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  width: "40%",
  p: 4,
  borderRadius: 2,
};

function OrderDetailModal({ order, open, setOpen }) {
  const { items } = useContext(ItemContext);
  const [itemList, setitemList] = useState([]);

  useEffect(() => {
    const itemsInOrder = items.find((item) => item.id == order.id);
    setitemList(itemsInOrder.items);
  });

  return (
    <div>
      <Modal
        open={open}
        onClose={setOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex-col" title="orderDetailModal">
            <div className="text-2xl">
              Order No - <span className="font-semibold">{order.id}</span>
            </div>
            <div className="my-2 text-lg">
              <div>
                Order Placed Date:{" "}
                <span className="font-semibold">{order.curDate}</span>
              </div>
            </div>
            <div className="my-2 text-lg">
              <div>
                Order Due Date:{" "}
                <span className="font-semibold">{order.dueDate}</span>
              </div>
            </div>
            <div className="my-2 text-lg">
              <div>
                Order Status:{" "}
                <span className="font-semibold uppercase">{order.state}</span>
              </div>
            </div>
            <div className="my-2 text-lg">
              <div>Items in Order</div>
            </div>
            <div className="grid grid-cols-3">
              <div className="text-lg font-semibold bg-gray-400 p-1">Item</div>
              <div className="text-lg font-semibold bg-gray-400 p-1">
                Item Quantity
              </div>
              <div className="text-lg font-semibold bg-gray-400 p-1">Unit</div>
              {itemList.map((item) => (
                <>
                  <div className="p-1 border-b-2">{item.name}</div>
                  <div className="p-1 border-b-2">{item.quantity}</div>
                  <div className="p-1 border-b-2">{item.unit}</div>
                </>
              ))}
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default OrderDetailModal;
